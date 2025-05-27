// pages/Projects.jsx
import { useState, useRef } from 'react';
import { projects } from '../data/projects';
import { motion, useScroll, useTransform } from 'framer-motion';

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState('All');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const allTags = [...new Set(projects.flatMap((p) => p.tech))];

  const filteredProjects = selectedTech === 'All'
    ? projects
    : projects.filter((p) => p.tech.includes(selectedTech));

  return (
    <section className="max-w-4xl mx-auto" ref={ref}>
      <motion.h2
        style={{ y }}
        className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-grey mb-10 text-center"
      >
        Projects
      </motion.h2>

      {/* <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setSelectedTech('All')}
          className={`px-4 py-1 rounded-full text-sm border transition ${selectedTech === 'All' ? 'bg-blue-600 text-black dark:text-white' : 'border-gray-300 dark:border-gray-600 hover:bg-blue-100 dark:hover:bg-gray-700'}`}
        >
          All
        </button>
        {allTags.map((tag, i) => (
          <button
            key={i}
            onClick={() => setSelectedTech(tag)}
            className={`px-4 py-1 rounded-full text-sm border transition ${selectedTech === tag ? 'bg-blue-600 text-black dark:text-white' : 'border-gray-300 dark:border-gray-600 hover:bg-blue-100 dark:hover:bg-gray-700'}`}
          >
            {tag}
          </button>
        ))}
      </div> */}

      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-lg shadow-lg bg-white dark:bg-zinc-900 p-6"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="rounded mb-4 w-full h-48 object-cover object-top border border-gray-300 dark:border-gray-700 grayscale hover:grayscale-0 transition duration-500"
              />
            )}
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-auto text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;