// Builds the background map for the sabbatical page from Natural Earth (via world-atlas),
// so the map needs no tile service or API key. Run once: node scripts/basemap.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { feature } from 'topojson-client';

const topo = JSON.parse(readFileSync(new URL('../node_modules/world-atlas/countries-50m.json', import.meta.url), 'utf8'));
const world = feature(topo, topo.objects.countries);

// Only the part of the world we travelled through: the Americas and Europe.
const [west, south, east, north] = [-135, -10, 35, 72];
// Countries we stayed in keep more detail; the rest only frame the map.
const visited = ['Switzerland', 'Italy', 'France', 'Spain', 'Portugal', 'Austria', 'Germany', 'Colombia', 'United States of America', 'Mexico'];
const roundCoords = (c, step) => {
  if (typeof c[0] === 'number') return [Math.round(c[0] / step) * step, Math.round(c[1] / step) * step].map((n) => +n.toFixed(2));
  if (typeof c[0][0] !== 'number') return c.map((x) => roundCoords(x, step));
  // A ring: round it and drop points that land on the same spot.
  const ring = c.map((x) => roundCoords(x, step)).filter((p, i, all) => i === 0 || p[0] !== all[i - 1][0] || p[1] !== all[i - 1][1]);
  return ring.length >= 4 ? ring : [];
};
const tidy = (c) => (!c.length || typeof c[0][0] === 'number' ? c : c.map(tidy).filter((x) => x.length));
const points = (c) => (typeof c[0] === 'number' ? [c] : c.flatMap(points));

const features = world.features
  .filter((f) => f.geometry && points(f.geometry.coordinates).some(([x, y]) => x >= west && x <= east && y >= south && y <= north))
  .map((f) => {
    const step = visited.includes(f.properties.name) ? 0.02 : 0.08;
    return { type: 'Feature', properties: {}, geometry: { type: f.geometry.type, coordinates: tidy(roundCoords(f.geometry.coordinates, step)) } };
  })
  .filter((f) => f.geometry.coordinates.length);

const out = JSON.stringify({ type: 'FeatureCollection', features });
writeFileSync(new URL('../public/sabbatical-basemap.json', import.meta.url), out);
console.log(`${features.length} countries, ${Math.round(out.length / 1024)} KB`);
