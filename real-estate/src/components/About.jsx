import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className=" flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 ">
        About{" "}
        <span className=" underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 mb-8 max-w-80 text-center">
        Passionate About Properties , Dedicated to Your Vision{" "}
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          className="w-full sm:w-1/2 max-w-lg "
          alt=""
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-500">
          <div className="grid grid-cols-2 md:gap-10 gap-6 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">5+</p>
              <p>Years Of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Properties Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">15+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>On Going Properties</p>
            </div>
            <div className="flex flex-col justify-between w-[500px] h-full">
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
                veniam quasi nobis, commodi, illum iure dolores quae, aperiam
                ipsa inventore atque vero cum iusto! Aliquam iste, quia quidem,
                repellat dolores, iusto dignissimos vel obcaecati laborum
                inventore corrupti quo dolorem at voluptatum nisi quaerat?
                Corporis animi beatae numquam eligendi corrupti! Ad.
              </p>

              <button className="bg-blue-500 rounded text-white px-4 py-2 text-sm w-fit mt-5 cursor-pointer">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
