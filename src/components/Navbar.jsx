import { useState } from 'react';
import FancyToggle from './FancyToggle';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react'; // Lägg till denna rad

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'projects', label: 'Projects' },
    { to: 'stats', label: 'Stats' },
    { to: 'testimonials', label: 'Client Reviews' },
    { to: 'calltoaction', label: 'Contact' },

  ];

  return (
    <nav className="fixed top-0 left-0 w-full px-4 py-3 z-50 backdrop-blur-md bg-black/50 text-white">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        <Link to="home" smooth offset={-80} duration={500}>
          {/* <img src="/assets/logo.png" alt="Logo" className="h-10 cursor-pointer" /> */}
        </Link>

        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              offset={-80}
              duration={500}
              spy={true}
              activeClass="active"
              className="cursor-pointer hover:text-stone-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <FancyToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              offset={-80}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-stone-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;