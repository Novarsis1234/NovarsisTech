import React from "react";
import {
  FaShieldAlt,
  FaLaptopCode,
  FaBullhorn,
  FaPalette,
  FaVideo,
  FaLightbulb,
} from "react-icons/fa";

const services = [
  {
    title: "Web Design & Development Services",
    image:
      "/Images/service1.webp",
    icon: <FaLaptopCode />,
  },
  {
    title: "Social Media Marketing Services",
    image:
      "/Images/service2.webp",
    icon: <FaShieldAlt />,
  },
  {
    title: "Paid Advertisement (Google & Meta Ads)",
    image:
      "/Images/service3.webp",
    icon: <FaBullhorn />,
  },
  {
    title: "Branding & Logo Designing Services",
    image:
      "/Images/service4.webp",
    icon: <FaPalette />,
  },
  {
    title: "Video Editing & Photoshoot Services",
    image:
      "/Images/service5.webp",
    icon: <FaVideo />,
  },
  {
    title: "Content & Additional Marketing Services",
    image:
      "/Images/service6.webp",
    icon: <FaLightbulb />,
  },
];

const BestServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold tracking-wide uppercase">
            Our Services
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1c6d] mt-3">
            The Best Solutions From <br />
            <span className="relative inline-block">
              Best Services
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-blue-500 rounded-full"></span>
            </span>
          </h2>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            We offer a complete range of IT, SEO, digital marketing, design,
            development, and sales solutions tailored to grow your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />

                {/* Icon */}
                <div className="absolute -bottom-6 right-6 bg-blue-600 text-white p-4 rounded-xl text-xl shadow-lg">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-10 text-center">
                <h3 className="text-lg font-bold text-[#0b1c6d] group-hover:text-blue-600 transition">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestServices;
