import { motion } from 'framer-motion';

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
    <section className="relative overflow-hidden py-24 px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-16">What Others Say</h2>

      <div className="relative">
        {/* Gradient sides */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-20" />

        <motion.div
          className="flex gap-12 flex-nowrap will-change-transform"
          animate={{ x: ['0%', '-123%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {duplicated.map((item, i) => (
            <div
              key={i}
              className="bg-[#111111] text-white rounded-2xl shadow-xl p-8 min-w-[500px] max-w-[400px] mx-4 flex flex-col justify-between border border-white/10"
            >
              <div className="flex flex-col items-start mb-6">
                <img
                  src={`https://i.pravatar.cc/150?img=${i + 1}`}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border border-white/10 grayscale mb-3"
                />
                <div className="text-4xl text-white">{item.name}</div>
                <div className="text-sm text-gray-400">{item.title}</div>
              </div>

              <hr className="border-gray-700/40 my-4" />

              <p className="text-xl text-gray-300 mb-6 leading-relaxed text-center">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-2 text-left">
            <span className="text-gray-300 text-xl">{item.rating.toFixed(1)}</span>
            <div className="text-yellow-400 text-lg">
              {'★'.repeat(item.rating)}
              <span className="text-gray-500">{'★'.repeat(5 - item.rating)}</span>
            </div>
            </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;