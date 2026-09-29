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
import Lenis from "lenis";
import emailjs from "emailjs-com";
import Globe from "react-globe.gl";
import { GrHeroku } from "react-icons/gr";
import { VscAzure } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import { createPortal } from "react-dom";
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

gsap.registerPlugin(ScrollTrigger);



const NIGHT_TEXTURE = "https://unpkg.com/three-globe/example/img/earth-night.jpg";
const DAY_TEXTURE = "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg";
const TOPOLOGY_TEXTURE = "https://unpkg.com/three-globe/example/img/earth-topology.png";

export function ContactGlobe({ darkMode }) {
 const nightGlobeRef = useRef(null);
  const dayGlobeRef = useRef(null);
  const containerRef = useRef(null);
  const [size, setSize] = useState(280);

  // Responsive dynamic sizing
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const availableWidth = containerRef.current.clientWidth;
        const computedSize = Math.min(Math.max(availableWidth - 24, 260), 400);
        setSize(computedSize);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Setup controls & camera on both instances once on mount
  useEffect(() => {
    [nightGlobeRef.current, dayGlobeRef.current].forEach((globe) => {
      if (!globe) return;
      const controls = globe.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
        controls.enableZoom = false;
      }
      globe.pointOfView({ lat: 24.86, lng: 67.0, altitude: 2.1 }, 0);
    });
  }, []);

  const markerDataDark = [
    {
      lat: 24.8607,
      lng: 67.0011,
      color: "#818cf8",
      label: "Karachi, Pakistan",
    },
  ];

  const markerDataLight = [
    {
      lat: 24.8607,
      lng: 67.0011,
      color: "#4f46e5",
      label: "Karachi, Pakistan",
    },
  ];

   
  return (
  <div
      ref={containerRef}
      className="gsap-reveal relative w-full flex flex-col items-center justify-center transition-none"
    >
      {/* Ambient glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-[80px] pointer-events-none transition-none ${
          darkMode ? "bg-indigo-500/20" : "bg-sky-400/25"
        }`}
      />

      {/* Rotating orbit ring frame */}
      <div
        className="relative flex items-center justify-center max-w-full"
        style={{ width: size, height: size }}
      >
        <div
          className={`absolute -inset-2 sm:-inset-4 rounded-full border border-dashed animate-[spin_60s_linear_infinite] transition-none ${
            darkMode ? "border-indigo-500/30" : "border-sky-500/40"
          }`}
        />
        <div
          className={`absolute -inset-5 sm:-inset-8 rounded-full border transition-none ${
            darkMode ? "border-white/5" : "border-slate-200"
          }`}
        />

        {/* Night Globe Layer */}
        <div
          className={`absolute inset-0 transition-opacity duration-150 ${
            darkMode ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Globe
            ref={nightGlobeRef}
            width={size}
            height={size}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl={NIGHT_TEXTURE}
            bumpImageUrl={TOPOLOGY_TEXTURE}
            pointsData={markerDataDark}
            pointLat="lat"
            pointLng="lng"
            pointColor="color"
            pointAltitude={0.03}
            pointRadius={0.7}
            pointLabel="label"
            atmosphereColor="#818cf8"
            atmosphereAltitude={0.2}
          />
        </div>

        {/* Day Globe Layer */}
        <div
          className={`absolute inset-0 transition-opacity duration-150 ${
            !darkMode ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Globe
            ref={dayGlobeRef}
            width={size}
            height={size}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl={DAY_TEXTURE}
            bumpImageUrl={TOPOLOGY_TEXTURE}
            pointsData={markerDataLight}
            pointLat="lat"
            pointLng="lng"
            pointColor="color"
            pointAltitude={0.03}
            pointRadius={0.7}
            pointLabel="label"
            atmosphereColor="#38bdf8"
            atmosphereAltitude={0.2}
          />
        </div>
      </div>

      {/* Location badge */}
      <div
        className={`gsap-reveal relative z-10 mt-6 sm:mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[11px] sm:text-xs font-semibold text-center max-w-full transition-none ${
          darkMode
            ? "bg-slate-900/40 border-indigo-500/30 text-slate-200"
            : "bg-slate-100/70 border-slate-200 text-slate-800"
        }`}
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="truncate">Based in Karachi · Open to Opportunities</span>
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
  const ambientGlowRef = useRef(null);
  const aboutHeadingRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      ".connect-letter",
      {
        opacity: 0,
        y: 50,
        scale: 0.7,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power4.out",

        scrollTrigger: {
          trigger: ".connect-letter",
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      }
    );
  });

  return () => ctx.revert();
}, []);

  useEffect(() => {
  if (!aboutHeadingRef.current) return; // ✅ Guard against null ref

  const letters = aboutHeadingRef.current.querySelectorAll(".about-letter");
  if (!letters.length) return;

  const ctx = gsap.context(() => {
    gsap.fromTo(
      letters,
      {
        opacity: 0,
        y: 60,
        scale: 0.7,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: {
          trigger: aboutHeadingRef.current, // ✅ Safe single node trigger
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      }
    );
  }, aboutHeadingRef);

  return () => ctx.revert();
}, []);

// 2. Tech Stack Letters
useEffect(() => {
  const letters = document.querySelectorAll(".tech-letter");
  if (!letters.length) return;

  const ctx = gsap.context(() => {
    gsap.fromTo(
      letters,
      {
        opacity: 0,
        y: 50,
        scale: 0.7,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: {
          trigger: letters[0].closest("h2") || letters[0], // ✅ Target the parent <h2> container
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      }
    );
  });

  return () => ctx.revert();
}, []);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

 const lenisRef = useRef(null);

useEffect(() => {
  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    syncTouch: false,
    wheelMultiplier: 0.9,
    touchMultiplier: 1,
  });

  lenisRef.current = lenis;

  lenis.on("scroll", ScrollTrigger.update);

  const raf = (time) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(raf);
    lenis.destroy();
    lenisRef.current = null;
  };
}, []);

  useEffect(() => {
  if (!ambientGlowRef.current) return;

  const tl = gsap.timeline({ repeat: -1, yoyo: true });
  tl.to(ambientGlowRef.current, {
    x: "20vw",
    y: "15vh",
    duration: 18,
    ease: "sine.inOut",
  })
    .to(ambientGlowRef.current, {
      x: "-15vw",
      y: "25vh",
      duration: 20,
      ease: "sine.inOut",
    })
    .to(ambientGlowRef.current, {
      x: "10vw",
      y: "-10vh",
      duration: 16,
      ease: "sine.inOut",
    })
    .to(ambientGlowRef.current, {
      x: "0vw",
      y: "0vh",
      duration: 18,
      ease: "sine.inOut",
    });

  return () => tl.kill();
}, []);

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

  const smokeCanvasRef = useRef(null);


  const sectionRef = useRef(null);
  const fullstackCountRef = useRef(null);
  const frontendCountRef = useRef(null);

  // Define your target counts here
  const stats = {
    fullstack: 6, // adjust to your actual count
    frontend: 10,  // adjust to your actual count
  };



// Classy Organic Smoky Aurora Trail
useEffect(() => {
  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) return;

  const canvas = smokeCanvasRef.current;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let animFrameId;
  const particles = [];
  const maxParticles = 90;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  let mouse = { x: -100, y: -100 };
  let lastPos = { x: -100, y: -100 };

  const onMouseMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    if (lastPos.x === -100) {
      lastPos = { x: mouse.x, y: mouse.y };
      return;
    }

    const dx = mouse.x - lastPos.x;
    const dy = mouse.y - lastPos.y;
    const dist = Math.hypot(dx, dy);
    const steps = Math.min(Math.max(Math.floor(dist / 5), 1), 8);

    // Spawn soft expanding smoke puffs along cursor trajectory
    for (let i = 0; i < steps; i++) {
      const t = i / steps;
      const x = lastPos.x + dx * t;
      const y = lastPos.y + dy * t;

      particles.unshift({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        baseRadius: Math.random() * 22 + 28, // High volume starting size
        maxLife: Math.random() * 45 + 50,    // Smooth, gradual lifespan
        age: 0,
        vx: (Math.random() - 0.5) * 0.45,
        vy: -0.35 - Math.random() * 0.45,     // Gentle upward thermal drift
        expansion: Math.random() * 0.75 + 0.65, // Billowing smoke expansion
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015,
        hueShift: Math.random() > 0.4 ? 244 : 262, // Subtle Indigo <-> Purple nuance
      });
    }

    lastPos = { x: mouse.x, y: mouse.y };

    if (particles.length > maxParticles) {
      particles.splice(maxParticles);
    }
  };

  window.addEventListener("mousemove", onMouseMove);

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (particles.length > 0) {
      ctx.save();
      // "screen" produces refined, luminous, non-clashing smoke overlaps
      ctx.globalCompositeOperation = "screen";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.age += 1;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        p.baseRadius += p.expansion;

        const progress = p.age / p.maxLife;
        if (progress >= 1) {
          particles.splice(i, 1);
          continue;
        }

        // Hermite smoothstep curve: seamless fade-in, long silky fade-out
        const alphaCurve = Math.sin(progress * Math.PI) * Math.pow(1 - progress, 0.45);
        const peakAlpha = darkMode ? 0.22 : 0.14; // Subtle, elegant opacity
        const currentAlpha = alphaCurve * peakAlpha;

        const currentRadius = p.baseRadius;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        // Multi-stop ultra-soft radial gradient for seamless mist edges
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, currentRadius);
        grad.addColorStop(0, `hsla(${p.hueShift}, 85%, 68%, ${currentAlpha * 1.1})`);
        grad.addColorStop(0.35, `hsla(${p.hueShift}, 80%, 54%, ${currentAlpha * 0.75})`);
        grad.addColorStop(0.7, `hsla(${p.hueShift - 10}, 70%, 35%, ${currentAlpha * 0.28})`);
        grad.addColorStop(1, `hsla(${p.hueShift}, 60%, 20%, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, currentRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      ctx.restore();
    }

    animFrameId = requestAnimationFrame(animate);
  };
  animate();

  return () => {
    window.removeEventListener("resize", resize);
    window.removeEventListener("mousemove", onMouseMove);
    cancelAnimationFrame(animFrameId);
  };
}, [darkMode]);
 const technologies = useMemo(
  () => [
    { icon: <GrReactjs /> },
    {icon: <TbBrandJavascript/>},
    { icon: <SiTailwindcss /> },
    { icon: <SiRedux /> },
    { icon: <SiNestjs /> },
    { icon: <TbBrandTypescript /> },
    { icon: <SiPostgresql /> },
    { icon: <SiJsonwebtokens /> },
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
        toggleActions: "restart none restart none",
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
        toggleActions: "restart none restart none",
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

  

 useEffect(() => {
  const letters = document.querySelectorAll(".project-letter");
  if (!letters.length) return;

  const ctx = gsap.context(() => {
    gsap.fromTo(
      letters,
      {
        opacity: 0,
        y: 50,
        scale: 0.7,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: {
          trigger: letters[0].closest("h2") || letters[0], // ✅ Target the parent <h2> container
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      }
    );
  });

  return () => ctx.revert();
}, []);


 const MyProjects = [
  {
    img: "/degree.png",
    title: "Autonomous Degree Attestation System",

    desc: "Automated degree attestation and verification using OCR, blockchain-stored hashes, QR codes, and secure online payments.",

    overview:
      "An autonomous degree attestation and verification platform that streamlines academic document attestation using AI-powered OCR, automated eligibility checking, secure SHA-256 hashing, and blockchain technology. The system generates a digital degree after successful verification, creates a unique hash for the generated degree, and stores that hash on the blockchain. The degree can then be verified through its QR code or by entering its hash through the platform's verification scanner.",

    problem:
      "Traditional degree attestation often requires students to go through a manual process, which can take significant time and effort. At the same time, there is no simple and reliable way for third parties to verify whether an attested degree is authentic. These two separate processes create difficulties for both students and organizations responsible for document verification.",

    solution:
      "The platform automates the attestation workflow by using OCR to extract and analyze information from uploaded transcripts. After providing their personal and academic details, students complete the payment through Stripe and upload their transcript. The system evaluates the extracted academic information and checks the eligibility criteria. If the student's CGPA is 2.5 or above, the system generates an attested degree in PDF format; otherwise, the application is rejected. Each generated degree contains a QR code and a unique document hash. The hash is securely recorded on the blockchain, allowing the degree to be independently verified. Users can scan the QR code directly from the degree or enter its hash through the verification scanner available on the platform's homepage to retrieve and verify the degree's stored information.",

    features: [
      "AI-powered OCR document verification",
      "Blockchain-backed degree verification",
      "SHA-256 document hashing",
      "QR-code certificate verification",
      "Transaction hash verification",
      "Stripe payment integration",
      "Google OAuth authentication",
    ],

    link: "https://degree-attestation.netlify.app/",

    source: {
      frontend:
        "https://github.com/smshah121/degree-attestation-system-frontend",
      backend:
        "https://github.com/smshah121/degree-attestation-system-backend",
      SmartContract:
        "https://github.com/smshah121/degree-attestation-smart_contract",
    },

    tech: [
      "React",
      "Tailwind",
      "Redux",
      "Nest",
      "Postgres",
      "JWT",
      "GoogleOAuth",
      "Stripe",
      "Ethereum",
      "Solidity",
      "Git",
      "Cloudinary",
      "Netlify",
      "Heroku",
    ],
  },

  {
    img: "/pricetag.png",
    title: "Multi-Vendor Marketplace",

   desc: "A multi-vendor marketplace where customers can become approved sellers, create stores, manage products, and accept online or COD payments.",

    overview:
      "PriceTag is a multi-vendor e-commerce marketplace designed to allow customers to not only purchase products but also become sellers and create their own stores. Each seller can build and manage their own product catalog while customers can shop from multiple sellers through the same platform.",

    problem:
      "Traditional e-commerce platforms often operate around a single store or provide limited opportunities for customers to become independent sellers. Customers may also have to rely solely on Cash on Delivery, while unverified seller accounts and weak authentication can create additional security and trust concerns.",

    solution:
      "PriceTag provides a marketplace where customers can apply to become sellers and open their own stores after receiving admin approval. To maintain a more controlled seller environment, users must submit a seller application containing details about their proposed store before gaining seller access. Once approved, sellers can manage their own products and represent their stores independently within the marketplace. Customers can purchase products using both Cash on Delivery and online payments through Stripe. The platform also supports traditional authentication along with Google OAuth 2.0, providing users with multiple secure authentication options.",

    features: [
        "Multi-vendor marketplace",
  "Customer-to-seller conversion",
  "Seller application and admin approval workflow",
  "Independent seller stores",
  "Custom store identity and product management",
  "Role-based access for customers, sellers, and admins",
  "Product CRUD and inventory management",
  "Shopping cart functionality",
  "Stripe online payments",
  "Cash on Delivery",
  "Secure payment processing",
  "JWT authentication",
  "Google OAuth 2.0 authentication",
  "Protected role-based routes",
  "Cloudinary image uploads",
  "Order management and status tracking",
    ],

    link: "https://pricetag-tech.netlify.app/",

    source: {
      frontend:
        "https://github.com/smshah121/E-Commerce-Web-App-Frontend",
      backend:
        "https://github.com/smshah121/E-Commerce-Web-App-Backend",
    },

    tech: [
      "React",
      "Tailwind",
      "Redux",
      "Motion",
      "Nest",
      "Postgres",
      "JWT",
      "GoogleOAuth",
      "Stripe",
      "Cloudinary",
      "Git",
      "Netlify",
      "Render",
    ],
  },

  {
    img: "/lms2.png",
    title: "Learning Management System",

   desc: "A centralized LMS connecting students and instructors through course registration, schedules, lectures, and course-specific announcements.",

    overview:
      "A centralized Learning Management System designed to improve coordination between students and instructors by bringing course registration, instructor information, class schedules, learning materials, and course announcements into one platform.",

    problem:
      "Students and instructors often rely on WhatsApp groups and other scattered communication channels to coordinate courses. Important lectures, messages, and updates can easily get buried in chat conversations. Students may also have difficulty finding available courses, knowing which instructor is teaching them, checking class timings, and staying informed about course-related updates.",

    solution:
      "The LMS provides a dedicated platform where students can explore available courses along with their instructors and class timings, allowing them to choose courses according to their preferences and availability. Once enrolled, students can access their course content and receive announcements specific to their enrolled courses. Instructors can manage their courses and communicate important updates through course announcements, such as upcoming quizzes, schedule changes, cancelled classes, or other academic information.",

    features: [
      "Centralized student-instructor communication", "Available course listing", "Instructor information and course assignment", "Course schedule and timing information", "Course registration and enrollment", "Student course dashboard", "Course lecture access", "Course-specific announcements", "Quiz and class notifications", "Instructor course management", "Role-based access", "JWT authentication",
    ],

    link: "https://learning-management-system-app1.netlify.app/",

    source: {
      frontend:
        "https://github.com/smshah121/Learning-Management-System-Frontend",
      backend:
        "https://github.com/smshah121/Learning-Management-System-Backend",
    },

    tech: [
      "React",
      "Tailwind",
      "Motion",
      "Redux",
      "Nest",
      "JWT",
      "Postgres",
      "Cloudinary",
      "Git",
      "Netlify",
      "Render",
    ],
  },

  {
    img: "/fraud.png",
    title: "AI-Powered Credit Card Fraud Detection System",

    desc: "AI-powered system that analyzes credit card transactions using machine learning to detect potential fraud and provide confidence scores.",

    overview:
      "AI-powered fraud detection platform that analyzes credit card transactions using a machine learning model to identify potentially fraudulent transactions. The system combines React, NestJS, and a FastAPI-based machine learning service, with transaction results and history stored securely in the database.",

    problem:
      "Credit card transactions can contain fraudulent activity that may be difficult to identify manually, especially when a large number of transactions need to be analyzed. An automated system is needed to evaluate transaction data and quickly identify potentially fraudulent activity.",

    solution:
      "The system allows users to submit transaction details through the frontend. The NestJS backend processes the request and sends the required transaction features to a FastAPI machine learning service. A Logistic Regression model, trained on the Credit Card Fraud Detection dataset containing 284K+ transactions, analyzes the transaction and returns a fraud prediction with a confidence score. The result is then displayed to the user and stored as transaction history.",

    features: [
     "Credit card transaction analysis", "Machine learning-based fraud detection", "Logistic Regression model", "FastAPI machine learning service", "NestJS backend integration", "Real-time fraud prediction", "Fraud confidence score", "Transaction history", "ML-ready feature transformation", "PostgreSQL database storage",
    ],

    link: "https://ai-fraud-detections.netlify.app/",

    source: {
      frontend:
        "https://github.com/smshah121/fraud-detection-frontend",
      backend:
        "https://github.com/smshah121/fraud-detection-backend",
      mlCode:
        "https://github.com/smshah121/fraud-detection-ml-api",
    },

    tech: [
      "React",
      "Tailwind",
      "Redux",
      "Nest",
      "Postgres",
      "Python",
      "FastAPI",
      "Git",
      "Netlify",
      "Vercel",
      "Azure",
    ],
  },

  {
    img: "/pixora.png",
    title: "Pixora Media Collection",

    desc: "A personal media platform for organizing photos, videos, and GIFs into custom collections for easy access and management.",

    overview:
      "Pixora is a personal media organization platform that allows users to store and organize photos, videos, and GIFs into custom collections. Users can create as many collections as they need and give each collection their own name based on the type or purpose of the media they want to save.",

    problem:
      "People often save images, videos, and GIFs across different apps, chats, social media platforms, or directly in their phone gallery. Over time, these files can become difficult to find, get buried among other media, or consume a significant amount of device storage. Managing different types of media separately can also make it difficult to keep related content organized.",

    solution:
      "Pixora provides authenticated users with private media collections, protected routes, and multiple Pixora provides a dedicated platform where users can create unlimited custom collections and organize different types of media according to their own needs. A user can create a collection with any name and save related photos, videos, and GIFs inside it, making their media easier to organize, access, and manage from one place. options through JWT and Google OAuth 2.0.",

    features: [
      "Create custom media collections",
      "Create multiple collections based on personal needs",
      "Store photos, videos, and GIFs",
      "Organize related media under custom collection names",
      "JWT authentication",
      "Google OAuth 2.0",
      "Media organization",
      "Cloud-based media storage",
    ],

    link: "https://pixora-media.netlify.app/",

    source: {
      frontend: "https://github.com/smshah121/pixora-frontend",
      backend: "https://github.com/smshah121/pixora-backend",
    },

    tech: [
      "React",
      "Tailwind",
      "Redux",
      "Nest",
      "JWT",
      "Postgres",
      "GoogleOAuth",
      "Git",
      "Netlify",
      "Heroku",
    ],
  },

  {
    img: "/quotes.png",
    title: "QuoteNest",

    desc: "A personal quote management platform for saving, organizing, and easily copying favorite quotes from one place.",

    overview:
      "QuoteNest is a personalized quote management platform designed to give users a dedicated and reliable place to save, manage, and revisit their favorite quotes.",

    problem:
      "People often save quotes they like in temporary places such as chat messages, notes, or notebooks. Over time, messages get buried in conversations, while handwritten or scattered notes can be difficult to find. This makes it inconvenient to keep and revisit meaningful quotes.",

    solution:
      "QuoteNest provides users with a dedicated account where they can securely store all of their favorite quotes in one place. Instead of relying on scattered messages or physical notes, users can manage their personal collection and quickly access any saved quote whenever they need it. The platform also provides a copy option, allowing users to easily copy a quote for use elsewhere.",

    features: [
      "Create and save personal quotes",
      "View all saved quotes in one place",
      "Edit and delete saved quotes",
      "Google OAuth 2.0 authentication",
      "JWT-based authentication",
      "User-specific quote management",
    ],

    link: "https://quotenest-quotes.netlify.app/",

    source: {
      frontend: "https://github.com/smshah121/quotes-frontend",
      backend:
        "https://github.com/smshah121/Quotes-Management-System-Backend",
    },

    tech: [
      "React",
      "Tailwind",
      "Redux",
      "Nest",
      "Postgres",
      "JWT",
      "GoogleOAuth",
      "Git",
      "Netlify",
      "Render",
    ],
  },
];


const ProjectModal = ({ project, darkMode, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Prevent background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3.5 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

      {/* Modal */}
      <div
        className={`relative z-10 w-full max-w-3xl max-h-[88vh] flex flex-col overflow-hidden rounded-2xl border shadow-2xl ${
          darkMode
            ? "bg-slate-950/95 border-slate-800/90 shadow-indigo-950/30"
            : "bg-white/95 border-slate-200/90 shadow-slate-300/60"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80" />

        {/* ================= HEADER ================= */}
        <div
          className={`relative shrink-0 px-5 py-5 sm:px-7 sm:py-6 border-b ${
            darkMode
              ? "border-slate-800/80 bg-slate-950/50"
              : "border-slate-200/80 bg-white/70"
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 pr-2">
              {/* Label */}
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />

                <span
                  className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] ${
                    darkMode ? "text-indigo-400" : "text-indigo-500"
                  }`}
                >
                  Project Details
                </span>
              </div>

              {/* Title */}
              <h2
                id="project-modal-title"
                className={`text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight leading-tight ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                {project.title}
              </h2>

              {/* Description */}
              <p
                className={`text-xs sm:text-sm mt-2 leading-6 max-w-2xl ${
                  darkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {project.desc}
              </p>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-lg border transition-all duration-150 cursor-pointer active:scale-95 ${
                darkMode
                  ? "text-slate-400 bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-800 hover:text-white"
                  : "text-slate-500 bg-slate-100 border-slate-200 hover:border-slate-300 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              <span className="leading-none select-none">×</span>
            </button>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div
          className={`flex-1 min-h-0  overflow-y-auto px-5 py-7 sm:px-7 sm:py-8 ${
            darkMode
              ? "modal-scrollbar-dark"
              : "modal-scrollbar-light"
          }`}
        >
          {/* Overview */}
          {project.overview && (
            <section className="mb-9">
              <ModalHeading darkMode={darkMode}>
                Overview
              </ModalHeading>

              <p
                className={`text-sm sm:text-[15px] leading-7 ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {project.overview}
              </p>
            </section>
          )}

          {/* Problem + Solution */}
          {(project.problem || project.solution) && (
            <section className="mb-9">
              <ModalHeading darkMode={darkMode}>
                The Challenge & Approach
              </ModalHeading>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Problem */}
                {project.problem && (
                  <div
                    className={`relative p-4 sm:p-5 rounded-xl border ${
                      darkMode
                        ? "bg-slate-900/40 border-slate-800/80"
                        : "bg-slate-50/80 border-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          darkMode
                            ? "bg-rose-400"
                            : "bg-rose-500"
                        }`}
                      />

                      <h4
                        className={`text-xs sm:text-sm font-semibold ${
                          darkMode
                            ? "text-slate-200"
                            : "text-slate-800"
                        }`}
                      >
                        The Problem I Identified
                      </h4>
                    </div>

                    <p
                      className={`text-xs sm:text-[13.5px] leading-6 ${
                        darkMode
                          ? "text-slate-400"
                          : "text-slate-600"
                      }`}
                    >
                      {project.problem}
                    </p>
                  </div>
                )}

                {/* Solution */}
                {project.solution && (
                  <div
                    className={`relative p-4 sm:p-5 rounded-xl border ${
                      darkMode
                        ? "bg-slate-900/40 border-slate-800/80"
                        : "bg-slate-50/80 border-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          darkMode
                            ? "bg-emerald-400"
                            : "bg-emerald-500"
                        }`}
                      />

                      <h4
                        className={`text-xs sm:text-sm font-semibold ${
                          darkMode
                            ? "text-slate-200"
                            : "text-slate-800"
                        }`}
                      >
                        The Solution I Built
                      </h4>
                    </div>

                    <p
                      className={`text-xs sm:text-[13.5px] leading-6 ${
                        darkMode
                          ? "text-slate-400"
                          : "text-slate-600"
                      }`}
                    >
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <section className="mb-9">
              <ModalHeading darkMode={darkMode}>
                Key Features
              </ModalHeading>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`group flex items-start gap-3 px-3.5 py-3 rounded-xl border transition-all duration-200 ${
                      darkMode
                        ? "bg-slate-900/40 border-slate-800/70 hover:border-slate-700 hover:bg-slate-900/70"
                        : "bg-slate-50 border-slate-200/70 hover:border-slate-300 hover:bg-slate-100/80"
                    }`}
                  >
                    <span
                      className={`mt-[7px] w-1.5 h-1.5 shrink-0 rounded-full transition-transform duration-200 group-hover:scale-125 ${
                        darkMode
                          ? "bg-indigo-400"
                          : "bg-indigo-500"
                      }`}
                    />

                    <span
                      className={`text-xs sm:text-sm leading-6 ${
                        darkMode
                          ? "text-slate-300"
                          : "text-slate-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tech Stack */}
          {project.tech && project.tech.length > 0 && (
            <section className="mb-9">
              <ModalHeading darkMode={darkMode}>
                Tech Stack
              </ModalHeading>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-200 ${
                      darkMode
                        ? "bg-slate-900/90 text-slate-300 border-slate-800 hover:border-indigo-500/40 hover:text-white"
                        : "bg-slate-100 text-slate-700 border-slate-200 hover:border-indigo-300 hover:text-slate-900"
                    }`}
                  >
                    {TechIcons[tech] && (
                      <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                        {TechIcons[tech]}
                      </span>
                    )}

                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

         
        </div>

         {/* Deployment Note */}
          <div
            className={`shrink-0 p-4 border-t text-xs leading-6 ${
              darkMode
                ? "border-slate-800 text-slate-500"
                : "border-slate-200 text-slate-500"
            }`}
          >
            <span
              className={`font-medium ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Deployment Note:
            </span>{" "}
            Some projects use free-tier hosting, so their backend may
            take a few seconds to wake up after inactivity. If you'd
            like to explore a project in detail, feel free to contact
            me for a live walkthrough.
          </div>
      </div>
    </div>,
    document.body
  );
};


/* ================= MODAL HEADING ================= */

const ModalHeading = ({ children, darkMode }) => {
  return (
    <h3
      className={`text-sm sm:text-[15px] font-semibold tracking-tight mb-3.5 ${
        darkMode ? "text-slate-100" : "text-slate-900"
      }`}
    >
      {children}
    </h3>
  );
};


/* ================= SECTION HEADING ================= */

const SectionHeading = ({ children, darkMode }) => {
  return (
    <h3
      className={`text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] mb-3 flex items-center gap-2 ${
        darkMode ? "text-indigo-400" : "text-indigo-500"
      }`}
    >
      <span className="w-5 h-px bg-current opacity-60" />
      {children}
    </h3>
  );
};
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
    FastAPI: <SiFastapi className="text-[#009688]" title="FastAPI" />,
    Cloudinary:<SiCloudinary className="text-[#3448C5]"  title="Cloudinary" />,
    Render:<SiRender className="text-[#46E3B7]" title="Render"/>,
    Netlify:<SiNetlify className="text-[#00C7B7]" title="Netlify"/>,
    Heroku:<GrHeroku className="text-[#430098]" title="Heroku"/>,
    Vercel:<IoLogoVercel className="text-[#000000]" title="Vercel"/>,
    Azure:<VscAzure className="text-[#0078D4]" title="Azure"/>,
    Git:<FaGitAlt className="text-[#F1502F]"title="Git" />
  };

 

 // Theme Persistence
useEffect(() => {
  localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
}, [darkMode]);

// Pointer Tracker (High-Performance & Null-Safe)
useEffect(() => {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) return;

  const dot = cursorDotRef.current;
  const ring = cursorRingRef.current;
  if (!dot || !ring) return; // Guard against null targets

  // quickTo is significantly smoother than creating new tweens per frame
  const xDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power2.out" });
  const yDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power2.out" });
  const xRing = gsap.quickTo(ring, "x", { duration: 0.25, ease: "power2.out" });
  const yRing = gsap.quickTo(ring, "y", { duration: 0.25, ease: "power2.out" });

  const onMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    xDot(x);
    yDot(y);
    xRing(x - 12);
    yRing(y - 12);
  };

  window.addEventListener("mousemove", onMouseMove);
  return () => window.removeEventListener("mousemove", onMouseMove);
}, []);

// GSAP 3D Page Fold & Reveal Engine
useEffect(() => {
  const scopeElement = mainContainerRef?.current || document.body;

  const ctx = gsap.context(() => {
    const sections = gsap.utils.toArray(".panel-section");
    if (!sections.length) return;

    sections.forEach((section, index) => {
      gsap.set(section, {
        transformOrigin: "center top",
        transformPerspective: 1200,
        willChange: "transform, opacity, filter",
      });

      // 3D Fold Transition
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
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      // Inner Elements Staggered Reveal
      const innerItems = section.querySelectorAll(".gsap-reveal");
      if (innerItems.length > 0) {
        gsap.fromTo(
          innerItems,
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
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    });
  }, scopeElement);

  return () => ctx.revert();
}, []);


 useEffect(() => {
  const refresh = () => {
    ScrollTrigger.refresh();
  };

  window.addEventListener("load", refresh);

  const timeout = setTimeout(refresh, 500);

  return () => {
    window.removeEventListener("load", refresh);
    clearTimeout(timeout);
  };
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
  const target = document.getElementById(id);

  if (!target || !lenisRef.current) return;

  lenisRef.current.scrollTo(target, {
    offset: -80,
    duration: 1.9,
    immediate: false,
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
     <div
    ref={ambientGlowRef}
    className={`fixed top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none z-0 transition-colors duration-500 ${
      darkMode ? "bg-indigo-700/15" : "bg-indigo-300/25"
    }`}
  />
      <canvas ref={smokeCanvasRef} className="fixed inset-0 pointer-events-none z-40 hidden md:block" />
      {/* Floating Centered Header Navigation Bar */}
      <header className="fixed top-0 left-0 w-full flex justify-center py-4 px-6 z-50 pointer-events-none">
        <div className={`flex items-center gap-4 px-3 py-1.5 rounded-full border pointer-events-auto transition-none shadow-xl ${
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
        <div
    className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-20 ${
      darkMode ? "bg-indigo-600" : "bg-indigo-300"
    }`}
  />
        <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
          <div className="gsap-reveal mt-8 mb-2 md:mb-0 ">
      <span
        className={`inline-flex items-center gap-2.5 text-[10px] sm:text-xs font-mono font-medium tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border transition-all duration-300 ${
          darkMode
            ? "text-indigo-400 bg-indigo-500/10 border-indigo-500/20 shadow-sm shadow-indigo-950/40"
            : "text-indigo-600 bg-indigo-500/5 border-indigo-500/20 shadow-sm"
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
        </span>
        Crafting Software
      </span>
    </div>
          
         <h1
  className={`gsap-reveal font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight w-full max-w-full mx-auto ${ 
    darkMode ? "text-white" : "text-slate-900" 
  }`}
>
  Syed Momin{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-[0_0_30px_rgba(129,140,248,0.15)]">
    Ali Shah
  </span>
</h1>
         <div
      className={`gsap-reveal text-lg sm:text-2xl md:text-3xl font-semibold mt-5 h-9 flex items-center justify-center w-full font-mono ${
        darkMode ? "text-indigo-400/90" : "text-indigo-600/90"
      }`}
    >
      <Typewriter
        options={{
          strings: [
            "Full Stack Developer",
            "Software Engineer",
            "React Developer",
            "NestJS Developer",
          ],
          autoStart: true,
          loop: true,
          delay: 55,
          deleteSpeed: 35,
        }}
      />
    </div>

          <p className={`gsap-reveal mt-3 text-sm sm:text-base md:text-md max-w-xl leading-relaxed mx-auto px-2 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Final-Year <span className="text-indigo-500 font-semibold">Software Engineering</span> student and <span className="text-indigo-500 font-semibold">Full Stack Developer</span> specializing in building scalable, production-ready web applications with <span className="text-indigo-500 font-semibold">React, NestJS</span> and <span className="text-indigo-500 font-semibold">PostgreSQL</span>.
          </p>

         <div className="gsap-reveal flex gap-4 mt-8 flex-wrap justify-center items-center">
      <a
        href="/Job Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="Syed Momin Ali Shah Resume.pdf"
        className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/25 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 text-xs sm:text-sm cursor-pointer"
      >
        <IoMdDownload size={17} />
        <span>Download CV</span>
      </a>

      <button
  onClick={() => scrollToSection("project")}
  className={`flex items-center gap-2 px-6 py-3.5 rounded-xl border font-semibold text-xs sm:text-sm cursor-pointer transform hover:-translate-y-0.5 active:scale-95 transition-none duration-150 ${
    darkMode
      ? "bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800 hover:border-slate-700"
      : "bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200"
  }`}
>
  <span>View Projects</span>
  <span className="text-xs">→</span>
</button>
    </div>

         <div className="gsap-reveal flex justify-center items-center mt-10 gap-3">
      {[
        { href: "https://www.linkedin.com/in/smshah121", icon: <FaLinkedin size={18} />, label: "LinkedIn", hover: "hover:text-indigo-400 hover:border-indigo-500/40" },
        { href: "https://github.com/smshah121", icon: <FaGithub size={18} />, label: "GitHub", hover: darkMode ? "hover:text-white hover:border-slate-600" : "hover:text-black hover:border-slate-400" },
        { href: "https://www.instagram.com/__smshah__", icon: <FaInstagram size={18} />, label: "Instagram", hover: "hover:text-pink-400 hover:border-pink-500/40" },
        { href: "mailto:sm.shah2003@hotmail.com", icon: <PiMicrosoftOutlookLogo size={18} />, label: "Outlook", hover: "hover:text-sky-400 hover:border-sky-500/40" },
        { href: "mailto:smshah.2003@gmail.com", icon: <IoMdMail size={18} />, label: "Gmail", hover: "hover:text-rose-400 hover:border-rose-500/40" },
      ].map((social, idx) => (
        <a
          key={idx}
          href={social.href}
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-full flex items-center justify-center border transition-none duration-200 transform hover:-translate-y-1 ${social.hover} ${
            darkMode
              ? "bg-slate-900/50 border-slate-800 text-slate-400"
              : "bg-white border-slate-200 text-slate-600 shadow-sm"
          }`}
        >
          {social.icon}
        </a>
      ))}
    </div>
        </div>
        <div className="gsap-reveal z-10 pt-4 opacity-75 hover:opacity-100 transition-opacity">
    <button
      onClick={() => scrollToSection("about")}
      className={`inline-flex flex-col items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest cursor-pointer transition-colors ${
        darkMode ? "text-slate-500 hover:text-indigo-400" : "text-slate-400 hover:text-indigo-600"
      }`}
    >
      <span>Scroll</span>
      <div className={`w-4 h-7 rounded-full border flex items-start justify-center p-1 ${
        darkMode ? "border-slate-700" : "border-slate-300"
      }`}>
        <div className="w-1 h-1.5 rounded-full bg-indigo-500 animate-bounce" />
      </div>
    </button>
  </div>
      </section>

      {/* SECTION 2: ABOUT */}
  <section
  id="about"
  ref={sectionRef}
  className={`panel-section relative py-28 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center transition-colors duration-500 ${
    darkMode ? "text-slate-100" : "text-slate-900"
  }`}
>
  {/* Section Header */}
  <div className="gsap-reveal mb-16">
   

    <h2
      ref={aboutHeadingRef}
      className="font-['Black_Ops_One'] text-4xl  md:text-7xl uppercase tracking-wider bg-clip-text text-indigo-500"
    >
      <span className={darkMode ? "text-gray-100" : "text-slate-900"}>
        {"About".split("").map((letter, index) => (
          <span key={index} className="about-letter inline-block">
            {letter}
          </span>
        ))}
      </span>

      {" Me".split("").map((letter, index) => (
        <span key={index} className="about-letter inline-block">
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </h2>
  </div>

  {/* Main Content Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
    {/* Left Column */}
    <div className="lg:col-span-7 flex flex-col gap-12">
      {/* Executive Summary */}
      <div className="gsap-reveal">
        <h3 className="text-sm uppercase tracking-widest text-indigo-400 font-semibold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          Executive Summary
        </h3>

        <div
          className={`space-y-5 text-base md:text-lg leading-relaxed ${
            darkMode ? "text-slate-400" : "text-slate-700"
          }`}
        >
          <p>
            I’m a Full-Stack Developer and final-year Software Engineering student at Iqra University, focused on building scalable and maintainable web applications.
          </p>
          <p>
            I work primarily with React, TypeScript, NestJS, and PostgreSQL, building responsive interfaces and reliable backend systems.
          </p>
          <p>
            I also explore AI/ML and blockchain technologies, integrating them into projects to solve practical problems and expand what I can build as a Software Engineer.
          </p>
        </div>
      </div>

      {/* Education & GitHub Activity Row */}
      <div
  className={`grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8 pt-8 border-t ${
    darkMode ? "border-slate-800/80" : "border-slate-200"
  }`}
>
  {/* Education */}
  <div className="gsap-reveal flex items-start gap-4">
    <div
      className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
        darkMode
          ? "bg-indigo-500/10 text-indigo-400"
          : "bg-indigo-50 text-indigo-600"
      }`}
    >
      <FaGraduationCap />
    </div>

    <div>
      <p
        className={`text-[10px] uppercase tracking-[0.16em] font-semibold mb-1 ${
          darkMode ? "text-indigo-400" : "text-indigo-600"
        }`}
      >
        Education
      </p>

      <h4
        className={`font-bold text-sm sm:text-base leading-snug ${
          darkMode ? "text-slate-100" : "text-slate-900"
        }`}
      >
        BS Software Engineering
      </h4>

      <p
        className={`text-xs sm:text-sm mt-1 ${
          darkMode ? "text-slate-400" : "text-slate-500"
        }`}
      >
        Iqra University
      </p>

      <span className="inline-flex items-center gap-2 mt-3 text-[10px] uppercase tracking-wider font-semibold text-indigo-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        2023 — Present
      </span>
    </div>
  </div>

  {/* Development */}
  <div className="gsap-reveal flex items-start gap-4">
    <div
      className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
        darkMode
          ? "bg-indigo-500/10 text-indigo-400"
          : "bg-indigo-50 text-indigo-600"
      }`}
    >
      <FaGithub />
    </div>

    <div className="min-w-0">
      <p
        className={`text-[10px] uppercase tracking-[0.16em] font-semibold mb-1 ${
          darkMode ? "text-indigo-400" : "text-indigo-600"
        }`}
      >
        Development
      </p>

      <h4
        className={`font-bold text-sm sm:text-base leading-snug ${
          darkMode ? "text-slate-100" : "text-slate-900"
        }`}
      >
        GitHub Dashboard
      </h4>

      {githubStats ? (
        <div className="flex items-center gap-5 sm:gap-6 mt-3">
          <div>
            <span className="block text-xl sm:text-2xl font-extrabold text-indigo-500 leading-none">
              {githubStats.repos}
            </span>
            <span
              className={`block text-[9px] uppercase tracking-wider mt-1 ${
                darkMode ? "text-slate-500" : "text-slate-500"
              }`}
            >
              Repositories
            </span>
          </div>

          <div
            className={`w-px h-7 ${
              darkMode ? "bg-slate-800" : "bg-slate-200"
            }`}
          />

          <div>
            <span className="block text-xl sm:text-2xl font-extrabold text-indigo-500 leading-none">
              {githubStats.commits}+
            </span>
            <span
              className={`block text-[9px] uppercase tracking-wider mt-1 ${
                darkMode ? "text-slate-500" : "text-slate-500"
              }`}
            >
              Contributions
            </span>
          </div>
        </div>
      ) : (
        <p
          className={`text-xs mt-3 ${
            darkMode ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Loading GitHub data…
        </p>
      )}

      <a
        href="https://github.com/smshah121"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 mt-3 text-[11px] sm:text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
      >
        View Profile
        <span>→</span>
      </a>
    </div>
  </div>
</div>
    </div>

    {/* Right Column */}
    <div className="lg:col-span-5 flex flex-col gap-10">
      {/* Availability Status */}
     <div
  className={`gsap-reveal pb-6 border-b flex items-center justify-between gap-3 sm:gap-4 ${
    darkMode ? "border-slate-800/80" : "border-slate-200"
  }`}
>
  {/* Availability */}
  <div className="flex items-center gap-3 min-w-0">
    <div className="relative flex items-center justify-center shrink-0">
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute opacity-75" />
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 relative" />
    </div>

    <div className="min-w-0">
      <h4
        className={`text-sm font-semibold tracking-wide ${
          darkMode ? "text-slate-100" : "text-slate-900"
        }`}
      >
        Available For
      </h4>

      <p
        className={`text-[10px] sm:text-xs mt-1 sm:mt-1.5 leading-relaxed ${
          darkMode ? "text-slate-400" : "text-slate-500"
        }`}
      >
        Software Engineering Roles & Freelance Projects
      </p>
    </div>
  </div>

  {/* Button */}
  <button
    onClick={() => scrollToSection("contact")}
    className="shrink-0 inline-flex items-center justify-center px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-200"
  >
    Let's Talk →
  </button>
</div>

      {/* Numerical Metrics */}
      <div className="gsap-reveal grid grid-cols-2 gap-8">
        <div className="flex flex-col">
          <span
            ref={fullstackCountRef}
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            0+
          </span>
          <span className={`text-xs md:text-sm font-medium mt-1 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            Full-Stack Projects
          </span>
        </div>

        <div className={`flex flex-col border-l pl-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
          <span
            ref={frontendCountRef}
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            0+
          </span>
          <span className={`text-xs md:text-sm font-medium mt-1 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            Web Interfaces
          </span>
        </div>
      </div>

      {/* Core Technologies Graphic */}
      <div className="gsap-reveal flex flex-col items-center justify-center pt-4">
        <div className="relative w-[230px] sm:w-[260px] aspect-square">
          {/* Orbit rings */}
          <div className={`absolute inset-0 rounded-full border border-dashed ${darkMode ? "border-slate-800" : "border-slate-200"}`} />
          <div className={`absolute inset-8 rounded-full border ${darkMode ? "border-slate-800/50" : "border-slate-200/60"}`} />

          {/* Center hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex flex-col items-center justify-center z-10">
            <FaLaptopCode size={32} className="text-indigo-400 text-lg mb-0.5" />
          </div>

          {/* Orbiting icons */}
         <div ref={orbitRef} className="absolute inset-0 pointer-events-none">
  {/* Hairline Orbital Track Ring (Anchors the icons visually) */}
  <div
    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-dashed pointer-events-none transition-none ${
      darkMode ? "border-indigo-500/20" : "border-slate-300/60"
    }`}
  />

  {/* Faint Concentric Core Ring */}
  <div
    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full border pointer-events-none transition-none ${
      darkMode ? "border-white/[0.03]" : "border-slate-200/40"
    }`}
  />

  {/* Orbiting Tech Nodes */}
  {technologies.map((tech, i) => {
    const angle = -90 + (360 / technologies.length) * i;
    const radius = 100;

    return (
      <div
        key={i}
        className="absolute w-10 h-10 top-1/2 left-1/2 -ml-5 -mt-5 pointer-events-auto"
        style={{
          transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
        }}
      >
        <div className="relative group flex items-center justify-center w-full h-full">
          {/* Node Button / Container */}
          <div
            className={`orbit-icon-spin w-10 h-10 rounded-full flex items-center justify-center text-base sm:text-lg backdrop-blur-md border transition-all duration-300 cursor-pointer transform group-hover:scale-125 group-hover:z-30 ${
              darkMode
                ? "bg-slate-900/80 border-slate-800 text-slate-400 group-hover:text-white group-hover:border-indigo-500/50 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.35)]"
                : "bg-white/90 border-slate-200 text-slate-600 group-hover:text-indigo-600 group-hover:border-indigo-300 group-hover:shadow-[0_4px_12px_rgba(79,70,229,0.15)]"
            }`}
          >
            {tech.icon}
          </div>

          {/* Micro Tooltip on Hover */}
          {tech.name && (
            <div
              className={`absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[9px] font-mono tracking-wide uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 transform group-hover:-translate-y-1 shadow-md z-40 ${
                darkMode
                  ? "bg-slate-900 border border-slate-800 text-indigo-300 shadow-black/50"
                  : "bg-slate-900 text-white shadow-slate-300"
              }`}
            >
              {tech.name}
            </div>
          )}
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
      {/* SECTION 3: TECH STACK */}
<section
  id="skills"
  className={`panel-section py-28 relative overflow-hidden transition-colors duration-500 min-h-screen flex items-center ${
    darkMode ? "text-slate-100" : "text-slate-900"
  }`}
>
  {/* Ambient Background Glow */}
  <div
    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full filter blur-[150px] opacity-10 pointer-events-none ${
      darkMode ? "bg-indigo-600" : "bg-indigo-300"
    }`}
  />

  <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
    {/* Section Header */}
    <div className="gsap-reveal mb-20 text-center md:text-left">
     
      <h2
        className={`text-4xl  md:text-5xl font-['Black_Ops_One'] uppercase tracking-wider ${
          darkMode ? "text-white" : "text-slate-950"
        }`}
      >
        {"Tech".split("").map((letter, index) => (
          <span key={index} className="tech-letter inline-block">
            {letter}
          </span>
        ))}
        <span className="text-indigo-500">
          {" Stack".split("").map((letter, index) => (
            <span key={index} className="tech-letter inline-block">
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </h2>
    </div>

    {/* Tech Categories Stack */}
    <div className="space-y-16">
      {[
        { id: "01", cat: "Frontend Engineering", stack: FrontendTech },
        { id: "02", cat: "Backend & Database", stack: BackendTech },
        { id: "03", cat: "Cloud, Deployment & Tools", stack: Tools }
      ].map((block, bIdx) => (
        <div key={bIdx} className="gsap-reveal">
          {/* Category Header Bar */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-indigo-400/80">
                {block.id}
              </span>
              <span className={`h-3 w-[1px] ${darkMode ? "bg-slate-800" : "bg-slate-300"}`} />
              <h3
                className={`text-sm md:text-base w-30 md:w-60 font-semibold tracking-wide uppercase font-mono ${
                  darkMode ? "text-slate-200" : "text-slate-800"
                }`}
              >
                {block.cat}
              </h3>
            </div>
            
            <div className={`hidden sm:block flex-1 mx-6 h-[1px] ${darkMode ? "bg-slate-800/80" : "bg-slate-200"}`} />
            
            <span className={`text-[8px] md:text-[11px] font-mono tracking-wider uppercase ${
              darkMode ? "text-slate-500" : "text-slate-400"
            }`}>
              {block.stack.length} Technologies
            </span>
          </div>

          {/* Interactive Technology Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {block.stack.map((tech, idx) => (
              <div
                key={idx}
                className={`group relative flex items-center gap-3.5 px-4 py-3.5 rounded-lg transition-all duration-300 cursor-default ${
                  darkMode
                    ? "hover:bg-slate-900/60 text-slate-300 hover:text-white"
                    : "hover:bg-slate-100/80 text-slate-700 hover:text-slate-950"
                }`}
              >
                {/* Dynamic Brand Glow on Hover */}
                <div
                  className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-15 blur-sm transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: tech.color }}
                />

                {/* Left Subtle Indicator Line */}
                <div
                  className="w-1 h-3.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ backgroundColor: tech.color }}
                />

                {/* Icon */}
                <div
                  style={{ color: tech.color }}
                  className="text-2xl transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                >
                  {tech.icon}
                </div>

                {/* Technology Name */}
                <span className="font-medium text-xs sm:text-sm tracking-tight truncate">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* SECTION 4: PROJECTS */}
<section
  id="project"
  className={`panel-section py-28 max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden min-h-screen transition-colors duration-500 ${
    darkMode ? "text-slate-100" : "text-slate-900"
  }`}
>
  {/* Ambient Background Radial */}
  <div
    className={`absolute top-1/3 -right-24 w-[500px] h-[500px] rounded-full filter blur-[160px] opacity-10 pointer-events-none ${
      darkMode ? "bg-indigo-500" : "bg-purple-300"
    }`}
  />

  {/* Section Header */}
  <div className="gsap-reveal mb-20 text-center md:text-left">
    
    <h2
      className={`text-4xl md:text-5xl font-['Black_Ops_One'] uppercase tracking-wider ${
        darkMode ? "text-white" : "text-slate-950"
      }`}
    >
      {"Featured".split("").map((letter, index) => (
        <span key={index} className="project-letter inline-block">
          {letter}
        </span>
      ))}
      <span className="text-indigo-500 block md:inline">
        {" Projects".split("").map((letter, index) => (
          <span key={index} className="project-letter inline-block">
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </span>
    </h2>
  </div>

  {/* Projects Showcase Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
    {MyProjects.map((project, index) => {
      const sourceEntries = Object.entries(project.source || {}).filter(([_, url]) => Boolean(url));
      const hasMultipleRepos = sourceEntries.length > 1;
      const singleRepoUrl = sourceEntries.length === 1 ? sourceEntries[0][1] : null;

      return (
        <div
          key={index}
          className="gsap-reveal group flex flex-col justify-between transition-all duration-300"
        >
          <div>
            {/* Top Viewport Mockup Header */}
            <div
              className={`flex items-center justify-between px-4 py-2.5 rounded-t-xl transition-colors duration-300 ${
                darkMode ? "bg-slate-900/60" : "bg-slate-200/60"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-[11px] font-mono tracking-wider text-slate-500 uppercase">
                {String(index + 1).padStart(2, "0")} / showcase
              </span>
            </div>

            {/* Media Canvas */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative h-52 overflow-hidden rounded-b-xl cursor-pointer"
            >
              <img
                src={project.img}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                alt={project.title}
              />
              {/* Subtle Ambient Contrast Overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  darkMode
                    ? "bg-slate-950/20 group-hover:bg-slate-950/0"
                    : "bg-slate-900/10 group-hover:bg-transparent"
                }`}
              />

              {/* Hover Launch Pill */}
              <div className="absolute bottom-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-600/90 text-white text-[11px] font-medium backdrop-blur-md shadow-lg shadow-indigo-600/30">
                  <FaRegEye size={12} />
                  Launch
                </span>
              </div>
            </a>

            {/* Title & Description */}
            <div className="pt-6">
              <h3
                className={`font-bold text-xl mb-2.5 tracking-tight transition-colors duration-200 ${
                  darkMode ? "text-slate-100 group-hover:text-indigo-400" : "text-slate-900 group-hover:text-indigo-600"
                }`}
              >
                {project.title}
              </h3>

              <p
                className={`text-sm leading-relaxed mb-5 line-clamp-3 ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {project.desc}
              </p>

              {/* Minimal Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md transition-colors duration-200 ${
                      darkMode
                        ? "bg-slate-900/80 text-slate-300 hover:text-white"
                        : "bg-slate-100 text-slate-700 hover:text-slate-950"
                    }`}
                  >
                    {TechIcons[tech] && <span className="opacity-75">{TechIcons[tech]}</span>}
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action Controls */}
          {/* Footer Action Controls */}
<div
  className={`pt-4 border-t flex items-center gap-2 ${
    darkMode ? "border-slate-800/80" : "border-slate-200"
  }`}
>
  {/* Live Demo */}
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 inline-flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-white text-[11px] sm:text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap"
  >
    <FaRegEye size={12} />
    <span>Live Preview</span>
  </a>

  {/* View Details */}
  <button
    type="button"
    onClick={() => setSelectedProject(project)}
    className={`flex-1 inline-flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-lg text-[11px] sm:text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap ${
      darkMode
        ? "bg-slate-900/40 hover:bg-slate-900 text-slate-300 hover:text-white"
        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
    }`}
  >
    <span>Details</span>
    <span className="text-indigo-400">→</span>
  </button>

  {/* Repository */}
  {hasMultipleRepos ? (
    <div className="relative flex-1">
      <button
        type="button"
        onClick={() =>
          setDropdownOpen(dropdownOpen === index ? null : index)
        }
        className={`w-full inline-flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-lg text-[11px] sm:text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
          darkMode
            ? "bg-slate-900/40 hover:bg-slate-900 text-slate-300"
            : "bg-slate-100 hover:bg-slate-200 text-slate-700"
        }`}
      >
        <FaGithub size={12} />
        <span>Repos</span>
        <FaChevronDown
          size={9}
          className={`opacity-70 transition-transform duration-200 ${
            dropdownOpen === index ? "rotate-180" : ""
          }`}
        />
      </button>

      {dropdownOpen === index && (
        <div
          className={`absolute left-0 bottom-full mb-2 w-full rounded-xl border backdrop-blur-xl shadow-2xl z-30 overflow-hidden ${
            darkMode
              ? "bg-slate-950/95 border-slate-800 text-slate-200"
              : "bg-white/95 border-slate-200 text-slate-800"
          }`}
        >
          {sourceEntries.map(([key, url]) => {
            const readableLabel = key
              .replace(/([A-Z])/g, " $1")
              .trim();

            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block px-3 py-2.5 text-xs font-medium border-b last:border-none transition-colors ${
                  darkMode
                    ? "hover:bg-indigo-500/10 hover:text-indigo-400 border-slate-800/80"
                    : "hover:bg-slate-50 hover:text-indigo-600 border-slate-100"
                }`}
              >
                {readableLabel.charAt(0).toUpperCase() +
                  readableLabel.slice(1)}
              </a>
            );
          })}
        </div>
      )}
    </div>
  ) : singleRepoUrl ? (
    <a
      href={singleRepoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex-1 inline-flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-lg text-[11px] sm:text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
        darkMode
          ? "bg-slate-900/40 hover:bg-slate-900 text-slate-300 hover:text-white"
          : "bg-slate-100 hover:bg-slate-200 text-slate-700"
      }`}
    >
      <FaGithub size={12} />
      <span>Code</span>
    </a>
  ) : null}
</div>
        </div>
      );
    })}
  </div>
  {selectedProject && (
  <ProjectModal
    project={selectedProject}
    darkMode={darkMode}
    onClose={() => setSelectedProject(null)}
  />
)}
</section>

      {/* SECTION 5: CONTACT */}
<section
  id="contact"
  className={`panel-section py-20 md:py-28 min-h-screen flex items-center overflow-x-hidden transition-colors duration-500 ${
    darkMode ? "text-slate-100" : "text-slate-900"
  }`}
>
  {/* Ambient Background Glow */}
  <div
    className={`absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full filter blur-[160px] opacity-10 pointer-events-none ${
      darkMode ? "bg-indigo-600" : "bg-indigo-300"
    }`}
  />

  <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
    {/* Section Header: Pure "Let's Connect" without the top text */}
    <div className="gsap-reveal mb-14 text-center md:text-left">
      <h2
        className={`text-4xl md:text-5xl font-['Black_Ops_One'] uppercase tracking-wider ${
          darkMode ? "text-white" : "text-slate-950"
        }`}
      >
        {"Let's".split("").map((letter, index) => (
          <span key={index} className="connect-letter inline-block">
            {letter}
          </span>
        ))}
        <span className="text-indigo-500">
          {" Connect".split("").map((letter, index) => (
            <span key={index} className="connect-letter inline-block">
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </h2>
      <p
        className={`mt-4 max-w-xl text-sm md:text-base leading-relaxed ${
          darkMode ? "text-slate-400" : "text-slate-600"
        }`}
      >
        Open to software engineering roles, internships, collaborations, and freelance projects.
      </p>
    </div>

    {/* Content Grid: Globe and Form aligned side-by-side */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Left Column: Globe & Bottom Direct Points */}
      <div className="lg:col-span-6 flex flex-col justify-between h-full">
        <div className="w-full flex justify-center items-center">
          <ContactGlobe darkMode={darkMode} />
        </div>

        {/* Quick Contact Micro-Row */}
        
      </div>

      {/* Right Column: Form slightly pushed down to visually center with Globe */}
      <div className="lg:col-span-6 pt-2 md:pt-14">
        <form onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* 01 / Name */}
            <div>
              <label
                className={`block text-[11px] font-mono font-bold uppercase tracking-wider mb-2 ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                01 / Name
              </label>
              <input
                className={`w-full px-4 py-3 text-sm rounded-lg border transition-none outline-none ${
                  darkMode
                    ? "bg-slate-900/40 border-slate-800 text-white placeholder-slate-600 focus:border-indigo-500 focus:bg-slate-900/80"
                    : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:bg-white"
                }`}
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* 02 / Email */}
            <div>
              <label
                className={`block text-[11px] font-mono font-bold uppercase tracking-wider mb-2 ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                02 / Email
              </label>
              <input
                className={`w-full px-4 py-3 text-sm rounded-lg border transition-none outline-none ${
                  darkMode
                    ? "bg-slate-900/40 border-slate-800 text-white placeholder-slate-600 focus:border-indigo-500 focus:bg-slate-900/80"
                    : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:bg-white"
                }`}
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>

          {/* 03 / Subject */}
          <div>
            <label
              className={`block text-[11px] font-mono font-bold uppercase tracking-wider mb-2 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              03 / Subject
            </label>
            <input
              className={`w-full px-4 py-3 text-sm rounded-lg border transition-none outline-none ${
                darkMode
                  ? "bg-slate-900/40 border-slate-800 text-white placeholder-slate-600 focus:border-indigo-500 focus:bg-slate-900/80"
                  : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:bg-white"
              }`}
              type="text"
              name="title"
              placeholder="What would you like to discuss?"
              required
            />
          </div>

          {/* 04 / Message */}
          <div>
            <label
              className={`block text-[11px] font-mono font-bold uppercase tracking-wider mb-2 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              04 / Message
            </label>
            <textarea
              rows={5}
              className={`w-full px-4 py-3 text-sm rounded-lg border transition-none outline-none resize-none ${
                darkMode
                  ? "bg-slate-900/40 border-slate-800 text-white placeholder-slate-600 focus:border-indigo-500 focus:bg-slate-900/80"
                  : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:bg-white"
              }`}
              name="message"
              placeholder="Tell me about the opportunity, project, or collaboration..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-md shadow-indigo-600/20 active:scale-98 cursor-pointer"
          >
            <span>Send Message</span>
            <span className="text-base leading-none">→</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


      {/* FOOTER */}
     <footer
  className={`relative z-20 py-12 px-6 md:px-12 border-t transition-colors duration-500 ${
    darkMode ? "border-slate-800/80 text-slate-400" : "border-slate-200 text-slate-600"
  }`}
>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
    
    {/* Left Side: Brand, Role & Copyright */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-['Black_Ops_One'] tracking-wider text-sm text-indigo-500">
          SmShah
        </span>
        <span className={`text-xs ${darkMode ? "text-slate-600" : "text-slate-300"}`}>•</span>
        <span className="text-xs font-mono tracking-wide opacity-75">
          Full Stack Software Engineer
        </span>
      </div>

      <p className="text-xs font-medium tracking-normal select-none">
        &copy; {new Date().getFullYear()} Syed Momin Ali Shah. All rights reserved.
      </p>
    </div>

    {/* Right Side: Social Media Channels & Quick Scroll-to-Top */}
    <div className="flex items-center gap-4">
      {/* Social Links */}
      <div className="flex items-center gap-2.5">
        <a
          href="https://www.linkedin.com/in/smshah121"
          aria-label="LinkedIn Profile"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${
            darkMode
              ? "bg-slate-900/60 text-slate-400 hover:text-indigo-400 hover:bg-slate-800"
              : "bg-slate-100 text-slate-600 hover:text-indigo-600 hover:bg-slate-200"
          }`}
        >
          <FaLinkedin size={16} />
        </a>

  




         <a
          href="mailto:smshah.2003@gmail.com"
          aria-label="Email via Gmail"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${
            darkMode
              ? "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800"
              : "bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200"
          }`}
        >
          <IoMdMail size={16} />
        </a>
         <a
          href="mailto:sm.shah2003@hotmail.com"
          aria-label="Email via Outloook"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${
            darkMode
              ? "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800"
              : "bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200"
          }`}
        >
          <PiMicrosoftOutlookLogo size={16} />
        </a>
        <a
          href="https://github.com/smshah121"
          aria-label="GitHub Profile"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${
            darkMode
              ? "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800"
              : "bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200"
          }`}
        >
          <FaGithub size={16} />
        </a>

        <a
          href="https://www.instagram.com/__smshah__"
          aria-label="Instagram Profile"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${
            darkMode
              ? "bg-slate-900/60 text-slate-400 hover:text-pink-400 hover:bg-slate-800"
              : "bg-slate-100 text-slate-600 hover:text-pink-600 hover:bg-slate-200"
          }`}
        >
          <FaInstagram size={16} />
        </a>
      </div>

      {/* Vertical Divider */}
      <span className={`h-4 w-[1px] ${darkMode ? "bg-slate-800" : "bg-slate-300"}`} />

      {/* Back to Top Quick Action */}
      <button
        onClick={() => scrollToSection("hero")}
        className={`group flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider px-3 py-2 rounded-lg transition-all duration-300 ${
          darkMode
            ? "hover:text-white text-slate-400 hover:bg-slate-900/60"
            : "hover:text-slate-950 text-slate-600 hover:bg-slate-100"
        }`}
        aria-label="Scroll to top"
      >
        <span>Top</span>
        <span className="transition-transform duration-300 group-hover:-translate-y-0.5">↑</span>
      </button>
    </div>

  </div>
</footer>
    </div>
  );
}

export default App;