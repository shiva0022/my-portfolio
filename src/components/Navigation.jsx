import React from "react";

const Navigation = () => {
  return (
    <div
      className="fixed bg-[#3D3D3D] bg-opacity-70 rounded-full flex items-center justify-between"
      style={{
        bottom: "10px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(90vw, 572px)",
        height: "56px",
        backdropFilter: "blur(50px)",
        gap: "20px",
        padding: "10px 60px",
        zIndex: 100,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        opacity: 0.88,
      }}
    >
      <span className="text-[#EFF1C5] font-['Orbitron'] font-bold text-[20px] leading-[25px] text-center cursor-pointer">
        Home
      </span>
      <span className="text-white font-['Orbitron'] font-bold text-[20px] leading-[25px] text-center cursor-pointer hover:text-[#EFF1C5] transition-colors duration-300">
        Projects
      </span>
      <span className="text-white font-['Orbitron'] font-bold text-[20px] leading-[25px] text-center cursor-pointer hover:text-[#EFF1C5] transition-colors duration-300">
        About
      </span>
      <span className="text-white font-['Orbitron'] font-bold text-[20px] leading-[25px] text-center cursor-pointer hover:text-[#EFF1C5] transition-colors duration-300">
        Contact
      </span>
    </div>
  );
};

export default Navigation;
