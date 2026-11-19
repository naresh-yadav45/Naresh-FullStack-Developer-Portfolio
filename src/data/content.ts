export const profile = {
  name: "Naresh Yadav",
  title: "Full Stack Developer",
  location: "Jaipur, Rajasthan, India",
  email: "ny7976540@gmail.com",
  phone: "+91 6367824967",
  phoneHref: "tel:+916367824967",
  resumeHref: "/developer.pdf",
  college: "Government Engineering College, Ajmer",
  degree: "B.E./B.Tech, Electronics and Instrumentation Control Engineering",
  degreeYears: "2025 – 2029",
} as const;

export const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/naresh-yadav045" },
  { label: "GitHub", href: "https://github.com/naresh-yadav45" },
  { label: "Instagram", href: "https://www.instagram.com/naresh_mehta45/" },
  { label: "X", href: "https://x.com/NareshY88912" },
  { label: "LeetCode", href: "https://leetcode.com/u/ww7393299-oss/" },
  { label: "YouTube", href: null, hint: "Link coming soon" },
] as const;

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const skillGroups = [
  {
    title: "Programming languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    title: "Frontend development",
    items: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Responsive design"],
  },
  {
    title: "Backend development",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication", "FastAPI"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "Mongoose", "CRUD operations", "Database design"],
  },
  {
    title: "Frameworks and libraries",
    items: ["Three.js", "Lenis", "React Hooks", "Context API", "Streamlit"],
  },
  {
    title: "Developer tools",
    items: ["Git", "GitHub", "VS Code", "Chrome DevTools", "Vercel", "Netlify", "npm", "GitHub Copilot"],
  },
  {
    title: "Other technologies",
    items: [
      "Figma",
      "Wireframing and prototyping",
      "Design systems",
      "Logo and graphic design",
      "Web accessibility",
      "Performance optimization",
      "AI-assisted coding",
    ],
  },
] as const;

export type Project = {
  id: string;
  title: string;
  kind: string;
  summary: string;
  highlights: string[];
  contribution: string;
  stack: string[];
  note?: string;
};

export const projects: Project[] = [
  {
    id: "somani-plywood",
    title: "Somani Plywood Company",
    kind: "Client website",
    summary: "A professional business website developed for Somani Plywood Company.",
    highlights: [
      "Modern, business-focused presentation of the company and its products.",
      "Professional UI/UX with a responsive layout.",
      "Clear navigation so visitors can move through the site without friction.",
    ],
    contribution: "Designed and developed the company website as a client project.",
    stack: ["Responsive web", "UI/UX"],
  },
  {
    id: "nedtrex",
    title: "Nedtrex Technologies",
    kind: "Internship initiative",
    summary: "A technology and learning-focused internship initiative, presented as a company website.",
    highlights: [
      "Company site with professional branding.",
      "An internship application process.",
      "Five technical internship domains.",
      "Certificate-related functionality, where it was implemented.",
    ],
    contribution: "Built the web presence and the application-facing flow for the initiative.",
    stack: ["Company website", "Application flow", "Branding"],
  },
  {
    id: "recruiter-outreach",
    title: "Recruiter Outreach System",
    kind: "Web application",
    summary: "A recruiter outreach application with a FastAPI backend and a Streamlit dashboard.",
    highlights: [
      "FastAPI backend connected to the interface through an API.",
      "Streamlit frontend for the recruiter workflow.",
      "Dashboard views and data visualization for the outreach work.",
    ],
    contribution: "Built the API and the dashboard used to run the outreach workflow.",
    stack: ["Python", "FastAPI", "Streamlit"],
  },
  {
    id: "namma-space",
    title: "Namma Space",
    kind: "IIT Bombay competition",
    summary:
      "A competition project on 3D indoor reconstruction and interactive indoor navigation, made for an IIT Bombay competition.",
    highlights: [
      "3D indoor reconstruction and interactive 3D environments.",
      "Indoor navigation concepts, including points of interest.",
      "Frontend work done as part of a technical team.",
    ],
    contribution:
      "Contributed frontend development for the interactive indoor experience, working with the team.",
    stack: ["Frontend", "Interactive 3D", "Indoor navigation"],
    note: "This was a competition project. It is not IIT Bombay employment, sponsorship, or an award.",
  },
];

export const experience = [
  {
    role: "Freelance Web Developer & UI/UX Designer",
    org: "Fiverr",
    dates: "2025 – Present",
    kind: "Freelance",
    detail:
      "Delivered 10+ client projects. Built web interfaces and provided UI/UX and web development services.",
  },
  {
    role: "Full Stack Development Intern",
    org: "Unessa Foundation",
    dates: "Jul 2026 – Sep 2026",
    kind: "Internship",
    detail:
      "Developed production-ready full-stack applications using React, Node.js, and MongoDB, with REST API integration.",
  },
  {
    role: "Web Development Intern",
    org: "InAmigos Foundation",
    dates: "Jun 2026 – Jul 2026",
    kind: "Internship",
    detail:
      "Built responsive websites using React and AI-assisted tools, and designed NGO website features in Figma.",
  },
] as const;

export const activities = [
  {
    name: "CodeXJava",
    place: "Haldia Institute of Technology, Haldia, West Bengal",
  },
  {
    name: "Navachar Code Fest 2026",
    place: "Meerut Institute of Technology, Meerut, Uttar Pradesh",
  },
  {
    name: "StatNova Minecraft AI Vibe Coding Challenge",
    place: "VIT Bhopal University",
  },
  {
    name: "Omnikon National Hackathon 2026",
    place: "Omnikon",
  },
  {
    name: "National Data Science Olympiad, Pinnacle Excellence Conclave 2026",
    place: "SRM Institute of Science and Technology, Kattankulathur, Chennai",
  },
] as const;

export const education = [
  {
    title: "B.E./B.Tech, Electronics and Instrumentation Control Engineering",
    place: "Government Engineering College, Ajmer",
    dates: "2025 – 2029",
    note: "In progress.",
  },
  {
    title: "Intermediate",
    place: "Saraswati Bal Vidhya Mandhir Senior Secondary School, Jaipur",
    dates: "2024 – 2025",
    note: "72.60%",
  },
  {
    title: "Class 10",
    place: "Saraswati Bal Vidhya Mandhir Senior Secondary School, Jaipur",
    dates: "2022 – 2023",
    note: "72.83%",
  },
] as const;

export const services = [
  {
    title: "Full stack web development",
    body: "React on the front, Node.js and Express on the server, and MongoDB when the product needs stored data.",
  },
  {
    title: "Frontend development",
    body: "Interfaces in React, Next.js, and Tailwind CSS, built to stay clear as the screen size changes.",
  },
  {
    title: "Backend development",
    body: "REST APIs, authentication, and server-side logic that the interface can rely on.",
  },
  {
    title: "Responsive website development",
    body: "Layouts that hold together on a phone, a tablet, and a desktop browser.",
  },
  {
    title: "Business website development",
    body: "Company sites that present the business, its products, and a straightforward way to navigate.",
  },
  {
    title: "UI/UX design",
    body: "Wireframes, prototypes, and interface design in Figma, plus logos and graphic design when the brand needs them.",
  },
  {
    title: "Web application development",
    body: "Tools with a real workflow behind the screen, from the API through to the dashboard.",
  },
] as const;

export const focus = [
  "Full stack development",
  "Frontend engineering",
  "Backend development",
  "UI/UX design",
  "Problem solving",
  "Real-world project work",
] as const;
