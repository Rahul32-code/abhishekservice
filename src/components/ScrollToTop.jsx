import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.scrollY;
      const heroSection = document.getElementById("hero");

      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsVisible(scrollY > heroHeight);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-8 left-8 flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="#hero"
        className="text-white shadow-lg cursor-pointer rounded-xl p-2 bg-green-900 hover:bg-green-800 transition duration-300 animate-bounce"
      >
        <ArrowUp className="text-6xl w-8 h-8" />
      </a>
    </div>
  );
};

export default ScrollToTop;
