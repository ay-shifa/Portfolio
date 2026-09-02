import { DeveloperProfile, Project, SkillCategory, Experience, Testimonial, Article } from '@/types/portfolio';

export const developerProfile: DeveloperProfile = {
  name: 'Shifa Fatima',
  title: 'Senior Full-Stack Engineer & AI Architect',
  roles: [
    'Senior Full-Stack Engineer',
    'AI Systems Architect',
    'Next.js & React Specialist',
    'Cloud & Distributed Systems Builder',
    'Open Source Contributor'
  ],
  tagline: 'Architecting high-performance web applications, intelligent AI workflows, and resilient cloud architectures with pixel-perfect craft.',
  bio: [
    "I'm a Full-Stack Engineer and AI Systems builder with over 6 years of experience engineering scalable products from 0 to 1 and scaling platforms to millions of requests.",
    "Specialized in Next.js, TypeScript, distributed backend microservices, real-time architectures, and LLM orchestration frameworks (LangChain, LlamaIndex, Vector Search).",
    "Passionate about developer tooling, performance optimization, elegant user experiences, and bridging machine intelligence with modern web applications."
  ],
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
  location: 'San Francisco, CA (Open to Global Remote)',
  timezone: 'PST (UTC-8)',
  availability: {
    status: 'available',
    text: 'Available for high-impact Full-Time roles & Select Consultancies'
  },
  stats: [
    { label: 'Years Experience', value: '6+', subtext: 'Continuous production shipping' },
    { label: 'Production Apps', value: '38+', subtext: 'Web, SaaS & AI agents' },
    { label: 'Open Source Stars', value: '4.8k+', subtext: 'Across GitHub repositories' },
    { label: 'Uptime & SLA', value: '99.98%', subtext: 'Across managed systems' }
  ],
  socials: [
    { name: 'GitHub', url: 'https://github.com/ay-shifa', icon: 'Github', handle: '@ay-shifa' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin', handle: 'in/shifafatima' },
    { name: 'X / Twitter', url: 'https://twitter.com', icon: 'Twitter', handle: '@shifafatima' },
    { name: 'Discord', url: 'https://discord.com', icon: 'MessageSquare', handle: 'shifafatima' },
    { name: 'Email', url: 'mailto:shifa.ay12@gmail.com', icon: 'Mail', handle: 'shifa.ay12@gmail.com' }
  ],
  contact: {
    email: 'shifa.ay12@gmail.com',
    phone: '+1 (415) 890-3421',
    calendly: 'https://calendly.com',
    discord: 'shifafatima'
  }
};

export const projectsData: Project[] = [
  {
    id: 'omnistack-ai',
    title: 'OmniStack AI — Autonomous Workflow Engine',
    tagline: 'Enterprise multi-agent LLM orchestrator with streaming execution graphs & vector memory.',
    description: 'A Next.js 14 and Python FastAPI platform enabling development teams to build, test, and deploy multi-agent autonomous workflows with real-time visual DAG execution.',
    longDescription: 'OmniStack AI revolutionizes complex task automation by allowing developers to chain intelligent LLM agents into visual directed acyclic graphs (DAGs). Features distributed vector memory caching with Qdrant, sub-100ms response time streaming, automated safety sandboxes, and enterprise audit logs.',
    category: 'ai',
    tags: ['Next.js 14', 'TypeScript', 'FastAPI', 'Python', 'Qdrant', 'TailwindCSS', 'WebSockets', 'LangGraph'],
    featured: true,
    metrics: [
      { label: 'Active Orgs', value: '140+' },
      { label: 'Latency Drop', value: '-65%' },
      { label: 'Daily Agent Execs', value: '1.2M' }
    ],
    highlights: [
      'Visual DAG workflow builder with custom nodes and real-time execution telemetry',
      'Hybrid semantic vector retrieval using Qdrant and pgvector with cross-encoder reranking',
      'Real-time WebSocket streaming with optimistic updates and client-side graph interpolation',
      'Integrated rate limiter, cost optimization router, and prompt version control'
    ],
    architecture: [
      'Frontend: Next.js 14 App Router, React Flow, Zustand, Tailwind CSS, Framer Motion',
      'Backend: Python FastAPI microservices with Celery task queues and Redis pub/sub',
      'Databases: PostgreSQL (relational & pgvector), Qdrant (high-dim vectors), Redis (caching)',
      'Infrastructure: Docker, Kubernetes, AWS ECS, Cloudflare Edge Workers'
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    previewGradient: 'from-blue-600 via-indigo-600 to-purple-700',
    accentColor: '#38bdf8',
    iconName: 'Cpu'
  },
  {
    id: 'hyperpulse-saas',
    title: 'HyperPulse — Real-Time Cloud Telemetry',
    tagline: 'High-throughput observability and incident response cockpit for distributed systems.',
    description: 'Modern observability SaaS that ingests over 50,000 events/sec, providing millisecond-accurate latency waterfalls, error anomaly detection, and automated alerting.',
    longDescription: 'Engineered from scratch to solve cloud observability bottlenecks. HyperPulse processes massive log and trace streams using ClickHouse and Go workers, offering frontend teams an ultra-responsive Next.js interface with real-time Canvas charts and anomaly triggers.',
    category: 'fullstack',
    tags: ['Next.js 14', 'Go / Golang', 'ClickHouse', 'Apache Kafka', 'TailwindCSS', 'TypeScript', 'Docker'],
    featured: true,
    metrics: [
      { label: 'Ingestion Rate', value: '50k+ ev/s' },
      { label: 'Query P99', value: '42ms' },
      { label: 'Storage Savings', value: '70%' }
    ],
    highlights: [
      'Custom time-series visualization engine built with HTML5 Canvas & WebGL',
      'Distributed trace correlation with automatic root-cause anomaly detection',
      'Multi-tenant RBAC system with OAuth2/SAML SSO and audit logging',
      'Zero-downtime database sharding and real-time Kafka consumer groups'
    ],
    architecture: [
      'Ingestion: Go pipeline consuming high-throughput Kafka topics',
      'Storage: ClickHouse columnar database with TTL compression policies',
      'Frontend: Next.js 14, TanStack Query, Radix UI primitives, Canvas 2D renderers',
      'Deployment: Terraform on AWS (EKS, MSK, RDS, CloudFront)'
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    previewGradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    accentColor: '#10b981',
    iconName: 'Activity'
  },
  {
    id: 'zenith-commerce',
    title: 'Zenith — Headless Commerce Engine',
    tagline: 'Ultra-fast sub-50ms headless ecommerce platform with edge personalization.',
    description: 'Blazing fast global ecommerce storefront with Next.js App Router, edge ISR caching, Stripe checkout, automated inventory sync, and dynamic localization.',
    longDescription: 'Zenith was engineered to achieve a 100/100 Lighthouse performance score across all Core Web Vitals. Powered by Next.js Server Components, Turbopack, and Vercel Edge Middleware for instant geo-routed localized storefront experiences.',
    category: 'fullstack',
    tags: ['Next.js 14', 'React Server Components', 'Stripe API', 'Prisma', 'PostgreSQL', 'TailwindCSS', 'Algolia'],
    featured: true,
    metrics: [
      { label: 'Lighthouse Score', value: '100/100' },
      { label: 'Conversion Boost', value: '+34%' },
      { label: 'P95 TTFB', value: '28ms' }
    ],
    highlights: [
      'Edge-rendered personalized product recommendations and localized currency conversion',
      'Optimistic cart management with offline support and zero-layout-shift UI',
      'Seamless checkout flow integrated with Stripe, Apple Pay, and Google Pay',
      'Instant Algolia faceted search with typo tolerance and voice search fallback'
    ],
    architecture: [
      'Next.js 14 App Router with React Server Components & Streaming SSR',
      'Prisma ORM with PostgreSQL database connection pooling via Neon/Supabase',
      'Stripe Webhooks handling idempotent order processing and tax computation',
      'Automated CI/CD with Playwright E2E testing suite and visual regression checks'
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    previewGradient: 'from-purple-600 via-fuchsia-600 to-pink-600',
    accentColor: '#c084fc',
    iconName: 'ShoppingBag'
  },
  {
    id: 'synapse-devtool',
    title: 'Synapse — Schema-First API Mocking Tool',
    tagline: 'Open-source CLI and studio to instantly generate type-safe mock backends with zero config.',
    description: 'Popular developer tool with over 2,400 GitHub stars that generates realistic mock REST & GraphQL APIs directly from TypeScript types and OpenAPI specs.',
    longDescription: 'Synapse solves the frontend-backend development bottleneck by spinning up lightweight local mock servers with deterministic faker seeds, network latency simulators, and contract validation.',
    category: 'opensource',
    tags: ['TypeScript', 'Node.js', 'Rust', 'GraphQL', 'OpenAPI', 'React', 'Vite'],
    featured: false,
    metrics: [
      { label: 'GitHub Stars', value: '2.4k+' },
      { label: 'Weekly NPM DLs', value: '45k+' },
      { label: 'Contributors', value: '28' }
    ],
    highlights: [
      'Instant CLI generator with zero configuration required',
      'Embedded schema viewer with interactive query playground',
      'Chaos engineering mode to simulate server dropouts and flaky network conditions',
      'Auto-generated client SDKs for TypeScript, Swift, and Kotlin'
    ],
    architecture: [
      'Core Engine: Rust CLI compiled to multi-platform binaries and WebAssembly',
      'Node.js Wrapper: High-performance Fastify adapter with live hot-reloading',
      'Studio UI: React with Tailwind and Monaco Code Editor integration'
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    previewGradient: 'from-amber-600 via-orange-600 to-red-600',
    accentColor: '#f59e0b',
    iconName: 'Terminal'
  },
  {
    id: 'vaultmesh-cloud',
    title: 'VaultMesh — Zero-Trust Secrets Orchestrator',
    tagline: 'Encrypted secrets distribution mesh for Kubernetes clusters and CI/CD pipelines.',
    description: 'Modern infrastructure security platform enabling automated secret rotation, dynamic ephemeral credentials, and end-to-end KMS encryption across multiple clouds.',
    longDescription: 'VaultMesh simplifies secret sprawl by replacing static environment variables with dynamic ephemeral secrets that automatically expire after single-use or predetermined lease durations.',
    category: 'cloud',
    tags: ['Go', 'Kubernetes', 'HashiCorp Vault', 'AWS KMS', 'Next.js', 'Terraform', 'gRPC'],
    featured: false,
    metrics: [
      { label: 'Rotations/Day', value: '800k+' },
      { label: 'Security Score', value: 'A+ (SOC2)' },
      { label: 'Clusters Managed', value: '250+' }
    ],
    highlights: [
      'Automatic integration with Kubernetes Mutating Webhooks for sidecarless secret injection',
      'Native support for AWS KMS, Google Cloud KMS, and Azure Key Vault',
      'Real-time audit log streaming to Datadog, Splunk, and AWS CloudWatch',
      'Visual access policy builder with fine-grained RBAC and attribute-based security'
    ],
    architecture: [
      'Control Plane: Go microservices running on AWS EKS with mutual TLS (mTLS)',
      'Data Plane: High-performance eBPF daemonset interceptors',
      'Dashboard: Next.js 14 App Router, Shadcn UI, and Server Actions'
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    previewGradient: 'from-sky-600 via-blue-700 to-slate-800',
    accentColor: '#38bdf8',
    iconName: 'ShieldCheck'
  },
  {
    id: 'neural-canvas',
    title: 'NeuralCanvas — AI Creative Studio',
    tagline: 'Collaborative infinite canvas for generative AI storytelling, image synthesis & audio.',
    description: 'Real-time collaborative infinite canvas platform combining Stable Diffusion XL, Whisper, and GPT-4 vision for multimedia storyboarding and creative production.',
    longDescription: 'Built with multi-player WebSockets and WebGL canvas rendering, NeuralCanvas enables teams of creators to brainstorm, generate image variations, inpaint assets, and sequence interactive multimedia stories in real time.',
    category: 'ai',
    tags: ['Next.js 14', 'TypeScript', 'WebSockets', 'Canvas API', 'PyTorch', 'TailwindCSS', 'Redis'],
    featured: false,
    metrics: [
      { label: 'Active Creators', value: '18k+' },
      { label: 'Generated Assets', value: '500k+' },
      { label: 'Multiplayer FPS', value: '60 FPS' }
    ],
    highlights: [
      'Multi-user live cursors and collaborative spatial canvas with infinite zoom',
      'Integrated inpainting, outpainting, and AI style transfer tools',
      'Real-time branch versioning for creative iterative explorations',
      'Instant export to video sequences, PDFs, and Figma formats'
    ],
    architecture: [
      'Client: React with custom 2D Canvas engine and WebGL shaders',
      'Collaboration Engine: Yjs CRDTs over WebSocket mesh with Redis state reconciliation',
      'Inference Workers: Distributed GPU worker fleet orchestrated with Celery & Ray'
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    previewGradient: 'from-rose-600 via-pink-600 to-violet-700',
    accentColor: '#f43f5e',
    iconName: 'Sparkles'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend & User Experience',
    description: 'Crafting responsive, accessible, high-performance web interfaces with modern React paradigms.',
    icon: 'Layout',
    skills: [
      { name: 'Next.js (App Router / SSR / ISR)', level: 98, experience: '5+ yrs', icon: 'Globe', highlight: true, description: 'Server components, streaming, middleware, edge caching' },
      { name: 'React 18 / 19 & TypeScript', level: 96, experience: '6+ yrs', icon: 'Code2', highlight: true, description: 'Custom hooks, concurrent features, strict typing, design systems' },
      { name: 'Tailwind CSS & CSS Architecture', level: 95, experience: '5+ yrs', icon: 'Palette', highlight: true, description: 'Custom theme tokens, responsive layouts, micro-animations' },
      { name: 'State Management (Zustand / TanStack)', level: 92, experience: '4+ yrs', icon: 'Database', description: 'Optimistic updates, cache invalidation, offline sync' },
      { name: 'Framer Motion & Canvas / WebGL', level: 88, experience: '3+ yrs', icon: 'Sparkles', description: 'Smooth interactive spring physics, data visualizers, particle effects' },
      { name: 'Web Performance & Core Web Vitals', level: 94, experience: '5+ yrs', icon: 'Zap', description: 'Sub-second TTFB, 100 Lighthouse, asset optimization, code splitting' }
    ]
  },
  {
    title: 'Backend & Distributed Systems',
    description: 'Designing resilient microservices, high-concurrency APIs, and scalable distributed architectures.',
    icon: 'Server',
    skills: [
      { name: 'Node.js / Express / Fastify', level: 95, experience: '6+ yrs', icon: 'Server', highlight: true, description: 'High-throughput async event loops, stream processing' },
      { name: 'Python & FastAPI', level: 90, experience: '4+ yrs', icon: 'FileCode', highlight: true, description: 'Async endpoints, Pydantic data modeling, AI orchestrations' },
      { name: 'Go / Golang', level: 84, experience: '3+ yrs', icon: 'Cpu', description: 'Concurrent worker pools, microservices, gRPC interfaces' },
      { name: 'REST & GraphQL APIs', level: 94, experience: '6+ yrs', icon: 'Layers', description: 'Schema design, federation, batching, rate limiting, OpenAPI' },
      { name: 'WebSockets & Real-Time SSE', level: 90, experience: '4+ yrs', icon: 'Radio', description: 'Bi-directional live event streaming, pub/sub synchronization' },
      { name: 'Authentication & Security (OAuth2 / JWT / RBAC)', level: 92, experience: '5+ yrs', icon: 'Shield', description: 'Zero-trust auth, session validation, CORS, token rotation' }
    ]
  },
  {
    title: 'AI, LLMs & Vector Intelligence',
    description: 'Integrating cutting-edge LLMs, agentic workflows, and semantic search into production products.',
    icon: 'Cpu',
    skills: [
      { name: 'LLM Orchestration (LangChain / LlamaIndex)', level: 90, experience: '2+ yrs', icon: 'Cpu', highlight: true, description: 'Autonomous agent loops, tool calling, multi-step reasoning' },
      { name: 'Vector DBs (Qdrant / pgvector / Pinecone)', level: 88, experience: '2+ yrs', icon: 'Search', highlight: true, description: 'Embeddings storage, hybrid keyword-semantic search, HNSW indexing' },
      { name: 'RAG Pipeline Architecture', level: 92, experience: '2+ yrs', icon: 'GitBranch', description: 'Document chunking, re-ranking, contextual evaluation, hallucination filters' },
      { name: 'OpenAI / Anthropic / Local Ollama APIs', level: 95, experience: '3+ yrs', icon: 'Sparkles', description: 'Structured JSON outputs, function calling, streaming tokens' },
      { name: 'Prompt Engineering & Fine-tuning', level: 86, experience: '2+ yrs', icon: 'Terminal', description: 'Few-shot evaluations, synthetic dataset prep, model alignment' }
    ]
  },
  {
    title: 'Databases, Cloud & DevOps',
    description: 'Managing cloud infrastructure, automated CI/CD pipelines, and high-availability database clusters.',
    icon: 'Cloud',
    skills: [
      { name: 'PostgreSQL & Prisma / Drizzle ORM', level: 94, experience: '6+ yrs', icon: 'Database', highlight: true, description: 'Complex indexing, schema migrations, connection pooling' },
      { name: 'Redis (Caching / Queues / PubSub)', level: 92, experience: '5+ yrs', icon: 'Zap', description: 'In-memory caching, distributed rate limiters, session stores' },
      { name: 'Docker & Containerization', level: 90, experience: '5+ yrs', icon: 'Box', description: 'Multi-stage lean image builds, local dev environments' },
      { name: 'AWS Cloud Services (ECS / S3 / RDS / Lambda)', level: 88, experience: '4+ yrs', icon: 'Cloud', description: 'Serverless functions, auto-scaling clusters, IAM security policies' },
      { name: 'CI/CD Pipelines (GitHub Actions / Turborepo)', level: 92, experience: '5+ yrs', icon: 'Workflow', description: 'Automated testing, linting, preview branch deployments' },
      { name: 'Monitoring & Logs (Datadog / OpenTelemetry)', level: 85, experience: '4+ yrs', icon: 'Activity', description: 'Distributed tracing, APM metrics, custom alert rules' }
    ]
  }
];

export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    role: 'Lead Full-Stack & AI Architect',
    company: 'Nexus Neural Labs',
    companyUrl: 'https://nexuslabs.example.com',
    location: 'San Francisco, CA (Hybrid)',
    period: '2023 — Present',
    current: true,
    type: 'full-time',
    description: 'Leading a team of 8 engineers architecting Next.js enterprise applications and AI-driven automation pipelines for high-growth tech clients.',
    achievements: [
      'Spearheaded the migration of legacy client platforms to Next.js 14 App Router, cutting page load times by 58% and boosting organic SEO traffic by 42%.',
      'Designed and deployed an autonomous agent orchestration engine serving over 1.2M daily LLM interactions with sub-100ms streaming responses.',
      'Implemented distributed caching layers with Redis and Qdrant, reducing LLM API token costs by $14,000/month.',
      'Mentored 6 junior/mid-level engineers, instituted automated CI/CD code quality gates, and standardized TypeScript coding guidelines.'
    ],
    technologies: ['Next.js 14', 'TypeScript', 'FastAPI', 'Python', 'Qdrant', 'PostgreSQL', 'AWS ECS', 'Docker', 'TailwindCSS']
  },
  {
    id: 'exp-2',
    role: 'Senior Full-Stack Engineer',
    company: 'Veloce Cloud Systems',
    companyUrl: 'https://veloce.example.com',
    location: 'San Francisco, CA',
    period: '2021 — 2023',
    current: false,
    type: 'full-time',
    description: 'Engineered real-time telemetry analytics dashboards and distributed backend ingestion pipelines processing 50k+ events per second.',
    achievements: [
      'Built a low-latency time-series visualization suite with React and WebGL, allowing engineers to drill down into 100M+ data points seamlessly.',
      'Refactored Node.js API endpoints into high-performance Go microservices, improving P99 latency from 320ms down to 42ms.',
      'Designed zero-downtime database sharding strategy for PostgreSQL and ClickHouse, scaling ingestion throughput 5x.',
      'Collaborated closely with Product and UX teams to build accessible, WCAG 2.1 AA compliant UI component libraries.'
    ],
    technologies: ['React', 'Next.js', 'Go', 'Node.js', 'ClickHouse', 'PostgreSQL', 'Kafka', 'Redis', 'Tailwind CSS']
  },
  {
    id: 'exp-3',
    role: 'Full-Stack Developer',
    company: 'PixelCraft Digital Studio',
    companyUrl: 'https://pixelcraft.example.com',
    location: 'Austin, TX',
    period: '2019 — 2021',
    current: false,
    type: 'full-time',
    description: 'Delivered bespoke headless ecommerce storefronts and scalable SaaS platforms for international brand clients.',
    achievements: [
      'Developed 12+ headless ecommerce stores using Next.js and Stripe, generating over $25M in cumulative client GMV.',
      'Created custom CMS plugin integrations that enabled marketing teams to launch new landing pages in minutes rather than days.',
      'Optimized asset delivery pipelines with Cloudflare Workers and dynamic image transformation, achieving perfect 100 Lighthouse scores.'
    ],
    technologies: ['Next.js', 'TypeScript', 'GraphQL', 'Stripe', 'Prisma', 'Tailwind CSS', 'Vercel']
  },
  {
    id: 'exp-4',
    role: 'Open Source Core Contributor & Maintainer',
    company: 'Developer Tooling Ecosystem',
    location: 'Remote',
    period: '2020 — Present',
    current: true,
    type: 'open-source',
    description: 'Active contributor to popular open-source repositories and creator of high-utility developer tools.',
    achievements: [
      'Created Synapse API mocker with 2,400+ stars on GitHub and over 45,000 weekly NPM downloads.',
      'Contributed PRs, bug fixes, and documentation improvements to Next.js, TanStack Query, and LangChain repositories.',
      'Regularly host tech talks and publish architectural breakdowns reaching over 80k developers globally.'
    ],
    technologies: ['TypeScript', 'Rust', 'Next.js', 'OpenAPI', 'WebAssembly']
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sarah Lin',
    role: 'VP of Engineering',
    company: 'Apex Cloud Solutions',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    content: "Shifa is one of the rarest engineers who pairs extraordinary deep-stack architectural prowess with an obsessive eye for UI craft. She delivered our Next.js analytics suite 3 weeks ahead of schedule with 99.99% uptime in production.",
    rating: 5,
    highlight: '3 weeks ahead of schedule & flawless architecture',
    projectRelation: 'Telemetry Dashboard Migration'
  },
  {
    id: 't-2',
    name: 'Marcus Sterling',
    role: 'Chief Technology Officer',
    company: 'Synthetix AI',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    content: "Working with Shifa transformed our AI product roadmap. Her mastery of LLM agent architectures, vector indexing, and real-time streaming interfaces allowed us to close our Series A funding with extreme confidence.",
    rating: 5,
    highlight: 'Instrumental in our Series A milestone',
    projectRelation: 'OmniStack Agent Engine'
  },
  {
    id: 't-3',
    name: 'Elena Rostova',
    role: 'Product Director',
    company: 'HyperScale Commerce',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    content: "The headless storefront Shifa built achieved a 100/100 Lighthouse score and immediately converted +34% higher on launch day. Her communication is crisp, proactive, and deeply collaborative.",
    rating: 5,
    highlight: '+34% conversion boost & perfect Core Web Vitals',
    projectRelation: 'Headless Storefront Platform'
  }
];

export const articlesData: Article[] = [
  {
    id: 'art-1',
    title: 'Architecting Scalable Multi-Agent AI Systems with Next.js & WebSockets',
    excerpt: 'A comprehensive deep dive into streaming LLM DAG workflows, state reconciliation with CRDTs, and avoiding vector search bottlenecks in high-concurrency apps.',
    date: 'Aug 2026',
    readTime: '7 min read',
    category: 'AI & Systems',
    tags: ['Next.js 14', 'AI Agents', 'WebSockets', 'Architecture'],
    link: '#',
    views: '14.2k'
  },
  {
    id: 'art-2',
    title: 'Mastering Next.js 14 App Router: Server Components & Cache Invalidation',
    excerpt: 'Demystifying the 4 caching layers of Next.js App Router, deterministic revalidation patterns, and optimizing sub-50ms TTFB on global Edge networks.',
    date: 'Jul 2026',
    readTime: '9 min read',
    category: 'Frontend Engineering',
    tags: ['Next.js', 'React Server Components', 'Caching', 'Performance'],
    link: '#',
    views: '22.8k'
  },
  {
    id: 'art-3',
    title: 'Zero-Downtime Microservice Scaling with Go, ClickHouse & Kafka',
    excerpt: 'How we scaled log ingestion from 5,000 to 50,000+ events per second without dropping a single packet using columnar compression and partitioned consumers.',
    date: 'May 2026',
    readTime: '6 min read',
    category: 'Backend & Cloud',
    tags: ['Go', 'ClickHouse', 'Kafka', 'System Design'],
    link: '#',
    views: '9.4k'
  }
];

export const faqData = [
  {
    question: "What types of roles or projects are you currently open to?",
    answer: "I am actively open to Senior / Staff Full-Stack Software Engineering roles, AI Application Architect positions, as well as select high-impact contract consultancies for MVPs, architecture reviews, and performance optimizations."
  },
  {
    question: "What is your primary technology stack?",
    answer: "My core daily stack is Next.js 14/15, TypeScript, React, Node.js, Python (FastAPI), Tailwind CSS, PostgreSQL, Redis, Docker, and Vector Databases (Qdrant, pgvector). I also build high-performance microservices with Go when extreme concurrency is required."
  },
  {
    question: "How do you approach code quality, testing, and system architecture?",
    answer: "I believe in building software that is clean, self-documenting, and robust. I implement type safety end-to-end with TypeScript/Zod, automated unit & E2E tests with Jest and Playwright, CI/CD automated gates, and modular clean architectures that scale gracefully."
  },
  {
    question: "Can you collaborate with distributed or international teams?",
    answer: "Yes, I have 5+ years of remote experience working with cross-functional teams across PST, EST, GMT, and APAC time zones. I maintain clear asynchronous communication, detailed documentation, and prompt video syncs."
  }
];
