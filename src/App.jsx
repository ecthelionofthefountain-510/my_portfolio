// App.jsx
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const fadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white scroll-smooth">
      <Helmet>
        <title>Kevin Lundstedt | Software Developer</title>
        <meta name="description" content="Portfolio of Kevin Lundstedt – .NET & React developer with a focus on AI, fullstack projects, and clean code." />
        <meta property="og:title" content="Kevin Lundstedt | Portfolio" />
        <meta property="og:description" content=".NET and React developer with a passion for AI and modern software design." />
        <meta property="og:image" content="assets/preview.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full z-[1000] pointer-events-none"
        animate={{ x: cursorPos.x - 6, y: cursorPos.y - 6 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />

      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <main className="space-y-0">
        <motion.section
          id="home"
          className="py-2 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeVariant}
        >
          <Home />
        </motion.section>

        <img src="assets/smoke-divider-bright.svg" alt="Divider" className="w-full h-[200px] pointer-events-none select-none" />
        
        <motion.section
          id="about"
          className="py-24 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeVariant}
        >
          <About />
        </motion.section>

        <img src="assets/smoke-divider-bright.svg" alt="Divider" className="w-full h-[200px] pointer-events-none select-none" />

        <motion.section
          id="projects"
          className="py-24 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeVariant}
        >
          <Projects />
        </motion.section>

        <img src="assets/smoke-divider-bright.svg" alt="Divider" className="w-full h-[200px] pointer-events-none select-none" />

        <section id="stats">
          <Stats />
        </section>

        <img src="assets/smoke-divider-bright.svg" alt="Divider" className="w-full h-[200px] pointer-events-none select-none" />

        <section id="testimonials">
          <Testimonials />
        </section>

        <img src="assets/smoke-divider-bright.svg" alt="Divider" className="w-full h-[200px] pointer-events-none select-none" />

        <motion.section
        id="contact"
        className="py-24 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeVariant}
        >
        <Contact />
        </motion.section>

        <img src="assets/smoke-divider-bright.svg" alt="Divider" className="w-full h-[200px] pointer-events-none select-none" />

      </main>

      <footer className="bg-white text-gray-700 dark:bg-black dark:text-gray-400 text-center text-sm py-6 mt-10">
        <p>© {new Date().getFullYear()} Kevin Lundstedt. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="https://github.com/ecthelionofthefountain-510" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://linkedin.com/in/kevin-lundstedt" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;