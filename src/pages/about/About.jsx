import React from 'react';
import { Link } from 'react-router-dom';
import AboutSection from '../home/AboutSection';
import ScrollingBanner from '../home/ScrollingBanner';
import Details from './Details';
import Section from '../home/Section';
import AboutDetails from './AboutDetails';
import TeamSection from './TeamSection';
import StepsSection from './StepsSection';
import HappyFamilyCarousel from './HappyFamilyCarousel';
import Reveal from '../../components/Reveal';

const About = () => {
  return (
    <div>
      <>
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

  {/* Centered Content */}
  <div className="relative z-10 text-center text-white px-4">
    <Reveal>
      <p className="text-gray-300 text-lg md:text-xl mb-2">
        <Link to="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <span className="text-blue-400 mx-1">/</span> About
      </p>
    </Reveal>

    <Reveal>
      <h1 className="text-4xl md:text-6xl font-bold">
        About Us | Novarsis Technology
      </h1>
    </Reveal>
  </div>

  {/* Decorative Circles */}
  <div className="absolute right-6 top-1/2 transform -translate-y-1/2 hidden md:block z-10">
    <div className="w-16 h-16 border-4 border-blue-500 rounded-full flex items-center justify-center">
      <div className="w-10 h-10 bg-white rounded-full"></div>
    </div>
  </div>
</section>

          <AboutSection/>
          <ScrollingBanner/>
          <Details/>
          <Section/>
          <AboutDetails/>
          <TeamSection/>
          <StepsSection/>
          <HappyFamilyCarousel/>
      </>
    </div>
  );
}

export default About;
