import React, { useState, useEffect } from "react";
import "./MouseScroll.css";

const MouseScroll = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`MouseScroll ${isVisible ? "visible" : "hidden"}`}
      style={{ "--color": "skyblue" }}
    >
      <div className="MouseScroll-chevrons">
        <div className="MouseScroll-chevrondown"></div>
        <div className="MouseScroll-chevrondown"></div>
      </div>
    </div>
  );
};

export default MouseScroll;
