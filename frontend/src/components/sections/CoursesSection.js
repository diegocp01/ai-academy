import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CourseCard = ({ course, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="course-card glass-card overflow-hidden relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Card background with image */}
      <div className="h-48 md:h-56 overflow-hidden relative">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/70 to-transparent"></div>
        
        {/* Level badge */}
        <div className="absolute top-4 right-4 bg-primary-500/90 text-light text-xs font-medium px-2.5 py-1 rounded-full">
          {course.level}
        </div>
      </div>
      
      {/* Card content */}
      <div className="p-6 relative">
        {/* Course icon */}
        <div className="absolute -top-10 left-6 card-icon">
          <div className="h-16 w-16 rounded-xl bg-secondary-800 border border-secondary-700 flex items-center justify-center shadow-lg">
            <span className="text-primary-500 text-2xl">{course.icon}</span>
          </div>
        </div>
        
        <div className="pt-8">
          <h3 className="text-xl font-bold mb-3 text-light">{course.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{course.description}</p>
          
          {/* Course features */}
          <div className="mb-6 space-y-2">
            {course.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-sm">
                <svg className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-primary-400 font-bold">{course.price}</span>
            <a href="#enroll" className="text-light bg-primary-600 hover:bg-primary-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CoursesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const courses = [
    {
      title: "AI Prompting for Beginners",
      description: "Learn the fundamentals of crafting effective prompts for AI systems like ChatGPT, DALL-E, and more.",
      level: "Beginner",
      price: "$49",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1713557112617-e12d67bddc3a",
      features: [
        "10+ hours of content",
        "Practical exercises",
        "Certificate of completion",
        "24/7 support"
      ]
    },
    {
      title: "Data Visualization with AI",
      description: "Discover how to use AI tools to create compelling data visualizations and extract meaningful insights.",
      level: "Intermediate",
      price: "$79",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1614850715649-1d0106293bd1",
      features: [
        "15+ hours of content",
        "Real-world projects",
        "Certificate of completion",
        "Expert feedback"
      ]
    },
    {
      title: "Neural Networks Deep Dive",
      description: "Master the architecture and implementation of neural networks from foundational concepts to advanced applications.",
      level: "Advanced",
      price: "$99",
      icon: "🧠",
      image: "https://images.unsplash.com/photo-1557800634-95f2a96fbd64",
      features: [
        "20+ hours of content",
        "Capstone project",
        "Certificate of completion",
        "1-on-1 mentoring"
      ]
    }
  ];

  return (
    <section id="courses" className="section bg-secondary-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6">
            Our <span className="gradient-text">AI Courses</span>
          </h2>
          <p className="text-lg text-gray-400">
            From beginner-friendly introductions to advanced neural network implementations, 
            our curriculum is designed to take you from novice to AI expert.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="#all-courses" className="btn-secondary">
            View All Courses
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;