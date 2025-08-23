import { useState } from "react";
import { motion } from "framer-motion";
import { FaTooth } from "react-icons/fa";

const cards = [
  {
    id: 1,
    name: "Digital Marketing",
    info: "Abhishek ka data 1",
    icon: <FaTooth className="w-10 h-10 text-green-600 " />,
  },
  {
    id: 3,
    name: "Digital Marketing",
    info: "Abhishek ka data 2",
    icon: <FaTooth className="w-10 h-10 text-green-600 " />,
  },
  {
    id: 3,
    name: "Web Design & Service",
    info: "Abhishek ka data 2",
    icon: <FaTooth className="w-10 h-10 text-green-600 " />,
  },
];

const CardFilter = () => {
  const [filter, setFilter] = useState("Digital Marketing");
  const [toogleActive, setToogleActive] = useState("Digital Marketing");

  const filteredData =
    filter === "Digital Marketing"
      ? cards
      : cards.filter((card) => card.name === filter);

  const uniqueNames = [...new Set(cards.map((card) => card.name))];

  return (
    <div className="p-6">
      {/* Filter buttons */}
      <div className="flex items-center justify-center gap-4 mx-auto mb-6">
        {uniqueNames.map((name, index) => (
          <button
            key={index}
            onClick={() => {
              setFilter(name);
              setToogleActive(name);
            }}
            className={`border-2 rounded-lg px-4 py-1 sm:px-5 sm:py-2 shadow-2xl transition-all duration-300 ease-in-out cursor-pointer
              ${
                toogleActive === name
                  ? "bg-green-700 text-white border-green-700"
                  : "text-green-600 border-green-600 hover:bg-green-700 hover:text-white"
              }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
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
