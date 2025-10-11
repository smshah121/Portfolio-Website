import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { SiNestjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import emailjs from "emailjs-com";
import { IoMdMail } from "react-icons/io";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiAxios } from "react-icons/si";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);


  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const NavItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
  ];

  const TechIcons = {
    React: <GrReactjs className="text-[#61DAFB]" title="React" />,
    Nest: <SiNestjs className="text-[#E0234E]" title="Nest"/>,
    Tailwind: <SiTailwindcss className="text-[#38BDF8]" title="Tailwind" />,
    Postgres: <BiLogoPostgresql className="text-[#4169E1]" title="Postgres"/>,
    Redux: <SiRedux  className="text-[#764ABC]"/>,
    Motion: <TbBrandFramerMotion className="text-[#E94E44]" />,
    Axios: <SiAxios className="text-gray-400" />
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ew2jco",
        "template_8nw4mdt",
        e.target,
        "-lQ92GZ3aOZyq22up"
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("❌ Failed to send, try again.");
        }
      );
  };

  return (
    <div>
      <div
        id="navbar"
        className={`fixed top-0 w-full flex justify-between items-center py-6 px-6 transition-all duration-300 z-50 ${
          scrolled
            ? "bg-transparent backdrop-blur-md"
            : "bg-gradient-to-r from-[#0e0a2f] to-[#0e113a]"
        }`}
      >
        {/* Logo */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gray-300"
        >
          Portfolio
        </motion.div>

        {/* Desktop Nav */}
        <motion.ul
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex gap-5 mr-3 font-semibold text-md"
        >
          {NavItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`transition ${
                  activeSection === item.id
                    ? "text-[#736bbe] font-bold"
                    : "text-gray-300 hover:text-[#736bbe]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-3xl"
          >
            ☰
          </button>
          {open && (
            <ul className="absolute right-6 top-16 bg-[#0A192F] text-white rounded-lg shadow-lg p-4 flex flex-col gap-3">
              {NavItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)} // close menu on click
                    className={`transition ${
                      activeSection === item.id
                        ? "text-[#736bbe] font-bold"
                        : "text-gray-300 hover:text-[#736bbe]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div
        id="hero"
        className="flex flex-col-reverse md:flex-row justify-between bg-gradient-to-r from-[#0e0a2f] to-[#0e113a] min-h-screen items-center p-6 pt-28 md:pt-20"
      >
        {/* Left: Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start gap-4 text-white md:w-1/2 lg:w-3/5"
        >
          <h1 className="mt-5 md:mt-0 font-bold text-3xl md:text-6xl text-gray-200">
            Hello! I'm
          </h1>
          <h2 className="font-bold text-3xl md:text-7xl text-[#736bbe] leading-tight">
            Syed Momin Ali Shah
          </h2>
          <i className="mt-5 text-[#afabd6]  md:text-lg">
            Building web applications with  React and NestJS. Currently a third-year Software Engineering student.
          </i>

          {/* Resume + Social Links */}
          <div className="flex flex-col mt-4">
            <div className="flex gap-4">
              <a
  href="/Resume Internship for Portfolio.pdf"
  target="_blank"
  rel="noopener noreferrer"
  download="SyedMominAliShah_Resume.pdf"
>
  <button
    className="w-40 h-10 flex justify-center items-center gap-2 rounded-xl border border-[#C084FC]/40 bg-[#C084FC]/10 backdrop-blur-md text-[#8078ce] font-semibold hover:bg-[#C084FC]/20 hover:border-[#C084FC]/70 hover:shadow-[0_0_15px_#C084FC] transition-all duration-300 text-sm"
  >
    <IoMdDownload size={18} />
    Resume
  </button>
</a>

<a href="#project">
  <button
    className="w-40 h-10 flex justify-center items-center gap-2 rounded-xl border border-[#C084FC]/40 bg-[#C084FC]/10 backdrop-blur-md text-[#8078ce] font-semibold hover:bg-[#C084FC]/20 hover:border-[#C084FC]/70 hover:shadow-[0_0_15px_#C084FC] transition-all duration-300 text-sm"
  >
    View Projects
  </button>
</a>

            </div>
            

            <div className="flex mt-8 space-x-4">
              <a
                href="https://www.linkedin.com/in/smshah121"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  className="text-gray-100 hover:text-[#0A66C2]"
                  size={32}
                />
              </a>
              <a
                href="https://github.com/smshah121"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className="text-gray-100 hover:text-[#181717]"
                  size={32}
                />
              </a>
              <a
                href="https://www.instagram.com/__smshah__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="text-gray-100 hover:bg-[linear-gradient(45deg,#F77737,#E4405F,#C13584,#5851DB)]"
                  size={32}
                />
              </a>
              <a href="mailto:sm.shah2003@hotmail.com">
                <PiMicrosoftOutlookLogo
                  className="text-gray-100 hover:text-[#0078D4]"
                  size={32}
                />
              </a>
              <a href="mailto:smshah.2003@gmail.com">
                <IoMdMail
                  className="text-gray-100 hover:text-[#EA4335]"
                  size={32}
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Image + Typewriter */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:w-1/2 lg:w-2/5 mt-8 md:mt-0"
        >
          <img
            className="w-60 h-60 md:w-[400px] md:h-[400px] mb-5 rounded-full"
            src="/portfolio3.jpg"
            alt="Profile"
          />
          <h4 className="text-[#736bbe] text-3xl md:text-4xl font-semibold text-center">
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Software Engineer",
                  "Tech Enthusiast",
                ],
                loop: true,
                autoStart: true,
              }}
            />
          </h4>
        </motion.div>
      </div>

      <div
  id="about"
  className="flex flex-col lg:flex-row justify-between p-10 bg-gray-50"
>
  {/* Left Side - About Me */}
  <div className="flex flex-col justify-center lg:w-1/2 pr-6">
    <h1 className="text-[#274D60] text-5xl font-bold mb-6">About Me</h1>

    <p className="text-gray-700 leading-relaxed mb-4">
      Hi I'm{" "}
      <span className="font-semibold text-[#274D60]">
        Syed Momin Ali Shah
      </span>
      , a passionate{" "}
      <span className="font-semibold">Full Stack Developer</span> who loves
      building clean, scalable, and user-friendly applications.
    </p>

    <p className="text-gray-700 leading-relaxed mb-4">
      My coding journey began in{" "}
      <span className="font-semibold">2022</span> with online courses of Udemy
      like Angela Yu’s Web Development Bootcamp and 100 Days of Python — where I
      built a strong foundation in programming and problem-solving. Since{" "}
      <span className="font-semibold">March 2023</span>, I’ve been pursuing a BS
      in Software Engineering at Iqra University.
    </p>

    <p className="text-gray-700 mb-4">
      I built several frontend projects early on — including a Currency
      Converter, Weather App, and Tic Tac Toe game — using vanilla JavaScript
      and DOM manipulation.
    </p>

    <p className="text-gray-700 leading-relaxed">
      Later, I joined a university bootcamp where I mastered{" "}
      <span className="font-semibold">Backend Development</span> with NestJS and
      PostgreSQL. Today, I work as a{" "}
      <span className="font-semibold">Full Stack Developer</span> and have built
      complete real-world apps.
    </p>
  </div>

  {/* Right Side - Timeline (Alternate Left-Right Style) */}
  <div className="lg:w-1/2 flex flex-col items-center mt-10 lg:mt-0 relative">
    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#274D60]/60 transform -translate-x-1/2"></div>

    {/* Education - Right */}
    <div className="w-full mb-12 flex justify-end">
      <div className="relative w-1/2 pl-6">
        <div className="absolute -left-4 w-8 h-8 bg-[#274D60] text-white flex items-center justify-center rounded-full">
          🎓
        </div>
        <div className="bg-purple-50">
          <h3 className="text-sm md:text-xl font-semibold text-[#274D60]">Education</h3>
        <ul className="list-disc pl-4">
          <li className="text-gray-600 text-xs md:text-sm">
            Iqra University (BS Software Engineering) 2023–Present
          </li>
          <li className="text-gray-600 text-xs md:text-sm">
            New Aligarh Degree College (Pre-Eng) 2020–22
          </li>
        </ul>
        </div>
        
      </div>
    </div>

    {/* Bootcamps - Left */}
    <div className="w-full mb-12 flex justify-start">
      <div className="relative w-1/2 pr-6 text-right">
        <div className="absolute -right-4 w-8 h-8 bg-[#274D60] text-white flex items-center justify-center rounded-full">
          💻
        </div>
        <div className="bg-cyan-50 flex flex-col items-start md:items-end">
          <h3 className="text-sm md:text-xl font-semibold text-[#274D60]">
          Bootcamps & Online Courses
        </h3>
        <ul className="list-disc pr-4 list-inside">
          <li className="text-gray-600 text-xs md:text-sm">
            Udemy (Web Dev, Python 100 Days) – 2022
          </li>
          <li className="text-gray-600 text-xs md:text-sm">
            Last Mile Tech (Full Stack Bootcamp) – 2025
          </li>
        </ul>

        </div>
        
      </div>
    </div>

    {/* Full Stack Projects - Right */}
    <div className="w-full mb-12 flex justify-end">
      <div className="relative w-1/2 pl-6">
        <div className="absolute -left-4 w-8 h-8 bg-[#274D60] text-white flex items-center justify-center rounded-full">
          🚀
        </div>
        <div className="bg-gray-100">
          <h3 className="text-sm md:text-xl font-semibold text-[#274D60]">
          Full Stack Projects
        </h3>
        <ul className="list-disc pl-4">
          <li className="text-gray-600 text-xs md:text-sm">Learning Management System</li>
          <li className="text-gray-600 text-xs md:text-sm">PriceTag E-Commerce</li>
          <li className="text-gray-600 text-xs md:text-sm">
            QuoteNest Personal Quotes Management
          </li>
        </ul>
        </div>
        
      </div>
    </div>
    <div className="w-90 md:w-full mb-12 flex justify-start">
      <div className="relative w-1/2 pr-6 text-right">
        <div className="absolute -right-4 w-8 h-8 bg-[#274D60] text-white flex items-center justify-center rounded-full">
          💻
        </div>
        <div className="bg-amber-50 flex flex-col items-start md:items-end ">
          <h3 className="text-xs md:text-xl font-semibold text-[#274D60]">
          Frontend Projects
        </h3>
        <ul className="list-disc pr-4 list-inside">
          <li className="text-xs text-gray-600 md:text-sm mr-9.5">
            Weather App
          </li>
          <li className="text-xs text-gray-600 md:text-sm ">
          Currency Converter
          </li>
          <li className="text-xs text-gray-600 md:text-sm mr-5.5">
            TicTacToe Game
          </li>

        </ul>

        </div>
        
      </div>
    </div>
  </div>
</div>



      <div id="skills" className="py-16 px-6 bg-gray-50 ">
        {/* Heading */}
        <div className="flex justify-center mb-10">
          <h1 className="text-[#274D60] text-5xl font-bold text-center">
            Tech Stack
          </h1>
        </div>

        {/* Wrapper → flex on large screens, wraps on mobile */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* HTML */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 flex flex-col items-center shadow-lg text-[#E34F26] md:text-gray-800 md:hover:text-[#E34F26]  justify-center hover:shadow-2xl w-[160px] sm:w-[180px] md:w-[200px] h-[160px] rounded-2xl"
          >
            <FaHtml5 size={60} />
            <h1 className="text-gray-500 font-bold mt-2">HTML</h1>
          </motion.div>

          {/* CSS */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="p-6 flex flex-col items-center shadow-lg text-[#1572B6] md:text-gray-800 md:hover:text-[#1572B6] justify-center hover:shadow-2xl w-[160px] sm:w-[180px] md:w-[200px] h-[160px] rounded-2xl"
          >
            <FaCss3Alt size={60} />
            <h1 className="text-gray-500 font-bold mt-2">CSS</h1>
          </motion.div>

          {/* JavaScript */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="p-6 flex flex-col items-center shadow-lg text-[#F7DF1E] md:text-gray-800 hover:text-[#F7DF1E] justify-center hover:shadow-2xl w-[160px] sm:w-[180px] md:w-[200px] h-[160px] rounded-2xl"
          >
            <TbBrandJavascript size={60} />
            <h1 className="text-gray-500 font-bold mt-2">JavaScript</h1>
          </motion.div>

          {/* TypeScript */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="p-6 flex flex-col items-center shadow-lg text-[#3178C6] md:text-gray-800 hover:text-[#3178C6]  justify-center hover:shadow-2xl w-[160px] sm:w-[180px] md:w-[200px] h-[160px] rounded-2xl"
          >
            <TbBrandTypescript size={60} />
            <h1 className="text-gray-500 font-bold mt-2">TypeScript</h1>
          </motion.div>

          {/* React */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="p-6 flex flex-col items-center shadow-lg text-[#61DAFB] md:text-gray-800 md:hover:text-[#61DAFB] justify-center hover:shadow-2xl w-[160px] sm:w-[180px] md:w-[200px] h-[160px] rounded-2xl"
          >
            <GrReactjs size={60} />
            <h1 className="text-gray-500 font-bold mt-2">ReactJS</h1>
          </motion.div>

          {/* Tailwind */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="p-6 flex flex-col items-center shadow-lg text-[#38BDF8] md:text-gray-800 md:hover:text-[#38BDF8] justify-center hover:shadow-2xl w-[160px] sm:w-[180px] md:w-[200px] h-[160px] rounded-2xl"
          >
            <SiTailwindcss size={60} />
            <h1 className="text-gray-500 font-bold mt-2">Tailwind</h1>
          </motion.div>

          {/* NestJS */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7 }}
            className="p-6 flex flex-col items-center shadow-lg text-[#E0234E] md:text-gray-800 md:hover:text-[#E0234E]  justify-center hover:shadow-2xl w-[160px] sm:w-[180px] md:w-[200px] h-[160px] rounded-2xl"
          >
            <SiNestjs size={60} />
            <h1 className="text-gray-500 font-bold mt-2">NestJS</h1>
          </motion.div>

          {/* PostgreSQL */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.9 }}
            className="p-6 flex flex-col items-center shadow-lg text-[#4169E1] md:text-gray-800 md:hover:text-[#4169E1] justify-center hover:shadow-2xl w-[160px] sm:w-[180px] md:w-[200px] h-[160px] rounded-2xl"
          >
            <BiLogoPostgresql size={60} />
            <h1 className="text-gray-500 font-bold mt-2">Postgres</h1>
          </motion.div>
        </div>
      </div>

      <div
        id="project"
        className="min-h-screen bg-gradient-to-r from-[#0e0a2f] to-[#0e113a] py-16 px-6"
      >
        <div className="font-bold text-5xl text-[#736bbe] mb-12 text-center">
          <h1>Projects</h1>
        </div>

        <motion.div className="flex flex-col justify-center items-center gap-10">
          {[
            {
              img: "/lms.png",
              title: "Learning Management System",
              desc: "Developed a role-based LMS utilizing NestJS for secure, token-based authentication (JWT) and PostgreSQL. Features include an Instructor dashboard for course CRUD and a student portal for secure enrollment and lecture access",
              link: "https://singular-toffee-702de6.netlify.app/",
              source: {
                frontend:
                  "https://github.com/smshah121/Learning-Management-System-Frontend",
                backend:
                  "https://github.com/smshah121/Learning-Management-System-Backend",
              },
              tech: ["React", "Nest", "Postgres", "Tailwind", "Redux","Motion"]
            },
            {
              img: "/ecommerce.png",
              title: "E-Commerce",
              desc: "Developed a full-stack role-based e-commerce platform with secure authentication for Admin and Customers. Customer can Browse & search products, add to cart, place orders, view order history, manage profile. Admin can Manage products (CRUD), upload images/PDFs, view customer purchases, update order statuses.",
              link: "https://dynamic-griffin-d0c7fd.netlify.app/",
              source: {
                frontend:
                  "https://github.com/smshah121/E-Commerce-Web-App-Frontend",
                backend:
                  "https://github.com/smshah121/E-Commerce-Web-App-Backend",
              },
              tech: ["React", "Nest", "Postgres", "Tailwind", "Redux","Motion"]
            },
            {
              img: "/quote.png",
              title: "Personal Quote Management",
              desc: "Developed a full-stack app for add, delete, update and copy quotes with secure user auth, CRUD operations, and user specific data.",
              link: "https://peaceful-crisp-c5d1fb.netlify.app/",
              source: {
                frontend: "https://github.com/smshah121/quotes-frontend",
                backend:
                  "https://github.com/smshah121/Quotes-Management-System-Backend",
              },
              tech: ["React", "Nest", "Postgres", "Tailwind", "Redux"]
            },
            {
              img: "/weather.png",
              title: "Weather App",
              desc: "Responsive app using React and OpenWeatherMap API with Axios, showing temperature, humidity, and wind for any city.",
              link: "https://thunderous-stroopwafel-fd414f.netlify.app/",
              source: {
                frontend: "https://github.com/smshah121/Weather-Web-App",
              },
              tech: ["React", "Tailwind","Axios"]
            },

            {
              img: "/currency.png",
              title: "Currency Converter",
              desc: "Integrated real-time currency API to convert currencies and display flags dynamically with clean UI.",
              link: "https://smshah121.github.io/currency-converter/",
              source: {
                frontend: "https://github.com/smshah121/currency-converter",
              },
              tech: ["React", "Tailwind","Axios"]
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-5xl bg-white/5 backdrop-blur-xl rounded-2xl flex flex-col md:flex-row items-center p-6"
            >
              {/* Image */}
              <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
                <img
                  src={project.img}
                  className="h-40 md:h-48 w-auto object-contain rounded-lg"
                  alt={project.title}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col  mt-6 md:mt-0 md:ml-8  w-full md:w-2/3">
                <h1 className="font-bold text-xl md:text-2xl pb-3 text-[#736bbe]">
                  {project.title}
                </h1>
                <p className="text-[#afabd6] text-sm md:text-base leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-3">
  {project.tech.map((tech) => (
    <div key={tech} className="text-2xl">
      {TechIcons[tech] || <span className="text-gray-400">{tech}</span>}
    </div>
  ))}
</div>

<div>


                <div className="flex  flex-wrap md:gap-3 mt-4">
                  {/* Live Demo */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="flex px-3 py-2 rounded-3xl border border-[#C084FC]/40 bg-[#C084FC]/10 backdrop-blur-md text-[#8078ce] hover:bg-[#C084FC]/20 hover:border-[#C084FC]/70 hover:shadow-[0_0_15px_#C084FC] transition-all duration-300  font-bold  mb-5"
                    >
                      <FaRegEye size={22} className="text-gray-300 mr-2" />
                      Live Demo
                    </motion.button>
                  </a>

                  {/* Source Code Buttons */}
                  <div className="relative inline-block">
  <motion.button
    whileHover={{ scale: 1.1 }}
    onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
    className="flex  px-3 py-2 rounded-3xl border border-[#C084FC]/40 bg-[#C084FC]/10 backdrop-blur-md text-[#8078ce] font-bold hover:bg-[#C084FC]/20 hover:border-[#C084FC]/70 hover:shadow-[0_0_15px_#C084FC] transition-all duration-300"
  >
    <a
                href="https://github.com/smshah121"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className="text-gray-200 hover:text-[#181717] mr-2"
                  size={20}
                />
              </a>
    Source Code ▼
  </motion.button>

  {dropdownOpen === index && (
    <div className="absolute mt-2 bg-[#1e293b] text-white rounded-lg shadow-lg z-50 w-40">
      {project.source?.frontend && (
        <a
          href={project.source.frontend}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-2 hover:bg-[#334155]"
        >
          Frontend
        </a>
      )}
      {project.source?.backend && (
        <a
          href={project.source.backend}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-2 hover:bg-[#334155]"
        >
          Backend
        </a>
      )}
    </div>
  )}
</div>
                </div>
</div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div id="contact" className="py-16 px-6 bg-gray-50">
        {/* Heading */}
        <div className="flex justify-center mb-10">
          <h1 className="text-[#274D60] font-bold text-4xl text-center">
            Let's Work Together !
          </h1>
        </div>

        {/* Wrapper */}
        <div className="flex flex-col md:flex-row justify-between gap-10 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col md:w-1/2">
            <h1 className="text-[#274D60] font-bold text-3xl">Contact Me</h1>

            <img
              src="/contact.avif"
              className="w-full max-w-sm h-90 mt-8 rounded-2xl object-cover"
              alt="Gmail Logo"
            />
            <div className="p-5">
              <div className="flex items-center p-2 mt-4">
              <IoIosMail size={34} className="text-red-500" />
              <h4 className="ml-2 text-gray-700 break-all font-semibold md:text-xl">
                • sm.shah2003@hotmail.com
              </h4>
            </div>

            <div className="flex items-center p-2">
              <FaPhoneAlt size={32} className="text-blue-800" />
              <h4 className="ml-2 text-gray-700 font-semibold md:text-xl">
                • +92 319 2508750
              </h4>
            </div>

            <div className="flex items-center p-2">
              <FaLocationDot size={32} className="text-red-700" />
              <h4 className="ml-2 text-gray-700 font-semibold md:text-xl">
                • Karachi, Pakistan
              </h4>
            </div>

            </div>
            
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex flex-col md:w-1/2">
            <h1 className="text-[#274D60] font-bold text-3xl">Get in touch</h1>
            <p className="mt-2 text-gray-700">
              Feel free to reach out if you'd like to collaborate – you're just
              a few clicks away!
            </p>

            <div className="w-full shadow-2xl mt-4 rounded-2xl p-6">
              <form onSubmit={sendEmail}>
                {/* Name */}
                <div className="flex flex-col mb-4">
                  <label
                    className="text-[#274D60] font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full shadow rounded-2xl p-3"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col mb-4">
                  <label
                    className="text-[#274D60] font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full shadow rounded-2xl p-3"
                    type="email"
                    name="Email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col mb-4">
                  <label
                    className="text-[#274D60] font-bold mb-2"
                    htmlFor="title"
                  >
                    Subject
                  </label>
                  <input
                    className="w-full shadow rounded-2xl p-3"
                    type="text"
                    name="title"
                    placeholder="Subject"
                    required
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col mb-4">
                  <label
                    className="text-[#274D60] font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full h-40 shadow rounded-2xl p-3"
                    name="message"
                    placeholder="Your Message"
                    required
                  />
                </div>

                {/* Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#0A192F] to-[#112240] font-bold text-gray-300 hover:bg-[#274D60] hover:text-[#6BA3BE] px-8 py-2 rounded-2xl"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="h-30 bg-gradient-to-r from-[#0e0a2f] to-[#0e113a] flex flex-col">
        <div className="flex justify-center p-5">
          <a
            href="https://www.linkedin.com/in/smshah121"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="mr-3 text-white" size={32} />
          </a>
          <a
            href="https://github.com/smshah121"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-3 text-white" size={32} />
          </a>
          <a
            href="https://www.instagram.com/__smshah__"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white" size={32} />
          </a>
        </div>
        <div className="flex justify-center">
          <h2 className="text-gray-300 font-bold">
            © Syed Momin Ali Shah. All rights reserved.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
