import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeSpent, setTimeSpent] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 535, y: 194 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const timeSpentTimer = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1000);

    // Mouse follower effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX - 200, // Center the blur effect on cursor
        y: e.clientY - 200,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(timer);
      clearInterval(timeSpentTimer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatTimeSpent = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="w-full h-screen bg-[#111111] relative overflow-hidden flex items-center justify-center p-4">
      {/* Mouse Follower Blur Effect - Reduced and blended */}
      <div
        className="fixed w-[250px] h-[250px] bg-[#EFF1C5] rounded-full pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          filter: "blur(85px)",
          opacity: 0.6,
          mixBlendMode: "screen",
          zIndex: 1,
        }}
      ></div>

      {/* Main Card Container */}
      <div
        className="relative rounded-[50px] overflow-hidden"
        style={{
          width: "min(95vw, 1400px)",
          height: "min(90vh, 800px)",
          background: "rgba(32, 32, 48, 0.9)",
          backdropFilter: "blur(100px)",
          backgroundImage: "url('/background-texture-1.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "20px 20px",
          backgroundBlendMode: "overlay",
          zIndex: 2,
        }}
      >
        {/* Top Left - Coordinates */}
        <div
          className="absolute text-white font-['Orbitron'] text-[14px] leading-[17px]"
          style={{ top: "30px", left: "30px" }}
        >
          <div className="mb-1.5">longitude ~ 28.6542</div>
          <div>latitude ~ 77.2373</div>
        </div>

        {/* Top Right - Browser & OS Info */}
        <div
          className="absolute text-white font-['Orbitron'] text-[14px] leading-[17px] text-right"
          style={{ top: "30px", right: "30px" }}
        >
          <div className="mb-1.5">Chrome v119.0.0.0 ~ Browser</div>
          <div>Windows 10 ~ OS</div>
        </div>

        {/* Bottom Right - IP & Location */}
        <div
          className="absolute text-white font-['Orbitron'] text-[14px] leading-[17px] text-right"
          style={{ bottom: "30px", right: "30px" }}
        >
          <div className="mb-1.5">122.161.53.938 ~ IP</div>
          <div>Delhi, India ~ Location</div>
        </div>

        {/* Bottom Left - Time Info */}
        <div
          className="absolute text-white font-['Orbitron'] text-[14px] leading-[17px]"
          style={{ bottom: "30px", left: "30px" }}
        >
          <div className="mb-1.5">Local Time ~ {formatTime(currentTime)}</div>
          <div>Time Spend ~ {formatTimeSpent(timeSpent)}</div>
        </div>

        {/* Center Hero Content - Aligned according to Figma */}
        <div
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)",
          }}
        >
          {/* Hi, I am */}
          <div
            className="text-white font-['Orbitron'] text-[48px] leading-[60px] mb-4"
            style={{
              textAlign: "left",
              marginLeft: "20px",
            }}
          >
            Hi, I am
          </div>

          {/* Name */}
          <div
            className="text-white font-['Orbitron'] font-bold text-[64px] leading-[80px] mb-8"
            style={{
              textAlign: "left",
            }}
          >
            Jaspinder Singh
          </div>

          {/* Role Tags Container */}
          <div
            className="flex items-center gap-6"
            style={{
              marginLeft: "10px",
            }}
          >
            {/* Web Developer Tag */}
            <div className="flex items-center justify-center bg-transparent rounded-full px-6 py-3">
              <span className="text-[#EFF1C5] font-['Titillium_Web'] text-[24px] leading-[36px] text-center">
                WEB DEVELOPER
              </span>
            </div>

            {/* Star */}
            <img src="/star.svg" alt="star" className="w-5 h-5" />

            {/* UI & UX Designer Tag */}
            <div className="flex items-center justify-center bg-transparent rounded-full px-6 py-3">
              <span className="text-[#EFF1C5] font-['Titillium_Web'] text-[24px] leading-[36px] text-center">
                UI & UX DESIGNER
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
