import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";

const Properties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardToShow, setCardToShow] = useState(1);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth >= 1450) {
        setCardToShow(projectsData.length);
      } else {
        setCardToShow(1);
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const maxIndex = projectsData.length - cardToShow;

  const nextProjects = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevProjects = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <div
      className=" container mx-auto pt-20 py-4 px-6 md:px-20 lg-px-32 my-20 w-full overflow-hidden "
      id="Properties"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className=" underline underline-offset-4 decoration-1 under font-light ">
          Completed
        </span>
      </h1>
      <p className="text-gray-500 text-center mb-8 max-w-80 mx-auto">
        Crafting Space , Building Legacies-Explore Our Properties
      </p>

      {/* ---------Slide button-------- */}

      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProjects}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextProjects}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* -----------Project Slider------------  */}

      <div className=" overflow-hidden ">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardToShow}% )`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className=" relative flex-shrink-0 w-full sm:w-3/6  "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover rounded-xl mb-14"
              />
              <div className=" absolute flex bottom-5 right-0 left-0 justify-center ">
                <div className=" inline-block bg-white px-4 py-2 w-3/4 shadow-md ">
                  <h2 className=" text-xl font-semibold text-gray-8  00 ">
                    {project.title}
                  </h2>
                  <p className="text-sm  text-gray-500  ">
                    {project.price} <span className="px-1"> | </span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
