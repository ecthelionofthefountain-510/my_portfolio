// pages/About.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start px-4 md:px-0 relative" ref={ref}>
      <motion.h2
        style={{ y }}
        className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl font-extrabold text-black dark:text-white opacity-5 select-none pointer-events-none"
      >
      </motion.h2>

      <motion.div className="pt-10" style={{ y }}>
        <h2 className="text-4xl font-bold text-black dark:text-white mb-4">About Me</h2>
        <p className="mb-4 text-gray-400 border-b border-gray-700 pb-4">
          I'm currently studying software development with an AI focus at NBI/Handelsakademin in Malmö. I'm passionate about working on projects that combine creativity and logic – whether it's building a real-time CRM system, an AI-driven scheduler, or a Tolkien-inspired game.
        </p>
        <p className="mb-4 text-gray-400 border-b border-gray-700 pb-4">
          I enjoy collaborating in agile teams and love seeing an application grow from idea to deployment. With experience in .NET, React, PostgreSQL, and test automation, I'm confident building both backend APIs and interactive frontends.
        </p>
        <p className="mb-8 text-gray-400">
          My long-term goal is to contribute to meaningful and modern software solutions that make people's lives easier or more engaging. I'm always exploring new tools, reading tech blogs, and leveling up my skills.
        </p>

        <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2 mb-8 ">
          {["React", ".NET", "C#", "JavaScript", "PostgreSQL", "REST API", "GitHub", "SpecFlow", "Tailwind", "Agile", "Playwright", "OOP"].map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-sm
                bg-gray-200 text-gray-900
                dark:bg-gray-800 dark:text-white
                transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Education & Courses</h3>
        <p className="mb-4 text-gray-400">
          <strong>Software Developer, AI Specialization</strong> (NBI/Handelsakademin, Malmö)<br />
          Aug 2024 – Jun 2026
        </p>
        <ul className="text-sm text-black dark:text-white space-y-2">
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
        className="w-full h-full pt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/assets/profile-picture.jpg"
          alt="Profile"
          className="rounded-xl shadow-lg grayscale hover:grayscale-0 transition duration-500 object-cover w-full"
        />
      </motion.div>
    </section>
  );
};

export default About;