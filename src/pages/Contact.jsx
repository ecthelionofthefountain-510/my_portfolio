import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Your message has been sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="max-w-2xl mx-auto py-16 px-6 text-black dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl p-8 space-y-6 transition-all duration-300"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg bg-black/30 border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg bg-black/30 border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          rows="5"
          required
          className="w-full p-4 rounded-lg bg-black/30 border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
        ></textarea>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 text-black dark:text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </section>
  );
};

export default Contact;