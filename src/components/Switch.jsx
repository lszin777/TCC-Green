import React, { useState } from "react";
import sunIcon from "../assets/icon-sun-light.svg";
import moonIcon from "../assets/icon-moon-light.svg";

export function Switch() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-4">
      {/* Ícone Sol */}
      <img src={sunIcon} alt="Sol" className="w-6 h-6" />

      {/* Switch */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />

        {/* trilho */}
        <div
          className={`w-14 h-6 rounded-full relative transition-colors ${
            checked ? "bg-green-700" : "bg-gray-300"
          }`}
        >
          {/* bolinha */}
          <span
            className={`absolute top-0.5 left-0 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
              checked ? "translate-x-8" : "translate-x-0"
            }`}
          ></span>
        </div>
      </label>

      {/* Ícone Lua */}
      <img src={moonIcon} alt="Lua" className="w-6 h-6" />
    </div>
  );
}
