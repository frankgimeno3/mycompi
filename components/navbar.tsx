import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState("ESP");

  const toggleLanguage = () => {
    setLanguage(language === "ESP" ? "ENG" : "ESP");
  };

  return (
    <nav className="fixed top-0 w-full  py-4  flex items-center justify-between">
      <button className="text-lg text-white font-bold px-6 text-yellow-300">
        MyCompi
      </button>
      <div>
        <button
          className="mr-2 bg-transparent text-yellow-300 font-bold text-sm"
          onClick={toggleLanguage}
        >
          {language === "ESP" ? "ENG" : "ESP"}
        </button>
        <button className="mr-1 rounded-full bg-white text-sm px-4 py-1 shadow">
          Inicio Sesión
        </button>
        <button className="rounded-full bg-white text-sm px-4 mr-2 py-1 shadow">
          Registro
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
