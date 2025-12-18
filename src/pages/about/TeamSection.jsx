import React from "react";
import { motion } from "framer-motion";

/* ================= STATIC TEAM DATA ================= */
const teamMembers = [
  {
    id: 1,
    name: "Anuj Kumar",
    title: "Founder & CEO",
    image: "/Images/novarsis-team1.webp",
  },
  {
    id: 2,
    name: "Kanupriya Sharma ",
    title: "Managing Director",
    image: "/Images/novarsis-team2.webp",
  },
  {
    id: 3,
    name: "Mayank Malviya",
    title: "Chief Technical Officer",
    image: "/Images/novarsis-team3.jpg",
  },
  
];

const TeamPage = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#00A3FF] mb-4">
          Our Expert Team
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          Meet the passionate individuals who drive innovation and excellence at Novarsis Tech.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-[#00A3FF] mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
