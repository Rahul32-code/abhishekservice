import { useState } from "react";
import { motion } from "framer-motion";
import { FaTooth } from "react-icons/fa";

const cards = [
  { id: 1, name: "Abhishek", info: "Abhishek ka data 1", icon: <FaTooth className="w-10 h-10 text-green-600 " />, },
  { id: 3, name: "Abhishek", info: "Abhishek ka data 2", icon: <FaTooth className="w-10 h-10 text-green-600 " />, },
];

const CardFilter = () => {
  const [filter, setFilter] = useState("All");
  const [toogleActive, setToogleActive] = useState("All");

  const filteredData =
    filter === "All"
      ? cards
      : cards.filter((card) => card.name === filter);

  const uniqueNames = ["All", ...new Set(cards.map((card) => card.name))];

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
            className={`border-2 rounded-full px-4 py-1 sm:px-5 sm:py-2 shadow-2xl transition-all duration-300 ease-in-out cursor-pointer
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
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition border border-sky-100 hover:text-white hover:border-sky-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">
                {card.name}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {card.info}
              </p>
            </motion.div>
          ))}
        </div>
    </div>
  );
};

export default CardFilter;
