// components/Contact.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import GlowingButtonV5 from './GlowingButtonV5';

const Contact = () => {
  return (
    <section
      className="relative bg-black py-20 sm:py-32 text-white text-center overflow-hidden"
      role="region"
      aria-labelledby="contact-heading"
    >
      {/* Optional background overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/assets/smoke-bg2.gif')] bg-cover bg-center opacity-10 pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-4"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="inline-block text-xs tracking-wide text-gray-400 border border-gray-600 px-4 py-1 rounded-full mb-4">
          <span className="relative flex items-center justify-center pl-4">
            <span className="absolute left-0 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Available For Work
          </span>
        </div>

        <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-snug">
          Curious about what we can create together?<br />
          <span className="font-light">Let’s bring something extraordinary to life!</span>
        </h2>

        <div className="mb-6">
          <a href="mailto:lundstedtkevin@gmail.com" aria-label="Send email">
            <GlowingButtonV5>Contact Me</GlowingButtonV5>
          </a>
        </div>

        <div className="flex justify-center gap-7 text-xl text-gray-400">
          <a
            href="https://github.com/ecthelionofthefountain-510"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/kevin-lundstedt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:lundstedtkevin@gmail.com"
            aria-label="Send email"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;