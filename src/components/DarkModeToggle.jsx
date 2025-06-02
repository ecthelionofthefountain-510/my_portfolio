// components/DarkModeToggle.jsx
import { motion, AnimatePresence } from 'framer-motion';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-black/70 hover:bg-black/90 transition-all duration-300 shadow-inner"
    >
      <AnimatePresence mode="wait" initial={false}>
        {darkMode ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21.64 13.65a9 9 0 01-11.29-11.29 9 9 0 1011.29 11.29z" />
            </svg>
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 4V2m0 20v-2m8.49-10.49l1.41-1.41M3.1 20.49l1.41-1.41M20 12h2m-2 0h-2m-8 8.49v2m0-20v2m-4.24 4.24l-1.41-1.41M20.49 3.1l-1.41 1.41M4 12H2m2 0h2" />
              <circle cx="12" cy="12" r="5" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default DarkModeToggle;