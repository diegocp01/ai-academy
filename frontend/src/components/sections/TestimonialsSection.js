import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Data Scientist",
    company: "TechCorp",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "AI Academy transformed my career. The hands-on projects and expert guidance helped me land my dream job as a data scientist. The neural networks course was particularly outstanding!"
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    company: "InnovateTech",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "As someone with no prior AI experience, the beginner courses were perfect. Clear explanations and practical exercises made complex concepts accessible. I'm now confidently building AI applications."
  },
  {
    name: "Priya Patel",
    role: "Product Manager",
    company: "FutureAI",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "The prompt engineering course was exactly what I needed to integrate AI into our product development. The instructors are responsive and the community is incredibly supportive."
  },
  {
    name: "David Wilson",
    role: "Machine Learning Engineer",
    company: "DataViz",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    content: "After completing the advanced courses, I was able to implement cutting-edge neural network architectures at my company. The depth of content and quality of instruction is unmatched."
  }
];

const TestimonialCard = ({ testimonial, index, isActive }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={`glass-card p-8 transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: isActive ? 1 : 0.4, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <svg className="h-8 w-8 text-primary-500" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        
        <p className="text-gray-300 mb-6 flex-grow">{testimonial.content}</p>
        
        <div className="flex items-center">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="h-12 w-12 rounded-full mr-4 border-2 border-primary-500"
          />
          <div>
            <div className="font-bold text-light">{testimonial.name}</div>
            <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section relative overflow-hidden" style={{ background: `url(https://images.unsplash.com/photo-1647642343605-da260cbeb037) center/cover no-repeat` }}>
      <div className="absolute inset-0 bg-secondary-900/80 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6 text-light">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <p className="text-lg text-gray-300">
            Join thousands of students who have transformed their careers through our AI courses.
          </p>
        </motion.div>

        {/* Desktop view - grid */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              index={index}
              isActive={true}
            />
          ))}
        </div>

        {/* Mobile view - carousel */}
        <div className="md:hidden">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`transition-all duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
                <TestimonialCard 
                  testimonial={testimonial} 
                  index={0}
                  isActive={true}
                />
              </div>
            ))}
          </div>
          
          {/* Carousel indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-primary-500 w-8' : 'bg-gray-600'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;