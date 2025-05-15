import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CtaSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.course || formData.course === 'Select a course') {
      tempErrors.course = 'Please select a course';
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors({
        ...errors,
        [id]: ''
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        course: '',
        message: ''
      });
    }
  };

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
                
                {submitted ? (
                  <motion.div 
                    className="bg-primary-500/20 border border-primary-500/40 rounded-xl p-6 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <svg className="h-16 w-16 text-primary-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="text-xl font-bold text-light mb-2">Thank You!</h4>
                    <p className="text-gray-300">Your request has been submitted. We'll contact you shortly with more information about your selected course.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-medium transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-secondary-800 border ${errors.name ? 'border-red-500' : 'border-secondary-700'} rounded-xl text-light focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-secondary-800 border ${errors.email ? 'border-red-500' : 'border-secondary-700'} rounded-xl text-light focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="course" className="block text-sm font-medium text-gray-400 mb-1">Interested In</label>
                      <select 
                        id="course" 
                        value={formData.course}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-secondary-800 border ${errors.course ? 'border-red-500' : 'border-secondary-700'} rounded-xl text-light focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                      >
                        <option>Select a course</option>
                        <option>AI Prompting for Beginners</option>
                        <option>Data Visualization with AI</option>
                        <option>Neural Networks Deep Dive</option>
                        <option>Other Courses</option>
                      </select>
                      {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message (Optional)</label>
                      <textarea 
                        id="message" 
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
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
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;