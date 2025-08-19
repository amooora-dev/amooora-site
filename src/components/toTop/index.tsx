"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const ToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      className='fixed bottom-3 right-3 p-3 bg-primary text-white cursor-pointer hover:bg-primary-dark shadow-lg rounded transition-colors duration-100 z-50'
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <ChevronUp />
    </button>
  );
};

export default ToTop;
