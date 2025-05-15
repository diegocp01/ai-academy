import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: '5,000+', label: 'Students' },
    { value: '15+', label: 'Expert Instructors' },
    { value: '25+', label: 'Courses' },
    { value: '96%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className="section bg-secondary-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Image */}
          <motion.div
            ref={ref}
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="glass-card p-2 rounded-2xl overflow-hidden shadow-2xl border border-secondary-700/50"
                animate={{ y: [0, -8, 0] }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1517196084897-498e0abd7c2d" 
                  alt="About AI Academy" 
                  className="rounded-xl w-full h-auto"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary-900/60 via-transparent to-transparent rounded-xl"></div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -left-6 md:-left-12 bottom-24 glass-card p-4 md:p-6 max-w-[180px] md:max-w-[220px] shadow-glow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center mr-3 bg-primary-500/20">
                    <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-light">Industry-Leading</div>
                    <div className="text-xs text-gray-400">Curriculum</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -right-6 md:-right-12 top-20 glass-card p-4 md:p-6 max-w-[180px] md:max-w-[220px] shadow-glow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center mr-3 bg-primary-500/20">
                    <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-light">Community</div>
                    <div className="text-xs text-gray-400">Driven Learning</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right column - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
              <span className="text-primary-400 text-sm font-medium">About Us</span>
            </div>
            
            <h2 className="mb-6">
              The Premier <span className="gradient-text">AI Education</span> Platform
            </h2>
            
            <p className="text-gray-300 mb-6">
              AI Academy was founded in 2020 by a team of AI researchers and educators with a mission to make artificial intelligence education accessible to everyone. We believe that AI literacy will be as fundamental as computer literacy in the coming decades.
            </p>
            
            <p className="text-gray-300 mb-8">
              Our comprehensive curriculum is designed to take you from complete beginner to industry-ready professional through hands-on projects, expert instruction, and a supportive community of learners and professionals.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="glass-card p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <a href="#courses" className="btn-primary">
              Explore Our Courses
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;