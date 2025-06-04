import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
	{
		quote: "Kevin is a curious, solution-oriented developer who isn't afraid to take initiative and ask the right questions.",
		name: "Anna Lindholm",
		title: "Instructor at NBI/Handelsakademin",
		rating: 4,
	},
	{
		quote: "He brought both structure and creativity to our group project. A calm and consistent team member.",
		name: "Marcus Sjögren",
		title: "Student Peer / Project Team",
		rating: 5,
	},
	{
		quote: "Kevin's ability to understand both frontend and backend helped us deliver on time and with quality.",
		name: "Erik Nyström",
		title: "Scrum Master (class project)",
		rating: 5,
	},
	{
		quote: "He quickly understood our problem and proposed a solution that actually worked in practice.",
		name: "Johan Bergström",
		title: "Startup Advisor",
		rating: 5,
	},
	{
		quote: "Very professional and easy to work with. Would definitely recommend Kevin to any dev team.",
		name: "Emma Hansson",
		title: "Freelance Designer",
		rating: 4,
	},
	{
		quote: "Kevin’s test automation skills saved us hours of regression testing. His setup was spot on.",
		name: "Daniel Ekholm",
		title: "QA Engineer",
		rating: 5,
	},
];

// Duplicate for seamless scroll
const duplicated = [...testimonials, ...testimonials];

const Testimonials = () => {
	return (
		<section
			className="relative overflow-hidden py-24 px-4"
			role="region"
			aria-labelledby="testimonials-heading"
		>
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-10">
				{/* Vänster: Bild */}
				<div className="hidden md:block">
					<img
						src="assets/client-reviews-hero.jpg"
						alt="Client at work"
						className="rounded-2xl grayscale shadow-xl object-cover w-full h-[180px] sm:h-[320px] md:h-[400px]"
					/>
				</div>
				{/* Höger: Text och knappar */}
				<div>
					<h2 className="summer-heading text-3xl sm:text-9xl font-light text-white mb-2 sm:mb-4">
						Client Reviews
					</h2>
					<p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
						Real feedback from clients who trusted my design expertise to elevate
						their brands successfully.
					</p>
					<div className="flex flex-col gap-3 max-w-xs">
						<a
							href="https://wa.me/46708836696"
							target="_blank"
							rel="noopener noreferrer"
							className="testimonials w-full text-center"
							aria-label="Chat with me on WhatsApp"
						>
							Whatsapp me
						</a>
						<button className="testimonials w-full">See services</button>
					</div>
				</div>
			</div>

			<div className="relative px-4 sm:px-8">
				<motion.div
					className="testimonials-carousel flex gap-4 flex-nowrap will-change-transform"
					animate={{ x: ['0%', '-123%'] }}
					transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
					aria-label="Testimonials carousel"
				>
					{duplicated.map((item, i) => (
						<div
							key={i}
							className="testimonial-card bg-zinc-900 text-white rounded-xl shadow-lg p-5 sm:p-8 min-w-[85vw] max-w-[320px] sm:min-w-[420px] flex flex-col justify-between border border-white/10"
						>
							<div className="flex flex-col items-start mb-4">
								<img
									src={`https://i.pravatar.cc/150?img=${i + 1}`}
									alt={`Portrait of ${item.name}`}
									className="w-18 h-18 rounded-full object-cover border border-white/10 grayscale mb-3"
								/>
								<div className="text-4xl font-semibold text-white">
									{item.name}
								</div>
								<div className="text-sm text-gray-400">{item.title}</div>
							</div>

							<hr className="border-gray-700/40 my-1" />

							<blockquote className="text-base text-gray-200 mb-6 leading-relaxed">
								"{item.quote}"
							</blockquote>

							<div
								className="flex items-center gap-1 text-yellow-400 text-lg mt-2"
								aria-label={`${item.rating} out of 5 stars`}
							>
								<span className="text-gray-300 text-base mr-1">
									{item.rating.toFixed(1)}
								</span>
								{'★'.repeat(item.rating)}
								<span className="text-gray-500">
									{'★'.repeat(5 - item.rating)}
								</span>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Testimonials;