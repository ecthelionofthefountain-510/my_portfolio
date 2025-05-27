// pages/Home.jsx
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import GlowingButtonV5 from '../components/GlowingButtonV5';

const Home = () => {
  const [text, setText] = useState('');
  const [hasFinished, setHasFinished] = useState(false);
  const fullText = "Hi, I'm Kevin";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        setHasFinished(true);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-white text-black dark:bg-black dark:text-white overflow-hidden">
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
>
  <source src="/assets/bg.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 px-24 mt-40"
      >
        <h1 className="text-4xl md:text-8xl font-bold mb-4">
          <span>{text}</span>
          {!hasFinished && <span className="animate-pulse">|</span>}
        </h1>
        <p className="text-lg md:text-xl text-black dark:text-white mb-8 max-w-xl mx-auto">
          .NET + React developer with a focus on clean code, AI-driven apps and interactive frontend experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="projects" smooth={true} offset={-80} duration={500}>
            <GlowingButtonV5>See Projects</GlowingButtonV5>
          </Link>
          <Link to="contact" smooth={true} offset={-80} duration={500}>
            <GlowingButtonV5>Contact Me</GlowingButtonV5>
          </Link>
        </div>
        <div className="mt-16 animate-bounce text-gray-400 text-sm">
          <span>Scroll down</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;