import React, { useState, useEffect } from "react";
import sunIcon from "../assets/icon-sun-light.svg";
import moonIcon from "../assets/icon-moon-light.svg";

export function Switch() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "");
  const [checked, setChecked] = useState(theme === "dark");

  useEffect(() => {
    
    localStorage.setItem("theme", theme);

    const tagHTML = document.documentElement;
    tagHTML.classList.remove("dark");

    if (theme === "dark") {
      tagHTML.classList.add("dark");
    }
  }, [theme]);

  
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "" : "dark"));
    setChecked((prev) => !prev); // muda o switch
  }

  return (
    <div className="flex items-center gap-4">
      
      <img src={sunIcon} alt="Sol" className="w-6 h-6" />

      
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={toggleTheme}
        />

        
        <div
          className={`w-14 h-6 rounded-full relative transition-colors ${
            checked ? "bg-green-700" : "bg-gray-300"
          }`}
        >
          
          <span
            className={`absolute top-0.5 left-0 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
              checked ? "translate-x-8" : "translate-x-0"
            }`}
          ></span>
        </div>
      </label>

      
      <img src={moonIcon} alt="Lua" className="w-6 h-6" />
    </div>
  );
}
