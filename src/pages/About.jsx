import React, { useState } from "react";

const ExpandableCards = () => {
  const [active, setActive] = useState(null);

  const cards = [
    {
      title: "Designers",
      desc: "Streamline your design process with AI-powered tools...",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
    },
    {
      title: "Marketers",
      desc: "Reach your audience with powerful marketing tools...",
      img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400",
    },
    {
      title: "Filmmakers",
      desc: "Create cinematic experiences with ease...",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
    },
    {
      title: "Content Creators",
      desc: "Unleash creativity with seamless tools...",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
    },
  ];

  return (
    <div className="flex gap-4 w-full h-[400px]">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`relative rounded-2xl overflow-hidden transition-all duration-500 ease-in-out cursor-pointer 
          ${active === index ? "flex-[3]" : "flex-[1]"}`}
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(null)}
        >
          {/* Background Image */}
          <img
            src={card.img}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center items-center text-white p-6">
            <h2 className="text-xl font-bold">{card.title}</h2>
            {active === index && (
              <p className="mt-4 text-sm text-center">{card.desc}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpandableCards;
