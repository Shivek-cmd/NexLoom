export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  problem: string;
  solution: string;
  results: string[];
  relatedServices: string[];
  metaTitle: string;
  metaDescription: string;
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "saas-platform-fintech-startup",
    title: "Building a Scalable SaaS Platform for a Fintech Startup",
    category: "Engineering & Product",
    categorySlug: "engineering-product",
    excerpt: "How we helped a fintech startup launch their multi-tenant SaaS platform in 4 months, achieving 10,000 active users within the first quarter.",
    problem: "A fast-growing fintech startup needed to build a multi-tenant SaaS platform from scratch. Their existing prototype was built on a monolithic architecture that couldn't handle concurrent users, lacked proper authentication, and had no billing integration. They needed to go from prototype to production in under 5 months to secure their next funding round.",
    solution: "Nexloom deployed a full-stack engineering team that redesigned the architecture using microservices with Node.js and React. We implemented multi-tenant data isolation, integrated Stripe for subscription billing, built role-based access control, and set up automated CI/CD pipelines. The team delivered iterative releases every two weeks with comprehensive testing.",
    results: [
      "Launched production platform in 4 months",
      "10,000+ active users in first quarter",
      "99.9% uptime since launch",
      "60% reduction in infrastructure costs vs. original architecture",
    ],
    relatedServices: ["saas-platform-engineering", "full-stack-web-development", "system-architecture"],
    metaTitle: "Fintech SaaS Platform Case Study | Nexloom",
    metaDescription: "How Nexloom built a scalable multi-tenant SaaS platform for a fintech startup, achieving 10,000 users in the first quarter with 99.9% uptime.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  },
  {
    slug: "cloud-migration-healthcare",
    title: "Enterprise Cloud Migration for Healthcare Provider",
    category: "Cloud & DevOps",
    categorySlug: "cloud-devops",
    excerpt: "Migrating a healthcare provider's legacy on-premise infrastructure to AWS while maintaining HIPAA compliance and zero downtime.",
    problem: "A regional healthcare provider was running critical patient management systems on aging on-premise servers. They faced escalating maintenance costs, performance bottlenecks during peak hours, and compliance risks. They needed to migrate to the cloud without any downtime or data loss, while maintaining strict HIPAA compliance throughout the process.",
    solution: "Nexloom designed a phased cloud migration strategy to AWS. We implemented HIPAA-compliant VPC architecture, encrypted data at rest and in transit, set up automated backups, and created a disaster recovery plan. The migration used a blue-green deployment strategy to ensure zero downtime. We also implemented comprehensive monitoring and alerting with PagerDuty integration.",
    results: [
      "Zero downtime during migration",
      "Full HIPAA compliance maintained",
      "45% reduction in infrastructure costs",
      "3x improvement in application response times",
    ],
    relatedServices: ["cloud-architecture", "security-compliance", "infrastructure-automation"],
    metaTitle: "Healthcare Cloud Migration Case Study | Nexloom",
    metaDescription: "How Nexloom migrated a healthcare provider to AWS with zero downtime, HIPAA compliance, and 45% cost reduction.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    slug: "ai-customer-support-ecommerce",
    title: "AI-Powered Customer Support for E-Commerce Platform",
    category: "AI & Automation",
    categorySlug: "ai-automation",
    excerpt: "Deploying intelligent AI agents that handle 70% of customer inquiries automatically, reducing support costs by 55%.",
    problem: "A growing e-commerce platform was struggling with customer support scalability. Their team of 25 support agents couldn't keep up with increasing ticket volumes, response times were averaging 4+ hours, and customer satisfaction scores were declining. Hiring more agents wasn't financially viable given their growth stage.",
    solution: "Nexloom built a custom AI agent system using GPT-4 and RAG architecture trained on the company's product catalog, policies, and historical support conversations. The system handles order tracking, returns, product questions, and escalates complex issues to human agents with full context. We integrated it with their existing Zendesk workflow and added real-time sentiment analysis.",
    results: [
      "70% of inquiries resolved automatically",
      "Average response time reduced from 4 hours to 30 seconds",
      "Customer satisfaction increased by 35%",
      "55% reduction in support operational costs",
    ],
    relatedServices: ["ai-agents", "llm-integrations", "intelligent-automation"],
    metaTitle: "AI Customer Support Case Study | Nexloom",
    metaDescription: "How Nexloom deployed AI agents for e-commerce customer support, automating 70% of inquiries and reducing costs by 55%.",
    image: "https://images.unsplash.com/photo-1531746790095-e5995aef3026?w=800&q=80",
  },
  {
    slug: "data-pipeline-retail-analytics",
    title: "Real-Time Data Pipeline for Retail Analytics",
    category: "Integrations & Growth",
    categorySlug: "integrations-growth",
    excerpt: "Building a real-time data pipeline that unified 12 data sources and enabled data-driven decision making across 200+ retail locations.",
    problem: "A national retail chain had data scattered across 12 different systems—POS, inventory, CRM, marketing platforms, and more. Their analysts spent 80% of their time manually aggregating data in spreadsheets. Leadership lacked real-time visibility into sales performance, inventory levels, and marketing effectiveness across their 200+ locations.",
    solution: "Nexloom designed and built a real-time data pipeline using Apache Kafka for streaming, dbt for transformations, and Snowflake as the data warehouse. We created custom connectors for all 12 source systems, implemented data quality checks, and built executive dashboards in Looker with drill-down capabilities by region, store, and product category.",
    results: [
      "Unified 12 data sources into single platform",
      "Real-time analytics across 200+ locations",
      "Analyst productivity increased by 300%",
      "Data-driven decisions led to 18% revenue increase",
    ],
    relatedServices: ["data-pipelines", "analytics-dashboards", "platform-integrations"],
    metaTitle: "Retail Data Pipeline Case Study | Nexloom",
    metaDescription: "How Nexloom built a real-time data pipeline unifying 12 sources for a retail chain, enabling analytics across 200+ locations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    slug: "mobile-app-logistics",
    title: "Cross-Platform Mobile App for Logistics Company",
    category: "Engineering & Product",
    categorySlug: "engineering-product",
    excerpt: "Delivering a driver-facing mobile app with real-time tracking, route optimization, and proof of delivery for a logistics fleet of 500+ vehicles.",
    problem: "A logistics company managing 500+ delivery vehicles relied on phone calls and paper forms for dispatch, tracking, and proof of delivery. This led to frequent miscommunication, lost delivery confirmations, and an inability to optimize routes. They needed a mobile solution that worked reliably in areas with poor connectivity.",
    solution: "Nexloom built a cross-platform mobile app using React Native with offline-first architecture. The app features real-time GPS tracking, route optimization using Google Maps APIs, digital proof of delivery with photo capture and e-signatures, and a dispatch dashboard for fleet managers. We implemented background syncing for areas with intermittent connectivity.",
    results: [
      "98% driver adoption within 2 months",
      "25% reduction in fuel costs through route optimization",
      "Zero lost delivery confirmations",
      "40% faster dispatch-to-delivery times",
    ],
    relatedServices: ["mobile-app-development", "full-stack-web-development", "api-development"],
    metaTitle: "Logistics Mobile App Case Study | Nexloom",
    metaDescription: "How Nexloom built a cross-platform mobile app for logistics with real-time tracking and route optimization for 500+ vehicles.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    slug: "devops-pipeline-saas-company",
    title: "DevOps Transformation for Growing SaaS Company",
    category: "Cloud & DevOps",
    categorySlug: "cloud-devops",
    excerpt: "Transforming a manual deployment process into a fully automated CI/CD pipeline, reducing deployment time from 2 days to 15 minutes.",
    problem: "A B2B SaaS company with 50 engineers was deploying manually using SSH and scripts. Deployments took 2 days, frequently caused downtime, and required a dedicated 'deployment team.' Fear of breaking production led to monthly release cycles, creating a massive backlog of features and bug fixes waiting to ship.",
    solution: "Nexloom implemented a comprehensive DevOps transformation: GitHub Actions for CI/CD, Docker containers for consistent environments, Kubernetes for orchestration, Terraform for infrastructure as code, and ArgoCD for GitOps deployments. We established staging environments, automated testing gates, canary deployments, and rollback procedures.",
    results: [
      "Deployment time reduced from 2 days to 15 minutes",
      "Release frequency increased from monthly to daily",
      "Zero-downtime deployments achieved",
      "Developer productivity increased by 40%",
    ],
    relatedServices: ["devops-cicd", "infrastructure-automation", "cloud-architecture"],
    metaTitle: "DevOps Transformation Case Study | Nexloom",
    metaDescription: "How Nexloom transformed a SaaS company's deployment process, reducing deployment time from 2 days to 15 minutes with fully automated CI/CD.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
  },
];
