import React, { useState } from "react";
import sunIcon from "../assets/icon-moon-light.svg"; // sol
import moonIcon from "../assets/icon-sun-light.svg"; // lua

export function Switch() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  return (
    <div className="flex items-center gap-4">
      {/* Ícone Sol */}
      <img src={sunIcon} alt="Sol" className="w-6 h-6" />

      {/* Switch */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleTheme}
          className="sr-only peer"
        />
        <div className="w-14 h-6 bg-gray-300 rounded-full peer-checked:bg-green-700 relative transition-colors">
          <span className="absolute left-0 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform peer-checked:translate-x-8"></span>
        </div>
      </label>

      {/* Ícone Lua */}
      <img src={moonIcon} alt="Lua" className="w-6 h-6" />
    </div>
  );
}
