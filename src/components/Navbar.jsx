import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

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
		<nav className={`navbar-glass ${scrolled ? 'navbar-glass--scrolled' : ''}`}>
			<div className="navbar-inner">
				{/* Brand */}
				<Link
					to="home"
					smooth
					offset={-80}
					duration={500}
					aria-label="Go to home"
				>
					<span className="navbar-brand">Kevin Lundstedt</span>
				</Link>

				{/* Links */}
				<div className="navbar-links">
					{navLinks
						.filter((link) => link.label !== 'Contact')
						.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								smooth
								offset={-80}
								duration={500}
								spy={true}
								activeClass="active"
								className="navbar-link"
							>
								{link.label}
							</Link>
						))}
				</div>

				{/* CTA */}
				<Link
					to="contact"
					smooth
					offset={-80}
					duration={500}
					spy={true}
					activeClass="active-contact"
				>
					<button className="navbar-cta">Contact</button>
				</Link>

				{/* Hamburger */}
				<button
					className="navbar-hamburger"
					aria-label={menuOpen ? 'Close menu' : 'Open menu'}
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{menuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Mobile menu */}
			{menuOpen && (
				<div className="navbar-mobile-menu">
					{navLinks.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							smooth
							offset={-80}
							duration={500}
							onClick={() => setMenuOpen(false)}
							className="navbar-link-mobile"
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