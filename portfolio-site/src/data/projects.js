export const details = [

    {
      id: 'financial-integration-dsl',
      title: 'Financial Integration DSL Platform',
      description:
        'Developed a domain-specific language (DSL) platform used to rapidly generate financial institution integrations. The system leveraged ANTLR grammars and Java string templates to dynamically generate Groovy scripts, enabling engineers to create new integrations without manually writing large volumes of code.',
      highlights: [
        'Designed DSL grammar using ANTLR to simplify financial integration development',
        'Implemented Java string templates to dynamically generate Groovy integration scripts',
        'Enabled faster onboarding of new financial institutions by abstracting complex connection logic',
        'Reduced manual coding required for new integrations through automated script generation'
      ],
      arch: [
        'ANTLR Grammar Parser',
        'Java String Template Engine',
        'Groovy Script Generation',
        'Financial Institution Connectors'
      ],
      tools: [
        'Java',
        'ANTLR',
        'Groovy',
        'String Templates'
      ],
      github: 'private',
      demo: null
    },
    
    {
      id: 'intuit-dev-studio',
      title: 'Intuit Dev Studio',
      description:
        'Internal developer platform built at Intuit for building, validating, and managing financial data integrations. The platform allowed engineers and partner teams to connect external financial institutions, transform incoming data, validate workflows, and configure integrations through a unified UI. The system was powered by the DSL engine that generated integration scripts used to process partner data pipelines.',
      highlights: [
        'Reduced engineer onboarding time from ~6 months to a few hours',
        'Enabled engineers and partner teams to configure and validate financial data integrations',
        'Used internally to test partner integrations and validate incoming data before ingestion into Intuit data pipelines',
        'Integrated DSL engine to dynamically generate integration scripts used to connect with financial institutions',
        'Built automation coverage for key workflows including integration validation and data transformation'
      ],
      arch: [
        'React + Redux Frontend',
        'TypeScript + JavaScript UI Layer',
        'Java REST API Services',
        'DSL Integration Engine',
        'Partner Integration Validation Workflows'
      ],
      tools: [
        'React',
        'Redux',
        'TypeScript',
        'JavaScript',
        'Java',
        'Selenium',
        'TestNG'
      ],
      github: 'private',
      demo: null
    },
    
    {
      id: 'channel-migration-platform',
      title: 'Channel Migration Platform',
      description:
        'Internal tooling platform developed to migrate financial institution connections from legacy screen-scraping channels to modern RESTful API integrations. The platform provided internal tools and dashboards to manage migration workflows and validate integration readiness.',
      highlights: [
        'Migrated legacy screen-scraping integrations to stable RESTful service channels',
        'Improved reliability and maintainability of financial data ingestion pipelines',
        'Developed internal UI tools to help teams manage migration workflows and integration status',
        'Supported modernization of financial data connections across partner institutions'
      ],
      arch: [
        'React + Redux UI Platform',
        'Java Service Layer',
        'REST API Integrations'
      ],
      tools: [
        'React',
        'Redux',
        'Java',
        'REST APIs'
      ],
      github: 'private',
      demo: null
    },
    
    {
      id: 'shadow-validation-tool',
      title: 'Shadow Validation Tool',
      description:
        'Internal data validation platform designed to verify the accuracy of newly migrated REST API data sources by comparing them against legacy screen-scraped integrations during migration.',
      highlights: [
        'Validated data accuracy between REST API integrations and legacy screen-scraping channels',
        'Flagged accounts that failed to meet defined data accuracy thresholds',
        'Provided visibility into migration readiness for partner institutions',
        'Helped ensure safe migration of financial data pipelines'
      ],
      arch: [
        'React + Redux Validation Dashboard',
        'Data Comparison Layer',
        'REST Channel Data Validation'
      ],
      tools: [
        'React',
        'Redux',
        'JavaScript'
      ],
      github: 'private',
      demo: null
    },
    
    {
      id: 'full-stack-ci-cd-platform',
      title: 'Full Stack CI/CD Automation Platform',
      description:
        'End-to-end application platform demonstrating full lifecycle engineering from development through automated deployment. The system includes multi-layer testing, containerization, CI pipelines, and Kubernetes deployment with GitOps.',
      highlights: [
        'Built full stack application using React and Spring Boot',
        'Implemented multi-layer testing including Jest, TestNG, RestAssured, and Selenium',
        'Designed Jenkins pipeline for automated build, testing, and deployment',
        'Containerized services using Docker and deployed to Kubernetes',
        'Implemented GitOps deployment strategy using ArgoCD'
      ],
      arch: [
        'React Frontend',
        'Spring Boot REST API',
        'Docker Containers',
        'Kubernetes Deployment',
        'ArgoCD GitOps'
      ],
      tools: [
        'React',
        'Java',
        'Spring Boot',
        'Docker',
        'Kubernetes',
        'Jenkins',
        'ArgoCD',
        'Selenium',
        'TestNG',
        'RestAssured',
        'Jest'
      ],
      github: '',
      demo: null,
    },
    {
      id: 'portfolio-website',
      title: 'Cloud-Hosted Portfolio Platform',
      description:
        'Personal engineering portfolio built to showcase automation frameworks, platform engineering projects, and DevOps workflows. The site is deployed as a production-ready static web application with automated CI/CD deployment.',
      highlights: [
        'Built modern React application using Vite',
        'Deployed static hosting infrastructure using AWS S3',
        'Configured CloudFront CDN for global delivery',
        'Implemented automated deployment using GitHub Actions'
      ],
      arch: [
        'React + Vite Frontend',
        'AWS S3 Static Hosting',
        'CloudFront CDN',
        'GitHub Actions CI/CD'
      ],
      tools: [
        'React',
        'Vite',
        'AWS S3',
        'CloudFront',
        'GitHub Actions'
      ],
      github: '',
      demo: null
    },
    {
      id: 'data-scraping-alerting-platform',
      title: 'Web Scraping & Real-Time Alerting System',
      description:
        'Built a data scraping and alerting platform to extract and monitor metadata from social media and e-commerce platforms. Leveraged APIs and proxy networks to gather insights and trigger real-time alerts for high-demand product drops.',
      highlights: [
        'Developed Python-based web scraping scripts using BeautifulSoup and Requests to extract structured data from dynamic web pages',
        'Integrated TikTok API to collect and analyze user account metadata for insights and trend tracking',
        'Engineered real-time alerting system using Bright Data proxy network to monitor e-commerce sites for exclusive product availability',
        'Automated workflows to notify users instantly when target conditions were met, improving response time for limited releases'
      ],
      arch: [
        'Python Scraping Engine (BeautifulSoup, Requests)',
        'TikTok API Integration',
        'Bright Data Proxy Network',
        'Event-Based Alerting System'
      ],
      tools: [
        'Python',
        'BeautifulSoup',
        'Requests',
        'TikTok API',
        'Bright Data',
        'Proxy Networks'
      ],
      github: '',
      demo: null
    }
    
    ];
    