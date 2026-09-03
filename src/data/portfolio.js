// Portfolio Data - Centralized content management synchronized with resume & tech stack PDF

import aadityaPhoto from '../assets/aaditya-photo.jpg';

export const personalInfo = {
  name: "Aaditya Mahesh Lanjekar",
  shortName: "Aaditya",
  role: "Java Full Stack Developer",
  photoUrl: aadityaPhoto,
  tagline: "Building production-ready full-stack applications with Java, Spring Boot, React.js, MySQL & modern 3D UI experiences.",
  intro:
    "Java Full Stack Developer with hands-on experience in Spring Boot, React.js, REST APIs, and MySQL. Proven ability to build end-to-end web applications through real-world internships and academic projects. Seeking an entry-level Software Developer role to contribute to Agile development teams.",
  location: "Pune, Maharashtra, India",
  email: "aadityalanjekar.dev@gmail.com",
  phone: "+91 8767388842",
  github: "https://github.com/aadityalanjekar",
  linkedin: "https://linkedin.com/in/aadityalanjekar",
  hackerrank: "https://www.hackerrank.com/aadityalanjekar",
  resumeUrl: "/Aaditya_Lanjekar_SoftwareDeveloper.pdf",
  availableFor: "Full-time software engineering roles",
};

export const stats = [
  { value: "2+", label: "Years Coding", icon: "💻" },
  { value: "5+", label: "Projects Built", icon: "🚀" },
  { value: "3", label: "Internships", icon: "🏢" },
  { value: "7.5/10", label: "M.Sc SGPA", icon: "🎓" },
];

export const skills = [
  {
    category: "Languages",
    color: "violet",
    icon: "🧑‍💻",
    items: ["Java (Core & Advanced)", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3", "C", "C++"],
  },
  {
    category: "Frameworks & Libraries",
    color: "cyan",
    icon: "📦",
    items: ["Spring Boot 3.2", "Spring MVC", "Hibernate (ORM)", "React.js", "Servlets", "Axios", "GSAP", "Tailwind CSS"],
  },
  {
    category: "Backend & Security",
    color: "rose",
    icon: "⚙️",
    items: ["REST API Development", "Spring Security", "JWT Authentication", "JDBC", "OOP Principles", "Collections Framework", "Role-Based Access"],
  },
  {
    category: "Databases & Storage",
    color: "violet",
    icon: "🗄️",
    items: ["MySQL", "PostgreSQL", "Spring Data JPA"],
  },
  {
    category: "Tools & IDEs",
    color: "cyan",
    icon: "🔧",
    items: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "Postman", "Vite", "Figma"],
  },
  {
    category: "Concepts & Delivery",
    color: "rose",
    icon: "🧠",
    items: ["SDLC", "Agile Methodology", "Component-Based Architecture", "MVC Pattern", "3D & Motion UI", "Responsive UX"],
  },
];

export const skillLevels = [
  { name: "Java & Spring Boot 3.2", level: 88 },
  { name: "React.js & JavaScript (ES6+)", level: 85 },
  { name: "REST APIs & JWT Security", level: 90 },
  { name: "MySQL & Hibernate ORM", level: 82 },
  { name: "HTML5, CSS3 & Tailwind", level: 92 },
  { name: "Git, GitHub & Postman", level: 85 },
];

export const experience = [
  {
    role: "Front-End & React Developer Intern",
    company: "Seven Mentors Pvt. Ltd.",
    location: "Pune, India",
    duration: "Jun 2024 – Dec 2024",
    type: "Internship",
    color: "violet",
    responsibilities: [
      "Developed responsive, component-based web applications using React.js, HTML5, CSS3, and JavaScript (ES6+), improving UI consistency across multiple projects.",
      "Utilized React-Bootstrap and modern styling for mobile-first, cross-browser-compatible UI design.",
      "Optimized application performance by minimizing redundant renders through reusable component design and React hooks.",
      "Collaborated with cross-functional teams in an Agile environment to build clean, maintainable user interfaces.",
    ],
    tech: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "React-Bootstrap", "Git"],
  },
  {
    role: "Java Developer Intern",
    company: "CODEWAY",
    location: "Pune, India",
    duration: "Jan 2024 – Feb 2024",
    type: "Internship",
    color: "cyan",
    responsibilities: [
      "Strengthened Core Java proficiency in Object-Oriented Programming (OOP) principles — encapsulation, inheritance, polymorphism, and abstraction — through structured assignments and code reviews.",
      "Implemented Java Collections Framework (ArrayList, LinkedList, HashMap) for efficient in-memory data storage and retrieval.",
      "Participated in peer code reviews and optimized Java application execution logic.",
    ],
    tech: ["Core Java", "OOP Principles", "Collections Framework", "Algorithms"],
  },
  {
    role: "Software Engineer Intern",
    company: "HackerRank",
    location: "Remote",
    duration: "2024",
    type: "Internship",
    color: "rose",
    responsibilities: [
      "Solved complex data structure and algorithmic challenges on HackerRank platform.",
      "Demonstrated problem-solving capabilities in core Java and software engineering principles.",
    ],
    tech: ["Java", "Data Structures", "Algorithms", "Problem Solving"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Organic Fruit Store",
    subtitle: "Full-Stack E-Commerce Platform",
    year: "2026",
    featured: true,
    category: "fullstack",
    description:
      "Production-ready full stack e-commerce platform built with Spring Boot 3.2 (Java 17) and React.js. Features JWT authentication with role-based access control (User/Admin) secured via Spring Security, 5 REST controllers (Auth, Fruit, Cart, Order, Admin), complete shopping cart, order workflows, and an admin management dashboard.",
    longDescription:
      "Built a production-ready full stack e-commerce platform using Spring Boot 3.2 (Java 17) and React.js, featuring JWT-based authentication with role-based access control (User/Admin) secured via Spring Security. Designed and implemented RESTful APIs across 5 controllers (Auth, Fruit, Cart, Order, Admin) using Spring Boot, Spring Data JPA/Hibernate, and MySQL. Implemented complete shopping cart and order management workflows including add/update/remove/clear cart, place order, order history, and an admin panel for fruit inventory and order status management; configured CORS for React frontend integration.",
    tech: ["Java 17", "Spring Boot 3.2", "React.js", "MySQL", "Spring Security", "JWT", "Spring Data JPA/Hibernate", "REST APIs"],
    features: [
      "JWT Authentication & Spring Security",
      "Role-Based Access Control (User / Admin)",
      "5 REST Controllers (Auth, Fruit, Cart, Order, Admin)",
      "Shopping Cart & Checkout Workflows",
      "Order History & Order Status Tracking",
      "Admin Panel for Fruit Inventory Management",
      "CORS Configured React Frontend Integration",
    ],
    github: "https://github.com/aadityalanjekar/Fruit-store_Organic",
    demo: "https://fruitstore-vert.vercel.app/",
    color: "violet",
    gradient: "from-violet-500/20 to-purple-500/20",
    badge: "Featured Production App",
  },
  {
    id: 2,
    title: "Cloth Store",
    subtitle: "React.js E-Commerce Web Application",
    year: "2025",
    featured: false,
    category: "frontend",
    description:
      "Fully responsive e-commerce product listing application built using React.js with component-based architecture. Integrated REST API calls via Axios for dynamic product data rendering, loading states, error handling, and Slick Slider for interactive product carousels.",
    tech: ["React.js", "JavaScript (ES6+)", "Axios", "Slick Slider", "CSS3", "REST API"],
    features: [
      "Component-Based Architecture",
      "Dynamic REST API Data Rendering via Axios",
      "Slick Slider Product Carousels",
      "Loading States & Error Handling",
      "Mobile-First Responsive UX",
    ],
    github: "https://github.com/aadityalanjekar",
    demo: "#",
    color: "cyan",
    gradient: "from-cyan-500/20 to-blue-500/20",
    badge: "React E-Commerce",
  },
  {
    id: 3,
    title: "SplitWise Clone",
    subtitle: "Expense Management & Splitting App",
    year: "2025",
    featured: false,
    category: "frontend",
    description:
      "Interactive expense-sharing application inspired by SplitWise. Allows users to split group bills, calculate net balances, track shared spending, and view dynamic dashboard analytics.",
    tech: ["React.js", "JavaScript (ES6+)", "CSS3", "Context API", "Local Storage"],
    features: [
      "Expense Tracking & Group Management",
      "Automated Shared Expense Splitting",
      "Net Balance Calculation",
      "Dashboard Visual Analytics",
      "Responsive Interactive UI",
    ],
    github: "https://github.com/aadityalanjekar/SPILTWISE_-React-",
    demo: "https://expense-spilter.vercel.app/",
    color: "violet",
    gradient: "from-purple-500/20 to-indigo-500/20",
    badge: "Live App",
  },
  {
    id: 4,
    title: "GYMSO Fitness",
    subtitle: "Fitness Landing Page",
    year: "2024",
    featured: false,
    category: "frontend",
    description:
      "Modern responsive fitness website with membership tier cards, trainer profiles, class schedule tables, and a working contact form. Built with clean HTML5, CSS3, and JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Fitness Landing Page Design",
      "Membership Tier Plans",
      "Trainer Profiles & Schedules",
      "Contact Form & Smooth Scroll Navigation",
    ],
    github: "https://github.com/aadityalanjekar/gymso-fitness",
    demo: "https://gymso-fitness-alpha.vercel.app/",
    color: "rose",
    gradient: "from-rose-500/20 to-orange-500/20",
    badge: "Landing Page",
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
];

export const education = [
  {
    degree: "M.Sc. Computer Applications",
    institution: "Suryadatta College of Management Information Research & Technology, Pune",
    duration: "Aug 2024 – Jun 2026",
    sgpa: "7.5 / 10 (First Year)",
    status: "Currently Pursuing",
    color: "violet",
    icon: "🎓",
    highlights: [
      "Advanced Full-Stack Development",
      "Enterprise Java Architectures",
      "Database Systems & Web Security",
    ],
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "Nowrosjee Wadia College, Pune",
    duration: "Sep 2021 – Jun 2024",
    sgpa: "6.98 / 10",
    status: "Completed",
    color: "cyan",
    icon: "📚",
    highlights: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering & Web Design",
    ],
  },
];

export const certifications = [
  {
    title: "Java Backend Development",
    issuer: "Seven Mentors Pvt. Ltd.",
    duration: "Jul 2023 – Mar 2024",
    color: "violet",
    icon: "☕",
    skills: ["Core Java", "Spring Boot", "REST APIs", "Hibernate ORM", "MySQL"],
  },
  {
    title: "Front-End Web Development",
    issuer: "Seven Mentors Pvt. Ltd.",
    duration: "Jun 2024 – Dec 2024",
    color: "cyan",
    icon: "⚛️",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "React-Bootstrap"],
  },
];

export const techDesignCategories = [
  {
    category: "Frontend Development",
    icon: "⚛️",
    color: "violet",
    items: [
      { name: "React.js", desc: "Component-based UI architecture and interactive portfolio sections." },
      { name: "JavaScript / ES6+", desc: "Application logic, asynchronous handling, and maintainable structure." },
      { name: "HTML5 & CSS3", desc: "Semantic structure, responsive layouts, and polished visual styling." },
      { name: "Tailwind CSS", desc: "Fast, consistent, responsive UI development and design-system styling." },
    ],
  },
  {
    category: "Motion & Interaction",
    icon: "✨",
    color: "cyan",
    items: [
      { name: "GSAP", desc: "Smooth, cinematic scroll animations, transitions, and interactive motion." },
      { name: "Scroll-driven Animation", desc: "Interactive storytelling that responds naturally to user scrolling." },
      { name: "Micro-interactions", desc: "Subtle motion details that make the interface feel refined and responsive." },
    ],
  },
  {
    category: "3D & Immersive Design",
    icon: "🧊",
    color: "rose",
    items: [
      { name: "3D Visual Design", desc: "Large-scale immersive hero visuals designed to create an immediate premium impression." },
      { name: "360° Interactive Presentation", desc: "A complete rotational visual experience integrated into the hero photo card." },
      { name: "Depth & Perspective", desc: "Layered composition and perspective-based motion for a dimensional interface." },
    ],
  },
  {
    category: "UI / UX & Performance",
    icon: "🎨",
    color: "violet",
    items: [
      { name: "Figma & Design Systems", desc: "Interface planning, visual systems, modern typography, and responsive UX." },
      { name: "Modern Architecture", desc: "Built for fast rendering, optimized bundles, and smooth 60fps interaction." },
      { name: "Production Delivery", desc: "Clean code structure, modular components, and ready for cloud deployment." },
    ],
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "tech-matrix", label: "Tech Stack" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
