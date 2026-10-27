// Everything about Laura herself lives here, so the story can change without touching page code.

export const profile = {
  name: 'Laura Ochoa',
  greeting: 'hola, hello, hallo, ciao',
  headline: 'I build products with data, and collect ideas and books along the way.',
  intro:
    "Product and data person in Zurich. I've led teams at Swisscom, notime and Digitec Galaxus, and I still love building things myself.",
  home: 'Zurich, Switzerland',
  places: ['Mexico', 'Germany', 'the United States', 'Switzerland'],
  loves: ['Italy'],
  languages: ['Spanish', 'English', 'German', 'Italian (learning)'],
  links: {
    linkedin: 'https://www.linkedin.com/in/laura-ochoa-6322809/',
    github: 'https://github.com/ikiochoa',
  },
};

export type Chapter = {
  number: string;
  title: string;
  period: string;
  summary: string;
  roles?: { title: string; org: string; period: string; note?: string }[];
  // TODO(Laura): what you enjoyed most and what you took away from each chapter.
  loved?: string;
  learned?: string;
};

// My career as a story. The last chapter is still being written.
export const chapters: Chapter[] = [
  {
    number: 'One',
    title: 'From Mexico to Zurich',
    period: 'until 2012',
    summary:
      'I grew up in Mexico and have lived in Germany, the United States and Switzerland. I came to Zurich for ETH and stayed: 16 years and a Swiss passport later, it is home.',
    roles: [
      {
        title: 'MSc Management, Technology and Economics',
        org: 'ETH Zurich',
        period: '2010 – 2012',
        note: 'ETH Medal for my thesis, "What influences environmental patenting".',
      },
    ],
  },
  {
    number: 'Two',
    title: 'Learning the craft at Swisscom',
    period: '2013 – 2018',
    summary:
      'A trainee programme took me from Bern to San Francisco, then into building products of my own.',
    roles: [
      {
        title: 'Product Manager, Sonar',
        org: 'Swisscom, AI & Machine Learning Group',
        period: '2016 – 2018',
        note: 'A B2B product that uses natural language processing to understand customer feedback.',
      },
      {
        title: 'Technology Manager, Interact',
        org: 'Swisscom, Mobility Solution Center',
        period: '2014 – 2016',
        note: 'A platform for location-based services (beacons and actions).',
      },
      {
        title: 'Trainee',
        org: 'Swisscom (Bern and San Francisco)',
        period: '2013 – 2014',
        note: 'Revenue assurance, scouting technology partners in the Bay Area, and data visualisation for Big Data Discovery.',
      },
      {
        title: 'Volunteer editor',
        org: 'Punto Latino',
        period: '2015 – 2019',
        note: 'Writing for a platform promoting Latin American and Spanish culture in Switzerland.',
      },
    ],
  },
  {
    number: 'Three',
    title: 'Building a product at notime',
    period: '2018 – 2021',
    summary: 'From data science to leading product.',
    roles: [
      { title: 'Chief Product Officer', org: 'notime', period: '2020 – 2021' },
      {
        title: 'Senior Technical Product Owner',
        org: 'notime',
        period: '2018 – 2020',
        note: 'My team owned the dynamic tour generation software, both logic and UI.',
      },
      { title: 'Data Scientist, Digital and New Business', org: 'link.one', period: '2018' },
    ],
  },
  {
    number: 'Four',
    title: 'Leading data at Digitec Galaxus',
    period: '2022 – 2025',
    summary:
      'Together with our Product Owner, I co-led a cross-functional team of up to eight data analysts, data scientists and machine learning engineers. We served the whole Order Management Area with data and models, from finance and fraud detection to order management.',
    roles: [
      {
        title: 'Team Lead Data Analytics',
        org: 'Digitec Galaxus',
        period: '2022 – 2025',
        note: 'I built an ambitious, innovative and psychologically safe team, hired across analytics, data science and engineering, and pushed for stable, scalable systems with less technical debt. I also stayed hands-on with BigQuery, Dataform, Tableau and Kafka.',
      },
    ],
  },
  {
    number: 'Five',
    title: 'Our family sabbatical',
    period: '2025 – now',
    summary: 'Time away from work with my family. The stories and what we learned are coming soon.',
  },
  {
    number: 'Six',
    title: 'The next chapter',
    period: 'coming up',
    summary:
      "I'm looking for my next role in product, data and leadership, in Zurich, on-site, hybrid or remote. If you know of something that fits, say hello.",
  },
];

// What I bring to work. Grouped by theme, drawn from the roles above.
export const skills = [
  {
    area: 'Product',
    items: ['Product management, from product owner to CPO', 'Turning new technology into B2B products', 'Agile teams'],
  },
  {
    area: 'Data',
    items: [
      'Data analytics and data science',
      'Natural language processing products',
      'Interactive data visualisation',
      'BigQuery, Dataform, Tableau and Kafka',
    ],
  },
  {
    area: 'Leadership',
    items: [
      'Leading product and data teams',
      'Building ambitious, psychologically safe teams',
      'Hiring across analytics, data science and engineering',
      'Scouting technology and partners',
    ],
  },
];

// TODO(Laura): what you would dream of doing next.
export const dreamNext = 'Being written.';

export const hobbies = [
  { name: 'Reading', note: 'Books feed my thinking. Some of them live on my bookshelf.' },
  { name: 'Languages', note: 'Learning Italian right now.' },
  { name: 'Building things', note: 'Small apps that scratch my own itch, like Italiano in giro.' },
  { name: 'Italy', note: 'A country I love.' },
];

// Thinkers whose work shaped how I see the world.
// TODO(Laura): a line on what each one taught you, and anyone else to add.
export const thinkers = [
  { name: 'Gabor Maté', note: '' },
  { name: 'Friedemann Schulz von Thun', note: '' },
];
