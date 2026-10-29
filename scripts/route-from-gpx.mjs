// Turns the FindPenguins GPX export into a small, privacy-safe route for the sabbatical map.
// Usage: node scripts/route-from-gpx.mjs path/to/travel-route.gpx
// The raw GPX stays out of the repo: we keep only the trip dates, drop the stretch
// around home, simplify the line and round coordinates to about 100 m.
import { readFileSync, writeFileSync } from 'node:fs';

const [file] = process.argv.slice(2);
if (!file) throw new Error('Pass the path to the GPX file.');
const gpx = readFileSync(file, 'utf8');

// Where we were on each day comes from the itinerary in src/data/sabbatical.ts.
const itinerary = readFileSync(new URL('../src/data/sabbatical.ts', import.meta.url), 'utf8');
const stops = [...itinerary.matchAll(/\{ country: '(\w\w)', from: '([\d-]+)' \}/g)].map(([, country, from]) => ({ country, from: Date.parse(from) }));
const partStarts = [...itinerary.matchAll(/stops: \[\s*\{ country: '\w\w', from: '([\d-]+)'/g)].map(([, from]) => Date.parse(from));
const tripStart = stops[0].from;
const tripEnd = Date.parse(itinerary.match(/const end = '([\d-]+)'/)[1]);
const DAY = 864e5;

// Rough boxes around each country. The GPX also holds locations from other phones on
// the same account, so a point only counts if it is in the country we were in that day
// (or half a day before or after, for travel days).
const boxes = {
  CH: [45.8, 47.9, 5.9, 10.5], IT: [36.6, 47.1, 6.6, 18.6], FR: [41.3, 51.1, -5.2, 9.6],
  ES: [36, 43.8, -9.4, 3.4], PT: [36.9, 42.2, -9.6, -6.1], AT: [46.3, 49.1, 9.5, 17.2],
  DE: [47.2, 55.1, 5.8, 15.1], CO: [-4.3, 13.5, -79.1, -66.8], US: [24.5, 49.4, -125, -66.9],
  MX: [14.5, 32.8, -118.5, -86.6],
};
const countryOn = (t) => stops.filter((s) => s.from <= t).at(-1)?.country;
const inBox = (p, c) => { const [s, n, w, e] = boxes[c]; return p.lat >= s && p.lat <= n && p.lon >= w && p.lon <= e; };
const plausible = (p) => [p.t - DAY / 2, p.t, p.t + DAY / 2].some((t) => { const c = countryOn(t); return c && inBox(p, c); });
// Leave out everything within this distance of home.
const home = { lat: 47.38, lon: 8.49 };
const privacyKm = 15;

const km = (a, b) => {
  const r = Math.PI / 180;
  const x = (b.lon - a.lon) * r * Math.cos(((a.lat + b.lat) / 2) * r);
  const y = (b.lat - a.lat) * r;
  return Math.hypot(x, y) * 6371;
};

const track = [...gpx.matchAll(/<trkpt lat="([-\d.]+)" lon="([-\d.]+)"><time>([^<]+)<\/time>/g)]
  .map(([, lat, lon, time]) => ({ lat: +lat, lon: +lon, t: Date.parse(time) }));
let points = track
  .filter((p) => p.t >= tripStart && p.t < tripEnd && km(p, home) > privacyKm && plausible(p))
  .sort((a, b) => a.t - b.t);

// Drop short detours that jump far away and straight back (another phone again):
// a run of points under two days long, with big jumps on both sides that land back
// where we left.
const far = (a, b) => km(a, b) > 250;
for (let changed = true; changed; ) {
  changed = false;
  const runs = [];
  points.forEach((p, i) => (i && !far(points[i - 1], p) ? runs.at(-1).push(p) : runs.push([p])));
  for (let r = 1; r < runs.length - 1; r++) {
    const run = runs[r], before = runs[r - 1].at(-1), after = runs[r + 1][0];
    if (run.at(-1).t - run[0].t < 2 * DAY && !far(before, after)) {
      const drop = new Set(run);
      points = points.filter((p) => !drop.has(p));
      changed = true;
      break;
    }
  }
}

// Douglas-Peucker on plain lat/lon, good enough at this scale.
function simplify(pts, tolerance) {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [i, j] = stack.pop();
    const a = pts[i], b = pts[j];
    let max = 0, idx = -1;
    for (let k = i + 1; k < j; k++) {
      const p = pts[k];
      const dx = b.lon - a.lon, dy = b.lat - a.lat;
      const len = Math.hypot(dx, dy) || 1e-12;
      const d = Math.abs(dy * p.lon - dx * p.lat + b.lon * a.lat - b.lat * a.lon) / len;
      if (d > max) { max = d; idx = k; }
    }
    if (max > tolerance) {
      keep[idx] = 1;
      stack.push([i, idx], [idx, j]);
    }
  }
  return pts.filter((_, k) => keep[k]);
}

// Split into lines: a new line starts at each new part, and at every flight (a jump of
// more than 250 km at more than 150 km/h, or over 1000 km in one go), which the map draws as a dashed line.
const flight = (a, b) => km(a, b) > 1000 || (far(a, b) && km(a, b) / ((b.t - a.t) / 36e5) > 150);
const partOf = (t) => partStarts.filter((s) => t >= s).length - 1;
const lines = [];
let prev;
for (const p of points) {
  const part = partOf(p.t);
  const mode = prev && flight(prev, p) ? 'flight' : 'ground';
  const last = lines.at(-1);
  if (mode === 'flight') lines.push({ part, mode, pts: [prev, p] });
  else if (last && last.part === part && last.mode === mode) last.pts.push(p);
  else lines.push({ part, mode, pts: prev ? [prev, p] : [p] });
  prev = p;
}

const round = (n) => Math.round(n * 1000) / 1000;
const out = lines
  .map((l) => ({
    part: l.part,
    mode: l.mode,
    coords: (l.mode === 'flight' ? [l.pts[0], l.pts.at(-1)] : simplify(l.pts, 0.004)).map((p) => [round(p.lat), round(p.lon)]),
  }))
  .filter((l) => l.coords.length > 1);

writeFileSync(new URL('../src/data/sabbatical-route.json', import.meta.url), JSON.stringify(out));
console.log(`${points.length} points -> ${out.reduce((n, l) => n + l.coords.length, 0)} in ${out.length} lines`);
