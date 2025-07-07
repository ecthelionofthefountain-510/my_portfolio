// pages/About.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <motion.section
      id="about"
      className="relative z-10 grid items-start max-w-6xl gap-12 px-4 py-24 mx-auto -mt-24 md:grid-cols-2"
      ref={ref}
    >
      {/* Gradient overlay för mjuk övergång */}
      <div className="absolute left-0 z-20 w-full h-24 pointer-events-none -top-24"
           style={{
             background: 'linear-gradient(to bottom, #000 0%, transparent 100%)'
           }}
      />

      <motion.h2
        style={{ y }}
        className="absolute top-0 text-6xl font-extrabold text-black -translate-x-1/2 pointer-events-none select-none left-1/2 dark:text-white opacity-5"
        aria-hidden="true"
      ></motion.h2>

      <motion.div className="pt-10 mb-8 md:mb-0" style={{ y }}>
        <h2 className="mb-4 font-bold text-black summer-heading text-9xl dark:text-white">About Me</h2>
        <p className="pb-4 mb-4 text-gray-400 border-b border-gray-700">
          I'm currently studying software development with an AI focus at NBI/Handelsakademin in Malmö. I'm passionate about working on projects that combine creativity and logic, whether it's building a real-time CRM system, an AI-driven scheduler, or a Tolkien-inspired game.
        </p>
        <p className="pb-4 mb-4 text-gray-400 border-b border-gray-700">
          I enjoy collaborating in agile teams and love seeing an application grow from idea to deployment. With experience in .NET, React, PostgreSQL, and test automation, I'm confident building both backend APIs and interactive frontends.
        </p>
        <p className="mb-8 text-gray-400">
          My long-term goal is to contribute to meaningful and modern software solutions that make people's lives easier or more engaging. I'm always exploring new tools, reading tech blogs, and leveling up my skills.
        </p>

        <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">Skills</h3>
        <div
          className="flex flex-wrap gap-2 mb-8"
          aria-label="Technical skills"
        >
          {["React", ".NET", "C#", "JavaScript", "PostgreSQL", "REST API", "GitHub", "SpecFlow", "Tailwind", "Agile", "Playwright", "OOP"].map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm text-gray-900 transition-colors bg-gray-200 rounded-full dark:bg-gray-800 dark:text-pink-400"
            >
              {skill}
            </span>
          ))}
        </div>

        <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">Education & Courses</h3>
        <p className="mb-4 text-gray-400">
          <strong>Software Developer, AI Specialization</strong> (NBI/Handelsakademin, Malmö)<br />
          Aug 2024 – Jun 2026
        </p>
        <ul className="space-y-2 text-sm text-black dark:text-white">
          <li>• Introduction to Object-Oriented Modeling – Pass with Distinction</li>
          <li>• Databases and Information Structures – Pass with Distinction</li>
          <li>• Object-Oriented Programming – Pass</li>
          <li>• Agile Development Culture – Pass with Distinction</li>
          <li>• Data-Driven Applications – Pass with Distinction</li>
          <li>• Testing, Integration, Delivery – Pass with Distinction</li>
          <li>• IT/Tech for Sustainable Development – Pass with Distinction</li>
        </ul>
      </motion.div>

      <motion.div
        className="flex justify-center w-full h-full pt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="assets/profile-picture.jpg"
          alt="Portrait of Kevin Lundstedt"
          className="object-cover w-full max-w-xs mx-auto transition duration-500 shadow-lg rounded-xl grayscale hover:grayscale-0 md:max-w-full"
          tabIndex={0}
        />
      </motion.div>
    </motion.section>
  );
};

export default About;