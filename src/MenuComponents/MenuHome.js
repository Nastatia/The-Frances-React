import { Instagram } from "iconoir-react";
import { Facebook } from "iconoir-react";
import { Twitter } from "iconoir-react";
import React, { useState, useEffect } from "react";

const MenuHome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger the animation after component mounts
  }, []);

  return (
    <div
      className={` lg:px-40 md:px-10 sm:px-6 px-4 my-20 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="items-center flex justify-center my-40 relative home">
        <div
          className={`text-center text-white font-bold pt-6 transform transition-transform duration-500 ease-in-out ${
            isVisible ? "translate-y-0 " : "translate-y-full"
          }`}
        >
          <div className="text-center text-white font-bold text-xs pt-6 ">
            <h6 className="text-xs sm:text-xs md:text-sm lg:text-md">
            EXPLORE OUR MENU AND INDULGE IN THE BEST
            </h6>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif mt-2 mb-3">
              Our Menu
            </h2>
            <h6 className="text-xs sm:text-xs md:text-sm lg:text-md">
            DELICIOUS FLAVOURS, CRAFTED WITH CARE
            </h6>
          </div>
        </div>
      </div>
      <div className="flex justify-end md:justify-end gap-4 py-4 sm:py-6 md:py-8 lg:py-12 relative">
      
        <a
          href="/create"
          className={`transform transition-transform duration-500 delay-500 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-full"
          }`}
        >
          <Instagram className="text-rose-600 bg-white rounded-2xl p-2 text-xl sm:text-2xl hover:bg-rose-600 hover:text-white transition duration-300" />
        </a>
        <a
          href="/create"
          className={`transform transition-transform duration-500 delay-500 ${
            isVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Facebook className="text-rose-600 bg-white rounded-2xl p-2 text-xl sm:text-2xl hover:bg-rose-600 hover:text-white transition duration-300" />
        </a>
        <a
          href="/create"
          className={`transform transition-transform duration-7500 delay-500 ${
            isVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Twitter className="text-rose-600 bg-white rounded-2xl p-2 text-xl sm:text-2xl hover:bg-rose-600 hover:text-white transition duration-300" />
        </a>
      </div>
    </div>
  );
};
export default MenuHome;