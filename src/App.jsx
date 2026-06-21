import { FaHtml5, FaCss3Alt, FaLinkedin, FaGithub, FaInstagram, FaPhoneAlt, FaGraduationCap,  FaGitAlt, FaNodeJs } from "react-icons/fa";
import { TbBrandJavascript, TbBrandTypescript, TbBrandFramerMotion } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { SiNestjs, SiPostgresql, SiTailwindcss, SiRedux, SiAxios, SiNetlify, SiRender, SiCloudinary } from "react-icons/si";
import { IoIosMail, IoMdDownload, IoMdMail } from "react-icons/io";
import { FaLocationDot, FaRegEye, FaLaptopCode as FaLaptop, FaSun, FaMoon } from "react-icons/fa6";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import emailjs from "emailjs-com";

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

  const MyProjects = [
    {
      img: "/lms2.png",
      title: "Learning Management System",
      desc: "Developed a role-based LMS utilizing NestJS for secure, token-based authentication (JWT) and PostgreSQL. Features include an Instructor dashboard for course CRUD and a student portal for secure enrollment and lecture access.",
      link: "https://learning-management-system-app1.netlify.app/",
      source: {
        frontend: "https://github.com/smshah121/Learning-Management-System-Frontend",
        backend: "https://github.com/smshah121/Learning-Management-System-Backend",
      },
      tech: ["React", "Nest", "Postgres", "Tailwind", "Redux", "Motion"]
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
      tech: ["React", "Nest", "Postgres", "Tailwind", "Redux", "Motion"]
    },
    {
      img: "/degree.png",
      title: "Degree Attestation System",
      desc: "This project is a next-generation web application designed to automate and secure the academic document verification pipeline. By integrating AI-driven OCR text analysis with Blockchain immutability, the system eliminates manual verification delays and prevents credential fraud. Students can securely upload transcripts, process processing fees via Stripe, and anchor their authenticated hashes onto a decentralized ledger for instant, tamper-proof third-party verification.",
      link: "",
      source: {
        frontend: "https://github.com/smshah121/degree-attestation-system-frontend",
        backend: "https://github.com/smshah121/degree-attestation-system-backend",
        SmartContract: "https://github.com/smshah121/degree-attestation-smart_contract",
      },
      tech: ["React", "Nest", "Postgres", "Tailwind", "Redux"]
    },
    {
      img: "/pixora.png",
      title: "Pixora Media Collection",
      desc: "Built a media collection platform where users can save photos, videos, and GIFs, organize them into custom collections, and view their saved items anytime. User data is kept private and secure through JWT authentication and password hashing, with Google OAuth 2.0 integration for seamless login and protected routes ensuring only authorized users can access their content.",
      link: "https://pixora-media.netlify.app/",
      source: {
        frontend: "https://github.com/smshah121/pixora-frontend",
        backend: "https://github.com/smshah121/pixora-backend",
      },
      tech: ["React", "Tailwind", "Postgres", "Nest", "Redux"]
    },
    {
      img: "/fraud.png",
      title: "AI-Powered Credit Card Fraud Detection System",
      desc: "Developed an AI-powered Credit Card Fraud Detection System using React.js, NestJS, Python, and PostgreSQL, where users can submit transaction details through a modern web interface, the NestJS backend performs feature engineering and data processing, and a Machine Learning model analyzes transaction patterns to detect fraudulent activities in real time. The system provides fraud predictions with confidence scores, stores transaction history in a PostgreSQL database, and includes reporting and analytics features to help monitor and prevent financial fraud effectively.",
      link: "",
      source: {
        frontend: "https://github.com/smshah121/fraud-detection-frontend",
        backend: "https://github.com/smshah121/fraud-detection-backend",
        MLCode: "https://github.com/smshah121/fraud-detection-ml-api"
      },
      tech: ["React", "Nest", "Postgres", "Tailwind", "Redux"]
    }
    ,
    {
      img: "/quotes.png",
      title: "QuoteNest",
      desc: "Full-Stack Quote Management System featuring seamless handling of text-based assets with deep CRUD capabilities. Leverages Google OAuth2 login mechanisms, secure private routing tables, and real-time state profiles.",
      link: "https://quotenest-quotes.netlify.app/",
      source: {
        frontend: "https://github.com/smshah121/quotes-frontend",
        backend: "https://github.com/smshah121/Quotes-Management-System-Backend",
      },
      tech: ["React", "Nest", "Postgres", "Tailwind", "Redux"]
    },
    {
      img: "/tictactoe.png",
      title: "AI-Powered Tic-Tac-Toe Game",
      desc: "An AI-powered Tic Tac Toe game built using React, featuring an intelligent opponent implemented with the Minimax algorithm. The application allows users to play against an unbeatable AI that evaluates all possible game states using a game tree search approach to determine optimal moves in real time. The system simulates human-like decision making by recursively analyzing future outcomes and selecting the best possible move based on maximizing AI advantage while minimizing the opponent’s score. Built with a clean and responsive React UI, the project demonstrates core concepts of artificial intelligence, game theory, recursion, and state management, making it a strong example of applying classical AI algorithms in modern web development.",
      link: "https://tictac-toe-ai.netlify.app/",
      source: {
        frontend: "https://github.com/smshah121/tic-tac-toe-ai",
      },
      tech: ["React", "Tailwind"]
    }
  ];

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
    { name: "Cloudinary", icon: <SiCloudinary size={32} />, color: "#3448C5" }
  ];

  const TechIcons = {
    React: <GrReactjs className="text-[#61DAFB]" title="React" />,
    Nest: <SiNestjs className="text-[#E0234E]" title="Nest" />,
    Tailwind: <SiTailwindcss className="text-[#38BDF8]" title="Tailwind" />,
    Postgres: <SiPostgresql className="text-[#4169E1]" title="Postgres" />,
    Redux: <SiRedux className="text-[#764ABC]" title="Redux" />,
    Motion: <TbBrandFramerMotion className="text-[#E94E44]" title="Framer Motion" />,
    Axios: <SiAxios className="text-indigo-400" title="Axios" />
  };

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
            <Typewriter options={{ strings: ["Full Stack Developer", "Software Engineer", "Tech Enthusiast"], autoStart: true, loop: true, delay: 60, deleteSpeed: 40 }} />
          </div>

          <p className={`mt-3 text-sm sm:text-base md:text-md max-w-xl leading-relaxed mx-auto px-2 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Final-Year <span className="text-indigo-500 font-semibold">Software Engineering</span> student and <span className="text-indigo-500 font-semibold">Full Stack Developer</span> specialized in building performance-optimized cloud architectures with <span className="text-indigo-500 font-semibold">ReactJS</span> and <span className="text-indigo-500 font-semibold">NestJS</span>.
          </p>

          <div className="flex gap-4 mt-6 flex-wrap justify-center items-center">
            <a href="/Resume10.pdf" target="_blank" rel="noopener noreferrer" download="SyedMominAliShah_Resume.pdf" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-md shadow-indigo-600/20 transition-all transform hover:-translate-y-0.5 text-xs sm:text-sm">
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
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={`p-8 rounded-2xl border shadow-xl ${
            darkMode ? "bg-slate-900/30 border-white/5" : "bg-white border-slate-200/60"
          }`}>
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 tracking-tight ${darkMode ? "text-white" : "text-slate-950"}`}>Executive Summary</h3>
            <div className={`space-y-4 text-sm md:text-base leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              <p className="text-sm text-slate-400">I am a <span className="font-semibold text-indigo-500">Full Stack Developer</span> and a final-year <span className="font-semibold text-indigo-500">Software Engineering</span>  student at Iqra University. I specialize in building scalable, production-oriented web applications with a strong emphasis on clean architecture, maintainable code structure, and efficient client–server communication. My development approach focuses on creating modular systems that are easy to extend, debug, and optimize for real-world use cases.</p>
              <p className="text-sm text-slate-400">My core experience includes backend development using NestJS, where I design and implement well-structured RESTful APIs, secure authentication and authorization flows, and layered architecture patterns that separate business logic from infrastructure concerns. I also work extensively with PostgreSQL, where I design relational schemas, manage database relationships, and optimize queries to ensure data integrity and performance in scalable applications.</p>
              <p className="text-sm text-slate-400">On the frontend side, I specialize in ReactJS and Redux Toolkit, building responsive and component-driven user interfaces that ensure smooth user experiences. I focus on efficient state management, reusable UI components, and seamless integration with backend services. My frontend development practice emphasizes performance, consistency, and maintainability across complex application workflows.</p>
            </div>
          </motion.div>

          <div className={`relative pl-6 border-l-2 space-y-8 ${darkMode ? "border-indigo-500/20" : "border-indigo-500/30"}`}>
            {[
  { 
    title: "Academic Background", 
    desc: "Iqra University — Final-Year Student, BS Software Engineering (2023–Present). Currently completing a Bachelor’s degree in Software Engineering with a focus on practical software development, system design, and modern web technologies. Actively applying academic knowledge to real-world projects alongside coursework.", 
    icon: <FaGraduationCap /> 
  },
  { 
    title: "Technical Specializations", 
    desc: "Advanced Full Stack development with a focus on building scalable backend systems using NestJS with PostgreSQL for relational database design and management, along with TypeScript for type-safe application development. On the frontend, proficient in ReactJS with Redux Toolkit for state management and Tailwind CSS for building responsive and modern UI interfaces.", 
    icon: <FaLaptop /> 
  },
 { 
  title: "System Implementations", 
  desc: "Developed multiple Full-Stack web applications demonstrating end-to-end system design and implementation skills. These include a Learning Management System with secure role-based authentication and authorization, a PriceTag E-Commerce platform with Stripe payment integration, QuoteNest featuring Google OAuth login for authentication, and Pixora, a private media-sharing platform with secure galleries and protected data routes.", 
  icon: <CiGlobe /> 
},
].map((node, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="relative group">
                <div className={`absolute -left-10 top-0 w-8 h-8 rounded-full border flex items-center justify-center text-indigo-500 transition-all ${
                  darkMode ? "bg-slate-900 border-white/10 group-hover:border-indigo-400" : "bg-white border-slate-200 group-hover:border-indigo-600"
                }`}>
                  {node.icon}
                </div>
                <h4 className={`text-md font-bold mb-1 transition-colors ${darkMode ? "text-white group-hover:text-indigo-400" : "text-slate-900 group-hover:text-indigo-600"}`}>{node.title}</h4>
                <p className={`text-xs md:text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{node.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section id="skills" className={`py-20 border-y ${darkMode ? "bg-slate-900/20 border-white/5" : "bg-slate-100/50 border-slate-200"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className={`text-2xl md:text-4xl font-extrabold mb-16 tracking-tight ${darkMode ? "text-white" : "text-slate-950"}`}>Tech Stack</h1>

          {[
            { cat: "Frontend Engineering", stack: FrontendTech },
            { cat: "Backend & Database Clusters", stack: BackendTech },
            { cat: "Developer Operations & Tools", stack: Tools }
          ].map((block, bIdx) => (
            <div key={bIdx} className="mb-12 last:mb-0 text-left">
              <h4 className={`text-xs tracking-widest font-mono font-bold uppercase mb-4 border-b pb-2 ${darkMode ? "text-slate-400 border-white/5" : "text-slate-500 border-slate-200"}`}>{block.cat}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {block.stack.map((tech, idx) => (
                  <motion.div key={idx} whileHover={{ y: -3, backgroundColor: darkMode ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.01)" }} className={`flex items-center gap-3.5 border p-3.5 rounded-xl shadow-sm transition-all ${
                    darkMode ? "bg-slate-900/40 border-white/5" : "bg-white border-slate-200/60"
                  }`}>
                    <div style={{ color: tech.color }} className="opacity-90">
                      {tech.icon}
                    </div>
                    <span className={`font-semibold text-xs md:text-sm ${darkMode ? "text-slate-200" : "text-slate-800"}`}>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION - PREMIUM CASING */}
      <section id="project" className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className={`text-2xl md:text-4xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-950"}`}>Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MyProjects.map((project, index) => (
            <motion.div key={index} whileHover={{ y: -6 }} className={`border rounded-2xl flex flex-col overflow-hidden transition-all shadow-md hover:shadow-xl ${
              darkMode ? "bg-slate-900/20 border-white/5" : "bg-white border-slate-200/60"
            }`}>
              
              <div className={`h-44 flex items-center justify-center p-6 border-b relative overflow-hidden ${
                darkMode ? "bg-slate-950 border-white/5" : "bg-slate-100 border-slate-200/40"
              }`}>
                <img src={project.img} className="h-full w-full object-cover rounded-lg transform hover:scale-102 transition-transform duration-500" alt={project.title} />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h4 className={`font-bold text-lg mb-2 tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>{project.title}</h4>
                
                <p className={`text-xs md:text-sm tracking-normal leading-relaxed font-normal text-justify mb-5 flex-grow line-clamp-5 ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}>
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded flex items-center gap-1 ${
                      darkMode ? "bg-slate-800 text-indigo-300" : "bg-slate-100 text-indigo-700"
                    }`}>
                      {TechIcons[tech] || null} {tech}
                    </span>
                  ))}
                </div>

                <div className={`flex gap-3 items-center mt-auto border-t pt-4 ${darkMode ? "border-white/5" : "border-slate-100"}`}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 text-xs font-bold shadow-md shadow-indigo-600/10 transition-all">
                    <FaRegEye size={13} /> Live Demo
                  </a>
                  
                  <div className="relative flex-grow">
                    <button onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)} className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border text-xs font-bold transition-all ${
                      darkMode ? "bg-slate-800 hover:bg-slate-700 text-slate-200 border-white/5" : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                    }`}>
                      <span className="flex items-center gap-1.5"><FaGithub size={13}/> Source Code</span>
                      <span>▼</span>
                    </button>

                    {dropdownOpen === index && (
                      <div className={`absolute left-0 bottom-full mb-2 w-full border rounded-lg shadow-2xl z-30 overflow-hidden ${
                        darkMode ? "bg-slate-800 border-white/10" : "bg-white border-slate-200"
                      }`}>
                        {project.source?.frontend && (
                          <a href={project.source.frontend} target="_blank" rel="noopener noreferrer" className={`block px-4 py-2 text-xs font-semibold ${
                            darkMode ? "text-slate-300 hover:bg-slate-700 hover:text-white border-b border-white/5" : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600 border-b border-slate-100"
                          }`}>Frontend</a>
                        )}
                        {project.source?.backend && (
                          <a href={project.source.backend} target="_blank" rel="noopener noreferrer" className={`block px-4 py-2 text-xs font-semibold ${
                            darkMode ? "text-slate-300 hover:bg-slate-700 hover:text-white" : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                          }`}>Backend</a>
                        )}
                        {project.source?.SmartContract && (
                          <a href={project.source.SmartContract} target="_blank" rel="noopener noreferrer" className={`block px-4 py-2 text-xs font-semibold ${
                            darkMode ? "text-slate-300 hover:bg-slate-700 hover:text-white" : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                          }`}>Smart Contract</a>
                        )}
                        {project.source?.MLCode && (
                          <a href={project.source.MLCode} target="_blank" rel="noopener noreferrer" className={`block px-4 py-2 text-xs font-semibold ${
                            darkMode ? "text-slate-300 hover:bg-slate-700 hover:text-white" : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                          }`}>Machine Learning</a>
                        )}
                      </div>
                    )}
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
                Initiate a data handshake. Fill out the scope telemetry configuration to establish synchronous interaction.
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
                  Transmit Payload
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