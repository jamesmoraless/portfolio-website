/**
 * Content copied VERBATIM from src/. Nothing here is rewritten, shortened or
 * invented — the redesign only changes how this text is set, never what it says.
 * Sources: components/layout/Navbar.tsx, components/sections/*.tsx, app/archive/page.tsx
 */

export const NAV = [
  { label: "Home", path: "/" },
  { label: "About", path: "/#about" },
  { label: "Education", path: "/#education" },
  { label: "Experience", path: "/#experience" },
  { label: "Projects", path: "/#projects" },
  { label: "Contact", path: "/#contact" },
];

export const HERO = {
  name: "James Morales",
  role: "Technical Product Manager and Full Stack Engineer",
  pitch:
    "Designing and building software that solves real problems, blending engineering expertise with a sharp focus on product vision and delivery.",
  ctaPrimary: "View My Work",
  ctaSecondary: "Contact Me",
  image: "/images/ghibli-made.png",
  imageAlt: "James Morales Studio Ghibli Form",
};

/** Groupings are the ones already commented in TechStack.tsx. */
export const TECH_GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Languages & Frameworks",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Python",
      "React",
      "Node.js",
      "Express",
      "Flask",
      "Next.js",
    ],
  },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { label: "Cloud", items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"] },
  {
    label: "Tools & DevOps",
    items: [
      "Git",
      "GitHub",
      "Jenkins",
      "Apache Airflow",
      "Splunk",
      "Postman",
      "Figma",
      "Tailwind CSS",
    ],
  },
];

export const ABOUT = {
  heading: "About Me",
  paragraphs: [
    // [0] is the lede beside the portrait; [1..] are the body paragraphs.
    "I'm a Technical PM with a dual background in Software Engineering and Business (Ivey HBA), taking AI products from client discovery to production code.",
    "My work spans client discovery, designing real screens, and owning end-to-end delivery, alongside engineering agentic workflows and ingestion pipelines. I've built a fast, repeatable delivery process by staying hands-on through every stage: discovery, design, development, and iterating on feedback. My engineering half means I can ship it. The business half means I know why it matters.",
    "I work AI-native. LLMs and agents are part of how I design, build, and deliver.",
  ],
  galleryTitle: "Life in Action",
  gallery: [
    { src: "/images/ringed.jpg", caption: "Iron rings secured 💍" },
    { src: "/images/coding.jpg", caption: "Making shareholders happy 💻" },
    { src: "/images/surfing.jpg", caption: "Surfing with my little bro in El Salvador 🏄‍♂️" },
    { src: "/images/golf.PNG", caption: "Working on fixing the swing ⛳" },
    { src: "/images/running.jpg", caption: "Marathon training in progress 🏃‍♂️" },
    { src: "/images/footy.JPG", caption: "Elite group of soccer players ⚽" },
    {
      src: "/images/construction.jpg",
      caption: "Getting help from my now roommates back in high school 🏗️",
    },
  ],
  highlightsTitle: "Key Highlights",
  highlights: [
    "Technical PM owning delivery across $700K+ ARR at a YC-backed startup",
    "Built an ops platform used daily by 50+ engineers across 30+ clients enabling org wide visibility",
    "Solo-built a lending platform that cut 2 days of analysis to under 5 minutes through complex ingestion of thousands of data points",
    "Own end-to-end delivery from discovery and design to launch",
  ],
};

export const EDUCATION = {
  heading: "Education",
  sub: "Academic qualifications and achievements",
  items: [
    {
      school: "Ivey Business School, Western University",
      degree: "Honours in Business Administration (HBA)",
      period: "2022 - 2025",
      location: "London, ON",
      gpa: "GPA: 3.7",
      courses: [
        "Decision Making with Analytics",
        "Corporate Financial Accounting",
        "Sales",
        "Finance",
        "Leadership",
        "Communications",
      ],
      extracurricular: [
        "Junior VP of Ivey Analytics Club",
        "Ivey Consulting Club",
        "Ivey Tech Club",
      ],
      image: "/images/ivey-building.jpg",
    },
    {
      school: "Western University",
      degree: "Bachelors of Science, Software Engineering",
      period: "2020 - 2025",
      location: "London, ON",
      gpa: "GPA: 3.9 (89% avg)",
      courses: [
        "Cloud Computing",
        "Web Technologies",
        "Databases",
        "Project Management",
        "Scripting Languages",
      ],
      extracurricular: [
        "Western Engineering Competition Director",
        "Western AI Programmer",
        "Intramural Soccer",
        "Intramural Flag Football",
      ],
      image: "/images/engineering-building.jpg",
    },
  ],
};

export const EXPERIENCE = {
  heading: "Work Experience",
  sub: "My professional journey and contributions",
  resumeLink: "View Full Resume",
  items: [
    {
      title: "Technical Product Manager",
      company: "Tempo Labs",
      location: "Toronto, ON",
      period: "November 2025 - Present",
      description: [
        "Manage end-to-end product development, overseeing $700K+ of ARR across discovery, design, development, and delivery.",
        "Built and shipped an internal full-stack operating platform (self-initiated, later adopted org-wide) now used daily to manage 30+ clients and 50+ engineers, unifying code delivery analytics, capacity planning, and client intelligence into a single system, enabling org-wide visibility and data-driven decision-making.",
        "Implemented automated developer activity tracking and code-quality scoring (PR analysis, daily summaries, calendar views), enabling data-driven developer and client rankings that inform staffing, performance, and delivery risk.",
        "Deployed a central agent orchestration system with a chatbot and specialized sub-agents (PRD, user flows, UI specs, meeting insights, client profiler with web scraping) grounded in each client's repos and knowledge base, reducing feature-to-design cycle time by ~70%.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Supabase",
        "AI Agents",
        "Product Management",
        "Agile",
        "Scrum",
        "Tempo",
        "Trello",
        "Linear",
      ],
      companyLogo: "/images/marks/tempo.png",
      screenshot: "/images/tempo-site-dark.png",
    },
    {
      // Merged from the two resume versions of the same contract: the PM
      // resume's "Technical Lead (Contract)" and the SWE resume's "Lead
      // Software Developer (Contract)". Bullet 1 takes the PM framing (founder
      // partnership, sole technical hire) plus the SWE verb; bullets 2 and 3
      // take the SWE version, which is the more specific of the two.
      title: "Technical Lead (Contract)",
      company: "Duration Growth Advisors",
      location: "Toronto, ON",
      period: "January 2026 - July 2026",
      description: [
        "Partnered directly with the founder of a venture debt firm to architect and ship an underwriting platform from zero as the sole technical hire, turning 2 days of analyst work per deal into under 5 minutes",
        "Built ingestion pipelines for 2–10 years of historical financials and customer MRR data, automatically generating cohort analyses and SaaS metrics for every deal",
        "Deployed AI agents that scrape LinkedIn and company websites to profile founders, score their readiness for debt, and match them with investors",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Supabase",
        "Supabase MCP",
        "Claude Code",
        "Tavily API",
        "Mobbin MCP",
        "Linear",
      ],
      // Both cut from the durationgrowth.com screenshot. The logo is the gold
      // D mark with its page background knocked out to alpha, so the board's
      // white-silhouette filter reads it the same way as the other marks.
      companyLogo: "/images/duration-logo.png",
      screenshot: "/images/duration-site.png",
    },
    {
      title: "Software Engineer",
      company: "Flowmatic",
      location: "Toronto, ON",
      period: "November 2024 - May 2025",
      description: [
        "Launched an OpenAI-driven email composer that pulls invoice, contract and customer data, cutting rep prep from 30 min to 1 min and standardizing customer outreach",
        "Deployed a PostgreSQL MCP server on AWS Lightsail Containers, enabling natural language to query data in tabular and graphical formats, powering self-serve analytics",
        "Built an anonymized PostgreSQL demo environment, enabling realistic product demos without violating customer-data compliance",
      ],
      technologies: [
        "OpenAI API",
        "PostgreSQL",
        "Docker",
        "AWS Lightsail",
        "FastAPI",
        "TypeScript",
        "Next.js",
      ],
      companyLogo: "/images/marks/flowmatic.png",
      screenshot: "/images/flowmatic-site.png",
    },
    {
      title: "Software Engineering Intern - Analytics",
      company: "Zynga Inc.",
      location: "Toronto, ON",
      period: "May 2024 - September 2024",
      description: [
        "Developed and deployed a new feature using React, Python, Airflow and Redshift enabling game team analysts to perform experimental segmentation and visualize target metric results for product managers; successfully used for Harry Potter and Words With Friends 2",
        "Updated the architecture of an internal data service tool, resulting in a $250k annual cost reduction and improved system efficiency",
        "Deployed containerized Jenkins pipelines for automated creation of Terraform resources, data synchronization; hosted on Kubernetes",
      ],
      technologies: [
        "React",
        "Typsescript",
        "Python",
        "Airflow",
        "Splunk",
        "Redshift",
        "Jenkins",
        "Kubernetes",
        "PostgreSQL",
        "Docker",
        "Terraform",
        "AWS EC2",
        "AWS IAM",
        "AWS EKS",
      ],
      companyLogo: "/images/marks/zynga.png",
      screenshot: "/images/zynga-site.png",
    },
    {
      title: "Software Developer",
      company: "Repwave",
      location: "Remote",
      period: "November 2023 - March 2024",
      description: [
        "Worked alongside a Salesforce Senior SWE on full-stack development, integrating a Flask/Python backend and leading the React front-end development. Optimized API for processing monthly conversational data",
        "Contextualized OpenAI API to generate sales scripts for sales reps to use in their conversations with customers, ",
        "Collaboratively designed UI elements and workflows in Figma for a B2B SaaS product, focusing on user experience and functionality",
      ],
      technologies: ["React", "Typescript", "Docker", "Flask", "Python", "OpenAI API", "Figma"],
      companyLogo: "",
      screenshot: "",
    },
    {
      title: "Business Systems Analyst Intern",
      company: "Ontario Health – Digital Services",
      location: "Toronto, ON",
      period: "May 2023 - September 2023",
      description: [
        "Led Scrum meetings, managed work items and ensured timely execution of tasks; increasing sprint velocity by 18% over 8 sprints",
        "Created a dynamic dashboard on Azure DevOps to monitor task completion and team productivity with the use of Burndown, Gantt Charts, and graphs, providing transparent progress reports to clients, improving client satisfaction",
      ],
      technologies: ["Azure DevOps", "Google Project Management Cert", "Scrum", "Agile"],
      companyLogo: "/images/marks/ontario-health.png",
      screenshot: "/images/ontario-health-site.png",
    },
  ],
};

export const PROJECTS = {
  heading: "Featured Projects",
  sub: "Some of my recent work",
  archiveLink: "View Full Project Archive",
  items: [
    {
      title: "Atlas Code - Automated Technical Debt Resolution GitHub App",
      period: "January 2026",
      description: [
        "Built an AI-powered GitHub App that continuously monitors codebases, detects technical debt, and automatically opens targeted pull requests with precise fixes for security vulnerabilities, duplicated logic, and maintainability issues",
        "Engineered specialized sub-agents (security, reliability, DRY, maintainability) that analyze code changes on every push to main, generating context-aware fixes with clear explanations",
        "Implemented a centralized debt tracking database using Supabase to prevent duplicate findings and automatically resolve issues upon PR merge",
      ],
      technologies: [
        "GitHub Apps",
        "Github Actions",
        "Supabase",
        "TypeScript",
        "AI Agents",
        "PostgreSQL",
        "Vercel",
      ],
      links: ["Watch Demo", "Live Site"],
    },
    {
      title: "Capstone: London Transit Delays - 1st Place Winner",
      period: "Fall 2024 - Spring 2025",
      description: [
        "Implemented a real-time data pipeline using Node.js, Express, and MongoDB, processing weather and traffic data dynamically",
        "Configured a Grafana dashboard to visualize the data, and a cron job to run the pipeline as a scheduled task",
        "Utilized Python, Pandas, Scikit-learn, and TensorFlow to build a predictive analytics pipeline, leveraging historical and real-time datasets for model training",
      ],
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Python",
        "Grafana ",
        "Docker",
        "Cron",
        "GCP",
        "Open Source APIs",
      ],
      links: ["Watch Demo"],
    },
    {
      title: "Stockr",
      period: "Fall 2024 - Present",
      description: [
        "Engineered an AI agent using the OpenAI API that analyzes personal portfolios and delivers personalized financial advice, leveraging insights from corporate financial reporting, finance and accounting coursework",
        "Developed a real-time finance dashboard integrating market data, portfolio tracking, and interactive visualizations utilizing open source libraries such as Chart.js and APIs such as Alpha Vantage, IEX Cloud, Yahoo Finance, and OpenAI",
      ],
      technologies: [
        "OpenAI API",
        "Docker",
        "Chart.js",
        "Alpha Vantage API",
        "IEX Cloud",
        "Yahoo Finance API",
        "React",
        "Typescript",
        "Next.js",
        "MongoDB",
        "Node.js",
        "Express",
        "Vercel",
      ],
      links: ["Live Site"],
    },
    {
      title: "Cheer Web App",
      period: "Winter 2024",
      description: [
        "Deployed on GCP a comprehensive web app using the MERN stack, implementing a role-based access control system, real-time communication with Socket.io, staff scheduling, payroll system and Eleven Labs for text-to-speech functionality ensuring accessibility",
        "Collaborated with Family Connections Center over 8 months, utilizing scrum and Jim throughout the SDLC, adopting agile principles",
      ],
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Typescript",
        "Next.js",
        "GCP",
        "Socket.io",
        "Eleven Labs",
        "Docker",
      ],
      links: ["Watch Demo"],
    },
  ],
};

export const CONTACT = {
  heading: "Get in Touch",
  sub: "Let's talk!",
  infoTitle: "Contact Information",
  email: "jmorales.hba2025@ivey.ca",
  address: "435 Richmond St West, Toronto, ON",
  phone: "(519) 817-9957",
  connectTitle: "Connect",
  socials: ["GitHub", "LinkedIn", "X", "Instagram"],
  fields: ["Name", "Email", "Message"],
  submit: "Send Message",
  submitting: "Sending...",
  success: "Thank you! Your message has been sent.",
  error: "Sorry, something went wrong. Please try again later.",
};

export const ARCHIVE = {
  back: "Back to Home",
  heading: "All Projects",
  columns: ["Year", "Project", "Built with", "Links"],
  rows: [
    {
      year: "2026",
      title: "Atlas Code - Automated Technical Debt Resolution",
      builtWith: [
        "GitHub Apps",
        "Supabase",
        "TypeScript",
        "AI Agents",
        "PostgreSQL",
        "Vercel",
        "Github Actions",
      ],
      links: ["Demo"],
    },
    {
      year: "2025",
      title: "London Transit Delays",
      builtWith: ["Node.js", "Express", "MongoDB", "Python", "Pandas", "Scikit-learn", "TensorFlow"],
      links: ["Demo"],
    },
    {
      year: "2025",
      title: "Stockr",
      builtWith: ["OpenAI API", "Chart.js", "Alpha Vantage API", "IEX Cloud", "Yahoo Finance API"],
      links: ["Live Site"],
    },
    {
      year: "2024",
      title: "Personal Portfolio Website",
      builtWith: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "App Router"],
      links: ["GitHub", "Live Site"],
    },
    {
      year: "2024",
      title: "Cheer Web App",
      builtWith: ["MERN Stack", "GCP", "Socket.io", "Eleven Labs", "Agile"],
      links: ["Demo"],
    },
    {
      year: "2023",
      title: "Superhero Community Platform Web App",
      builtWith: ["PostgreSQL", "Express", "React", "Node.js", "AWS EC2"],
      links: ["GitHub"],
    },
    {
      year: "2023",
      title: "Premier League Match Predictor",
      builtWith: ["Python", "Jupyter Notebook", "Pandas", "Scikit-learn", "Random Forest"],
      links: ["GitHub"],
    },
    {
      year: "2023",
      title: "URL Shortener",
      builtWith: ["JavaScript", "Node.js", "Express", "MongoDB"],
      links: ["GitHub"],
    },
    {
      year: "2023",
      title: "Python Stock Price Predictor",
      builtWith: ["Python", "Jupyter Notebook", "Machine Learning", "Data Analysis"],
      links: ["GitHub"],
    },
    {
      year: "2023",
      title: "Retail Store Management Program",
      builtWith: ["Python", "OOP", "Terminal-based UI"],
      links: ["GitHub"],
    },
    {
      year: "2023",
      title: "E-Commerce API",
      builtWith: ["JavaScript", "Node.js", "Express", "MongoDB"],
      links: ["GitHub"],
    },
    {
      year: "2022",
      title: "Restorations of Eldya",
      builtWith: ["Unity", "C#", "2D Game Development"],
      links: ["GitHub"],
    },
    {
      year: "2023",
      title: "Python Data Structures & Algorithms",
      builtWith: ["Python", "Data Structures", "Algorithms"],
      links: ["GitHub"],
    },
    {
      year: "2023",
      title: "Machine Learning Projects",
      builtWith: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
      links: ["GitHub"],
    },
    {
      year: "2023",
      title: "Web Development Portfolio",
      builtWith: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      links: ["GitHub"],
    },
  ],
};
