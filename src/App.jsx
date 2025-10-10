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
import { FaSnapchatSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [open, setOpen] = useState(false);

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
            : "bg-gradient-to-r from-[#0A192F] to-[#112240]"
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
                    ? "text-[#6BA3BE] font-bold"
                    : "text-gray-300 hover:text-[#6BA3BE]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white text-3xl">
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
                        ? "text-[#6BA3BE] font-bold"
                        : "text-gray-300 hover:text-[#6BA3BE]"
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
  className="flex flex-col-reverse md:flex-row justify-between bg-gradient-to-r from-[#0A192F] to-[#112240] min-h-screen items-center p-6 pt-28 md:pt-20"
>
  {/* Left: Text */}
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col gap-4 text-white md:w-1/2 lg:w-3/5"
  >
    <h1 className="mt-5 md:mt-0 font-bold text-4xl md:text-6xl text-gray-200">Hello! I'm</h1>
    <h2 className="font-bold text-5xl md:text-7xl text-[#6BA3BE] leading-tight">
      Syed Momin Ali Shah
    </h2>
    <i className="mt-5 text-[#a3b8cf]  md:text-lg">Full Stack Developer and a third-year undergraduate student pursuing a BS in Software Engineering</i>

    {/* Resume + Social Links */}
    <div className="flex flex-col mt-4">
      <a
        href="/Resume Internship for Portfolio.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="SyedMominAliShah_Resume.pdf"
      >
        <button className="w-40 h-10 flex justify-center items-center gap-2 rounded border font-bold bg-[#1f4c64] text-[#83A6CE] hover:bg-[#112240] hover:text-white text-sm">
          <IoMdDownload size={18} />
          Resume
        </button>
      </a>

      <div className="flex mt-8 space-x-4">
        <a href="https://www.linkedin.com/in/smshah121" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-100 hover:text-[#0A66C2]" size={32} />
        </a>
        <a href="https://github.com/smshah121" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-100 hover:text-[#181717]" size={32} />
        </a>
        <a href="https://www.instagram.com/__smshah__" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-100 hover:bg-[linear-gradient(45deg,#F77737,#E4405F,#C13584,#5851DB)]" size={32} />
        </a>
        <a href="mailto:sm.shah2003@hotmail.com">
          <PiMicrosoftOutlookLogo className="text-gray-100 hover:text-[#0078D4]" size={32}/>
        </a>
        <a href="mailto:smshah.2003@gmail.com">
          <IoMdMail className="text-gray-100 hover:text-[#EA4335]" size={32} />
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
    <h4 className="text-[#6BA3BE] text-4xl md:text-4xl font-semibold text-center">
      <Typewriter
        options={{
          strings: [
            "Full Stack Developer",
            "Software Engineer",
            "Tech Enthusiast"
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
        <div className="flex flex-col justify-center lg:w-1/2">
          <h1 className="text-[#274D60] text-5xl font-bold mb-6 ml-2">
            About Me
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hi  I'm{" "}
            <span className="font-semibold text-[#274D60]">
              Syed Momin Ali Shah
            </span>
            , a passionate{" "}
            <span className="font-semibold">Full Stack Developer</span> who
            loves building clean, scalable, and user-friendly applications.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            My coding journey began in{" "}
            <span className="font-semibold">2022</span> with online courses of
            Udemy like Angela Yu’s Web Development Bootcamp and 100 Days of
            Python. Since <span className="font-semibold">March 2023</span>,
            I’ve been pursuing a BS in Software Engineering at Iqra University
            
          </p>
          <p className="text-gray-700">
            I built several frontend projects early on — including a Currency
            Converter, Weather App, and Tic Tac Toe game — using vanilla
            JavaScript and DOM manipulation
          </p>
          <br />
          <p className="text-gray-700 leading-relaxed">
            Later, I joined a university bootcamp where I mastered{" "}
            <span className="font-semibold">Backend Development</span> with
            NestJS and PostgreSQL. Today, I work as a{" "}
            <span className="font-semibold">Full Stack Developer</span> and have
            built complete real-world apps.
          </p>
        </div>

        {/* Right Side - Image + Timeline */}
        <div className="lg:w-1/2 flex flex-col items-center mt-10 lg:mt-0">
          <img
            className="w-60 h-50 rounded-2xl shadow-lg mb-8 object-cover"
            src="/portfolioabout.png"
            alt="About"
          />

          {/* Timeline */}
          <div className="relative border-l-2 border-[#274D60] pl-6">
            <div className="mb-8">
              <div className="absolute -left-4 w-8 h-8 bg-[#274D60] text-white flex items-center justify-center rounded-full">
                🎓
              </div>
              <h3 className="text-xl font-semibold text-[#274D60]">
                BS Software Engineering
              </h3>
              <p className="text-gray-600 text-sm">
                Iqra University (2023 – Present)
              </p>
            </div>

            <div className="mb-8">
              <div className="absolute -left-4 w-8 h-8 bg-[#274D60] text-white flex items-center justify-center rounded-full">
                💻
              </div>
              <h3 className="text-xl font-semibold text-[#274D60]">
                Bootcamps & Online Courses
              </h3>
              <ul className="list-disc pl-3">
                <li className="text-gray-600 text-sm">Udemy (Web Dev, Python 100 Days) – 2022</li>
                <li className="text-gray-600 text-sm">Last Mile Tech (Full Stack Bootcamp) - 2025</li>
              </ul>
              
            </div>

            <div>
              <div className="absolute -left-4 w-8 h-8 bg-[#274D60] text-white flex items-center justify-center rounded-full">
                🚀
              </div>
              <h3 className="text-xl font-semibold text-[#274D60]">
                Full Stack Projects
              </h3>
              <ul className="list-disc pl-3">
                <li className="text-gray-600 text-sm"> Learning Management System</li>
                <li className="text-gray-600 text-sm">PriceTag E-Commerce</li>
                <li className="text-gray-600 text-sm">QuoteNest Personal Quotes Management</li>
              </ul>
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
  className="min-h-screen bg-gradient-to-r from-[#0A192F] to-[#112240] py-16 px-6"
>
  <div className="font-bold text-5xl text-[#7ab6d4] mb-12 text-center">
    <h1>Projects</h1>
  </div>

  <motion.div className="flex flex-col justify-center items-center gap-10">
    {[
      {
        img: "/lms.png",
        title: "Learning Management System",
        desc: "Built a role-based LMS with secure Authentication for Student and Instructor. Instructors can create courses, add lectures, and view enrollments. Students can enroll in courses, view lectures and secure profile features.",
        link: "https://singular-toffee-702de6.netlify.app/",
      },
      {
        img: "/ecommerce.png",
        title: "E-Commerce",
        desc: "Developed a full-stack role-based e-commerce platform with secure authentication for Admin and Customers. Customer can Browse & search products, add to cart, place orders, view order history, manage profile. Admin can Manage products (CRUD), upload images/PDFs, view customer purchases, update order statuses.",
        link: "https://dynamic-griffin-d0c7fd.netlify.app/",
      },
      {
        img: "/quote.png",
        title: "Personal Quote Management",
        desc: "Developed a full-stack app for add, delete, update and copy quotes with secure user auth, CRUD operations, and user specific data.",
        link: "https://peaceful-crisp-c5d1fb.netlify.app/",
      },
      {
        img: "/weather.png",
        title: "Weather App",
        desc: "Responsive app using React and OpenWeatherMap API with Axios, showing temperature, humidity, and wind for any city.",
        link: "https://thunderous-stroopwafel-fd414f.netlify.app/",
      },
      {
        img: "/currency.png",
        title: "Currency Converter",
        desc: "Integrated real-time currency API to convert currencies and display flags dynamically with clean UI.",
        link: "https://smshah121.github.io/currency-converter/",
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
        <div className="flex items-center flex-col justify-center mt-6 md:mt-0 md:ml-8 md:flex md:justify-start md:flex-col md:items-start w-full md:w-2/3">
          <h1 className="font-bold text-xl md:text-2xl pb-3 text-[#7ab6d4]">
            {project.title}
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {project.desc}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-2 rounded-3xl bg-[#2a335f] text-[#6aa1bd] font-bold hover:bg-[#112240] hover:text-white"
            >
              View Project
            </motion.button>
          </a>
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

      <div className="flex items-center p-2 mt-4">
        <IoIosMail size={34} className="text-[#274D60]" />
        <h4 className="ml-2 text-gray-700 break-all font-semibold text-xl">
          sm.shah2003@hotmail.com
        </h4>
      </div>

      <div className="flex items-center p-2">
        <FaPhoneAlt size={32} className="text-[#274D60]" />
        <h4 className="ml-2 text-gray-700 font-semibold text-xl">+92 319 2508750</h4>
      </div>

      <div className="flex items-center p-2">
        <FaLocationDot size={32} className="text-[#274D60]" />
        <h4 className="ml-2 text-gray-700 font-semibold text-xl">Karachi, Pakistan</h4>
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

      <div className="h-30 bg-gradient-to-r from-[#0A192F] to-[#112240] flex flex-col">
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
