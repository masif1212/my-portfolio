import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  // postgresql,
  // rubyrails,
  // graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  // space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  remix,
  mysql,
  express,
  mongodb,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'remix',
    icon: remix

  },
  {
    name: 'mysql',
    icon: mysql,

  },
  {
    name: 'express',
    icon: express,

  },
  {
    name: 'mongodb',
    icon: mongodb,

  },

];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Firefly Tech Solutions',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jan 2020 - Present',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Firefly Tech Solutions',
    icon: microverse,
    iconBg: '#333333',
    date: 'May 2022 - Present',
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'Firefly Tech Solutions',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Present',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Firefly Tech Solutions',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'APX',
    description: 'APX web application, a comprehensive loan system designed for a Canadian company.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    // repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://www.apxlending.com/',
  },
  {
    id: 'project-2',
    name: 'Metro Pakistan',
    description:
      'Metro Pakistan, a leading supermarket chain, developing a web-based HR management solution. This platform was designed to manage employee assessments and track performance scores efficiently. ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,

    // repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://dev.1ilafd0w.a2hosted.com/',
  },
  {
    id: 'project-3',
    name: 'AI Attorney',
    description: 'AI Attorney is a cutting-edge legal solution designed to make your legal research and work more efficient.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    // repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://www.aiattorney.com.pk/',
  },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
