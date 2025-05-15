import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './App.css';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import HeroSection from './components/sections/HeroSection';
import CoursesSection from './components/sections/CoursesSection';
import FeaturesSection from './components/sections/FeaturesSection';
import AboutSection from './components/sections/AboutSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import PricingSection from './components/sections/PricingSection';
import FaqSection from './components/sections/FaqSection';
import CtaSection from './components/sections/CtaSection';

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.05], [0, -50]);
  
  useEffect(() => {
    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="App">
      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-40 h-12 w-12 rounded-full bg-primary-600 text-white shadow-lg flex items-center justify-center hover:bg-primary-500 transition-all duration-300 hover:shadow-primary-500/25"
        style={{ 
          opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]),
          scale: useTransform(scrollYProgress, [0, 0.1], [0.8, 1]),
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
      
      {/* Mouse follower gradient (visible on larger screens) */}
      <div className="hidden lg:block cursor-gradient">
        <div className="fixed top-0 left-0 h-full w-full pointer-events-none z-0">
          <motion.div 
            className="absolute h-[400px] w-[400px] rounded-full bg-gradient-to-r from-primary-500/10 to-primary-600/5 blur-3xl"
            style={{ 
              opacity: 0.5, 
              x: -200, 
              y: -200 
            }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          />
        </div>
      </div>
      
      {/* Scroll progress indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Content */}
      <Navbar />
      
      <main>
        <HeroSection />
        <CoursesSection />
        <FeaturesSection />
        <AboutSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;