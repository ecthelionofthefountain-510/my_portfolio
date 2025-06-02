import './FancyToggle.css';

const FancyToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="toggle-wrapper">
      <input
        type="checkbox"
        id="fancy-toggle"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="fancy-toggle">
        <i className="fa-solid fa-sun sun"></i>
        <i className="fa-solid fa-moon moon"></i>
      </label>
      <div className="background"></div>
    </div>
  );
};

export default FancyToggle;