import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CtaSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="enroll" className="py-20 relative overflow-hidden bg-secondary-900">
      <div className="absolute inset-0 hero-gradient opacity-50"></div>
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="glass-card p-8 md:p-16 relative overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-primary-900/20 z-0"></div>
          
          {/* Floating elements */}
          <motion.div 
            className="hidden md:block absolute top-20 -right-12 h-40 w-40 rounded-full bg-primary-500/10 z-0"
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          
          <motion.div 
            className="hidden md:block absolute bottom-20 -left-12 h-24 w-24 rounded-full bg-primary-500/10 z-0"
            animate={{ 
              y: [0, 20, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left column - Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Start Your AI Journey <span className="gradient-text">Today</span>
                  </h2>
                  <p className="text-gray-300 mb-8 text-lg">
                    Enroll now and join thousands of students who are building the future with AI. 
                    Transform your career with our comprehensive, hands-on courses.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center">
                      <svg className="h-6 w-6 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Flexible learning</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-6 w-6 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Expert instructors</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-6 w-6 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Job-ready skills</span>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href="#pricing" className="btn-primary text-lg px-8 py-4 shadow-glow">
                      Enroll Now
                    </a>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Right column - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-secondary-900/60 p-8 rounded-2xl border border-secondary-700/50 shadow-xl"
              >
                <h3 className="text-xl font-bold mb-6 text-light">Request More Information</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-xl text-light focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" 
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-xl text-light focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" 
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-400 mb-1">Interested In</label>
                    <select 
                      id="course" 
                      className="w-full px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-xl text-light focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option>Select a course</option>
                      <option>AI Prompting for Beginners</option>
                      <option>Data Visualization with AI</option>
                      <option>Neural Networks Deep Dive</option>
                      <option>Other Courses</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message (Optional)</label>
                    <textarea 
                      id="message" 
                      rows="3" 
                      className="w-full px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-xl text-light focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Tell us what you're looking to learn..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-primary-500/25"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;