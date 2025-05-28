// pages/Projects.jsx
import { useEffect, useState, useRef } from 'react';
import { projects } from '../data/projects';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState('All');
  const [modal, setModal] = useState({ images: null, index: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const allTags = [...new Set(projects.flatMap((p) => p.tech))];

  const filteredProjects = selectedTech === 'All'
    ? projects
    : projects.filter((p) => p.tech.includes(selectedTech));

  const minSwipeDistance = 50; // px

  const onTouchStart = (e) => {
    setTouchEndX(null); // Reset previous
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      // swipe left
      setModal(m => ({
        ...m,
        index: (m.index + 1) % m.images.length
      }));
    }
    if (distance < -minSwipeDistance) {
      // swipe right
      setModal(m => ({
        ...m,
        index: (m.index - 1 + m.images.length) % m.images.length
      }));
    }
  };

  // Lägg till denna useEffect för att lyssna på piltangenter när modalen är öppen
  useEffect(() => {
    if (!modal.images) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setModal(m => ({
          ...m,
          index: (m.index + 1) % m.images.length
        }));
      }
      if (e.key === 'ArrowLeft') {
        setModal(m => ({
          ...m,
          index: (m.index - 1 + m.images.length) % m.images.length
        }));
      }
      if (e.key === 'Escape') {
        setModal({ images: null, index: 0 });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modal.images]);

  return (
    <section className="max-w-4xl mx-auto" ref={ref}>
      {/* Modal for multiple images */}
      {modal.images && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setModal({ images: null, index: 0 })}
          role="dialog"
          aria-modal="true"
          aria-label="Project image gallery"
        >
          <div
            className="relative flex flex-col items-center"
            onClick={e => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={modal.images[modal.index]}
              alt={`Screenshot ${modal.index + 1} of project`}
              className="max-h-[80vh] max-w-[90vw] w-full rounded-xl shadow-2xl border-4 border-white dark:border-zinc-800"
            />
            {/* {modal.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1 rounded-full shadow-lg pointer-events-none select-none animate-pulse">
                Swipe or use arrows for more images
              </div>
            )} */}
            {/* <button
              onClick={() => setModal({ images: null, index: 0 })}
              className="absolute top-2 right-2 bg-black/70 rounded-full p-2 text-white hover:bg-black"
              aria-label="Close"
            >
              <X size={28} />
            </button> */}
            {/* Prev/Next buttons */}
            {modal.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setModal(m => ({
                      ...m,
                      index: (m.index - 1 + m.images.length) % m.images.length
                    }))
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 rounded-full p-2 text-white hover:bg-black"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={() =>
                    setModal(m => ({
                      ...m,
                      index: (m.index + 1) % m.images.length
                    }))
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 rounded-full p-2 text-white hover:bg-black"
                  aria-label="Next image"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
            {/* Dots for navigation */}
            {modal.images.length > 1 && (
              <div className="flex gap-2 mt-4">
                {modal.images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full ${idx === modal.index ? 'bg-pink-400' : 'bg-gray-400'}`}
                    onClick={() => setModal(m => ({ ...m, index: idx }))}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {expandedIndex !== null && (
        <div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/70 backdrop-blur"
          onClick={() => setExpandedIndex(null)}
        >
          <div
            className="relative bg-white dark:bg-zinc-900 rounded-xl shadow-2xl p-8 max-w-2xl w-full flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={filteredProjects[expandedIndex].images[0]}
              alt={filteredProjects[expandedIndex].title}
              className="max-h-[60vh] rounded mb-6"
            />
            <h3 className="text-2xl font-bold mb-2">{filteredProjects[expandedIndex].title}</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">{filteredProjects[expandedIndex].description}</p>
            <button
              className="hover:text-black dark:hover:text-white px-6 py-2 rounded shadow border border-gray-300 dark:border-zinc-700 transition-colors duration-300"
              onClick={() => {
                setModal({ images: filteredProjects[expandedIndex].images, index: 0 });
                setExpandedIndex(null);
              }}
            >
              Visa projekt
            </button>
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-black dark:hover:text-white"
              onClick={() => setExpandedIndex(null)}
              aria-label="Stäng"
            >
              <X size={28} />
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center mb-8">
        <Briefcase size={40} className="text-blue-500 mb-2" />
        <motion.h2
          style={{ y }}
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2 text-center"
        >
          Projects
        </motion.h2>
        <p className="text-gray-400 text-center max-w-2xl mb-2">
          A selection of my recent work – from real-time CRM systems to interactive games. <b>Click</b> it to get the full experience!
        </p>
      </div>

      <div className="projects-grid grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, i) => (
          <div
            key={project.title}
            className="project-card group relative overflow-hidden rounded-xl shadow-lg bg-white/90 dark:bg-zinc-900/90 border border-transparent transition-all duration-500 cursor-pointer"
            onClick={() => setExpandedIndex(i)}
            tabIndex={0}
            aria-label={`Open details for ${project.title}`}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') setExpandedIndex(i);
            }}
          >
            <img
              src={project.images[0]}
              alt={`Screenshot of ${project.title}`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-100"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-1000 transition">
              {/* <h3 className="text-white text-2xl font-bold mb-4">{project.title}</h3> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;