import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const navLinks = [
	{ to: 'home', label: 'Home' },
	{ to: 'about', label: 'About' },
	{ to: 'projects', label: 'Projects' },
	{ to: 'stats', label: 'Stats' },
	{ to: 'testimonials', label: 'Client Reviews' },
	{ to: 'contact', label: 'Contact' },
];

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<nav className={`fixed top-0 left-0 w-full px-4 py-3 z-50 backdrop-blur-md bg-black/70 text-white transition-shadow ${scrolled ? 'shadow-lg' : ''}`}>
			<div className="max-w-6xl mx-auto flex items-center justify-between">
				<Link
					to="home"
					smooth
					offset={-80}
					duration={500}
					className="text-xl font-bold cursor-pointer"
					aria-label="Go to home"
				>
					Kevin Lundstedt
				</Link>

				{/* Desktop links */}
				<div className="hidden md:flex gap-6">
					{navLinks.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							smooth
							offset={-80}
							duration={500}
							spy={true}
							activeClass={link.label === 'Contact' ? "active-contact" : "active"}
							className={
								link.label === 'Contact'
									? "ml-4 bg-pink-500 text-white px-4 py-1 rounded-full shadow hover:bg-pink-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 cursor-pointer active:text-white"
									: "cursor-pointer hover:text-pink-400 transition-colors px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
							}
						>
							{link.label}
						</Link>
					))}
				</div>

				{/* Hamburger menu button */}
				<button
					className="md:hidden text-white p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
					aria-label={menuOpen ? 'Close menu' : 'Open menu'}
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{menuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Mobile menu */}
			{menuOpen && (
				<div className="md:hidden mt-4 px-6 space-y-4 bg-black/90 py-4 rounded shadow-lg">
					{navLinks.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							smooth
							offset={-80}
							duration={500}
							onClick={() => setMenuOpen(false)}
							className={
								link.label === 'Contact'
									? "block bg-pink-500 text-white text-lg px-4 py-2 rounded-full shadow hover:bg-pink-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 cursor-pointer"
									: "block text-white text-lg hover:text-pink-400 transition-colors px-2 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 cursor-pointer"
							}
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