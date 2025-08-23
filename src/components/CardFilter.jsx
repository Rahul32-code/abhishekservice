import { useState } from "react";
import { motion } from "framer-motion";
import { FaBullhorn, FaFacebook, FaGoogle, FaLaptopCode, FaPalette, FaSearch, FaTooth } from "react-icons/fa";

const cards = [
  {
    name: "Search Engine Optimization (SEO)",
    type: "Digital Marketing",
    info: "Boost your website's visibility on Google with Off-Page, On-Page, and Technical SEO.",
    icon: <FaSearch className="w-10 h-10 text-green-600" />,
  },
  {
    name: "Google Ads (PPC Marketing)",
    type: "Digital Marketing",
    info: "Instant traffic and leads with highly targeted Google Ads campaigns.",
    icon: <FaGoogle className="w-10 h-10 text-green-600" />,
  },
  {
    name: "Meta Ads (Facebook & Instagram)",
    type: "Digital Marketing",
    info: "Run optimized Meta Ads to drive conversions across Facebook and Instagram.",
    icon:  <FaFacebook className="w-10 h-10 text-green-600" />,
  },
  {
    name: "Social Media Marketing (SMM)",
    type: "Digital Marketing",
    info: "Engage and grow your audience across all major social platforms.",
    icon: <FaBullhorn className="w-10 h-10 text-green-600" />,
  },
  {
    name: "Brand Strategy & Consulting",
    type: "Digital Marketing",
    info: "Shape a unique brand identity that connects and converts.",
    icon: <FaPalette className="w-10 h-10 text-green-600" />
  },
  {
    name: "CMS Website Services",
    type: "Web Design & Service",
    info: "Get modern, easy-to-manage CMS websites built on WordPress & more.",
    icon: <FaLaptopCode className="w-10 h-10 text-green-600" />,
  },
  {
    name: "Local SEO / GMB Optimization",
    type: "Digital Marketing",
    info: "Dominate local search results and boost your Google My Business presence.",
    icon: <FaSearch className="w-10 h-10 text-green-600" />,
  },
  {
    name: "Custom Web Development",
    type: "Web Design & Service",
    info: "Fast, secure, scalable websites tailored for your brand and goals.",
    icon: <FaLaptopCode className="w-10 h-10 text-green-600" />,
  },
];

const CardFilter = () => {
  const uniqueTypes = [...new Set(cards.map((card) => card.type))];
  const [filter, setFilter] = useState(uniqueTypes[0]); // Default = first type

  const filteredData = cards.filter((card) => card.type === filter);

  return (
    <div className="p-6">
      {/* Filter Buttons */}
      <div className="flex items-center justify-center flex-wrap gap-4 mx-auto mb-6">
        {uniqueTypes.map((type, index) => (
          <button
            key={index}
            onClick={() => setFilter(type)}
            className={`border-2 rounded-lg px-4 py-1 sm:px-5 sm:py-2 shadow-2xl transition-all duration-300 ease-in-out cursor-pointer
              ${
                filter === type
                  ? "bg-green-700 text-white border-green-700"
                  : "text-green-600 border-green-600 hover:bg-green-700 hover:text-white"
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredData.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-xl hover:bg-green-600 hover:text-white transition-all duration-300 group"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 group-hover:bg-white p-4 rounded-full transition-all">
                {card.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 group-hover:text-white">
              {card.name}
            </h3>
            <p className="text-sm text-center text-gray-600 group-hover:text-white">
              {card.info}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardFilter;
