import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PricingCard = ({ plan, featured, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={`glass-card overflow-hidden relative ${featured ? 'border-primary-500 shadow-glow' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {featured && (
        <div className="absolute top-0 right-0">
          <div className="w-36 h-36 overflow-hidden -translate-y-1/2 translate-x-1/2 rotate-45 absolute bg-primary-500">
            <div className="absolute bottom-0 left-0 right-0 text-center text-white text-xs font-bold py-1 transform -rotate-45 translate-y-1/2">MOST POPULAR</div>
          </div>
        </div>
      )}
      
      <div className="p-8 relative">
        <h3 className="text-2xl font-bold mb-2 text-light">{plan.name}</h3>
        <p className="text-gray-400 mb-6">{plan.description}</p>
        
        <div className="mb-8">
          <span className="text-4xl font-bold text-light">${plan.price}</span>
          <span className="text-gray-400 ml-2">/ month</span>
        </div>
        
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <svg className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <a 
          href="#enroll" 
          className={`block text-center py-3 rounded-xl font-medium transition-all duration-300 ${
            featured 
              ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400 shadow-lg hover:shadow-primary-500/25' 
              : 'bg-secondary-800 text-light border border-secondary-700 hover:bg-secondary-700'
          }`}
        >
          Get Started
        </a>
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: "Basic",
      description: "Perfect for beginners starting their AI journey",
      price: 39,
      features: [
        "Access to beginner courses",
        "Basic community support",
        "Monthly live Q&A sessions",
        "Course completion certificates",
        "Basic project feedback"
      ]
    },
    {
      name: "Pro",
      description: "Ideal for serious learners seeking comprehensive skills",
      price: 79,
      features: [
        "Access to all courses",
        "Priority community support",
        "Weekly live Q&A sessions",
        "Course completion certificates",
        "Detailed project feedback",
        "1 one-on-one coaching session monthly"
      ]
    },
    {
      name: "Expert",
      description: "For those aiming to master AI and accelerate their career",
      price: 129,
      features: [
        "Access to all courses including early access",
        "24/7 priority support",
        "Unlimited live Q&A sessions",
        "Professional certificates",
        "Expert project reviews",
        "4 one-on-one coaching sessions monthly",
        "Job placement assistance"
      ]
    }
  ];

  return (
    <section id="pricing" className="section bg-dark relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-lg text-gray-300">
            Choose the plan that fits your learning goals and budget.
            All plans include access to our supportive community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index} 
              plan={plan} 
              featured={index === 1} 
              index={index} 
            />
          ))}
        </div>
        
        <motion.div
          className="text-center mt-16 bg-secondary-800/50 max-w-4xl mx-auto p-8 rounded-2xl border border-secondary-700/50"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-left">
              <h3 className="text-xl font-bold text-light mb-2">Looking for team or enterprise plans?</h3>
              <p className="text-gray-400">We offer custom solutions for organizations of all sizes.</p>
            </div>
            <a href="#contact" className="btn-secondary whitespace-nowrap">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;