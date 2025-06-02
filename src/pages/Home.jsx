// pages/Home.jsx
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const [hasFinished, setHasFinished] = useState(false);
  const fullText = "Hi Im Kevin";

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
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
      >
        <source src="assets/backgrounds/bg2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 px-4 sm:px-8 md:px-24 mt-40"
      >
        <h1 className="machineat text-4xl sm:text-6xl md:text-9xl mb-8">
          <span>{text}</span>
          {!hasFinished && <span className="animate-pulse" aria-hidden="true">|</span>}
        </h1>
        <p className="text-lg md:text-xl text-black dark:text-white mb-8 max-w-xl mx-auto">
          .NET + React developer with a focus on clean code, AI-driven apps and interactive frontend experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="projects" smooth={true} offset={-80} duration={500}>
            <button
              className="relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base"
              type="button"
            >
              <span
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"
              ></span>
              <span
                className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"
              ></span>
              <div
                className="relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110"
              >
                <span className="select-none">See Projects</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1"
                >
                  <path
                    clipRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </Link>
          <Link to="contact" smooth={true} offset={-80} duration={500}>
            <button
              className="relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base"
              type="button"
            >
              <span
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"
              ></span>
              <span
                className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"
              ></span>
              <div
                className="relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110"
              >
                <span className="select-none">Contact Me</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1"
                >
                  <path
                    clipRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </Link>
        </div>
        <div className="mt-16 flex items-center justify-center gap-4 w-full max-w-xl mx-auto">
          <span className="flex-1 border-t border-gray-600 mr-4"></span>
          <span className="text-gray-300 text-base">Scroll down</span>
          <span className="mx-4">
            {/* Mus-ikon */}
            <svg width="28" height="40" viewBox="0 0 28 40" fill="none">
              <rect x="1.5" y="1.5" width="25" height="37" rx="12.5" stroke="#fff" strokeWidth="2"/>
              <circle cx="14" cy="10" r="2" fill="#fff">
                <animate attributeName="cy" values="10;18;10" dur="1.5s" repeatCount="indefinite" />
              </circle>
            </svg>
          </span>
          <span className="text-gray-300 text-base">to see projects</span>
          <span className="flex-1 border-t border-gray-600 ml-4"></span>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;