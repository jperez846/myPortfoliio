export const person = {
  name:     'Jesus Perez',
  initials: 'JP',
  bio: `After 7 years building enterprise software at Intuit, I kept noticing the same thing: great businesses held back by technology that couldn't keep up with them.

That's why I founded AwebO.S. — a web development agency built to help businesses of all sizes upgrade, modernize, and grow through better software. Whether you need a fresh web application built from the ground up, a legacy system brought into the modern era, or a reliable engineering partner to support and maintain what you already have — we handle it.

I started this because I believe every business deserves technology that actually works for them. If yours doesn't yet, let's talk.`,
  available:     true,
  availableText: 'Now accepting new clients',
}

export const titles = [
  { label: 'Founder, AwebO.S.',        variant: 'accent' },
  { label: 'Full Stack Engineer',       variant: 'blue'   },
  { label: 'Enterprise Modernization',  variant: 'orange' },
  { label: 'Web Development Agency',    variant: 'blue'   },
]

export const contact = {
  email:          'jperezdev@awebos.com',
  linkedin:       'https://linkedin.com/in/jesusmperez/',
  linkedinHandle: '/in/jesusmperez',
  github:         'https://github.com/jperez846',
  githubHandle:   '@jperez846',
}

export const skills = [
  { label: 'Full Stack Engineering',      pct: 92 },
  { label: 'Java / Spring Boot',          pct: 90 },
  { label: 'Cloud & DevOps (AWS, Docker)', pct: 83 },
  { label: 'System Architecture & APIs',  pct: 88 },
  { label: 'Test Automation',             pct: 90 },
]

export const toolchain = [
  'React', 'TypeScript', 'Node.js', 'Java', 'Spring Boot',
  'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs',
  'Docker', 'Kubernetes', 'AWS', 'Jenkins', 'GitHub Actions',
  'Python', 'Groovy', 'Splunk',
]

export const projects = [
  {
    id:    'financial-integration-dsl',
    title: 'Financial Integration DSL Platform',
    description:
      'Internal developer platform automating partner onboarding workflows — validation, script generation, and connectivity testing — reducing integration timelines from months to hours.',
    arch:   ['ANTLR Grammar Parser', 'Java Template Engine', 'Groovy Script Generation', 'Financial Institution Connectors'],
    tools:  ['Java', 'ANTLR', 'Groovy', 'Spring Boot'],
    github: 'private',
    demo:   null,
  },
  {
    id:    'intuit-dev-studio',
    title: 'Intuit Dev Studio',
    description:
      'Full stack React and Java platform for data ingestion, transformation, and integration testing at enterprise scale. Reduced engineer onboarding from six months to hours.',
    arch:   ['React + Redux', 'TypeScript', 'Java REST API', 'Selenium / TestNG'],
    tools:  ['React', 'Redux', 'TypeScript', 'Java', 'Selenium'],
    github: 'private',
    demo:   null,
  },
]
