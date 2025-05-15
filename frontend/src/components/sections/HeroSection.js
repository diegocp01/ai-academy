import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-dark flex items-center hero-gradient">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left column - Text content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6"
            >
              <span className="text-primary-400 text-sm font-medium">The Future of AI Education</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-6 leading-tight"
            >
              Master <span className="gradient-text">Artificial Intelligence</span> From Beginner to Expert
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Learn how to create, understand, and implement AI—from prompt engineering to building neural networks. Gain practical skills in our hands-on courses designed for beginners.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <a href="#enroll" className="btn-primary text-lg px-8 py-4">
                Enroll Now
              </a>
              <a href="#courses" className="btn-secondary">
                Explore Courses
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-12 flex items-center justify-center lg:justify-start space-x-8"
            >
              <div className="flex items-center">
                <svg className="h-6 w-6 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Beginner-friendly</span>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Certificate</span>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Practical Projects</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right column - Hero Image */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              {/* Main image */}
              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/10 border border-secondary-700/50"
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1645260114797-5723da1b706d" 
                  alt="AI Academy" 
                  className="w-full h-auto"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary-900/60 via-transparent to-transparent"></div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -left-8 bottom-16 glass-card p-5 max-w-[200px] shadow-glow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="text-xl font-bold mb-1 gradient-text">5000+</div>
                <div className="text-sm text-gray-300">Students already enrolled</div>
              </motion.div>
              
              <motion.div 
                className="absolute -right-6 top-20 glass-card p-5 max-w-[200px] shadow-glow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="text-xl font-bold mb-1 gradient-text">15+</div>
                <div className="text-sm text-gray-300">Expert-led AI courses</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140" className="w-full">
          <path fill="#1f2937" fillOpacity="1" d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,140L1380,140C1320,140,1200,140,1080,140C960,140,840,140,720,140C600,140,480,140,360,140C240,140,120,140,60,140L0,140Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;