// Our family sabbatical: where we were and when. Days are counted from the data, so
// fixing a date here updates the timeline and every number on the page.

import sanremo from '../assets/sabbatical/sanremo.jpg';
import sierraNevada from '../assets/sabbatical/sierra-nevada.jpg';
import campervan from '../assets/sabbatical/campervan.jpg';
import vanTrailer from '../assets/sabbatical/van-trailer.jpg';
import granada from '../assets/sabbatical/granada.jpg';
import salento from '../assets/sabbatical/salento.jpg';
import shaferTrail from '../assets/sabbatical/shafer-trail.jpg';
import riohachaTaxi from '../assets/sabbatical/riohacha-taxi.jpg';
import chicamocha from '../assets/sabbatical/chicamocha.jpg';
import villaDeLeyva from '../assets/sabbatical/villa-de-leyva.jpg';
import lasGachas from '../assets/sabbatical/las-gachas.jpg';
import barichara from '../assets/sabbatical/barichara.jpg';
import baricharaValley from '../assets/sabbatical/barichara-valley.jpg';
import monahans from '../assets/sabbatical/monahans-sand-hills.jpg';
import goblinValley from '../assets/sabbatical/goblin-valley.jpg';
import slotCanyon from '../assets/sabbatical/slot-canyon.jpg';

export type CountryCode = 'CH' | 'IT' | 'FR' | 'ES' | 'PT' | 'AT' | 'CO' | 'US' | 'MX' | 'DE';

export const countries: Record<CountryCode, { name: string; language: string; continent: string }> = {
  CH: { name: 'Switzerland', language: 'German', continent: 'Europe' },
  IT: { name: 'Italy', language: 'Italian', continent: 'Europe' },
  FR: { name: 'France', language: 'French', continent: 'Europe' },
  ES: { name: 'Spain', language: 'Spanish', continent: 'Europe' },
  PT: { name: 'Portugal', language: 'Portuguese', continent: 'Europe' },
  AT: { name: 'Austria', language: 'German', continent: 'Europe' },
  CO: { name: 'Colombia', language: 'Spanish', continent: 'South America' },
  US: { name: 'the USA', language: 'English', continent: 'North America' },
  MX: { name: 'Mexico', language: 'Spanish', continent: 'North America' },
  DE: { name: 'Germany', language: 'German', continent: 'Europe' },
};

// The places we loved most. Each can get a photo later (files in src/assets/sabbatical/).
// `at` places each highlight on the route map.
export const highlights: { place: string; country: CountryCode; at: [number, number]; photo?: { src: ImageMetadata; alt: string } }[] = [
  {
    place: 'Liguria',
    country: 'IT',
    at: [44.17, 8.34],
    photo: { src: sanremo, alt: 'Meeting Marianne Vos at the finish line of Milan–San Remo, in March 2025.' },
  },
  {
    place: 'Sierra Nevada',
    country: 'ES',
    at: [37.1, -3.4],
    photo: { src: sierraNevada, alt: 'The snowy peaks of the Sierra Nevada above green hills and a turquoise reservoir.' },
  },
  { place: 'The Basque Country', country: 'ES', at: [42.9, -2.03] },
  {
    place: 'Colombia',
    country: 'CO',
    at: [4.64, -75.57],
    photo: { src: salento, alt: 'Green hills, trees and mountains in the coffee region around Salento.' },
  },
  {
    place: 'Utah',
    country: 'US',
    at: [38.57, -109.55],
    photo: { src: shaferTrail, alt: 'The Shafer Trail switchbacks winding down red canyon walls near Moab.' },
  },
  { place: 'Colorado', country: 'US', at: [39.16, -108.73] },
];

export type Part = {
  number: string;
  title: string;
  ride: string;
  color: 'pink' | 'marigold' | 'teal' | 'purple';
  story: string;
  // Each stop starts on this date and lasts until the day before the next stop.
  // `aside` marks a short trip away, which the map shows but leaves out when zooming to the part.
  stops: { country: CountryCode; from: string; aside?: boolean }[];
  // Photos for this part go here once we pick them (files in src/assets/sabbatical/).
  photos?: { src: ImageMetadata; alt: string }[];
};

export const parts: Part[] = [
  {
    number: 'One',
    title: 'Europe by camper van',
    ride: 'A camper van and a trailer full of bikes',
    color: 'pink',
    story:
      'We drove through Italy, France, Spain and Portugal, and kept coming back to Italy, where we spent time learning Italian.',
    stops: [
      { country: 'CH', from: '2025-03-01' },
      { country: 'IT', from: '2025-03-10' },
      { country: 'FR', from: '2025-03-24' },
      { country: 'ES', from: '2025-03-29' },
      { country: 'PT', from: '2025-04-05' },
      { country: 'ES', from: '2025-04-19' },
      { country: 'IT', from: '2025-05-30' },
      { country: 'CH', from: '2025-08-05' },
      { country: 'AT', from: '2025-08-12' },
      { country: 'CH', from: '2025-08-18' },
      { country: 'IT', from: '2025-08-24' },
      { country: 'CH', from: '2025-09-16' },
    ],
    photos: [
      { src: vanTrailer, alt: 'Our camper van with its pop-up roof, bikes and the trailer with a pull-out drawer full of crates.' },
      { src: campervan, alt: 'Camp under the trees: the bike tent with all our bikes, and the camper van with a thumbs up from the window.' },
      { src: granada, alt: 'Cycling up a quiet road through olive groves and yellow broom near Granada.' },
    ],
  },
  {
    number: 'Two',
    title: 'Colombia',
    ride: 'An F250 truck camper and three bikes',
    color: 'marigold',
    story:
      'We travelled up and down the Colombian mountains in a truck camper, and this time we only brought three bikes. We explored different mountain ranges and valleys, went to the coffee region, saw wonderful nature and soaked up the vibe of big cities like Bogotá and Medellín. We could see and feel the Colombian passion for cycling, and we met extremely cool people. In between, we made a little pit stop in the USA for Christmas.',
    stops: [
      { country: 'CO', from: '2025-09-21' },
      { country: 'US', from: '2025-12-19', aside: true },
      { country: 'CO', from: '2026-01-08' },
    ],
    photos: [
      { src: riohachaTaxi, alt: 'A yellow taxi in Riohacha with a wooden crate on the roof that says Enjoy the ride.' },
      { src: chicamocha, alt: 'Riding a mountain bike on a dirt track high above the Chicamocha canyon.' },
      { src: villaDeLeyva, alt: 'Two old jeeps parked on a cobblestone street of white houses in Villa de Leyva.' },
      { src: lasGachas, alt: 'A small rider on a bike heading down a stone path through green hills near Las Gachas.' },
      { src: barichara, alt: 'A cobbled street of whitewashed houses with turquoise doors in Barichara.' },
      { src: baricharaValley, alt: 'Looking down from Barichara over a wide green valley and mountains.' },
    ],
  },
  {
    number: 'Three',
    title: 'Mexico and the American southwest',
    ride: 'Mountain bike trails across six US states',
    color: 'teal',
    story:
      'After figuring out how to ship a camper to another country, we went to Mexico while our car was being shipped to the USA. Then we spent almost three months in Texas, New Mexico, Utah, California, Nevada and Colorado, looking for the best mountain bike trails.',
    stops: [
      { country: 'MX', from: '2026-02-27' },
      { country: 'US', from: '2026-03-18' },
    ],
    photos: [
      { src: monahans, alt: 'Footprints along the ridge of a sand dune at the Monahans Sand Hills in Texas.' },
      { src: goblinValley, alt: 'A striped butte under a cloudy sky at Goblin Valley, Utah.' },
      { src: slotCanyon, alt: 'Smooth red and white walls of a narrow slot canyon in Utah.' },
    ],
  },
  {
    number: 'Four',
    title: 'The way home',
    ride: 'Back across Europe',
    color: 'purple',
    story: 'One more summer in Italy, then slowly home to Switzerland.',
    stops: [
      { country: 'IT', from: '2026-06-10' },
      { country: 'CH', from: '2026-07-08' },
      { country: 'DE', from: '2026-07-10' },
      { country: 'FR', from: '2026-07-17' },
      { country: 'CH', from: '2026-07-18' },
    ],
  },
];

// The day after our last day on the road.
const end = '2026-08-17';

const DAY = 24 * 60 * 60 * 1000;
const daysBetween = (a: string, b: string) => Math.round((Date.parse(b) - Date.parse(a)) / DAY);

export type Stay = { part: Part; country: CountryCode; from: string; to: string; days: number };

// Every stop with its last day and length, in order.
const flat = parts.flatMap((part) => part.stops.map((stop) => ({ part, ...stop })));
export const stays: Stay[] = flat.map((stop, i) => {
  const next = flat[i + 1]?.from ?? end;
  const to = new Date(Date.parse(next) - DAY).toISOString().slice(0, 10);
  return { part: stop.part, country: stop.country, from: stop.from, to, days: daysBetween(stop.from, next) };
});

export const totalDays = daysBetween(flat[0].from, end);

// Days per country, from the most to the fewest.
export const daysPerCountry = stays.reduce<{ country: CountryCode; days: number }[]>((acc, stay) => {
  const found = acc.find((c) => c.country === stay.country);
  if (found) found.days += stay.days;
  else acc.push({ country: stay.country, days: stay.days });
  return acc;
}, []).sort((a, b) => b.days - a.days);

const unique = <T,>(xs: T[]) => [...new Set(xs)];
export const stats = {
  days: totalDays,
  countries: daysPerCountry.length,
  continents: unique(daysPerCountry.map((c) => countries[c.country].continent)).length,
  languages: unique(daysPerCountry.map((c) => countries[c.country].language)).length,
  borders: stays.length - 1,
  usStates: 6,
};

export const story = {
  about: [
    'We took a year and a half off to step out of our comfort zone, to be with our son, and to learn and practise new skills.',
    'We purposefully did not plan the sabbatical up front, and it took us places we never would have expected. We treasure that we could live with, and be part of, so many different cultures for a little while. We learned so much about the world, and we got to know each other and ourselves much better. Our relationships went to the next level.',
    'There were very scary moments with accidents (all is good now), and lovely moments with people we had never met before. We learned how to live in a camper in Colombia, and how different the same thing is in the USA, or in Europe for that matter. And we used the new tech available to plan the journey and to solve problems along the way.',
  ],
  // Things we learned to value again.
  grateful: [
    'Gas or electricity to cook with',
    'A fridge to keep food cold',
    'A long, warm shower',
    'A toilet you can just flush',
  ],
  // Skills we practised every day, and that matter more and more today.
  practised: [
    'Resilience',
    'Openness to change',
    'Curiosity',
    'Learning quickly',
    'Adapting to new situations',
    'Thinking out of the box',
    'Staying calm in difficult times',
    'Being spontaneous and flexible',
  ],
};
