// components/GlowingButtonV5.jsx
import './GlowingButtonV5.css';

const GlowingButtonV5 = ({ children, onClick }) => (
  <button onClick={onClick} className="glowv5-button">
    {children}
  </button>
);

export default GlowingButtonV5;
