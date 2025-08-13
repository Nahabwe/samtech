import React from "react";

const DarkMode = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div>
      <button className="bg-green-600" onClick={toggleDarkMode}>
        Dark Mode
      </button>
    </div>
  );
};

export default DarkMode;
