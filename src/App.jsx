import { FaHtml5, FaCss3Alt, FaLinkedin, FaGithub, FaInstagram, FaPhoneAlt, FaGraduationCap,  FaGitAlt, FaNodeJs } from "react-icons/fa";
import { TbBrandJavascript, TbBrandTypescript, TbBrandFramerMotion } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { SiNestjs, SiPostgresql, SiTailwindcss, SiRedux, SiAxios, SiNetlify, SiRender, SiCloudinary } from "react-icons/si";
import { IoIosMail, IoMdDownload, IoMdMail } from "react-icons/io";
import { FaLocationDot, FaRegEye, FaLaptopCode as FaLaptop, FaSun, FaMoon } from "react-icons/fa6";
import {  FaCode, FaRocket, FaLaptopCode, FaChevronDown } from "react-icons/fa";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import emailjs from "emailjs-com";
import { GrHeroku } from "react-icons/gr";
import { VscAzure } from "react-icons/vsc";
// import { SiNeon } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import {
  SiJsonwebtokens,
  SiGoogle
} from "react-icons/si";
import {
  SiScikitlearn,
  SiPython,
  SiFastapi
} from "react-icons/si";

import {
  SiEthereum,
  SiSolidity
} from "react-icons/si";

import {
  SiStripe
} from "react-icons/si";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });


  const timeline = [
  {
    title: "Education",
    icon: <FaGraduationCap />,
    content: (
      <>
        <h5 className="font-semibold">BS Software Engineering</h5>
        <p className="text-sm opacity-80">Iqra University</p>
        <p className="text-xs opacity-60">2023 — Present</p>
      </>
    ),
  },

  {
    title: "Core Technologies",
    icon: <FaLaptopCode />,
    technologies: [
      { name: "React", icon: <GrReactjs /> },
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "TypeScript", icon: <TbBrandTypescript /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "JavaScript", icon: <TbBrandJavascript /> },
      { name: "Motion", icon: <TbBrandFramerMotion /> },
    ],
  },

  {
    title: "Featured Project",
    icon: <FaRocket />,
    content: (
      <>
        <h5 className="font-semibold">
          Autonomous Degree Attestation System
        </h5>

        <p className="text-sm opacity-80 mt-2">
          OCR Verification • Ethereum Smart Contracts • SHA-256 • QR Codes • Immutable
          • PDF Certificates • Stripe • Cloudinary • Google OAuth • RBAC
        </p>
      </>
    ),
  },
];

  const MyProjects = [
    {
      img: "/degree.png",
      title: "Autonomous Degree Attestation System",
      desc: "Automated academic degree attestation using AI-powered OCR, blockchain verification and SHA-256 hashing. Students upload transcripts, pay processing fees via Stripe, and receive blockchain-backed certificates that can be verified through QR-code scanning or transaction hash lookup.",
      link: "https://degree-attestation.netlify.app/",
      source: {
        frontend: "https://github.com/smshah121/degree-attestation-system-frontend",
        backend: "https://github.com/smshah121/degree-attestation-system-backend",
        SmartContract: "https://github.com/smshah121/degree-attestation-smart_contract",
      },
      tech: ["React","Tailwind","Redux", "Nest","Postgres", "JWT","GoogleOAuth", "Stripe","Ethereum","Solidity"   ]
    },
    {
      img: "/fraud.png",
      title: "AI-Powered Credit Card Fraud Detection System",
      desc: "Developed a full-stack fraud detection system using React, NestJS and FastAPI. Transaction data is transformed into ML-ready feature vectors and evaluated by a Logistic Regression model trained on the Kaggle Credit Card Fraud dataset (284K+ transactions). Displays fraud prediction, confidence score and stores transaction history.",
      link: "https://ai-fraud-detections.netlify.app/",
      source: {
        frontend: "https://github.com/smshah121/fraud-detection-frontend",
        backend: "https://github.com/smshah121/fraud-detection-backend",
        MLCode: "https://github.com/smshah121/fraud-detection-ml-api"
      },
      tech: ["React","Tailwind","Redux", "Nest", "Postgres","Python","FastAPI",  ]
    },
    {
      img: "/lms2.png",
      title: "Learning Management System",
      desc: "Developed a role-based LMS utilizing NestJS for secure, token-based authentication (JWT) and PostgreSQL. Features include an Instructor dashboard for course CRUD and a student portal for secure enrollment and lecture access.",
      link: "https://learning-management-system-app1.netlify.app/",
      source: {
        frontend: "https://github.com/smshah121/Learning-Management-System-Frontend",
        backend: "https://github.com/smshah121/Learning-Management-System-Backend",
      },
      tech: ["React","Tailwind","Motion", "Redux", "Nest","JWT", "Postgres"  ]
    },
    {
      img: "/pricetag.png",
      title: "E-Commerce Platform",
      desc: "A full-stack role-based e-commerce ecosystem with secure authentication. Customers browse products, manage carts, view order history, and execute payments seamlessly via Stripe. Admins handle product catalogs, image uploads, and order flows.",
      link: "https://pricetag-tech.netlify.app/",
      source: {
        frontend: "https://github.com/smshah121/E-Commerce-Web-App-Frontend",
        backend: "https://github.com/smshah121/E-Commerce-Web-App-Backend",
      },
      tech: ["React","Tailwind","Redux", "Motion", "Nest", "Postgres","JWT","Stripe",  ]
    },
    
    {
      img: "/pixora.png",
      title: "Pixora Media Collection",
      desc: "Media management platform where users organize photos, videos and GIFs into private collections using JWT authentication, Google OAuth 2.0 login and role-protected routes.",
      link: "https://pixora-media.netlify.app/",
      source: {
        frontend: "https://github.com/smshah121/pixora-frontend",
        backend: "https://github.com/smshah121/pixora-backend",
      },
      tech: ["React", "Tailwind","Redux","Nest","JWT", "Postgres","GoogleOAuth",  ]
    },
    
    
    {
      img: "/quotes.png",
      title: "QuoteNest",
      desc: "Quote management application supporting CRUD operations, Google OAuth 2.0 authentication, protected routes and personalized user dashboards.",
      link: "https://quotenest-quotes.netlify.app/",
      source: {
        frontend: "https://github.com/smshah121/quotes-frontend",
        backend: "https://github.com/smshah121/Quotes-Management-System-Backend",
      },
      tech: ["React","Tailwind","Redux",  "Nest", "Postgres","JWT","GoogleOAuth", ]
    },
    {
      img: "/tictactoe.png",
      title: "AI-Powered Tic-Tac-Toe Game",
      desc: "Developed an AI-powered Tic Tac Toe game in React featuring an unbeatable opponent using the Minimax algorithm. The AI evaluates all possible game states in real time to select the optimal move, demonstrating concepts of game theory, recursion, and state management.",
      link: "https://tictac-toe-ai.netlify.app/",
      source: {
        frontend: "https://github.com/smshah121/tic-tac-toe-ai",
      },
      tech: ["React", "Tailwind"]
    }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 260, damping: 20 } 
    }
  };

  // Safe Hex-to-RGB conversion helper to safely power the drop-shadow hover rings
  const hexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const fullHex = hex?.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b) || "#6366f1";
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : "99, 102, 241";
  };
  useEffect(() => {
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const BackendTech = [
    { name: "NestJS", icon: <SiNestjs size={32} />, color: "#E0234E" },
    { name: "TypeScript", icon: <TbBrandTypescript size={32} />, color: "#3178C6" },
    { name: "Node.js", icon: <FaNodeJs size={32} />, color: "#339933" },
    { name: "PostgreSQL", icon: <SiPostgresql size={32} />, color: "#4169E1" }
  ];

  const FrontendTech = [
    { name: "HTML5", icon: <FaHtml5 size={32} />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt size={32} />, color: "#1572B6" },
    { name: "JavaScript", icon: <TbBrandJavascript size={32} />, color: "#F7DF1E" },
    { name: "ReactJS", icon: <GrReactjs size={32} />, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={32} />, color: "#38BDF8" },
    { name: "Framer Motion", icon: <TbBrandFramerMotion size={32} />, color: "#E94E44" },
    { name: "Redux Toolkit", icon: <SiRedux size={32} />, color: "#764ABC" },
    { name: "Axios", icon: <SiAxios size={32} />, color: "#A5B4FC" }
  ];

  const Tools = [
    { name: "Netlify", icon: <SiNetlify size={32} />, color: "#00C7B7" },
    { name: "Render", icon: <SiRender size={32} />, color: "#46E3B7" },
    { name: "Git", icon: <FaGitAlt size={32} />, color: "#F1502F" },
    { name: "Cloudinary", icon: <SiCloudinary size={32} />, color: "#3448C5" },
    { name: "Heroku", icon: <GrHeroku size={32} />, color: "#430098" },
    { name: "Azure", icon: <VscAzure size={32} />, color: "#0078D4" },

    { name: "Vercel", icon: <IoLogoVercel size={32} />, color: "#000000" },
    {
    name: "Neon",
    icon: (
      <img
        src="/neon-logomark-light-color.png"
        alt="Neon"
        className="w-8 h-8 object-contain"
      />
    ),
    color: "#00E699",
  },
  ];
  

  const TechIcons = {
    React: <GrReactjs className="text-[#61DAFB]" title="React" />,
    Nest: <SiNestjs className="text-[#E0234E]" title="Nest" />,
    Tailwind: <SiTailwindcss className="text-[#38BDF8]" title="Tailwind" />,
    Postgres: <SiPostgresql className="text-[#4169E1]" title="Postgres" />,
    Redux: <SiRedux className="text-[#764ABC]" title="Redux" />,
    Motion: <TbBrandFramerMotion className="text-[#E94E44]" title="Framer Motion" />,
    Axios: <SiAxios className="text-indigo-400" title="Axios" />,
    JWT: <SiJsonwebtokens className="text-[#000]" title="JWT" />,
    GoogleOAuth: <SiGoogle className="text-[#4285F4]" title="Google OAuth" />,
    Stripe: <SiStripe className="text-[#635BFF]" title="Stripe" />,
    Ethereum: <SiEthereum className="text-[#627EEA]" title="Ethereum" />,
    Solidity: <SiSolidity className="text-[#363636]" title="Solidity" />,
    Python: <SiPython className="text-[#3776AB]" title="Python" />,
    ScikitLearn: <SiScikitlearn className="text-[#F7931E]" title="Scikit-Learn" />,
    FastAPI: <SiFastapi className="text-[#009688]" title="FastAPI" />

  };


  // const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_6ew2jco", "template_8nw4mdt", e.target, "-lQ92GZ3aOZyq22up")
      .then(() => {
        alert("✅ Message sent successfully!");
        e.target.reset();
      }, () => {
        alert("❌ Failed to send, please try again.");
      });
  };

  return (
    <div className={`min-h-screen font-sans antialiased overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-300 ${
      darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
    }`}>
      
      {/* Floating Centered Navigation Header Bar */}
      <header className="fixed top-0 left-0 w-full flex justify-center py-4 px-6 z-50 pointer-events-none">
        <div className={`flex items-center gap-4 px-3 py-1.5 rounded-full border pointer-events-auto transition-all duration-300 shadow-xl ${
          scrolled 
            ? darkMode ? "bg-slate-900/80 border-white/10 backdrop-blur-md" : "bg-white/80 border-slate-200 backdrop-blur-md"
            : darkMode ? "bg-slate-900/40 border-white/5 backdrop-blur-sm" : "bg-white/40 border-slate-200/60 backdrop-blur-sm"
        }`}>
          <ul className="hidden md:flex items-center gap-1">
            {NavItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={`px-4.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
                  activeSection === item.id 
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25" 
                    : darkMode ? "text-slate-400 hover:text-slate-100" : "text-slate-500 hover:text-slate-900"
                }`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden px-3 py-1 text-sm font-bold tracking-widest uppercase focus:outline-none transition-colors text-indigo-500">
            {mobileMenuOpen ? "CLOSE" : "MENU"}
          </button>

          <div className={`w-[1px] h-5 ${darkMode ? "bg-white/10" : "bg-slate-200"}`} />

          <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full transition-all border ${
            darkMode ? "bg-slate-800 border-white/5 text-amber-400 hover:bg-slate-700" : "bg-slate-100 border-slate-200 text-indigo-600 hover:bg-slate-200"
          }`}>
            {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer Layout Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className={`fixed inset-x-0 top-20 mx-6 p-6 rounded-2xl border backdrop-blur-xl z-40 flex flex-col gap-4 shadow-2xl ${
            darkMode ? "bg-slate-900/95 border-white/10" : "bg-white/95 border-slate-200"
          }`}>
            {NavItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setMobileMenuOpen(false)} className={`text-base font-bold tracking-wide uppercase pb-1 border-b ${
                activeSection === item.id 
                  ? "text-indigo-500 border-indigo-500" 
                  : darkMode ? "text-slate-300 border-white/5" : "text-slate-600 border-slate-100"
              }`}>
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION - COMPACT PREVENTING VERTICAL SCROLL OVERFLOW */}
      <section id="hero" className={`relative flex flex-col justify-center items-center text-center h-screen w-full px-4 overflow-hidden pt-24 pb-6 ${
        darkMode ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950" : "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/50 via-slate-50 to-slate-50"
      }`}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
          <span className={`text-xs font-mono tracking-widest mb-4 uppercase px-4 py-1 rounded-full border transition-all ${
            darkMode ? "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" : "text-indigo-600 bg-indigo-500/5 border-indigo-500/20"
          }`}>
            Available for Opportunities
          </span>
          
          <h1 className={`font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none w-full max-w-none mx-auto whitespace-nowrap ${
            darkMode ? "text-white" : "text-slate-900"
          }`}>
            Syed Momin <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-[0_0_30px_rgba(129,140,248,0.15)]">Ali Shah</span>
          </h1>

          <div className={`text-base sm:text-xl md:text-2xl font-semibold mt-4 h-8 flex items-center justify-center w-full ${
            darkMode ? "text-slate-300" : "text-slate-700"
          }`}>
            <Typewriter options={{ strings: ["Full Stack Developer", "Software Engineer", "Backend Developer"], autoStart: true, loop: true, delay: 60, deleteSpeed: 40 }} />
          </div>

          <p className={`mt-3 text-sm sm:text-base md:text-md max-w-xl leading-relaxed mx-auto px-2 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Final-Year <span className="text-indigo-500 font-semibold">Software Engineering</span> student and <span className="text-indigo-500 font-semibold">Full Stack Developer</span> specialized in building performance-optimized cloud architectures with <span className="text-indigo-500 font-semibold">ReactJS</span> and <span className="text-indigo-500 font-semibold">NestJS</span>.
          </p>

          <div className="flex gap-4 mt-6 flex-wrap justify-center items-center">
            <a href="/Syed_Momin_Ali_Shah.pdf" target="_blank" rel="noopener noreferrer" download="SyedMominAliShah_Resume.pdf" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-md shadow-indigo-600/20 transition-all transform hover:-translate-y-0.5 text-xs sm:text-sm">
              <IoMdDownload size={16} /> Download CV
            </a>
            <a href="#project" className={`px-5 py-2.5 rounded-xl border font-medium transition-all transform hover:-translate-y-0.5 text-xs sm:text-sm ${
              darkMode ? "bg-white/5 hover:bg-white/10 border-white/10 text-slate-200" : "bg-slate-900/5 hover:bg-slate-900/10 border-slate-900/10 text-slate-800"
            }`}>
              View Projects
            </a>
          </div>

          <div className={`flex justify-center mt-8 gap-5 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            <a href="https://www.linkedin.com/in/smshah121" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors transform hover:scale-110 duration-200"><FaLinkedin size={22} /></a>
            <a href="https://github.com/smshah121" target="_blank" rel="noopener noreferrer" className={`transition-colors transform hover:scale-110 duration-200 ${darkMode ? "hover:text-white" : "hover:text-black"}`}><FaGithub size={22} /></a>
            <a href="https://www.instagram.com/__smshah__" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors transform hover:scale-110 duration-200"><FaInstagram size={22} /></a>
            <a href="mailto:sm.shah2003@hotmail.com" className="hover:text-blue-500 transition-colors transform hover:scale-110 duration-200"><PiMicrosoftOutlookLogo size={22} /></a>
            <a href="mailto:smshah.2003@gmail.com" className="hover:text-red-500 transition-colors transform hover:scale-110 duration-200"><IoMdMail size={22} /></a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION - SELECTIVE & PROFESSIONAL REFORMATTING */}
      <section id="about" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          <motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className={`h-full p-8 rounded-2xl border shadow-xl flex flex-col justify-center ${
    darkMode ? "bg-slate-900/30 border-white/5" : "bg-white border-slate-200/60"
  }`}
>
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 tracking-tight ${darkMode ? "text-white" : "text-slate-950"}`}>Executive Summary</h3>
            <div className={`space-y-4 text-sm md:text-base leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              <p className="text-sm text-slate-400">I am a <span className="font-semibold text-indigo-500">Full Stack Developer</span> and a final-year <span className="font-semibold text-indigo-500">Software Engineering</span> student at Iqra University. I build scalable web applications with a focus on clean architecture, maintainable code, and efficient client–server communication.</p>
              <p className="text-sm text-slate-400">My experience includes backend development with NestJS, where I design RESTful APIs, implement authentication and authorization, and follow layered architecture practices. I work with PostgreSQL for relational database design, relationship management, and query optimization.</p>
              <p className="text-sm text-slate-400">On the frontend, I use ReactJS, Tailwind CSS and Redux Toolkit to build responsive, component-based user interfaces with efficient state management and smooth integration with backend services.</p>
            </div>

          </motion.div>

         <div
  className={`relative pl-8 border-l-2 flex flex-col gap-10 ${
    darkMode ? "border-indigo-500/20" : "border-indigo-500/30"
  }`}
>
  {timeline.map((node, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: i * 0.15 }}
    className="relative min-h-[140px] pl-4 group"
  >
    {/* Animated Node Circle & Glow Effect */}
    <div className="absolute -left-[51px] top-0.5 z-10 flex items-center justify-center">
      {/* Dynamic Pulse Ring */}
      <span className="absolute inline-flex h-9 w-9 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-20 group-hover:animate-ping transition-opacity duration-300" />
      
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center border shadow-sm transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6 ${
          darkMode
            ? "bg-slate-950 border-slate-700 text-indigo-400 group-hover:border-indigo-400 group-hover:shadow-indigo-500/20"
            : "bg-white border-slate-200 text-indigo-600 group-hover:border-indigo-500 group-hover:shadow-indigo-500/10"
        }`}
      >
        <span className="text-sm transition-transform duration-300 group-hover:scale-110">
          {node.icon}
        </span>
      </div>
    </div>

    {/* Title with Subtle Hover Color Shift */}
    <h4
      className={`font-bold text-base md:text-lg mb-3 tracking-tight transition-colors duration-300 ${
        darkMode ? "text-slate-100 group-hover:text-indigo-400" : "text-slate-900 group-hover:text-indigo-600"
      }`}
    >
      {node.title}
    </h4>

    {/* Content / Highly Interactive Badges */}
    {node.technologies ? (
      <div className="flex flex-wrap gap-2.5">
        {node.technologies.map((tech) => (
          <motion.span
            key={tech.name}
            whileHover={{ 
              scale: 1.08, 
              y: -2,
              shadow: darkMode ? "0 4px 12px rgba(99, 102, 241, 0.2)" : "0 4px 12px rgba(99, 102, 241, 0.15)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium border cursor-pointer select-none transition-colors duration-200 ${
              darkMode
                ? "bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800 hover:border-indigo-500/50 hover:text-white"
                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-indigo-500/40 hover:text-indigo-950"
            }`}
          >
            <span className="text-sm opacity-90 transition-transform duration-200 group-hover:scale-110">
              {tech.icon}
            </span>
            {tech.name}
          </motion.span>
        ))}
      </div>
    ) : (
      <div
        className={`text-sm md:text-base leading-relaxed max-w-2xl transition-colors duration-300 ${
          darkMode ? "text-slate-400 group-hover:text-slate-300" : "text-slate-600 group-hover:text-slate-700"
        }`}
      >
        {node.content}
      </div>
    )}
  </motion.div>
))}
</div>

        </div>
      </section>

      {/* TECH STACK SECTION */}
     <section 
      id="skills" 
      className={`py-24 border-y relative overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-slate-950/40 border-white/[0.05]" : "bg-slate-50 border-slate-200/60"
      }`}
    >
      {/* Structural Ambient Background Lighting */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full filter blur-[140px] opacity-[0.06] pointer-events-none ${darkMode ? "bg-indigo-500" : "bg-indigo-400"}`} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Modern Clean Header Design */}
        <div className="text-center mb-10">
          
          <h2 className={`text-3xl md:text-5xl font-black tracking-tight ${darkMode ? "text-white" : "text-slate-950"}`}>
            Tech Stack
          </h2>
        </div>

        {[
          { cat: "Frontend Engineering", stack: FrontendTech },
          { cat: "Backend & Database Clusters", stack: BackendTech },
          { cat: "Developer Operations & Tools", stack: Tools }
        ].map((block, bIdx) => (
          <div key={bIdx} className="mb-14 last:mb-0">
            
            {/* Elegant Section Dividing Category Tag */}
            <div className="flex items-center gap-4 mb-6">
              <h4 className={`text-xs tracking-wider font-mono font-bold uppercase whitespace-nowrap ${
                darkMode ? "text-indigo-400/90" : "text-indigo-600/90"
              }`}>
                {block.cat}
              </h4>
              <div className={`w-full h-[1px] ${darkMode ? "bg-white/[0.06]" : "bg-slate-200"}`} />
            </div>
            
            {/* Staggered Grid Container */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {block.stack.map((tech, idx) => {
                const rgbValue = hexToRgb(tech.color);
                
                return (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -4, 
                      scale: 1.01,
                      borderColor: `rgba(${rgbValue}, 0.4)`,
                      boxShadow: darkMode ? `0 10px 25px -5px rgba(${rgbValue}, 0.15)` : `0 10px 20px -5px rgba(${rgbValue}, 0.1)`
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-3.5 border p-4 rounded-xl backdrop-blur-sm transition-all duration-300 relative group cursor-default ${
                      darkMode 
                        ? "bg-slate-900/40 border-white/[0.04] hover:bg-slate-900/80" 
                        : "bg-white border-slate-200/70 hover:bg-slate-50/50"
                    }`}
                  >
                    {/* Adaptive, internal brand color overlay on card hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 rounded-xl pointer-events-none" 
                      style={{ backgroundColor: tech.color }} 
                    />
                    
                    {/* Animated Brand Icon */}
                    <div 
                      style={{ color: tech.color }} 
                      className="text-xl md:text-2xl opacity-75 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-[4deg]"
                    >
                      {tech.icon}
                    </div>
                    
                    {/* Tech Text label */}
                    <span className={`font-semibold text-xs md:text-sm tracking-tight transition-colors duration-300 ${
                      darkMode ? "text-slate-300 group-hover:text-white" : "text-slate-700 group-hover:text-slate-950"
                    }`}>
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        ))}
      </div>
    </section>

      {/* PROJECTS SECTION - PREMIUM CASING */}
    <section id="project" className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden will-change-transform">
      {/* Background Glow - Hidden completely on mobile to prevent VRAM overflow */}
      <div className={`absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-15 pointer-events-none hidden md:block filter blur-[150px] ${
        darkMode ? "bg-purple-600" : "bg-purple-200"
      }`} />

      <div className="text-center mb-16">
    
        <h2 className={`text-3xl md:text-5xl font-black tracking-tight ${darkMode ? "text-white" : "text-slate-950"}`}>
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MyProjects.map((project, index) => (
          <motion.div
            key={index}
           
            className={`group border rounded-2xl flex flex-col overflow-hidden transition-all duration-300 relative ${
              darkMode 
                ? "bg-gradient-to-b from-slate-900/60 to-slate-900/20 border-white/[0.05] hover:border-white/10 shadow-xl shadow-black/20" 
                : "bg-white border-slate-200/80 shadow-md shadow-slate-100/80 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300"
            }`}
          >
            {/* Image Wrapper */}
            <div className={`h-48 relative overflow-hidden border-b transition-colors duration-300 ${
              darkMode ? "bg-slate-950 border-white/[0.05]" : "bg-slate-50 border-slate-100"
            }`}>
              <img
                src={project.img}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out md:group-hover:scale-105"
                alt={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 mix-blend-multiply" />
            </div>

            {/* Project Details */}
            {/* Optimized for left alignment since justified paragraphs cost high layouts processing overhead on phone engines */}
            <div className="p-6 flex flex-col flex-grow relative">
              <h4 className={`font-bold text-xl mb-2.5 tracking-tight transition-colors ${
                darkMode ? "text-slate-100 group-hover:text-white" : "text-slate-900 group-hover:text-indigo-950"
              }`}>
                {project.title}
              </h4>

              <p className={`text-xs tracking-tight text-left mb-4 line-clamp-4 transition-colors ${
                darkMode ? "text-slate-400 group-hover:text-slate-300" : "text-slate-600 group-hover:text-slate-700"
              }`}>
                {project.desc}
              </p>

              {/* Minimal Tech Pill Row */}
              <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`text-[10px] font-medium px-2 py-1 rounded-lg border transition-all duration-300 ${
                      darkMode
                        ? "bg-slate-900/80 border-slate-800 text-slate-300 group-hover:border-slate-700"
                        : "bg-slate-50 border-slate-200/60 text-slate-600 group-hover:border-slate-300"
                    }`}
                  >
                    <span className="inline-flex items-center gap-1">
                      {TechIcons[tech] && <span className="opacity-80">{TechIcons[tech]}</span>}
                      {tech}
                    </span>
                  </span>
                ))}
              </div>

              {/* Action Buttons Footer Row */}
              <div className={`flex gap-3 items-center border-t pt-4 ${darkMode ? "border-white/[0.05]" : "border-slate-100"}`}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 text-xs font-bold transition-all shadow-md shadow-indigo-600/10 active:scale-95"
                >
                  <FaRegEye size={14} />
                  <span>Live Demo</span>
                </a>

                {/* Dropdown Container */}
                <div className="relative flex-grow">
                  <button
                    onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all duration-200 ${
                      darkMode
                        ? "bg-slate-900/60 hover:bg-slate-800 text-slate-300 border-white/[0.05] hover:border-white/10"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <FaGithub size={14} /> Code Base
                    </span>
                    <motion.span
                      animate={{ rotate: dropdownOpen === index ? 180 : 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <FaChevronDown size={10} className="opacity-70" />
                    </motion.span>
                  </button>

                  {/* Micro-animated Dropdown Menu */}
                  {/* Backdrop blur removed for mobile instances to protect GPU frames */}
                  <AnimatePresence>
                    {dropdownOpen === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.12 }}
                        className={`absolute left-0 bottom-full mb-2 w-full border rounded-xl shadow-2xl z-30 overflow-hidden ${
                          darkMode 
                            ? "bg-slate-950 border-white/10 md:backdrop-blur-lg md:bg-slate-950/95" 
                            : "bg-white border-slate-200 shadow-slate-300/40 md:backdrop-blur-lg md:bg-white/95"
                        }`}
                      >
                        {Object.entries(project.source || {}).map(([key, url]) => {
                          const readableLabel = key.replace(/([A-Z])/g, ' $1').trim();
                          return (
                            url && (
                              <a
                                key={key}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block px-4 py-2.5 text-xs font-semibold border-b last:border-none transition-colors ${
                                  darkMode
                                    ? "text-slate-300 hover:bg-white/[0.04] hover:text-white border-white/[0.05]"
                                    : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600 border-slate-100"
                                }`}
                              >
                                {readableLabel.charAt(0).toUpperCase() + readableLabel.slice(1)}
                              </a>
                            )
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>

      {/* CONTACT SECTION - HIGHLY PREMIUM TRANSITION FIELDS */}
      <section id="contact" className={`py-24 border-t ${darkMode ? "bg-slate-900/10 border-white/5" : "bg-slate-100/40 border-slate-200"}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <h3 className={`text-2xl md:text-4xl font-extrabold mb-4 tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>Let&apos;s Connect</h3>
              <p className={`text-xs md:text-sm leading-relaxed mb-8 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                 Feel free to reach out for internship opportunities, collaborations or software engineering roles.
              </p>

              <div className="space-y-3.5">
                <div className={`flex items-center gap-4 p-3 border rounded-xl shadow-sm transition-colors ${darkMode ? "bg-slate-900/30 border-white/5 hover:border-indigo-500/30" : "bg-white border-slate-200 hover:border-indigo-500/30"}`}>
                  <IoIosMail size={20} className="text-red-500" />
                  <span className={`text-xs md:text-sm font-semibold tracking-wide ${darkMode ? "text-slate-300" : "text-slate-700"}`}>smshah.2003@gmail.com</span>
                </div>
                <div className={`flex items-center gap-4 p-3 border rounded-xl shadow-sm transition-colors ${darkMode ? "bg-slate-900/30 border-white/5 hover:border-indigo-500/30" : "bg-white border-slate-200 hover:border-indigo-500/30"}`}>
                  <FaPhoneAlt size={14} className="text-blue-600 ml-0.5" />
                  <span className={`text-xs md:text-sm font-semibold tracking-wide ${darkMode ? "text-slate-300" : "text-slate-700"}`}>+92 304 2151667</span>
                </div>
                <div className={`flex items-center gap-4 p-3 border rounded-xl shadow-sm transition-colors ${darkMode ? "bg-slate-900/30 border-white/5 hover:border-indigo-500/30" : "bg-white border-slate-200 hover:border-indigo-500/30"}`}>
                  <FaLocationDot size={16} className="text-emerald-500 ml-0.5" />
                  <span className={`text-xs md:text-sm font-semibold tracking-wide ${darkMode ? "text-slate-300" : "text-slate-700"}`}>Karachi, Pakistan</span>
                </div>
              </div>
            </div>

            {/* HIGH END FORM ELEMENTS CONTAINER */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`border rounded-2xl p-6 md:p-8 shadow-xl border-t-4 border-t-indigo-600 ${
              darkMode ? "bg-slate-900/40 border-white/5" : "bg-white border-slate-200"
            }`}>
              <form onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className={`block text-[10px] font-mono font-bold uppercase tracking-widest mb-1.5 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>Name</label>
                  <input className={`w-full border rounded-xl p-3 text-xs md:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all ${
                    darkMode ? "bg-slate-950 border-white/10 text-white focus:border-indigo-500" : "bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600"
                  }`} type="text" name="name" placeholder="John Doe" required />
                </div>
                <div>
                  <label className={`block text-[10px] font-mono font-bold uppercase tracking-widest mb-1.5 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>Email</label>
                  <input className={`w-full border rounded-xl p-3 text-xs md:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all ${
                    darkMode ? "bg-slate-950 border-white/10 text-white focus:border-indigo-500" : "bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600"
                  }`} type="email" name="Email" placeholder="john@example.com" required />
                </div>
                <div>
                  <label className={`block text-[10px] font-mono font-bold uppercase tracking-widest mb-1.5 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>Subject</label>
                  <input className={`w-full border rounded-xl p-3 text-xs md:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all ${
                    darkMode ? "bg-slate-950 border-white/10 text-white focus:border-indigo-500" : "bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600"
                  }`} type="text" name="title" placeholder="Project Scope Pipeline" required />
                </div>
                <div>
                  <label className={`block text-[10px] font-mono font-bold uppercase tracking-widest mb-1.5 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>Message</label>
                  <textarea className={`w-full h-24 border rounded-xl p-3 text-xs md:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none ${
                    darkMode ? "bg-slate-950 border-white/10 text-white focus:border-indigo-500" : "bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600"
                  }`} name="message" placeholder="Provide system descriptors..." required />
                </div>
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md shadow-indigo-600/10 text-xs tracking-wider uppercase">
                  Send Message
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FOOTER SHELL */}
      <footer className={`border-t py-12 text-center text-xs tracking-wide ${darkMode ? "bg-slate-950 border-white/5 text-slate-500" : "bg-slate-50 border-slate-200 text-slate-400"}`}>
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.linkedin.com/in/smshah121" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors"><FaLinkedin size={20} /></a>
          <a href="https://github.com/smshah121" target="_blank" rel="noopener noreferrer" className={`transition-colors ${darkMode ? "hover:text-white" : "hover:text-black"}`}><FaGithub size={20} /></a>
          <a href="https://www.instagram.com/__smshah__" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors"><FaInstagram size={20} /></a>
        </div>
        <p className="font-semibold text-xs select-none">&copy; Syed Momin Ali Shah. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;