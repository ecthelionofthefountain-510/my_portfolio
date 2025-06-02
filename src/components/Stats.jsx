// components/Stats.jsx
import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaClock } from 'react-icons/fa';
import CountUp from 'react-countup';

const stats = [
	{
		number: 10,
		suffix: '+',
		label: 'Fullstack Projects',
		icon: <FaCode className="text-3xl mb-2 text-pink-400" />,
	},
	{
		number: 3,
		label: 'Team Collaborations',
		icon: <FaUsers className="text-3xl mb-2 text-blue-400" />,
	},
	{
		number: 8,
		suffix: '+',
		label: 'Months of Experience',
		icon: <FaClock className="text-3xl mb-2 text-green-400" />,
	},
];

const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.2,
			duration: 0.6,
		},
	}),
};

const Stats = () => {
	return (
		<section className="relative w-full min-h-screen py-24 px-6 text-white text-center overflow-hidden flex items-center justify-center">
			<video
				autoPlay
				loop
				muted
				playsInline
				aria-hidden="true"
				tabIndex={-1}
				className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
			>
				<source src="assets/backgrounds/bg3.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="relative z-10 w-full max-w-6xl mx-auto">
				<h2 className="summer-heading text-8xl font-bold mb-8">Quick Stats</h2>
				<p className="mb-12 text-gray-400">A snapshot of my journey so far.</p>
				<div className="grid gap-8 md:grid-cols-3">
					{stats.map((item, i) => (
						<motion.div
							key={item.label}
							className="bg-black/40 backdrop-blur rounded-xl py-10 px-6 border border-white/10 shadow-lg hover:shadow-xl transition flex flex-col items-center"
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							custom={i}
						>
							{item.icon}
							<div className="text-4xl font-bold mb-2 bg-white bg-clip-text text-transparent">
								<CountUp end={item.number} duration={1.2} />
								{item.suffix}
							</div>
							<div className="text-sm text-gray-300">{item.label}</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Stats;