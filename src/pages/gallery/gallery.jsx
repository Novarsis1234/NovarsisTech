import React, { useState } from "react";
import Reveal from "../../components/Reveal";
import { Link } from "react-router-dom";

/* ================= STATIC GALLERY DATA ================= */
const galleryImages = [
  { id: 1, image: "/Images/g1.avif", name: "Office Workspace" },
  { id: 2, image: "/Images/g2.avif", name: "Team Collaboration" },
  { id: 3, image: "/Images/g3.avif", name: "Development Process" },
  { id: 4, image: "/Images/g4.avif", name: "Client Meeting" },
  { id: 5, image: "/Images/g5.avif", name: "UI/UX Design" },
  { id: 6, image: "/Images/g6.avif", name: "Project Discussion" },
  { id: 7, image: "/Images/g7.avif", name: "Software Development" },
  { id: 8, image: "/Images/g8.avif", name: "Creative Team" },
  { id: 9, image: "/Images/g9.webp", name: "Testing & QA" },
];

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(6);

  const handleToggleView = () => {
    if (visibleImages >= galleryImages.length) {
      setVisibleImages(6);
    } else {
      setVisibleImages((prev) =>
        Math.min(prev + 3, galleryImages.length)
      );
    }
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
    <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/Images/banner.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#0a0f1a]/70"></div>

  {/* Content */}
  <div className="relative z-10 text-center text-white px-4">
    <Reveal>
      <p className="text-gray-300 text-lg md:text-xl mb-2">
        <Link to="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <span className="text-blue-400 mx-1">/</span> Gallery
      </p>
    </Reveal>

    <Reveal>
      <h1 className="text-4xl md:text-6xl font-bold">Gallery</h1>
    </Reveal>
  </div>

  {/* Decorative circle */}
  <div className="absolute right-6 top-1/2 transform -translate-y-1/2 hidden md:block z-10">
    <div className="w-16 h-16 border-4 border-blue-500 rounded-full flex items-center justify-center">
      <div className="w-10 h-10 bg-white rounded-full"></div>
    </div>
  </div>
</section>

      {/* ================= GALLERY GRID ================= */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.slice(0, visibleImages).map((item) => (
              <Reveal key={item.id}>
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <p className="text-center text-gray-700 py-3 font-medium">
                    {item.name}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ================= VIEW MORE / LESS ================= */}
          {galleryImages.length > 6 && (
            <div className="text-center mt-12">
              <Reveal>
                <button
                  onClick={handleToggleView}
                  className="px-8 py-3 bg-blue-500 text-white text-lg font-semibold rounded-full hover:bg-orange-600 transition duration-300 shadow-md"
                >
                  {visibleImages >= galleryImages.length
                    ? "View Less"
                    : "View More"}
                </button>
              </Reveal>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Gallery;
