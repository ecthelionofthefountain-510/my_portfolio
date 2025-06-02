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
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);
  const modalRef = useRef(null);
  const expandedRef = useRef(null);
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

  // Lägg till denna useEffect för att stänga den expanderade vyn med Escape-tangenten
  useEffect(() => {
    if (expandedIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setExpandedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedIndex]);

  // Disable scroll when menu is open
  useEffect(() => {
    const modalOpen = !!modal.images || expandedIndex !== null;
    document.body.style.overflow = modalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modal.images, expandedIndex]);

  useEffect(() => {
    if (modal.images && modalRef.current) {
      modalRef.current.focus();
    }
  }, [modal.images]);

  useEffect(() => {
    if (expandedIndex !== null && expandedRef.current) {
      expandedRef.current.focus();
    }
  }, [expandedIndex]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden py-12 px-4">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
      >
        <source src="assets/backgrounds/bg4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main content wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto" ref={ref}>
        {/* Modal for multiple images */}
        {modal.images && (
          <div
            ref={modalRef}
            tabIndex={-1}
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
              ref={modalRef}
              tabIndex={-1}
            >
              <img
                src={modal.images[modal.index]}
                alt={`Screenshot ${modal.index + 1} of project`}
                loading="lazy"
                className="max-h-[80vh] max-w-[90vw] w-full rounded-xl shadow-2xl border-4 border-white dark:border-zinc-800"
              />
              <h3 className="text-xl font-bold text-white mt-4 mb-1">
                {projects.find(p => p.images === modal.images)?.title}
              </h3>
              <p className="text-gray-300 text-center mb-2 max-w-lg">
                {projects.find(p => p.images === modal.images)?.description}
              </p>
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
            ref={expandedRef}
            tabIndex={-1}
            className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/70 backdrop-blur"
            onClick={() => setExpandedIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Detaljer för ${filteredProjects[expandedIndex].title}`}
          >
            <div
              className="relative bg-white dark:bg-zinc-900 rounded-xl shadow-2xl p-8 max-w-2xl w-full flex flex-col items-center"
              onClick={e => e.stopPropagation()}
              ref={expandedRef}
              tabIndex={-1}
            >
              <img
                src={filteredProjects[expandedIndex].images[0]}
                alt={filteredProjects[expandedIndex].title}
                loading="lazy"
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
                Show project
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
          {/* <Briefcase size={40} className="text-blue-500 mb-2" /> */}
          <motion.h2
            style={{ y }}
            className="summer-heading text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2 text-center"
          >
            Projects
          </motion.h2>
          <p className="text-gray-400 text-center max-w-2xl mb-2">
            A selection of my recent work – from real-time CRM systems to interactive games. <b>Click</b> it to get the full experience!
          </p>
        </div>

        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <div
              key={project.title}
              className="project-card bg-zinc-900 rounded-xl shadow-lg p-6 flex flex-col items-start hover:shadow-pink-400/20 transition-transform duration-200 hover:scale-105 cursor-pointer min-h-[270px] max-h-[370px] overflow-hidden"
              onClick={() => setExpandedIndex(i)}
              tabIndex={0}
              aria-label={`Visa detaljer för ${project.title}`}
            >
              {/* Enkel ikon eller initialer */}
              <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
                {project.title[0]}
              </div>
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-zinc-400 text-sm mb-2 overflow-hidden text-ellipsis line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(tech => (
                  <span key={tech} className="bg-zinc-800 text-xs px-2 py-1 rounded text-pink-300">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;