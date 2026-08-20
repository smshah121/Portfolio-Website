/* eslint-disable react/no-unescaped-entities */
import { FaHtml5, FaCss3Alt, FaLinkedin, FaGithub, FaInstagram, FaPhoneAlt, FaGraduationCap, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { TbBrandJavascript, TbBrandTypescript, TbBrandFramerMotion } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { SiNestjs, SiPostgresql, SiTailwindcss, SiRedux, SiAxios, SiNetlify, SiRender, SiCloudinary } from "react-icons/si";
import { IoIosMail, IoMdDownload, IoMdMail } from "react-icons/io";
import { FaLocationDot, FaRegEye, FaLaptopCode, FaSun, FaMoon,  FaChevronDown } from "react-icons/fa6";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { useEffect,useMemo, useLayoutEffect, useState, useRef } from "react";
import Typewriter from "typewriter-effect";
import emailjs from "emailjs-com";
import Globe from "react-globe.gl";
import { GrHeroku } from "react-icons/gr";
import { VscAzure } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import {
  SiJsonwebtokens,
  SiGoogle,
  SiScikitlearn,
  SiPython,
  SiFastapi,
  SiEthereum,
  SiSolidity,
  SiStripe
} from "react-icons/si";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



function ContactGlobe({ darkMode }) {
  const globeRef = useRef(null);
  const containerRef = useRef(null);
  const [size, setSize] = useState(360);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setSize(Math.min(containerRef.current.offsetWidth, 420));
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (!globeRef.current) return;
    const controls = globeRef.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enableZoom = false;
    globeRef.current.pointOfView({ lat: 24.86, lng: 67.0, altitude: 2.1 }, 0);
  }, []);

  const markerData = [
    { lat: 24.8607, lng: 67.0011, color: "#818cf8", label: "Karachi, Pakistan" },
  ];

  return (
    <div
      className={`gsap-reveal relative w-full p-10    md:p-10 flex flex-col items-center overflow-hidden ${
        darkMode
          ? "bg-slate-950   shadow-2xl shadow-indigo-950/30"
          : "bg-white/80 border-slate-200 shadow-xl shadow-slate-200/50 backdrop-blur-xl"
      }`}
    >
      {/* Ambient glow behind the globe */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full blur-[100px] pointer-events-none ${
        darkMode ? "bg-indigo-500/20" : "bg-indigo-400/20"
      }`} />

      {/* Decorative rotating ring frame */}
      <div className="relative" ref={containerRef} style={{ width: size, height: size }}>
        <div className={`absolute -inset-4 rounded-full border-2 border-dashed animate-[spin_60s_linear_infinite] ${
          darkMode ? "border-indigo-500/20" : "border-indigo-400/25"
        }`} />
        <div className={`absolute -inset-10 rounded-full border ${
          darkMode ? "border-white/5" : "border-slate-200/60"
        }`} />

        <Globe
          ref={globeRef}
          width={size}
          height={size}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          pointsData={markerData}
          pointLat="lat"
          pointLng="lng"
          pointColor="color"
          pointAltitude={0.02}
          pointRadius={0.6}
          pointLabel="label"
          atmosphereColor={darkMode ? "#818cf8" : "#6366f1"}
          atmosphereAltitude={0.28}
        />
      </div>

      {/* Location badge */}
      <div className={`gsap-reveal relative z-10 mt-8 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-xs font-semibold ${
        darkMode ? "bg-slate-950/60 border-indigo-500/20 text-slate-200" : "bg-white border-indigo-200 text-slate-700 shadow-sm"
      }`}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        Based in Karachi, Pakistan · Open to Remote Work
      </div>
    </div>
  );
}

function App() {
  const orbitRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [githubStats, setGithubStats] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

 const fetchGithubStats = () => {
  Promise.all([
    fetch("https://api.github.com/users/smshah121").then((res) => res.json()),
    fetch("https://github-contributions-api.jogruber.de/v4/smshah121?y=all").then((res) => res.json()),
  ])
    .then(([userData, contribData]) => {
      const totalContributions = Object.values(contribData.total || {}).reduce(
        (sum, yearTotal) => sum + yearTotal,
        0
      );

      setGithubStats({
        repos: userData.public_repos,
        commits: totalContributions,
        followers: userData.followers,
      });
    })
    .catch(() => setGithubStats(null));
};

  useEffect(() => {
  fetchGithubStats();
}, []);

  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const mainContainerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const sectionRef = useRef(null);
  const fullstackCountRef = useRef(null);
  const frontendCountRef = useRef(null);

  // Define your target counts here
  const stats = {
    fullstack: 6, // adjust to your actual count
    frontend: 10,  // adjust to your actual count
  };

 const technologies = useMemo(
  () => [
    { icon: <GrReactjs /> },
    { icon: <SiTailwindcss /> },
    { icon: <TbBrandFramerMotion /> },
    { icon: <SiRedux /> },
    { icon: <SiNestjs /> },
    { icon: <TbBrandTypescript /> },
    { icon: <SiPostgresql /> },
    { icon: <SiJsonwebtokens /> },
    { icon: <SiGoogle /> },
  ],
  []
);
  useLayoutEffect(() => {
  if (!orbitRef.current) return;

  const ctx = gsap.context(() => {
    const icons = orbitRef.current.querySelectorAll(".orbit-icon-spin");

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(
      orbitRef.current,
      {
        rotation: 360,
        duration: 40,
        ease: "none",
      },
      0
    );

    tl.to(
      icons,
      {
        rotation: -360,
        duration: 40,
        ease: "none",
      },
      0
    );
  }, orbitRef);

  return () => ctx.revert();
}, []);

useEffect(() => {
  const ctx = gsap.context(() => {
    // Animated Stat Counters
    const fsTarget = { val: 0 };

    gsap.to(fsTarget, {
      val: stats.fullstack,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: fullstackCountRef.current,
        start: "top 85%",
        toggleActions: "restart none none reset",
      },
      onUpdate: () => {
        if (fullstackCountRef.current) {
          fullstackCountRef.current.innerText =
            Math.floor(fsTarget.val) + "+";
        }
      },
    });

    const feTarget = { val: 0 };

    gsap.to(feTarget, {
      val: stats.frontend,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: frontendCountRef.current,
        start: "top 85%",
        toggleActions: "restart none none reset",
      },
      onUpdate: () => {
        if (frontendCountRef.current) {
          frontendCountRef.current.innerText =
            Math.floor(feTarget.val) + "+";
        }
      },
    });
  }, sectionRef);

  return () => ctx.revert();
}, [stats.fullstack, stats.frontend]);

  

  

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
      tech: ["React", "Tailwind", "Redux", "Nest", "Postgres", "JWT", "GoogleOAuth", "Stripe", "Ethereum", "Solidity"]
    },
    {
      img: "/pricetag.png",
      title: "Multi-Vendor Marketplace",
      desc: "Built a multi-vendor marketplace where customers can apply to become sellers and manage their own product stores. Implemented secure role-based access for customers, sellers, and admins, with product management, image uploads, cart functionality, Stripe online payments, Cash on Delivery, and real-time order status management.",
      link: "https://pricetag-tech.netlify.app/",
      source: {
        frontend: "https://github.com/smshah121/E-Commerce-Web-App-Frontend",
        backend: "https://github.com/smshah121/E-Commerce-Web-App-Backend",
      },
      tech: ["React", "Tailwind", "Redux", "Motion", "Nest", "Postgres", "JWT", "Stripe"]
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
      tech: ["React", "Tailwind", "Motion", "Redux", "Nest", "JWT", "Postgres"]
    },
    {
      img: "/fraud.png",
      title: "AI-Powered Credit Card Fraud Detection System",
      desc: "Developed a full-stack fraud detection system using React, NestJS and FastAPI. Transaction data is transformed into ML-ready feature vectors and evaluated by a Logistic Regression model trained on the Kaggle Credit Card Fraud dataset (284K+ transactions). Displays fraud prediction, confidence score and stores transaction history.",
      link: "https://ai-fraud-detections.netlify.app/",
      source: {
        frontend: "https://github.com/smshah121/fraud-detection-frontend",
        backend: "https://github.com/smshah121/fraud-detection-backend",
        mlCode: "https://github.com/smshah121/fraud-detection-ml-api"
      },
      tech: ["React", "Tailwind", "Redux", "Nest", "Postgres", "Python", "FastAPI"]
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
      tech: ["React", "Tailwind", "Redux", "Nest", "JWT", "Postgres", "GoogleOAuth"]
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
      tech: ["React", "Tailwind", "Redux", "Nest", "Postgres", "JWT", "GoogleOAuth"]
    },
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

  const BackendTech = [
    { name: "NestJS", icon: <SiNestjs size={32} />, color: "#E0234E" },
    { name: "TypeScript", icon: <TbBrandTypescript size={32} />, color: "#3178C6" },
    { name: "Node.js", icon: <FaNodeJs size={32} />, color: "#339933" },
    { name: "PostgreSQL", icon: <SiPostgresql size={32} />, color: "#4169E1" }
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
      icon: <img src="/neon-logomark-light-color.png" alt="Neon" className="w-8 h-8 object-contain" />,
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

 

  useEffect(() => {
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Pointer Tracker
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      gsap.to(dot, { x, y, duration: 0.1, ease: "power2.out" });
      gsap.to(ring, { x: x - 12, y: y - 12, duration: 0.25, ease: "power2.out" });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  // GSAP 3D Page Fold Roll Engine
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".panel-section");

      sections.forEach((section, index) => {
        gsap.set(section, { transformOrigin: "center top", transformPerspective: 1200 });

        if (index < sections.length - 1) {
          gsap.to(section, {
            scale: 0.92,
            rotateX: -10,
            opacity: 0.2,
            filter: "blur(8px)",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "bottom bottom",
              end: "bottom top",
              scrub: 1
            }
          });
        }

        

        const innerItems = section.querySelectorAll(".gsap-reveal");
        if (innerItems.length > 0) {
          gsap.fromTo(innerItems, 
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                end: "bottom 15%",
                toggleActions: "play reverse play reverse"
              }
            }
          );
        }
      });

    }, mainContainerRef);

    return () => ctx.revert();
  }, []);


  useEffect(() => {
  const onLoad = () => ScrollTrigger.refresh();
  window.addEventListener("load", onLoad);
  return () => window.removeEventListener("load", onLoad);
}, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.to(mobileMenuRef.current, { y: 0, opacity: 1, duration: 0.3, ease: "power3.out", display: "flex" });
    } else {
      gsap.to(mobileMenuRef.current, { y: -20, opacity: 0, duration: 0.2, ease: "power3.in", display: "none" });
    }
  }, [mobileMenuOpen]);

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


  const scrollToSection = (id) => {
  const target = document.querySelector(`#${id}`);
  if (!target) return;
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: target, offsetY: 80 }, // 80 = your header height, adjust if needed
    ease: "power2.inOut",
  });
};

  const NavItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

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
    <div ref={mainContainerRef} className={`min-h-screen font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-300 ${
      darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
    }`}>
      {/* Pointer elements */}
      <div ref={cursorDotRef} className="fixed top-0 left-0 w-2 h-2 bg-indigo-500 rounded-full pointer-events-none z-50 hidden md:block" />
      <div ref={cursorRingRef} className="fixed top-0 left-0 w-8 h-8 border border-indigo-500/40 rounded-full pointer-events-none z-50 hidden md:block" />

      {/* Floating Centered Header Navigation Bar */}
      <header className="fixed top-0 left-0 w-full flex justify-center py-4 px-6 z-50 pointer-events-none">
        <div className={`flex items-center gap-4 px-3 py-1.5 rounded-full border pointer-events-auto transition-all duration-300 shadow-xl ${
          scrolled 
            ? darkMode ? "bg-slate-900/80 border-white/10 backdrop-blur-md" : "bg-white/80 border-slate-200 backdrop-blur-md"
            : darkMode ? "bg-slate-900/40 border-white/5 backdrop-blur-sm" : "bg-white/40 border-slate-200/60 backdrop-blur-sm"
        }`}>
          <ul className="hidden md:flex items-center gap-1">
            {NavItems.map((item) => (
              <li key={item.id}>
  <button onClick={() => scrollToSection(item.id)} className={`px-4.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
    activeSection === item.id 
      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25" 
      : darkMode ? "text-slate-400 hover:text-slate-100" : "text-slate-500 hover:text-slate-900"
  }`}>
    {item.label}
  </button>
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

      {/* Mobile Drawer */}
      <div ref={mobileMenuRef} className={`fixed inset-x-0 top-20 mx-6 p-6 rounded-2xl border backdrop-blur-xl z-40 flex-col gap-4 shadow-2xl hidden ${
        darkMode ? "bg-slate-900/95 border-white/10" : "bg-white/95 border-slate-200"
      }`}>
        {NavItems.map((item) => (
          <button key={item.id} onClick={() => { scrollToSection(item.id); setMobileMenuOpen(false); }} className={`text-base font-bold tracking-wide uppercase pb-1 border-b text-left ${
  activeSection === item.id 
    ? "text-indigo-500 border-indigo-500" 
    : darkMode ? "text-slate-300 border-white/5" : "text-slate-600 border-slate-100"
}`}>
  {item.label}
</button>
        ))}
      </div>

      {/* SECTION 1: HERO */}
      <section id="hero" className={`panel-section h-screen w-full relative flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-24 pb-6 ${
        darkMode ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950" : "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/50 via-slate-50 to-slate-50"
      }`}>
        <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
          <span className={`gsap-reveal text-xs font-mono tracking-widest mb-4 uppercase px-4 py-1 rounded-full border transition-all ${
            darkMode ? "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" : "text-indigo-600 bg-indigo-500/5 border-indigo-500/20"
          }`}>
            Available for Opportunities
          </span>
          
          <h1 className={`gsap-reveal font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none w-full max-w-none mx-auto whitespace-nowrap ${
            darkMode ? "text-white" : "text-slate-900"
          }`}>
            Syed Momin <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-[0_0_30px_rgba(129,140,248,0.15)]">Ali Shah</span>
          </h1>

          <div className={`gsap-reveal text-base sm:text-xl md:text-2xl font-semibold mt-4 h-8 flex items-center justify-center w-full ${
            darkMode ? "text-slate-300" : "text-slate-700"
          }`}>
            <Typewriter options={{ strings: ["Full Stack Developer", "Software Engineer", "React Developer", "NestJS Developer"], autoStart: true, loop: true, delay: 60, deleteSpeed: 40 }} />
          </div>

          <p className={`gsap-reveal mt-3 text-sm sm:text-base md:text-md max-w-xl leading-relaxed mx-auto px-2 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Final-Year <span className="text-indigo-500 font-semibold">Software Engineering</span> student and <span className="text-indigo-500 font-semibold">Full Stack Developer</span> specializing in building scalable, production-ready web applications with <span className="text-indigo-500 font-semibold">React, NestJS</span> and <span className="text-indigo-500 font-semibold">PostgreSQL</span>.
          </p>

          <div className="gsap-reveal flex gap-4 mt-6 flex-wrap justify-center items-center">
            <a href="/Resume Template (20).pdf" target="_blank" rel="noopener noreferrer" download="Syed Momin Ali Shah Resume.pdf" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-md shadow-indigo-600/20 transition-all transform hover:-translate-y-0.5 text-xs sm:text-sm">
              <IoMdDownload size={16} /> Download CV
            </a>
           <button onClick={() => scrollToSection("project")} className={`px-5 py-2.5 rounded-xl border font-medium transition-all transform hover:-translate-y-0.5 text-xs sm:text-sm ${
              darkMode ? "bg-white/5 hover:bg-white/10 border-white/10 text-slate-200" : "bg-slate-900/5 hover:bg-slate-900/10 border-slate-900/10 text-slate-800"
            }`}>
              View Projects
            </button>
          </div>

          <div className={`gsap-reveal flex justify-center mt-8 gap-5 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            <a href="https://www.linkedin.com/in/smshah121" aria-label="Linkedin Profile" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors transform hover:scale-110 duration-200"><FaLinkedin size={22} /></a>
            <a href="https://github.com/smshah121" aria-label="Github Profile" target="_blank" rel="noopener noreferrer" className={`transition-colors transform hover:scale-110 duration-200 ${darkMode ? "hover:text-white" : "hover:text-black"}`}><FaGithub size={22} /></a>
            <a href="https://www.instagram.com/__smshah__" aria-label="Instagram Profile" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors transform hover:scale-110 duration-200"><FaInstagram size={22} /></a>
            <a href="mailto:sm.shah2003@hotmail.com" aria-label="Email via Outloook" className="hover:text-blue-500 transition-colors transform hover:scale-110 duration-200"><PiMicrosoftOutlookLogo size={22} /></a>
            <a href="mailto:smshah.2003@gmail.com" aria-label="Email via Gmail" className="hover:text-red-500 transition-colors transform hover:scale-110 duration-200"><IoMdMail size={22} /></a>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
   <section
      id="about"
      ref={sectionRef}
      className={`panel-section relative py-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center transition-colors duration-500 ${
        darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Aesthetic Section Header */}
      <div className="gsap-reveal mb-16">
        <span className="font-['Quicksand'] font-semibold text-xs sm:text-sm uppercase tracking-[0.35em] text-indigo-400 block mb-3">
          Who I Am ?
        </span>
        <h2 className="font-['Black_Ops_One'] text-4xl sm:text-6xl md:text-7xl uppercase tracking-wider  bg-clip-text text-indigo-500 ">
          <span className={darkMode ? "text-gray-100" : "text-slate-900"}>About</span> Me
        </h2>
      </div>

      {/* 60% / 40% Split Content with Equal Height Stretching */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
        
        {/* Left Column: 60% Width */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          {/* Summary Box */}
          <div
            className={`gsap-reveal p-8 md:p-10 rounded-3xl border backdrop-blur-xl transition-all duration-300 ${
              darkMode
                ? "bg-slate-900/40 border-slate-800/80 shadow-2xl shadow-indigo-950/20"
                : "bg-white/80 border-slate-200 shadow-xl shadow-slate-200/50"
            }`}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
              Executive Summary
            </h3>

            <div
              className={`space-y-4 text-base md:text-md leading-relaxed font-normal ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              <p>
                I’m a Full-Stack Developer and final-year Software Engineering student at Iqra University, passionate about building scalable and maintainable web applications.
              </p>
              <p>
                My primary focus is full-stack development, working with React.js, TypeScript, NestJS, and PostgreSQL to build responsive interfaces, robust APIs, and reliable backend systems.
              </p>
              <p>
                I also explore AI/ML and blockchain technologies, integrating them into projects to solve practical problems and expand what I can build as a Software Engineer.
              </p>
            </div>
          </div>

          {/* Education & Featured Project Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div
              className={`gsap-reveal p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                darkMode ? "bg-slate-900/30 border-slate-800/80" : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center text-xl mb-4">
                <FaGraduationCap />
              </div>
              <h4 className="font-bold text-base">BS Software Engineering</h4>
              <p className="text-sm text-slate-400 mt-1">Iqra University</p>
              <span className="inline-block mt-3 text-xs px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 font-medium">
                2023 — Present
              </span>
            </div>

          <div
              className={`gsap-reveal p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                darkMode ? "bg-slate-900/30 border-slate-800/80" : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center text-xl mb-4">
                <FaGithub />
              </div>
              <h4 className="font-bold text-base mb-3">GitHub Activity</h4>
              {githubStats ? (
                <div className="flex gap-5">
                  <div>
                    <span className="block text-lg font-extrabold text-indigo-500">{githubStats.repos}</span>
                    <span className={`text-[10px] uppercase tracking-wide ${darkMode ? "text-slate-400" : "text-slate-500"}`}>Repositories</span>
                  </div>
                  <div>
                    <span className="block text-lg font-extrabold text-indigo-500">{githubStats.commits}+</span>
                    <span className={`text-[10px] uppercase tracking-wide ${darkMode ? "text-slate-400" : "text-slate-500"}`}>Total Contribution</span>
                  </div>
                </div>
              ) : (
                <p className={`text-xs leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Loading live GitHub data…
                </p>
              )}
              <a
                href="https://github.com/smshah121"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-indigo-400 hover:text-purple-400 transition-colors"
              >
                View Profile →
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: 40% Width */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6 h-full">

          <div
            className={`gsap-reveal p-8 md:p-7 rounded-3xl border flex flex-col md:flex-row md:items-center md:justify-between transition-all duration-300 ${
              darkMode
                ? "bg-slate-900/40 border-slate-800/80 shadow-xl"
                : "bg-white border-slate-200 shadow-md"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <div className="relative flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping absolute opacity-75" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 relative" />
              </div>
             
              <div>
                <h4 className="text-md font-semibold tracking-tight mb-2">Available for Role</h4>
                <p className="text-xs text-slate-400">Full-Stack Developer</p>
              </div>
            </div>
    

              <a
              href="#contact"
              className="px-4 py-2 w-full md:w-auto mt-3 md:mt-0 text-center rounded-xl  text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500 hover:text-white transition-all duration-200"
            >
              Let's Talk →
            </a>

       
            
          </div>

          
          {/* 1. Animated Metrics Card */}
          <div
            className={`gsap-reveal p-8 rounded-3xl border grid grid-cols-2 gap-6 ${
              darkMode
                ? "bg-slate-900/40 border-slate-800/80"
                : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <div className="flex flex-col">
              <span
                ref={fullstackCountRef}
                className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-[0_0_30px_rgba(129,140,248,0.15)]"
              >
                0+
              </span>
              <span className="text-xs md:text-sm font-medium text-slate-400 mt-2">
                Full-Stack Projects
              </span>
            </div>

            <div className="flex flex-col border-l pl-6 border-slate-800">
              <span
                ref={frontendCountRef}
                className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-[0_0_30px_rgba(129,140,248,0.15)]"
              >
                0+
              </span>
              <span className="text-xs md:text-sm font-medium text-slate-400 mt-2">
                Web Interfaces
              </span>
            </div>
          </div>

          {/* 2. Modern Core Technologies Grid (flex-1 evenly fills middle vertical height) */}
         <div
  className={`gsap-reveal p-8 rounded-3xl border flex-1 flex flex-col items-center justify-center relative overflow-hidden ${
    darkMode ? "bg-slate-900/30 border-slate-800/80" : "bg-white border-slate-200 shadow-sm"
  }`}
>
  <div className="relative w-[220px] sm:w-[250px] aspect-square">
    {/* Orbit rings */}
    <div className={`absolute inset-0 rounded-full border-2 border-dashed ${darkMode ? "border-slate-800" : "border-slate-200"}`} />
    <div className={`absolute inset-8 rounded-full border ${darkMode ? "border-slate-800/60" : "border-slate-100"}`} />

    {/* Center hub — Core Tech */}
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex flex-col items-center justify-center border z-10 ${
      darkMode ? "bg-slate-950 border-indigo-500/30 shadow-lg shadow-indigo-950/40" : "bg-white border-indigo-200 shadow-md"
    }`}>
      <FaLaptopCode className="text-indigo-400 text-lg mb-1" />
      <span className="text-[9px] font-bold uppercase tracking-wide text-indigo-400 text-center leading-tight">Core<br/>Tech</span>
    </div>

    {/* Orbiting icons */}
    <div ref={orbitRef} className="absolute inset-0">
      {technologies.map((tech, i) => {
        const angle = -90 + (360 / technologies.length) * i;
        const radius = 95;
        return (
          <div
            key={i}
            className="absolute w-10 h-10 top-1/2 left-1/2 -ml-5 -mt-5"
            style={{ transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)` }}
          >
            <div
              className={`orbit-icon-spin group w-10 h-10 rounded-full flex items-center justify-center border text-base transition-all duration-300 cursor-default ${
                darkMode
                  ? "bg-slate-950/80 border-slate-800 text-slate-300 hover:border-indigo-500/60 hover:text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:border-indigo-500 hover:text-indigo-600 shadow-sm"
              }`}
            >
              {tech.icon}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>
          
        </div>

      </div>
    </section>

      {/* SECTION 3: TECH STACK */}
      <section id="skills" className={`panel-section py-24 border-y relative overflow-hidden transition-colors duration-300 min-h-screen flex items-center ${
        darkMode ? "bg-slate-950/40 border-white/[0.05]" : "bg-slate-50 border-slate-200/60"
      }`}>
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full filter blur-[140px] opacity-[0.06] pointer-events-none ${darkMode ? "bg-indigo-500" : "bg-indigo-400"}`} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="gsap-reveal text-center mb-10">
            <h2 className={`text-3xl md:text-5xl font-black tracking-tight ${darkMode ? "text-white" : "text-slate-950"}`}>
              Tech Stack
            </h2>
          </div>

          {[
            { cat: "Frontend", stack: FrontendTech },
            { cat: "Backend & Database", stack: BackendTech },
            { cat: "Cloud Deployment & Tools", stack: Tools }
          ].map((block, bIdx) => (
            <div key={bIdx} className="mb-14 last:mb-0">
              <div className="gsap-reveal flex items-center gap-4 mb-6">
                <h4 className={`text-xs tracking-wider font-mono font-bold uppercase whitespace-nowrap ${
                  darkMode ? "text-indigo-400/90" : "text-indigo-600/90"
                }`}>
                  {block.cat}
                </h4>
                <div className={`w-full h-[1px] ${darkMode ? "bg-white/[0.06]" : "bg-slate-200"}`} />
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {block.stack.map((tech, idx) => {
          
                  return (
                    <div 
                      key={idx}
                      className={`gsap-reveal flex items-center gap-3.5 border p-4 rounded-xl backdrop-blur-sm transition-all duration-300 relative group cursor-default transform hover:-translate-y-1 ${
                        darkMode 
                          ? "bg-slate-900/40 border-white/[0.04] hover:bg-slate-900/80" 
                          : "bg-white border-slate-200/70 hover:bg-slate-50/50"
                      }`}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 rounded-xl pointer-events-none" style={{ backgroundColor: tech.color }} />
                      <div style={{ color: tech.color }} className="text-xl md:text-2xl opacity-75 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-[4deg]">
                        {tech.icon}
                      </div>
                      <span className={`font-semibold text-xs md:text-sm tracking-tight transition-colors duration-300 ${
                        darkMode ? "text-slate-300 group-hover:text-white" : "text-slate-700 group-hover:text-slate-950"
                      }`}>
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: PROJECTS */}
      <section id="project" className="panel-section py-24 max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden min-h-screen">
        <div className={`absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-15 pointer-events-none hidden md:block filter blur-[150px] ${
          darkMode ? "bg-purple-600" : "bg-purple-200"
        }`} />

        <div className="gsap-reveal text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-black tracking-tight ${darkMode ? "text-white" : "text-slate-950"}`}>
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MyProjects.map((project, index) => (
            <div
              key={index}
              className={`gsap-reveal group border rounded-2xl flex flex-col overflow-hidden transition-all duration-300 relative ${
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
                      <FaChevronDown size={10} className={`opacity-70 transition-transform duration-200 ${dropdownOpen === index ? "rotate-180" : ""}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen === index && (
                      <div
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
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CONTACT */}
<section id="contact" className={`panel-section py-24 border-t min-h-screen flex items-center ${darkMode ? "bg-slate-900/10 border-white/5" : "bg-slate-100/40 border-slate-200"}`}>
  <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="gsap-reveal">
        {/* <h3 className={`text-2xl md:text-4xl font-extrabold mb-4 tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>Let&apos;s Connect</h3>
        <p className={`text-xs md:text-sm leading-relaxed mb-8 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
          Feel free to reach out for internship opportunities, collaborations or software engineering roles.
        </p> */}

        <ContactGlobe darkMode={darkMode} />
      </div>

      <div className={`gsap-reveal border rounded-2xl p-6 md:p-8 shadow-xl border-t-4 border-t-indigo-600 ${
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
      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className={`border-t py-6 text-center text-xs tracking-wide relative z-20 ${darkMode ? "bg-slate-950 border-white/5 text-slate-500" : "bg-slate-50 border-slate-200 text-slate-400"}`}>
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.linkedin.com/in/smshah121" aria-label="Linkedin Profile" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors"><FaLinkedin size={20} /></a>
          <a href="https://github.com/smshah121" aria-label="Github Profile" target="_blank" rel="noopener noreferrer" className={`transition-colors ${darkMode ? "hover:text-white" : "hover:text-black"}`}><FaGithub size={20} /></a>
          <a href="https://www.instagram.com/__smshah__" aria-label="Instagram Profile" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors"><FaInstagram size={20} /></a>
        </div>
        <p className="font-semibold text-xs select-none">&copy; Syed Momin Ali Shah. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;