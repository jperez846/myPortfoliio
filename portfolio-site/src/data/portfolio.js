export const person = {
    name:      'Jesus Perez',
    initials:  'JP',
    bio: `Result-oriented software engineer with expertise in full stack web development,
  test automation, and cloud-based systems. I build scalable, secure solutions —
  from Kubernetes clusters and CI/CD pipelines to React & Java services.
  Previously at Intuit; now teaching the next generation of engineers at CodePath × Meta.`,
    available: true,
  }
  
  export const titles = [
    { label: 'Full Stack Developer', variant: 'accent'  },
    { label: 'DevOps Enthusiast',    variant: 'blue'    },
    { label: 'Java Engineer',        variant: 'orange'  },
    { label: 'React', variant: 'red'  },
  ]
  
  export const contact = {
    email:          'jesup032v@gmail.com',
    linkedin:       'https://linkedin.com/in/jesusmperez/',
    linkedinHandle: '/in/jesusmperez',
    github:         'https://github.com/yourhandle',   // TODO
    githubHandle:   '@yourhandle',                     // TODO
  }
  
  export const skills = [
    { label: 'Java / Spring Boot',   pct: 92 },
    { label: 'React / TypeScript',   pct: 90 },
    { label: 'Test Automation',      pct: 93 },
    { label: 'Kubernetes / Docker',  pct: 80 },
    { label: 'AWS (EC2, RDS)',       pct: 75 },
  ]
  
  export const toolchain = [
    'Selenium','TestNG','JUnit','Jest','Jenkins',
    'PostgreSQL','GraphQL','Node.js','Express.js',
    'Redux','Postman','Splunk','ArgoCD','Python','Groovy',
  ]
  
  export const projects = [
    {
      id:    'portfolio-cicd',
      title: 'Portfolio CI/CD Pipeline',
      description:
        'Automated deployment pipeline for this portfolio. Push to main → GitHub Actions builds & syncs to S3 → CloudFront cache invalidated. Zero-downtime deploys every time.',
      arch:   ['GitHub Repo', 'GitHub Actions', 'S3 Bucket', 'CloudFront CDN'],
      tools:  ['GitHub Actions', 'AWS S3', 'CloudFront', 'Bash'],
      github: '#',
      demo:   '#',
    },
    {
      id:    'intuit-dev-studio',
      title: 'Intuit Dev Studio',
      description:
        'Internal integrated development studio built at Intuit with React, Redux, TypeScript, and Java. Reduced engineer onboarding from six months to hours with full E2E test coverage.',
      arch:   ['React + Redux', 'TypeScript', 'Java REST API', 'Selenium / TestNG'],
      tools:  ['React', 'Redux', 'TypeScript', 'Java', 'Selenium', 'TestNG'],
      github: '#',
      demo:   null,
    },
    {
      id:    'gitops-argocd',
      title: 'GitOps with ArgoCD',
      description:
        'GitOps deployment setup using ArgoCD on Kubernetes. Declarative app delivery with auto-sync, rollback support, and health monitoring across namespaces.',
      arch:   ['ArgoCD', 'Kubernetes', 'Minikube / EKS', 'Helm Charts'],
      tools:  ['Kubernetes', 'ArgoCD', 'Helm', 'Minikube', 'Docker'],
      github: '#',
      demo:   null,
    },
  ]