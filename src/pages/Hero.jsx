import { Phone } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section id="home" className="scroll-m-20 bg-white/25 py-16">
      <div className="container mx-auto px-4 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
        {/* Left side - 60% */}
        <div className="lg:flex-[0_0_60%] w-full text-start sm:text-center lg:text-left space-y-6 sm:p-6">
          <h1 className="text-xl sm:text-4xl lg:text-4xl font-bold leading-tight">
            Tell Your <span className="text-green-600"> Brand Story </span>{" "}
            <br /> Just How You Want it
          </h1>
          <p className="text-gray-700 text-sm lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            doloremque quas debitis ut ad, quam corporis. A doloremque quas
            debitis ut ad, quam corporis.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-green-600 text-white px-3 py-2 lg:px-4 lg:py-3 rounded-xl hover:bg-green-700 transition text-base font-medium"
          >
            <Phone className="w-4 h-4 mr-2 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            Contact Us
          </a>
        </div>

        {/* Right side - 40% */}
        <div className="lg:flex-[0_0_40%] w-full flex justify-center p-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdgPIwQyEKCx3wwN8WjrapTyYUBZfRMgPRDw&s"
            alt="Hero Image"
            className="max-w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
