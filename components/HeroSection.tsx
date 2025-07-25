'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const subtitles = [
    "Senior Mobile Application Developer",
    "Flutter & Native iOS/Android Expert",
    "Building Apps for 50K+ Users",
    "4+ Years of Innovation"
  ];

  useEffect(() => {
    let subtitleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const typeWriter = () => {
      const current = subtitles[subtitleIndex];
      
      if (isDeleting) {
        setCurrentSubtitle(current.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setCurrentSubtitle(current.substring(0, charIndex + 1));
        charIndex++;
      }
      
      let delay = isDeleting ? 50 : 100;
      
      if (!isDeleting && charIndex === current.length) {
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        subtitleIndex = (subtitleIndex + 1) % subtitles.length;
        delay = 500;
      }
      
      timeout = setTimeout(typeWriter, delay);
    };

    const initialDelay = setTimeout(typeWriter, 1000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(initialDelay);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-pattern section pt-20">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-500 transform rotate-45 animate-float opacity-20"></div>
        <div 
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 transform rotate-12 animate-float opacity-30"
          style={{ animationDelay: '-2s' }}
        ></div>
        <div 
          className="absolute bottom-40 left-20 w-12 h-12 border-2 border-cyan-400 rounded-full animate-float opacity-25"
          style={{ animationDelay: '-4s' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 transform rotate-45 animate-pulse opacity-20"
          style={{ animationDelay: '-1s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-fade-in">
                Muhammad Sohaib Jameel
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 h-8 flex items-center justify-center lg:justify-start">
                <span className="typewriter">
                  {currentSubtitle}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl">
              Passionate about creating exceptional mobile experiences that serve over 50,000 users. 
              Specialized in Flutter, React Native, and cutting-edge mobile technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                View My Work
              </button>
              <a 
                href="/resume.pdf" 
                download="Muhammad_Sohaib_Jameel_Resume.pdf"
                className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-cyan-500 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/profile.png"
                  alt="Muhammad Sohaib Jameel"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse opacity-75"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse opacity-75" style={{ animationDelay: '-1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}