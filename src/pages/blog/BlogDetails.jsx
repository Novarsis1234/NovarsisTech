import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "./blogs";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-600">
        Blog not found
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      {/* Back */}
      <Link
        to="/blog"
        className="text-blue-600 font-semibold mb-6 inline-block"
      >
        ← Back to Blogs
      </Link>

      {/* Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[400px] object-cover rounded-3xl shadow-lg mb-8"
      />

      {/* Date */}
      <p className="text-gray-500 mb-3">
        📅 {new Date(blog.date).toLocaleDateString("en-GB")}
      </p>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
        {blog.title}
      </h1>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed text-lg text-justify">
        {blog.description}
      </p>
    </section>
  );
};

export default BlogDetails;
