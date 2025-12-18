import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../../components/Reveal";

/* ================= STATIC FAQ DATA (10) ================= */
const faqs = [
  {
    id: 1,
    question: "What services does your software company provide?",
    answer:
      "We provide complete software solutions including web development, mobile app development, UI/UX design, digital marketing, SEO, and custom enterprise software.",
  },
  {
    id: 2,
    question: "Do you offer custom software development?",
    answer:
      "Yes, we build fully customized software solutions based on your specific business requirements, workflows, and scalability needs.",
  },
  {
    id: 3,
    question: "Which technologies do you specialize in?",
    answer:
      "Our team works with React, Node.js, Next.js, Laravel, PHP, MySQL, MongoDB, Flutter, AWS, and modern cloud technologies.",
  },
  {
    id: 4,
    question: "How long does a software project usually take?",
    answer:
      "Timelines depend on project scope. Small projects may take 2–4 weeks, while larger applications can take several months.",
  },
  {
    id: 5,
    question: "Do you provide mobile app development services?",
    answer:
      "Yes, we develop high-performance Android and iOS applications using modern frameworks like Flutter and React Native.",
  },
  {
    id: 6,
    question: "Will my project be scalable in the future?",
    answer:
      "Absolutely. We design all solutions with scalability in mind, ensuring your software can grow as your business expands.",
  },
  {
    id: 7,
    question: "Do you offer website redesign services?",
    answer:
      "Yes, we redesign existing websites to improve performance, user experience, responsiveness, and modern UI standards.",
  },
  
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

  {/* Content */}
  <div className="relative z-10 text-center text-white px-4">
    <Reveal>
      <p className="text-gray-300 text-lg md:text-xl mb-2">
        <Link to="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <span className="text-blue-400 mx-1">/</span> FAQs
      </p>
    </Reveal>

    <Reveal>
      <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
        Frequently Asked Questions
      </h1>
    </Reveal>
  </div>
</section>

      {/* ================= FAQ + IMAGE SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* ===== LEFT: FAQs ===== */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Reveal key={faq.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl shadow-lg border-l-4 border-blue-500 p-6 cursor-pointer hover:shadow-2xl transition-all duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>

                    {openIndex === index ? (
                      <ChevronUp className="text-blue-500 shrink-0" />
                    ) : (
                      <ChevronDown className="text-blue-500 shrink-0" />
                    )}
                  </div>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-gray-600 text-justify leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Reveal>
            ))}
          </div>

          {/* ===== RIGHT: IMAGE ===== */}
          <div className="relative">
            <Reveal>
              <img
                src="/Images/FAQ-Model-Pic-scaled.webp"
                alt="FAQs"
                className="w-full rounded-3xl shadow-2xl object-cover"
              />
            </Reveal>

            {/* Decorative Badge */}
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-xl hidden md:block">
              <p className="text-lg font-bold">24/7 Support</p>
              <p className="text-sm opacity-90">We’re here to help</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
