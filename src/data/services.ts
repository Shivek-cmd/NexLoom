export interface SubService {
  id: string;
  title: string;
  description: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  shortTitle: string;
  headline: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  subservices: SubService[];
  ctaLabel: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "engineering-product",
    title: "Engineering & Product",
    shortTitle: "Engineering",
    headline: "Build Scalable Software Products That Drive Business Growth",
    intro: "From MVPs to enterprise-grade platforms, Nexloom's engineering teams deliver robust, scalable software using modern frameworks and best practices. We turn your product vision into production-ready applications.",
    metaTitle: "Engineering & Product Development Services | Nexloom",
    metaDescription: "Full-stack web, mobile, SaaS, and enterprise application development. Nexloom builds scalable software products with modern architecture and expert engineering teams.",
    ctaLabel: "View Engineering Services",
    subservices: [
      {
        id: "full-stack-web-development",
        title: "Full-Stack Web Development",
        description: "We build high-performance web applications using React, Next.js, Node.js, and modern frameworks. From responsive frontends to robust APIs and databases, our full-stack teams deliver end-to-end solutions that scale with your business and delight your users.",
      },
      {
        id: "mobile-app-development",
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android. Using React Native and Flutter, we deliver seamless mobile experiences with real-time features, push notifications, offline support, and secure payment integrations.",
      },
      {
        id: "saas-platform-engineering",
        title: "SaaS & Platform Engineering",
        description: "Purpose-built SaaS platforms with multi-tenancy, subscription billing, user management, analytics dashboards, and API-first architecture. We engineer platforms designed for rapid user adoption and sustainable growth.",
      },
      {
        id: "enterprise-applications",
        title: "Enterprise Applications",
        description: "Complex enterprise systems including ERP, CRM, HRMS, and custom workflow engines. We modernize legacy systems and build new enterprise-grade applications with security, compliance, and scalability at their core.",
      },
      {
        id: "product-engineering",
        title: "Product Engineering",
        description: "End-to-end product development from ideation to launch. Our product engineers work alongside your team to define requirements, build prototypes, iterate rapidly, and deliver market-ready products that solve real user problems.",
      },
      {
        id: "system-architecture",
        title: "System Architecture",
        description: "Designing resilient, scalable system architectures using microservices, event-driven patterns, and domain-driven design. We create blueprints that support growth, ensure reliability, and reduce technical debt.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortTitle: "Cloud",
    headline: "Accelerate Delivery with Cloud-Native Infrastructure & DevOps",
    intro: "Nexloom's cloud and DevOps teams help you ship faster, scale effortlessly, and maintain bulletproof reliability. We design, build, and manage cloud infrastructure that powers your applications with confidence.",
    metaTitle: "Cloud Architecture & DevOps Services | Nexloom",
    metaDescription: "Cloud architecture, DevOps, CI/CD pipelines, infrastructure automation, and security compliance. Nexloom builds and manages cloud infrastructure for high-performance applications.",
    ctaLabel: "View Cloud & DevOps",
    subservices: [
      {
        id: "cloud-architecture",
        title: "Cloud Architecture",
        description: "Design and implement cloud-native architectures on AWS, Azure, and GCP. We optimize for performance, cost efficiency, and scalability using serverless, containers, and managed services tailored to your workload requirements.",
      },
      {
        id: "devops-cicd",
        title: "DevOps & CI/CD",
        description: "Automated deployment pipelines, continuous integration, and delivery workflows that reduce release cycles from weeks to hours. We implement GitOps, automated testing, and deployment strategies that keep your team shipping with confidence.",
      },
      {
        id: "infrastructure-automation",
        title: "Infrastructure Automation",
        description: "Infrastructure as Code using Terraform, Pulumi, and CloudFormation. We automate provisioning, configuration management, and environment replication so your infrastructure is version-controlled, repeatable, and audit-ready.",
      },
      {
        id: "security-compliance",
        title: "Security & Compliance",
        description: "Comprehensive cloud security including IAM policies, encryption, network segmentation, vulnerability scanning, and compliance frameworks (SOC 2, HIPAA, GDPR). We build security into every layer of your infrastructure.",
      },
      {
        id: "performance-reliability",
        title: "Performance & Reliability",
        description: "Site reliability engineering with monitoring, alerting, incident response, and performance optimization. We implement observability stacks, load testing, and chaos engineering to ensure your applications stay fast and available.",
      },
      {
        id: "cloud-operations",
        title: "Cloud Operations",
        description: "24/7 managed cloud operations including cost optimization, resource scaling, backup management, and disaster recovery. We keep your cloud infrastructure running smoothly so your team can focus on building products.",
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    shortTitle: "AI",
    headline: "Unlock Intelligent Automation with AI Agents & LLM Solutions",
    intro: "Nexloom builds custom AI solutions that transform how businesses operate. From intelligent agents to automated workflows, we harness the power of large language models and machine learning to drive efficiency and innovation.",
    metaTitle: "AI Agents & Intelligent Automation Services | Nexloom",
    metaDescription: "Custom AI agents, agentic workflows, LLM integrations, and intelligent automation solutions. Nexloom builds AI-powered systems that transform business operations.",
    ctaLabel: "View AI & Automation",
    subservices: [
      {
        id: "ai-agents",
        title: "AI Agents",
        description: "Custom AI agents that autonomously handle complex tasks—from customer support and sales qualification to research and data analysis. We build agents that learn, adapt, and deliver results with minimal human intervention.",
      },
      {
        id: "agentic-workflows",
        title: "Agentic Workflows",
        description: "Multi-step, multi-agent workflows that orchestrate complex business processes. Our agentic systems coordinate between specialized AI agents, APIs, and human checkpoints to automate end-to-end operations reliably.",
      },
      {
        id: "llm-integrations",
        title: "LLM Integrations",
        description: "Integrate large language models (GPT-4, Claude, Llama) into your applications for natural language processing, content generation, summarization, and intelligent search. We handle prompt engineering, fine-tuning, and RAG architectures.",
      },
      {
        id: "intelligent-automation",
        title: "Intelligent Automation",
        description: "AI-powered automation for document processing, data extraction, classification, and decision support. We combine RPA with machine learning to automate workflows that traditional automation cannot handle.",
      },
      {
        id: "autonomous-systems",
        title: "Autonomous Systems",
        description: "Self-learning systems that optimize operations in real-time—from dynamic pricing and inventory management to predictive maintenance and anomaly detection. These systems improve continuously without manual tuning.",
      },
      {
        id: "ai-business-operations",
        title: "AI for Business Operations",
        description: "Strategic AI implementations for forecasting, reporting, customer insights, and operational analytics. We help businesses make data-driven decisions faster with AI-powered dashboards and recommendation engines.",
      },
    ],
  },
  {
    slug: "integrations-growth",
    title: "Integrations & Growth",
    shortTitle: "Growth",
    headline: "Connect, Scale, and Grow with Seamless Integrations",
    intro: "Nexloom connects your tech stack, builds data pipelines, and creates the growth infrastructure that scales your business. We integrate systems, optimize data flows, and build the analytics foundation for data-driven growth.",
    metaTitle: "API Development & Growth Infrastructure Services | Nexloom",
    metaDescription: "API development, platform integrations, data pipelines, martech systems, and analytics dashboards. Nexloom builds the growth infrastructure that scales your business.",
    ctaLabel: "View Integrations & Growth",
    subservices: [
      {
        id: "api-development",
        title: "API Development",
        description: "RESTful and GraphQL APIs designed for performance, security, and developer experience. We build well-documented, versioned APIs with authentication, rate limiting, and comprehensive testing for reliable third-party integrations.",
      },
      {
        id: "platform-integrations",
        title: "Platform Integrations",
        description: "Seamless integrations with CRM, ERP, payment gateways, marketing platforms, and third-party services. We connect your tools and systems to create unified workflows that eliminate data silos and manual processes.",
      },
      {
        id: "data-pipelines",
        title: "Data Pipelines",
        description: "Real-time and batch data pipelines for ETL, data warehousing, and analytics. We build scalable data infrastructure using tools like Apache Kafka, Airflow, and dbt to ensure your data is always accurate, accessible, and actionable.",
      },
      {
        id: "martech-systems",
        title: "Martech Systems",
        description: "Marketing technology stack setup and optimization including email automation, CRM workflows, lead scoring, attribution modeling, and campaign analytics. We build martech systems that drive measurable marketing ROI.",
      },
      {
        id: "analytics-dashboards",
        title: "Analytics & Dashboards",
        description: "Custom analytics dashboards and business intelligence solutions using tools like Metabase, Looker, and custom-built visualizations. We transform raw data into actionable insights that drive strategic decisions.",
      },
      {
        id: "growth-infrastructure",
        title: "Growth Infrastructure",
        description: "Technical infrastructure for growth including A/B testing frameworks, feature flags, user analytics, funnel optimization, and conversion tracking. We build the systems that enable data-driven experimentation and rapid growth.",
      },
    ],
  },
];
