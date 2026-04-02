export const person = {
    name:      'Jesus Perez',
    initials:  'jperez',
    bio: `Result-oriented software engineer with expertise in full stack web development,
  test automation, and cloud-based systems. I build scalable, secure solutions —
  from Kubernetes clusters and CI/CD pipelines to React, Java and Python services.
  Previously at Intuit; Explored teaching the next generation of engineers at CodePath × Meta. 
  Currently: started job searching after a hiatus`,
    available: true,
  }
  
  export const titles = [
    { label: 'Full Stack Developer', variant: 'accent'  },
    { label: 'DevOps Enthusiast',    variant: 'blue'    },
    { label: 'Test Automation Advocate',        variant: 'orange'  },
    { label: 'Super Cool Guy', variant: 'green'  },
  ]
  
  export const contact = {
    email:          'jesup032v@gmail.com',
    linkedin:       'https://linkedin.com/in/jesusmperez/',
    linkedinHandle: '/in/jesusmperez',
    github:         'https://github.com/jperez846',   // TODO
    githubHandle:   '@jperez846',                     // TODO
  }
  
  export const skills = [
    { label: 'Java / Spring Boot',   pct: 90 },
    { label: 'React-Redux / TypeScript / Javascript',   pct: 90 },
    { label: 'Test Automation',      pct: 93 },
    { label: 'Kubernetes / Docker / Jenkins',  pct: 80 },
    { label: 'AWS (EC2, RDS)',       pct: 80 },
  ]
  
  export const toolchain = [
    'Selenium','TestNG','JUnit','Jest','Jenkins',
    'PostgreSQL','GraphQL','Node.js','Express.js',
    'Redux','Postman','Splunk','ArgoCD','Python','Groovy',
  ]
  
  export const projects = [
    
    {
      id:    'intuit-dev-studio',
      title: 'Intuit Dev Studio',
      description:
        'Internal integrated development studio built at Intuit with React, Redux, TypeScript, and Java. Reduced engineer onboarding from six months to hours with full E2E test coverage.',
      arch:   ['React + Redux', 'TypeScript', 'Java REST API', 'Selenium / TestNG'],
      tools:  ['React', 'Redux', 'TypeScript', 'Java', 'Selenium', 'TestNG'],
      github: 'private',
      demo:   null,
    },
    {
      id:    'gitops-argocd',
      title: 'GitOps with ArgoCD',
      description:
        'GitOps deployment setup using ArgoCD on Kubernetes. Declarative app delivery with auto-sync, rollback support, and health monitoring across namespaces.',
      arch:   ['ArgoCD', 'Kubernetes', 'Minikube / EKS', 'Helm Charts'],
      tools:  ['Kubernetes', 'ArgoCD', 'Helm', 'Minikube', 'Docker'],
      github: 'https://github.com/jperez846/AutomationPractice',
      demo:   null,
    },
  ]