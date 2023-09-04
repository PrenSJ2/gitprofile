// gitprofile.config.js

const config = {
  github: {
    username: 'PrenSJ2', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'sebastianprentice',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'prentice.seb',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'prentice.seb@gmail.com',
  },
  resume: {
    fileUrl:
      'https://cv.onlineolive.xyz/', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'JavaScript',
    'SQL',
    'HTML',
    'Tailwind.css',
    'AWS',
    'Elasticsearch',
    'AI',
    'Git',
    'CAD',
    'DevOps',
    'Project Management',
    'Django',
    'Jinja',
  ],
  education: [
  {
    institution: 'University of Buckingham',
    degree: 'BSc Computing (Hons)',
    from: '2020',
    to: '2022.12',
  },
  {
    institution: 'Santa Clara University',
    degree: 'Undergraduate Computer Science, Computer Engineering',
    from: '2018',
    to: '2020',
  },
  {
    institution: 'Radley College',
    degree: 'A-Level: Economics, Design & Technology: Product Design',
    from: '2013',
    to: '2018',
  },
  {
    institution: 'Ichinomya High School (Japan)',
    degree: 'Exchange',
    from: '2016.10',
    to: '2016.10',
  },
],

experiences: [
  {
    company: 'TutorCruncher',
    position: 'Junior Developer',
    from: '2022.10',
    to: 'CURRENT',
    companyLink: '',
  },
  {
    company: 'Purple Hill Handmade',
    position: 'Developer & Technology Specialist',
    from: '2020.3',
    to: 'CURRENT',
    companyLink: '',
  },
  {
    company: 'Airbnb',
    position: 'Airbnb Host - The Coach House',
    from: '2018.9',
    to: 'CURRENT',
    companyLink: '',
  },
  {
    company: 'Dustonmill',
    position: 'Web Developer & Designer',
    from: '2017.6',
    to: 'CURRENT',
    companyLink: '',
  },
  {
    company: 'Freelance Web Designer & Developer',
    position: 'Online Olive',
    from: '2018.3',
    to: 'CURRENT',
    companyLink: '',
  },
  {
    company: 'Village Shop & Post Office',
    position: 'Manager',
    from: '2020.11',
    to: '2021.6',
    companyLink: '',
  },
  {
    company: 'Reset MSM',
    position: 'Tech Intern',
    from: '2020.9',
    to: '2021.1',
    companyLink: '',
  },
  {
    company: 'SCU Ignatian Center',
    position: 'Web Administrator',
    from: '2019.9',
    to: '2020.3',
    companyLink: '',
  },
  {
    company: 'Tech Camp',
    position: 'Teacher',
    from: '2018.7',
    to: '2018.8',
    companyLink: '',
  },
  {
    company: 'Ocado Technology, Code for Life',
    position: 'Intern',
    from: '2018.6',
    to: '2018.6',
    companyLink: '',
  },
],

 certifications: [
  {
    name: 'Open Water Diver',
    body: 'PADI',
    year: '',
    link: ''
  },
  {
    name: 'Javascript',
    body: 'Sololearn',
    year: '',
    link: 'https://www.sololearn.com/Certificate/1024-21810800/pdf/'
  },
  {
    name: 'Foundations of User Experience (UX) Design',
    body: 'Coursera',
    year: '',
    link: 'https://www.coursera.org/account/accomplishments/verify/TH62A2DER3RG?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    name: 'CG DofE Gold Award',
    body: 'The Duke of Edinburgh’s Award',
    year: '',
    link: ''
  },
  {
    name: 'React.js',
    body: 'LinkedIn skill assessment',
    year: '',
    link: ''
  },
  {
    name: 'HTML',
    body: 'LinkedIn skill assessment',
    year: '',
    link: ''
  },
  {
    name: 'Front-End Development',
    body: 'LinkedIn skill assessment',
    year: '',
    link: ''
  },
  {
    name: 'Search Engine Optimization',
    body: 'LinkedIn skill assessment',
    year: '',
    link: ''
  },
  {
    name: 'Adobe Photoshop',
    body: 'LinkedIn skill assessment',
    year: '',
    link: ''
  },
  {
    name: 'Wordpress',
    body: 'LinkedIn skill assessment',
    year: '',
    link: ''
  },
],


  // To hide the `My Projects` section, keep it empty.
  // externalProjects: [
  //   {
  //     title: 'Project Name',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
  //     imageUrl: 'https://via.placeholder.com/250x250',
  //     link: 'https://example.com',
  //   },
  //   {
  //     title: 'Project Name',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
  //     imageUrl: 'https://via.placeholder.com/250x250',
  //     link: 'https://example.com',
  //   },
  // ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
