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
import { FaLaptopCode } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { SiNetlify, SiRender, SiCloudinary } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";



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
        className={`fixed top-0 w-full flex justify-end md:justify-center items-center py-6 px-6 transition-all duration-300 z-50 ${
          scrolled
            ? "w-85 h-10 rounded-3xl"
            : "bg-gradient-to-r from-[#0e0a2f] to-[#0e113a]"
        }`}
      >
        

        {/* Desktop Nav */}
        <motion.ul
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex justify-around bg-white/5 backdrop-blur-xl w-100 h-10 rounded-3xl p-2 font-semibold text-md"
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
  className="flex flex-col justify-center items-center text-center bg-gradient-to-r from-[#0e0a2f] to-[#0e113a] min-h-screen px-6 sm:px-8 md:px-12 pt-28 md:pt-20 overflow-x-hidden"
>
  {/* Animated Intro Text */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex flex-col items-center gap-4 text-white max-w-3xl"
  >
    <h1 className="font-bold text-2xl sm:text-5xl md:text-6xl text-gray-200">
      Hello! I'm
    </h1>
    <h2 className="font-extrabold text-2xl sm:text-4xl md:text-7xl text-[#8B7BE6] drop-shadow-[0_0_10px_#736bbeaa]">
      Syed Momin Ali Shah
    </h2>

    <h4 className="text-[#C1BEE6] text-lg sm:text-xl md:text-3xl font-medium mt-2">
      <Typewriter
        options={{
          strings: [
            "Web Developer",
            "Software Engineer",
            "Tech Enthusiast"
          ],
          autoStart: true,
          loop: true,
          delay: 60,
          deleteSpeed: 40,
        }}
      />
    </h4>

    <p className="mt-5 text-[#afabd6] text-xs sm:text-base md:text-lg leading-relaxed max-w-2xl">
      I build modern and scalable web applications using <span className="text-[#8078ce] font-semibold">ReactJS</span> and <span className="text-[#8078ce] font-semibold">NestJS</span>.  
      Currently, I’m a third-year <span className="text-[#8078ce] font-semibold">Software Engineering</span> student, passionate about crafting clean, efficient, and user-friendly interfaces.
    </p>

    {/* Buttons */}
    <div className="flex items-center md:items-start flex-col mt-4">
  {/* Buttons Wrapper */}
  <div className="flex gap-3 sm:gap-4 flex-wrap justify-center sm:justify-start">
    {/* Resume Button */}
    <a
      href="/Resume Internship for Portfolio.pdf"
      target="_blank"
      rel="noopener noreferrer"
      download="SyedMominAliShah_Resume.pdf"
    >
      <button
        className="w-28 sm:w-36 md:w-40 h-8 sm:h-9 md:h-10 flex justify-center items-center gap-2 rounded-xl border border-[#C084FC]/40 bg-[#C084FC]/10 backdrop-blur-md text-[#8078ce] font-semibold hover:bg-[#C084FC]/20 hover:border-[#C084FC]/70 hover:shadow-[0_0_15px_#C084FC] transition-all duration-300 text-xs sm:text-sm"
      >
        <IoMdDownload size={14} className="sm:size-[16px] md:size-[18px]" />
        Resume
      </button>
    </a>

    {/* View Projects Button */}
    <a href="#project">
      <button
        className="w-28 sm:w-36 md:w-40 h-8 sm:h-9 md:h-10 flex justify-center items-center gap-2 rounded-xl border border-[#C084FC]/40 bg-[#C084FC]/10 backdrop-blur-md text-[#8078ce] font-semibold hover:bg-[#C084FC]/20 hover:border-[#C084FC]/70 hover:shadow-[0_0_15px_#C084FC] transition-all duration-300 text-xs sm:text-sm"
      >
        View Projects
      </button>
    </a>
  </div>
</div>


    {/* Social Links */}
    <div className="flex justify-center mt-8 space-x-5">
      <a
        href="https://www.linkedin.com/in/smshah121"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-gray-100 hover:text-[#0A66C2] transition-all duration-300" size={32} />
      </a>
      <a
        href="https://github.com/smshah121"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-gray-100 hover:text-[#181717] transition-all duration-300" size={32} />
      </a>
      <a
        href="https://www.instagram.com/__smshah__"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-gray-100 hover:text-pink-500 transition-all duration-300" size={32} />
      </a>
      <a href="mailto:sm.shah2003@hotmail.com">
        <PiMicrosoftOutlookLogo className="text-gray-100 hover:text-[#0078D4] transition-all duration-300" size={32} />
      </a>
      <a href="mailto:smshah.2003@gmail.com">
        <IoMdMail className="text-gray-100 hover:text-[#EA4335] transition-all duration-300" size={32} />
      </a>
    </div>
  </motion.div>
</div>

      <div
  id="about"
  className="flex flex-col lg:flex-row justify-between p-10 bg-gray-50"
>
  {/* Left Side - About Me */}
 <div className="flex flex-col justify-center lg:w-1/2 pr-6">
  <div className="">
    
  </div>

  {/* About Me Box */}
  <motion.div 
  whileHover={{ scale: 1.05, y: -3 }}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
  className="bg-gray-100 flex flex-col justify-center items-center md:items-start md:justify-start shadow-lg rounded-2xl p-6 md:p-8 border border-[#274D60]/10 hover:shadow-2xl transition-all duration-300">
    <h1 className="text-[#274D60] text-2xl md:text-5xl font-bold mb-8">
      About Me
    </h1>
    <p className="text-gray-700 leading-relaxed mb-3 text-xs md:text-lg">
      Hi, I'm{" "}
      <span className="font-semibold text-[#274D60]">Syed Momin Ali Shah</span>,
      a passionate{" "}
      <span className="font-semibold">Full Stack Developer</span> who loves
      building clean, scalable, and user-friendly applications.
    </p>

    <p className="text-gray-700 text-xs md:text-lg leading-relaxed mb-3">
      My coding journey began in{" "}
      <span className="font-semibold">2022</span> with online courses like
      Angela Yu’s Web Development Bootcamp and 100 Days of Python — where I built
      a strong foundation in programming and problem-solving.
    </p>

    <p className="text-gray-700 text-xs md:text-lg leading-relaxed mb-3">
      Since <span className="font-semibold">March 2023</span>, I’ve been pursuing
      a BS in Software Engineering at Iqra University. I’ve studied core subjects
      like OOP, DSA, DBMS, and Operating Systems, gaining hands-on experience in
      Java, SQL, and C.
    </p>

    <p className="text-gray-700 mb-3 text-xs md:text-lg">
      I started with small frontend projects like a Currency Converter, Weather
      App, and Tic Tac Toe game using Vanilla JavaScript and DOM manipulation.
    </p>

    <p className="text-gray-700 leading-relaxed text-xs md:text-lg mb-3">
      Later, I joined a university bootcamp where I mastered{" "}
      <span className="font-semibold">Backend Development</span> with NestJS and
      PostgreSQL. Today, I work as a{" "}
      <span className="font-semibold">Full Stack Developer</span> and have built
      real-world applications such as Personal Quote Management, E-Commerce, and
      Learning Management Systems.
    </p>

    <p className="text-gray-700 leading-relaxed text-xs md:text-lg">
      I focus on writing clean, maintainable code and creating user-friendly, scalable applications. I'm always excited to take on new challenges and turn ideas into working software!
    </p>
  </motion.div>
</div>


  {/* Right Side - Timeline (Alternate Left-Right Style) */}
  <div className="lg:w-1/2 flex flex-col items-center mt-10 lg:mt-0 relative">
  {/* Vertical Line */}
  <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#274D60]/60 transform -translate-x-1/2"></div>

  {/* 1️⃣ Education */}
  <div className="w-full mb-12 flex md:justify-end justify-center">
    <div className="relative md:w-1/2 w-[85%] md:pl-6">
      <div className="absolute -left-4 w-8 h-8 bg-[#274D60] text-white flex items-center justify-center rounded-full">
        <FaGraduationCap className="text-gray-100" />
      </div>
      <motion.div
      whileHover={{ scale: 1.05, y: -3 }}
      initial={{ opacity: 0, x:40  }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-2xl">
        <h3 className="text-base md:text-xl font-semibold text-[#274D60] mb-2">
          Education
        </h3>
        <ul className="list-disc list-inside text-left text-gray-700 text-sm md:text-base">
          <li>Iqra University (BS Software Engineering) – 2023–Present</li>
          <li>New Aligarh Degree College (Pre-Eng) – 2020–22</li>
        </ul>
      </motion.div>
    </div>
  </div>

  {/* 2️⃣ Bootcamps & Online Courses */}
  <div className="w-full mb-12 flex md:justify-start justify-center">
    <div className="relative md:w-1/2 w-[85%] md:pr-6">
      <div className="absolute -right-4 w-8 h-8 bg-[#274D60] text-white flex items-center justify-center rounded-full">
        <FaLaptopCode className="text-gray-100" />
      </div>
      <motion.div 
      whileHover={{ scale: 1.05, y: -3 }}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-2xl flex flex-col items-start">
        <h3 className="text-base md:text-lg font-semibold text-[#274D60] mb-2 text-left md:text-right">
          Bootcamps & Online Courses
        </h3>
        <ul className="list-disc list-inside text-left text-gray-700 text-sm md:text-base">
          <li>Udemy (Web Dev, Python 100 Days) – 2022</li>
          <li>Last Mile Tech (Full Stack Bootcamp) – 2025</li>
        </ul>
      </motion.div>
    </div>
  </div>

  {/* 3️⃣ Full Stack Projects */}
  <div className="w-full mb-12 flex md:justify-end justify-center">
    <div className="relative md:w-1/2 w-[85%] md:pl-6">
      <div className="absolute -left-4 w-8 h-8 bg-[#274D60] text-white flex items-center justify-center rounded-full">
        <CiGlobe className="text-gray-100" />

      </div>
      <motion.div 
      whileHover={{ scale: 1.05, y: -3 }}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-2xl">
        <h3 className="text-base md:text-xl font-semibold text-[#274D60] mb-2">
          Full Stack Projects
        </h3>
        <ul className="list-disc list-inside text-left text-gray-700 text-sm md:text-base">
          <li>Learning Management System</li>
          <li>PriceTag E-Commerce</li>
          <li>QuoteNest Personal Quotes Management</li>
        </ul>
      </motion.div>
    </div>
  </div>

  {/* 4️⃣ Frontend Projects */}
  <div className="w-full mb-12 flex md:justify-start justify-center">
    <div className="relative md:w-1/2 w-[85%] md:pr-6">
      <div className="absolute -right-4 w-8 h-8 bg-[#274D60] text-white flex items-center justify-center rounded-full">
        <FaCode className="text-gray-100"/>
      </div>
      <motion.div 
      whileHover={{ scale: 1.05, y: -3 }}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-100 p-4 rounded-xl flex flex-col items-start shadow-md hover:shadow-2xl">
        <h3 className="text-base md:text-xl font-semibold text-[#274D60] mb-2 text-left md:text-right">
          Frontend Projects
        </h3>
        <ul className="list-disc list-inside text-left text-gray-700 text-sm md:text-base">
          <li>Weather App</li>
          <li>Currency Converter</li>
          <li>Tic Tac Toe Game</li>
        </ul>
      </motion.div>
    </div>
  </div>
</div>

</div>



      <div
  id="skills"
  className="py-20 px-6 sm:px-10 bg-gray-50 text-center"
>
  {/* Main Heading */}
  <div className="mb-12">
    <h1 className="text-2xl sm:text-5xl font-extrabold text-[#274D60] mb-3">
      Tech Stack
    </h1>
    <div className="w-24 h-1 bg-gradient-to-r from-[#736bbe] to-[#38BDF8] mx-auto rounded-full"></div>
  </div>

  {/* FRONTEND */}
  <div className="mb-16">
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#274D60] mb-8">
      Frontend
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
      {[
        { name: "HTML", icon: <FaHtml5 size={55} />, color: "#E34F26" },
        { name: "CSS", icon: <FaCss3Alt size={55} />, color: "#1572B6" },
        { name: "JavaScript", icon: <TbBrandJavascript size={55} />, color: "#F7DF1E" },
        { name: "ReactJS", icon: <GrReactjs size={55} />, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={55} />, color: "#38BDF8" },
        {name: "Framer Motion" ,icon: <TbBrandFramerMotion size={55} />, color: "#E94E44"},
        {name: "Redux Toolkit" ,icon:  <SiRedux  size={55} />, color: "#764ABC"},
        {name: "Axios" ,icon: <SiAxios size={55} className="text-gray-400"/>},

        
      ].map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05, y: -3 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 + index * 0.05 }}
          className="w-[240px] sm:w-[270px] md:w-[300px] h-[150px] flex items-center justify-center gap-5 rounded-xl backdrop-blur-lg bg-white/30 shadow-md hover:shadow-[0_0_25px_rgba(115,107,190,0.3)] transition-all duration-300 border border-white/40"
        >
          <div style={{ color: skill.color }}>{skill.icon}</div>
          <h1 className="text-gray-700 font-semibold text-sm sm:text-xl">{skill.name}</h1>
        </motion.div>
      ))}
    </div>
  </div>

  {/* BACKEND */}
  <div className="mb-16">
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#274D60] mb-8">
      Backend & Database
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
      {[
        { name: "NestJS", icon: <SiNestjs size={55} />, color: "#E0234E" },
        { name: "TypeScript", icon: <TbBrandTypescript size={55} />, color: "#3178C6" },,
        { name: "Node.js", icon: <FaNodeJs size={55} />, color: "#339933" },
        { name: "PostgreSQL", icon: <BiLogoPostgresql size={55} />, color: "#4169E1" },

      ].map((backend, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05, y: -3 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 + index * 0.05 }}
          className="w-[240px] sm:w-[270px] md:w-[300px] h-[150px] flex items-center justify-center gap-5 rounded-xl backdrop-blur-lg bg-white/30 shadow-md hover:shadow-[0_0_25px_rgba(115,107,190,0.3)] transition-all duration-300 border border-white/40"
        >
          <div style={{ color: backend.color }}>{backend.icon}</div>
          <h1 className="text-gray-700 font-semibold text-sm sm:text-xl">{backend.name}</h1>
        </motion.div>
      ))}
    </div>
  </div>

  
  {/* TOOLS */}
  <div>
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#274D60] mb-8">
      Tools
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
      {[
        { name: "Netlify", icon: <SiNetlify size={55} />, color: "#00C7B7" },
        { name: "Render", icon: <SiRender size={55} />, color: "#46E3B7" },
       
        { name: "Git", icon: <FaGitAlt size={55} />, color: "#F1502F" },
        { name: "Cloudinary", icon: <SiCloudinary size={55} />, color: "#3448C5" },
      ].map((tool, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05, y: -3 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 + index * 0.05 }}
          className="w-[240px] sm:w-[270px] md:w-[300px] h-[150px] flex items-center justify-center gap-5 rounded-xl backdrop-blur-lg bg-white/30 shadow-md hover:shadow-[0_0_25px_rgba(115,107,190,0.3)] transition-all duration-300 border border-white/40"
        >
          <div style={{ color: tool.color }}>{tool.icon}</div>
          <h1 className="text-gray-700 font-semibold text-sm sm:text-xl">{tool.name}</h1>
        </motion.div>
      ))}
    </div>
  </div>
</div>



      <div
        id="project"
        className="min-h-screen bg-gradient-to-r from-[#0e0a2f] to-[#0e113a] py-16 px-6"
      >
        <div className="font-bold text-3xl md:text-5xl text-[#736bbe] mb-12 text-center">
          <h1>Projects</h1>
        </div>

        <motion.div className="flex flex-col justify-center items-center gap-10">
          {[
            {
              img: "/lms2.png",
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
              img: "/pricetag.png",
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
              img: "/quotes2.png",
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
              img: "/weatherapp.png",
              title: "Weather App",
              desc: "Responsive app using React and OpenWeatherMap API with Axios, showing temperature, humidity, and wind for any city.",
              link: "https://thunderous-stroopwafel-fd414f.netlify.app/",
              source: {
                frontend: "https://github.com/smshah121/Weather-Web-App",
              },
              tech: ["React", "Tailwind","Axios"]
            },

            {
              img: "/currconv.png",
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
              whileHover={{ scale: 1.05, y: -3 }}
              className="w-full max-w-5xl bg-white/5 backdrop-blur-xl mb-2 md:mb-0 rounded-2xl flex flex-col md:flex-row items-center p-6"
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
                <h1 className="font-bold text-lg md:text-2xl pb-3 text-[#736bbe]">
                  {project.title}
                </h1>
                <p className="text-[#afabd6] text-xs md:text-base leading-relaxed">
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
                      className="flex px-3 py-2 rounded-3xl border text-sm md:text-base border-[#C084FC]/40 bg-[#C084FC]/10 backdrop-blur-md text-[#8078ce] hover:bg-[#C084FC]/20 hover:border-[#C084FC]/70 hover:shadow-[0_0_15px_#C084FC] transition-all duration-300  font-bold  mb-5"
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
    className="flex  px-3 py-2 rounded-3xl text-sm md:text-base border border-[#C084FC]/40 bg-[#C084FC]/10 backdrop-blur-md text-[#8078ce] font-bold hover:bg-[#C084FC]/20 hover:border-[#C084FC]/70 hover:shadow-[0_0_15px_#C084FC] transition-all duration-300"
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
    <div className="absolute mt-2 bg-[#1e293b] text-white rounded-lg text-xs shadow-lg z-50 w-40">
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
          <h1 className="text-[#274D60] font-bold text-2xl  md:text-4xl text-center">
            Let's Work Together !
          </h1>
        </div>

        {/* Wrapper */}
        <div className="flex flex-col md:flex-row justify-between gap-10 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col md:w-1/2">
            <h1 className="text-[#274D60] font-bold text-2xl md:text-3xl">Contact Me</h1>

            <motion.img
  src="/contact.avif"
  alt="Gmail Logo"
  className="w-full max-w-sm h-90 mt-8 rounded-2xl object-cover"
  animate={{ y: [0, -20, 0] }}  // moves up then down smoothly
  transition={{
    duration: 2, // total time for one full cycle
    repeat: Infinity, // loops forever
    ease: "easeInOut",
  }}
/>
            <div className="p-5">
              <div className="flex items-center p-2 mt-4">
              <IoIosMail size={34} className="text-red-500" />
              <h4 className="ml-2 text-xs text-gray-700 break-all font-semibold md:text-xl">
                • sm.shah2003@hotmail.com
              </h4>
            </div>

            <div className="flex items-center p-2">
              <FaPhoneAlt size={32} className="text-blue-800" />
              <h4 className="ml-2 text-xs text-gray-700 font-semibold md:text-xl">
                • +92 319 2508750
              </h4>
            </div>

            <div className="flex items-center p-2">
              <FaLocationDot size={32} className="text-red-700" />
              <h4 className="ml-2 text-xs text-gray-700 font-semibold md:text-xl">
                • Karachi, Pakistan
              </h4>
            </div>

            </div>
            
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex flex-col md:w-1/2">
            <h1 className="text-[#274D60] font-bold text-2xl md:text-3xl">Get in touch</h1>
            <p className="mt-2 text-xs md:text-lg md:font-semibold text-gray-700">
              Feel free to reach out if you'd like to collaborate – you're just
              a few clicks away!
            </p>

            <div className="w-full shadow-2xl mt-4 rounded-2xl p-6">
              <form onSubmit={sendEmail}>
                {/* Name */}
                <div className="flex flex-col mb-4">
                  <label
                    className="text-[#274D60] text-sm md:text-base font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full shadow text-sm  md:text-base rounded-2xl p-3"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col mb-4">
                  <label
                    className="text-[#274D60] text-sm  md:text-base font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full text-sm  md:text-base  shadow rounded-2xl p-3"
                    type="email"
                    name="Email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col mb-4">
                  <label
                    className="text-[#274D60] text-sm  md:text-base  font-bold mb-2"
                    htmlFor="title"
                  >
                    Subject
                  </label>
                  <input
                    className="w-full shadow  text-sm  md:text-base rounded-2xl p-3"
                    type="text"
                    name="title"
                    placeholder="Subject"
                    required
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col mb-4">
                  <label
                    className="text-[#274D60] text-sm  md:text-base  font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full h-40 shadow text-sm  md:text-base  rounded-2xl p-3"
                    name="message"
                    placeholder="Your Message"
                    required
                  />
                </div>

                {/* Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#0A192F] to-[#112240] text-sm md:text-base font-bold text-gray-300 hover:bg-[#274D60] hover:text-[#6BA3BE] px-8 py-2 rounded-2xl"
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
            <FaLinkedin className="mr-3 text-gray-100" size={32} />
          </a>
          <a
            href="https://github.com/smshah121"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-3 text-gray-100" size={32} />
          </a>
          <a
            href="https://www.instagram.com/__smshah__"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-gray-100" size={32} />
          </a>
        </div>
        <div className="flex justify-center">
          <h2 className="text-gray-300 text-sm  md:text-base font-bold">
            © Syed Momin Ali Shah. All rights reserved.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
