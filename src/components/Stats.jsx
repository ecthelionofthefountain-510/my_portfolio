// components/Stats.jsx
import { motion } from 'framer-motion';

const stats = [
  {
    number: '10+',
    label: 'Fullstack Projects'
  },
  {
    number: '3',
    label: 'Team Collaborations'
  },
  {
    number: '8+',
    label: 'Months of Experience'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6
    }
  })
};

const Stats = () => {
  return (
    <section className="max-w-6xl mx-auto py-24 px-6 text-white text-center">
      <div className="grid gap-8 md:grid-cols-3">
        {stats.map((item, i) => (
          <motion.div
            key={item.label}
            className="bg-black/40 backdrop-blur rounded-xl py-10 px-6 border border-white/10 shadow-lg hover:shadow-xl transition"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={i}
          >
            <div className="text-4xl font-bold mb-2 bg-white bg-clip-text text-transparent">
              {item.number}
            </div>
            <div className="text-sm text-gray-300">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;