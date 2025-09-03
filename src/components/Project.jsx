import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import znews from "../assets/Znews.png"
import carehut from "../assets/CareHut.png";
import foodian from "../assets/Foodian.png"
import zauth from "../assets/Zauth.png"
import passgen from "../assets/PassGen.png"
import passman from "../assets/PassMan.png"
import poslyzer from "../assets/Poslyzer.png"
import weather from "../assets/Weather.png"
import todoz from "../assets/TodoZ.png"
import zbgrem from "../assets/ZbgRem.png"

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const ProjectCard = ({ project, isDark }) => (
<motion.div
  variants={cardVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
  transition={{ duration: 0.15 }}
  whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.2)", y: -5, }}
  className={`rounded-xl overflow-hidden shadow-lg ${
    isDark ? "bg-gray-800" : "bg-gray-50"
  } transition-all duration-300`}
>
    <div className="p-6 flex justify-center items-center flex-col">
      <h2
        className={`${
          isDark ? "text-blue-400 " : "text-blue-600"
        } font-bold text-xl mb-2 text-center`}
      >
        {project.title}
      </h2>
      <img className="m-2" src={project.image} alt={`${project.title}-image`} />
      <p
        className={`${
          isDark ? "text-blue-50" : "text-zinc-600"
        } text-sm mb-4 text-center`}
      >
        {project.description}
      </p>
      <div className="flex justify-center items-center flex-wrap gap-2 mb-6 max-w-lg">
        {project.techStack.map((tech, idx) => (
          <span
            key={`${project.title}-tech-${idx}`}
            className={`${
              isDark ? "bg-gray-100 text-gray-800" : "bg-gray-700 text-gray-200"
            } px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium hover:scale-105 transition-transform justify-center`}
          >
            {tech.name}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            isDark ? " text-blue-400" : " text-blue-600"
          } px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium hover:scale-105 transition-transform justify-center`}
        >
          <FaGithub size={20} />
          <span>Code</span>
        </a>
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 transition-colors ${
            isDark
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-800"
          }`}
        >
          <FaExternalLinkAlt size={18} />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  </motion.div>
);


const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const { isDark } = useTheme();

  const extraProjects = [
    
    {
      title: "CareHut",
      description:
        "A website designed for pet-lovers to find pet-care services like pet-sitting, grooming, etc., nearby.",
      image: carehut,
      techStack: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "Javascript" },
        { name: "BootStrap" },
        { name: "Google's Places API" },
        { name: "Google's Map API" },
      ],
      links: {
        github: "https://github.com/Lunatic5578/Carehut",
        live: "https://lunatic5578.github.io/Carehut/carehut.html",
      },
    },
    {
      title: "ToDoZ",
      description:
        "A simple To-Do web-app to store daily tasks in localstorage",
      image: todoz,
      techStack: [
        { name: "React.js" },
        { name: "TailwindCSS" },
        { name: "Local Storage Management" },
      ],
      links: {
        github: "https://github.com/Lunatic5578/ToDo_WebApp",
        live: "https://main--todoreactz.netlify.app/",
      },
    },
    {
      title: "Weather.IO",
      description:
        "A simple weather forecasting web-app to get current weather of any city",
      image: weather,
      techStack: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "Javascript" },
        { name: "BootStrap" },
      ],
      links: {
        github: "https://github.com/Lunatic5578/Weather_WebApp",
        live: "https://lunatic5578.github.io/Weather_WebApp/",
      },
    },
    {
      title: "PassGen",
      description: "A basic react web-app to generate random passwords",
      image: passgen,
      techStack: [{ name: "React.js" }, { name: "TailWindCSS" }],
      links: {
        github: "https://github.com/Lunatic5578/Password_Generator",
        live: "https://passgeneratorz.netlify.app/",
      },
    },
    {
      title: "Z-News",
      description:
        "A react web-app to get latest local news from various sources",
      image: znews,
      techStack: [
        { name: "React.js" },
        { name: "TailWindCSS" },
        { name: "API Handling" },
      ],
      links: {
        github: "https://github.com/Lunatic5578/Z-news",
        live: "https://z-news-xi.vercel.app/",
      },
    },
    {
      title: "Foodian",
      description:
        "A small responsive landing page for a food delivery service",
      image: foodian,
      techStack: [{ name: "HTML" }, { name: "CSS" }],
      links: {
        github: "https://github.com/Lunatic5578/Foodian",
        live: "https://lunatic5578.github.io/Foodian/",
      },
    },
  ];

  const projects = [
    {
      title: "Poslyzer",
      description:
        "A fullstack posture analysis web application, allowing users to assess squat and sitting postures via webcam or uploaded video with over 90% response accuracy per frame",
      image: poslyzer,
      techStack: [
        { name: "React.js" },
        { name: "Flask" },
        { name: "TailwindCSS" },
        { name: "OpenCV" },
        { name: "Python" },
        { name: "Vercel" },
        { name: "Render" },
      ],
      links: {
        github: "https://github.com/Lunatic4755/Poslyzer",
        live: "https://poslyzer.vercel.app/",
      },
    },
    {
      title: "Z-BGRemover",
      description:
        "An AI powered SaaS web-app which removes background from images.",
      image: zbgrem,
      techStack: [
        { name: "Node.js" },
        { name: "React.js" },
        { name: "MongoDB" },
        { name: "Render" },
        { name: "Vercel" },
        { name: "Tailwind CSS" },
      ],
      links: {
        github: "https://github.com/Lunatic5578/ZBG-Remover",
        live: "https://zbg-remover.vercel.app/",
      },
    },
    {
      title: "PassMan",
      description:
        "A secured password manager web-app for users to store their login credentials for various sites",
      image: passman,
      techStack: [
        { name: "React.js" },
        { name: "Node.js" },
        { name: "MongoDB" },
        { name: "TailwindCSS" },
        { name: "Supabase" },
        { name: "Render" },
      ],
      links: {
        github: "https://github.com/Lunatic5578/PassMan",
        live: "https://passman-otc4.onrender.com/",
      },
    },
    {
      title: "Z-Auth",
      description:
        "A custom designed advanced MERN Authentication web-app with secured storage, interactive user-interface and features like password strength meter,etc",
      image: zauth,
      techStack: [
        { name: "React.js" },
        { name: "Node.js" },
        { name: "MongoDB" },
        { name: "TailwindCSS" },
        { name: "FramerMotion" },
        { name: "Google SMTP Service" },
        { name: "Render" },
      ],
      links: {
        github: "https://github.com/Lunatic5578/MernAuth",
        live: "https://mernauth-k6gh.onrender.com/",
      },
    },
  ];

   return (
    <div
      className={`${
        isDark
          ? "bg-gradient-to-br from-gray-800 via-zinc-900 to-black"
          : "bg-gradient-to-br from-gray-400 via-zinc-200 to-white/80"
      } py-12 px-4 sm:px-6 min-h-screen`}
    >
      <div className="max-w-7xl mx-auto">
        <h1
          className={`text-center font-bold ${
            isDark ? "text-white" : "text-zinc-900"
          } mb-5`}
        >
          Projects
        </h1>

        <AnimatePresence>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={`main-${index}`}
                project={project}
                isDark={isDark}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {extraProjects.length > 0 && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`px-6 py-3 rounded-lg font-medium ${
                isDark
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white transition-colors`}
            >
              {showAll ? "Show Less" : "Show More Projects"}
            </button>

            <AnimatePresence>
              {showAll && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -30 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
                >
                  {extraProjects.map((project, index) => (
                    <ProjectCard
                      key={`extra-${index}`}
                      project={project}
                      isDark={isDark}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
