// ═══════════════════════════════════════════════════════════
// SUSHMITHA LAVANURU PORTFOLIO — SINGLE SOURCE OF TRUTH
// All content, text, and data lives here.
// ═══════════════════════════════════════════════════════════

// ─── 1. Personal Info ───
export const personalInfo = {
  name: 'Sushmitha Lavanuru',
  shortName: 'Sushmitha',
  role: 'Data Science & AI/ML Developer',
  university: 'SR International Institute of Technology',
  universityPeriod: '2023–2027',
  location: 'Hyderabad, India',
  email: 'sushmithalavanuru328@gmail.com',
  phone: '+91 9392686996',
  linkedin: 'https://www.linkedin.com/in/sushmitha-reddy-lavanuru/',
  github: 'https://github.com/Sushmitha-328?tab=repositories',
  about: `I'm Sushmitha Lavanuru, a Computer Science undergraduate with a strong interest in Artificial Intelligence, Machine Learning, and Data Science. I enjoy transforming complex problems into intelligent, practical solutions through technology, experimentation, and creative problem-solving.

My experience spans building machine learning models, developing autonomous multi-agent AI systems, and creating interactive data analytics dashboards. I'm particularly fascinated by the potential of Agentic AI and Large Language Models to build smarter, more efficient applications.

As a curious learner and analytical thinker, I constantly explore emerging technologies, strengthen my technical skills, and challenge myself through hands-on projects. I believe in continuous learning, innovative thinking, and building technology that creates meaningful impact.

I'm currently looking forward to opportunities in AI/ML Engineering, Data Science, and Data Analytics where I can contribute, grow, and turn ideas into impactful solutions.`,
  availableFrom: 'Available Immediately',
  photo: '/sushmitha-photo.jpg',
  cvLink: '/sushmitha-cv.pdf',
  resumeLink: '/sushmitha-cv.pdf',
};

// ─── 2. Typing Lines (Hero section) ───
export const typingLines = [
  'I build real-time analytics engines.',
  'I simulate 8,000 race futures per lap.',
  'I predict patient readmission risk with ML.',
  'I architect autonomous multi-agent AI pipelines.',
  'I turn 200,000 rows into insight.',
];

// ─── 3. Hero Stats ───
export const heroStats = [
  { value: 8000, suffix: '+', label: 'Race futures / lap', accent: 'blue', tooltip: 'MCTS simulation engine' },
  { value: 89.1, suffix: '%', label: 'F1 Strategy Accuracy', accent: 'teal', decimals: 1, tooltip: 'Vs live 2026 telemetry' },
  { value: 81414, suffix: '', label: 'Patient encounters analyzed', accent: 'blue', tooltip: '130 US hospitals dataset' },
  { value: 200, suffix: 'K+', label: 'IPL rows analyzed', accent: 'teal', tooltip: '16 seasons data warehouse' },
];

// ─── 4. Projects ───
export const projects = [
  {
    id: 'hospital-readmission',
    title: 'Hospital Patient Readmission Risk Prediction',
    badge: 'AI/ML',
    badgeType: 'aiml',
    category: 'Healthcare ML',
    year: '2026',
    tags: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'Jupyter Notebook'],
    featured: true,
    whatISolved: `Hospitals face $500M+/year in CMS readmission penalties when diabetic patients are readmitted within 30 days. Built a machine learning system to predict high-risk patients so care teams can intervene early — prioritizing recall over accuracy because missing a true readmission is more costly than a false alarm.`,
    impactPoints: [
      '81,414 patient encounters from 130 US hospitals',
      '31 engineered features from 50 raw columns',
      '65% recall on readmission class — deliberate trade-off',
      'Fairness audit revealed age-bias gap in younger patients',
    ],
    howIBuiltIt: `Built on the UCI Diabetes 130-US Hospitals dataset. Cleaned 83-95% missing columns, converted age buckets to numeric, aggregated 20+ medication columns, mapped ICD codes into 8 clinical categories. Trained Logistic Regression (interpretable, for clinician trust) and Decision Tree with class_weight="balanced" for 9% class imbalance. Tested SMOTE but discovered it corrupts one-hot features — reverted to balanced weighting. Performed custom fairness audit by age group: found recall near 0% for youngest patients vs 88% for 85+ — a real deployment-blocking bias. Fixed 6 bugs including a data leakage bug (scaler refit on test data) and a silent label-swap in classification_report.`,
    githubLink: 'https://github.com/Sushmitha-328?tab=repositories',
  },
  {
    id: 'content-maker',
    title: 'Content Maker – Autonomous Multi-Agent YouTube Production Engine',
    badge: 'AGENTIC AI',
    badgeType: 'aiml',
    category: 'Autonomous Multi-Agent Systems',
    year: '2026',
    tags: ['Python', 'LangGraph', 'LLMs (Groq)', 'Pydantic', 'FastAPI', 'React'],
    featured: true,
    whatISolved: `Creating publish-ready YouTube content requires research, scripting, critique, SEO, and thumbnail design — a slow, multi-person workflow. I built an autonomous multi-agent system in LangGraph that does all of it end-to-end with zero human bottleneck.`,
    impactPoints: [
      '7 specialized LLM agents in a cyclic pipeline',
      '6-dimension LLM-critic quality rubric (1–5 scale)',
      'Rubric score refined from 2/5 to 5/5 automatically',
      'Parallel packaging + automated human escalation fallback',
    ],
    howIBuiltIt: `Architected a cyclic multi-agent LLM pipeline in LangGraph with specialized agents (Research, Script Writer, Critic, Script Doctor, SEO, Thumbnail, Repurposing) that converts a topic idea into a publish-ready YouTube package: script, SEO metadata, chapter timestamps, and thumbnail concepts. Implemented a 6-dimension LLM-critic quality rubric (1–5 scale) that scores each draft and automatically routes low-scoring drafts to a revision agent, with a 3-loop limit and automated human escalation. Added parallel content packaging, version-diff tracking, Pydantic-validated agent outputs, and isolated test suites for each agent, served through a FastAPI backend with a React dashboard.`,
    githubLink: 'https://github.com/Sushmitha-328?tab=repositories',
  },
  {
    id: 'f1-strategy',
    title: 'F1 Real-Time Prescriptive Analytics Engine',
    badge: 'FEATURED',
    badgeType: 'featured',
    category: 'AI / Prescriptive Analytics',
    year: '2026',
    tags: ['Python', 'MCTS', 'Redis', 'React', 'FastF1 API'],
    featured: false,
    whatISolved: `Formula 1 races are decided in milliseconds. Pit wall engineers make gut-feel decisions under pressure with incomplete data. I built a system that doesn't.`,
    impactPoints: [
      '8,000+ alternate futures simulated per lap',
      '<0.15s decision time per driver — all 20 cars',
      '89.1% strategy alignment vs live 2026 telemetry',
      'Outperformed Mercedes by 2 laps at Suzuka GP',
    ],
    howIBuiltIt: `Engineered a Monte Carlo Tree Search engine with Deep-Branching Heuristics. Solved Python GIL bottleneck with concurrent.futures.ThreadPoolExecutor. Built dual Redis Pub/Sub pipes — raw FIA telemetry in, strategic commands out to live React dashboard. Back-tested against Australian, Chinese, and Japanese GP 2026 telemetry. Full fault tolerance: handles null telemetry, DNS events, dirty data — without dropping a frame.`,
    githubLink: 'https://github.com/Sushmitha-328?tab=repositories',
  },
  {
    id: 'ipl-analytics',
    title: 'IPL Analytics Dashboard',
    badge: 'DATA ANALYTICS',
    badgeType: 'analytics',
    category: 'Business Intelligence',
    year: '2024',
    tags: ['SQL', 'MySQL', 'Power BI', 'DAX', 'Python'],
    featured: false,
    whatISolved: `16 years of IPL data. 200,000+ rows. Scattered across formats. No single source of truth for analysts.`,
    impactPoints: [
      '200,000+ rows cleaned and modeled',
      '2008–2023 complete season coverage',
      'MySQL pre-computation → dramatically faster Power BI queries',
      'Interactive season slicer with KPI cards and venue analysis',
    ],
    howIBuiltIt: `Built MySQL as the data warehouse. Engineered complex SQL (CASE WHEN, CREATE TABLE) to pre-calculate Winner, Runner-Up, Orange Cap, Purple Cap metrics - offloading computation from Power BI. Built neon-themed interactive dashboard with season slicers driving KPI cards, points table, toss analysis, and venue breakdowns.`,
    githubLink: 'https://github.com/Sushmitha-328?tab=repositories',
  },
];

// ─── 5. Skill Categories ───
export const skillCategories = [
  {
    name: 'Languages & Databases',
    accent: 'teal',
    skills: ['Python', 'SQL', 'JavaScript', 'MySQL', 'Data Modeling', 'Reporting Queries'],
  },
  {
    name: 'Agentic AI & Multi-Agent',
    accent: 'blue',
    skills: ['LangGraph', 'Agentic AI', 'Multi-Agent Systems', 'LLMs', 'Prompt Engineering', 'Groq API', 'LLM-as-a-Judge', 'Pydantic Validation'],
  },
  {
    name: 'Machine Learning & Data Science',
    accent: 'teal',
    skills: ['scikit-learn', 'Logistic Regression', 'Decision Trees', 'Feature Engineering', 'Class Imbalance (SMOTE)', 'Subgroup Fairness Auditing', 'Model Evaluation & Recall', 'pandas', 'NumPy'],
  },
  {
    name: 'Frameworks & Web Development',
    accent: 'blue',
    skills: ['FastAPI', 'React', 'REST APIs', 'Parallel Agent Workflows', 'Automated Revision Routing', 'HTML/CSS'],
  },
  {
    name: 'Data Visualization & Analytics',
    accent: 'teal',
    skills: ['Power BI', 'DAX', 'Data Visualization', 'Data Cleaning', 'matplotlib', 'Interactive Dashboards'],
  },
  {
    name: 'Tools & Professional Skills',
    accent: 'gray',
    skills: ['Git', 'GitHub', 'Jupyter Notebook', 'Vercel', 'Problem Solving', 'Debate & Public Speaking', 'Team Leadership', 'Cultural Club Volunteering'],
  },
];

// ─── 6. Certifications ───
export const certifications = [
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte via Forage',
    topics: 'Data Analysis · Forensic Technology',
    note: null,
    date: 'Dec 2025',
    accent: 'teal',
    credlyLink: '/certificates/deloitte certificate.pdf',
  },
  {
    title: 'Data Visualisation: Empowering Business with Effective Insights',
    issuer: 'TATA via Forage',
    topics: 'Data Visualization · Business Insights',
    note: null,
    date: 'Dec 2025',
    accent: 'blue',
    credlyLink: '/certificates/tata data visualisation certificate.pdf',
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Google Career Certificates',
    topics: 'AI fundamentals · Prompt engineering · Responsible AI',
    note: 'Credly Verified',
    date: 'Dec 2025',
    accent: 'teal',
    credlyLink: '/certificates/GoogleAIEssentials certificate.pdf',
  },
  {
    title: 'SQL Essential Training',
    issuer: 'LinkedIn Learning',
    topics: 'SQL · Database querying · Data manipulation',
    note: '7.8 CPE Credits — NASBA Accredited',
    date: 'Feb 2026',
    accent: 'blue',
    credlyLink: '/certificates/SQL Essential Training CertificateOfCompletion.pdf',
  },
  {
    title: 'Introduction to Data Science',
    issuer: 'Cisco',
    topics: 'Data Science · Analytics Fundamentals',
    note: 'Credly Verified',
    date: '2025',
    accent: 'teal',
    credlyLink: null,
  },
];

// ─── 7. Timeline Events ───
export const timelineEvents = [
  {
    year: '2021',
    title: 'Scored 99.3% in Class 10',
    subtitle: 'Narayana Olympiad School, Andhra Pradesh',
    icon: 'graduation',
    color: 'gray',
    highlight: false,
    isPulse: false,
  },
  {
    year: '2023',
    title: 'Scored 96% in Class 12',
    subtitle: 'Resonance Adventures, Telangana',
    icon: 'graduation',
    color: 'gray',
    highlight: false,
    isPulse: false,
  },
  {
    year: '2023',
    title: 'Started B.Tech CSE · SR International Institute of Technology',
    subtitle: 'Hyderabad · CGPA: 7.75',
    icon: 'university',
    color: 'teal',
    highlight: false,
    isPulse: false,
  },
  {
    year: '2024',
    title: 'Built IPL Analytics Dashboard',
    subtitle: '200K rows · SQL + Power BI · First major DS project',
    icon: 'chart',
    color: 'teal',
    highlight: false,
    isPulse: false,
  },
  {
    year: '2025',
    title: 'Volunteer — Cultural & Debate Club',
    subtitle: 'Volunteered for Cultural Club · Volunteer & Winner at Debate Club',
    icon: 'users',
    color: 'blue',
    highlight: false,
    isPulse: false,
  },
  {
    year: '2026',
    title: 'Built Hospital Readmission Predictor',
    subtitle: 'Healthcare ML · 81K patient encounters · Fairness audit',
    icon: 'brain',
    color: 'blue',
    highlight: false,
    isPulse: false,
  },
  {
    year: '2026',
    title: 'Architected Content Maker — Multi-Agent AI Engine',
    subtitle: '7 LLM agents · Cyclic pipeline · 2/5 → 5/5 rubric score',
    icon: 'flag',
    color: 'blue',
    highlight: true,
    isPulse: false,
  },
  {
    year: 'Next',
    title: 'Seeking Data Science / AI-ML Internship',
    subtitle: 'Ready to deliver measurable impact',
    icon: 'rocket',
    color: 'teal',
    highlight: false,
    isPulse: true,
  },
];

// ─── 8. Navigation Links ───
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

// ─── 9. Loading Messages ───
export const loadingMessages = [
  'Initializing data pipelines...',
  'Loading neural networks...',
  'Deploying AI agents...',
  'Ready.',
];
