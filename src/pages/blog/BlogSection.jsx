import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blogs from "./blogs";

const BlogSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-5 md:px-16">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600">
          Latest Blogs
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          Latest insights, updates, and stories from our software experts.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <Link to={`/blog/${blog.id}`}>
              {/* Image */}
              <div className="overflow-hidden rounded-t-2xl h-56">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Title */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition">
                  {blog.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
