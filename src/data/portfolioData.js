/**
 * MASTER PORTFOLIO CONFIGURATION
 * 
 * You can customize the entire portfolio from this single file!
 * Change your name, bio, social links, stats, skills, projects,
 * education, and certifications here without touching any component code.
 */

export const personalInfo = {
  name: "Rishan Britto",
  role: "MCA Student & Aspiring Full-Stack Developer",
  tagline: "Building full-stack web applications with JavaScript, Node.js, and modern APIs.",
  status: "Actively seeking internship or entry-level software development roles",
  location: "Udupi, Karnataka, India",
  email: "rishanbritto@gmail.com",
  phone: "+91 7353993960",
  github: "https://github.com/Rishan2005",
  linkedin: "https://linkedin.com/in/rishan-britto",
  leetcode: "",
  resumePath: "/resume.pdf", // Placed directly in the public/ folder
  aboutBio: "I am a Computer Applications graduate currently pursuing my MCA at MITE, Moodabidri, with a strong foundation in programming, web development, and databases. I enjoy building real-world projects that use APIs, databases, and clean user interfaces.",
  secondaryBio: "I work with C, Java, Python, JavaScript, Node.js, React.js and Express.js, and have hands-on experience with MySQL, MongoDB and Firebase. Outside of coding, I enjoy portrait sketching, competitive coding, tech blogging, UI/UX design and contributing to open source.",
};

export const stats = [
  { label: "Projects Built", value: "2", description: "Full-stack web applications" },
  { label: "Technologies", value: "14", description: "Languages, databases & frameworks" },
  { label: "Certifications", value: "2", description: "Infosys Springboard & TCS iON" },
  { label: "Current Degree", value: "MCA '27", description: "7.82 / 10 CGPA at MITE" },
];

export const skillCategories = [
  {
    id: "programming",
    title: "Languages",
    icon: "Code2",
    description: "Programming languages I use for problem solving and application development",
    skills: [
      { name: "C", icon: "Terminal", highlight: "Programming fundamentals and problem solving" },
      { name: "Java", icon: "Coffee", highlight: "Object-oriented programming (Eclipse, NetBeans)" },
      { name: "Python", icon: "FileCode", highlight: "Scripting and problem solving (IDLE)" },
      { name: "JavaScript", icon: "Code", highlight: "Core language for front-end and back-end development" },
    ],
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: "Globe",
    description: "Full-stack web development with modern JavaScript tooling",
    skills: [
      { name: "HTML & CSS", icon: "FileText", highlight: "Semantic markup and responsive interfaces" },
      { name: "React.js", icon: "Layers", highlight: "Component-based user interfaces" },
      { name: "Node.js", icon: "Server", highlight: "Server-side JavaScript and REST APIs" },
      { name: "Express.js", icon: "Server", highlight: "Backend routing and middleware" },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: "Database",
    description: "Relational and NoSQL data storage",
    skills: [
      { name: "SQL / MySQL", icon: "Database", highlight: "Schema design and querying" },
      { name: "MongoDB", icon: "FolderArchive", highlight: "Document-based NoSQL storage" },
      { name: "Firebase / Firestore", icon: "ServerCrash", highlight: "Authentication and cloud-hosted data" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "Wrench",
    description: "Editors and IDEs I develop with",
    skills: [
      { name: "VS Code", icon: "Monitor", highlight: "Primary editor for web development" },
      { name: "Eclipse", icon: "Monitor", highlight: "Java development" },
      { name: "NetBeans", icon: "Monitor", highlight: "Java development" },
      { name: "MySQL", icon: "Database", highlight: "Database administration and queries" },
    ],
  },
];

export const projects = [
  {
    id: "smart-pocket-money-system",
    title: "Smart Pocket Money System",
    subtitle: "Expense Tracking, Budgeting & Savings Management",
    category: "Full Stack",
    shortDescription: "A full-stack web application for expense tracking, budgeting, and savings management.",
    fullDescription: "A full-stack web application built for expense tracking, budgeting, and savings management, helping users plan and monitor their personal finances effectively.",
    problemStatement: "Students and young adults often struggle to keep track of where their pocket money goes, which makes budgeting and saving difficult.",
    solution: "Built a full-stack application with a Node.js and Express.js backend and a MySQL database that lets users record expenses, set budgets, and track their savings in one place.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"],
    keyFeatures: [
      "Expense tracking",
      "Budget planning",
      "Savings management",
      "MySQL-backed persistent storage"
    ],
    githubUrl: "https://github.com/Rishan2005",
    liveDemoUrl: "",
    metrics: "",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    featured: true
  },
  {
    id: "anime-streaming-platform",
    title: "Anime Streaming Platform",
    subtitle: "API-Driven Streaming Web App with User Accounts",
    category: "Web Development",
    shortDescription: "A web-based streaming platform that integrates external APIs to deliver anime content.",
    fullDescription: "A web-based streaming platform that integrates external APIs to deliver anime content, featuring user authentication, personalized watchlists, and profile management.",
    problemStatement: "Anime content is spread across many sources, and viewers want one place to discover titles and keep track of what they are watching.",
    solution: "Integrated the Gogoanime and AniList APIs to fetch anime data, and used Firebase Authentication and Firestore to store user accounts, watchlists and profiles.",
    technologies: ["JavaScript", "HTML", "CSS", "Gogoanime API", "AniList API", "Firebase", "Firestore"],
    keyFeatures: [
      "User authentication",
      "Personalized watchlists",
      "Profile management",
      "Integration with external anime APIs"
    ],
    githubUrl: "https://github.com/Rishan2005",
    liveDemoUrl: "",
    metrics: "",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    featured: true
  }
];

export const education = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "MITE",
    location: "Moodabidri, Karnataka",
    period: "2025 – 2027",
    grade: "CGPA: 7.82 / 10 (Current)",
    description: "Currently pursuing my MCA, building on my undergraduate foundation in programming, web development and databases.",
    coursework: [],
    highlights: []
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Application (BCA)",
    institution: "St. Mary's College",
    location: "Shirva, Karnataka",
    period: "2022 – 2025",
    grade: "CGPA: 8.15 / 10",
    description: "Built a strong foundation in programming, web development, and databases.",
    coursework: [],
    highlights: []
  },
  {
    id: "puc",
    degree: "PUC",
    institution: "St. Lawrence PU College",
    location: "Moodubelle, Karnataka",
    period: "2020 – 2022",
    grade: "Percentage: 83.5%",
    description: "",
    coursework: [],
    highlights: []
  },
  {
    id: "sslc",
    degree: "SSLC",
    institution: "St. Lawrence English Medium High School",
    location: "Moodubelle, Karnataka",
    period: "2020",
    grade: "Percentage: 78.08%",
    description: "",
    coursework: [],
    highlights: []
  }
];

export const certifications = [
  {
    id: "cert-infosys",
    name: "Infosys Springboard Certificate",
    issuer: "Infosys Springboard",
    date: "",
    credentialId: "",
    credentialUrl: "",
    badge: "Certified",
    category: "Professional",
    skills: []
  },
  {
    id: "cert-tcs",
    name: "TCS iON Certificate",
    issuer: "TCS iON",
    date: "",
    credentialId: "",
    credentialUrl: "",
    badge: "Certified",
    category: "Professional",
    skills: []
  }
];

export const achievements = [
  "Winner – Math Relay at Mahaveer College, Moodabidri",
  "Winner – Math Relay at Poornaprajna College, Udupi",
  "3rd Prize – Futuristic Art Competition (Overall Udupi Diocese)"
];

export const hobbies = [
  "Portrait Sketching",
  "Competitive Coding",
  "Tech Blogging",
  "Exploring New Technologies",
  "Open Source Contribution",
  "UI/UX Design"
];

export const resumeDetails = {
  title: "Interested in working with me?",
  subtitle: "Download my resume to learn more about my education, technical skills, projects, and development experience.",
  buttonText: "Download Resume",
  viewButtonText: "Preview Resume",
  downloadFileName: "Rishan_Britto_Resume.pdf",
  fileSize: "PDF",
  lastUpdated: "October 2026",
  highlights: [
    "MCA student at MITE with a BCA CGPA of 8.15 / 10",
    "Built full-stack projects with Node.js, Express.js, MySQL and Firebase",
    "Skilled in C, Java, Python, JavaScript, React.js and SQL/NoSQL databases",
    "Seeking an internship or entry-level software development role"
  ]
};

export const contactDetails = {
  title: "Let's Connect & Build Something Great",
  subtitle: "I am seeking internship and entry-level software development opportunities. Feel free to reach out via email, social channels, or by filling out the form below.",
  email: "rishanbritto@gmail.com",
  location: "Udupi, Karnataka, India",
  availability: "Open to internships and entry-level roles",
  responseNotice: "Typically responds within 24 hours.",
  socials: [
    { name: "GitHub", url: "https://github.com/Rishan2005", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/rishan-britto", icon: "Linkedin" },
    { name: "Email", url: "mailto:rishanbritto@gmail.com", icon: "Mail" },
  ]
};
