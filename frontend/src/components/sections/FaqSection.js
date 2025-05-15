import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FaqItem = ({ faq, isOpen, onToggle, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="glass-card overflow-hidden mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <button
        className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-light">{faq.question}</h3>
        <div className={`ml-2 flex-shrink-0 h-6 w-6 rounded-full border border-primary-500 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary-500' : ''}`}>
          <svg className={`h-3 w-3 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-primary-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-400">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "Do I need prior experience to take your AI courses?",
      answer: "No prior experience is required for our beginner courses. We designed them to be accessible to complete beginners. For intermediate and advanced courses, we recommend having basic programming knowledge and completion of our foundational courses."
    },
    {
      question: "What programming languages are used in the courses?",
      answer: "Our courses primarily use Python as it's the most widely adopted language in AI and machine learning. Some advanced courses may include additional languages like JavaScript for specific applications, but Python is our main focus."
    },
    {
      question: "How long does it take to complete a course?",
      answer: "Course durations vary based on complexity and your prior experience. Beginner courses typically take 4-6 weeks, intermediate courses 6-8 weeks, and advanced courses 8-12 weeks, assuming 5-10 hours of study per week."
    },
    {
      question: "Are the certificates recognized by employers?",
      answer: "Yes, our certificates are industry-recognized and valued by employers. Many of our alumni have successfully transitioned to AI roles after completing our programs. Our partnerships with industry leaders also add credibility to our certifications."
    },
    {
      question: "Can I access the course materials after completion?",
      answer: "Absolutely! Once you've enrolled in a course, you'll have lifetime access to all course materials, including future updates. This allows you to revisit concepts and stay current with evolving AI technologies."
    },
    {
      question: "What kind of support will I receive during the course?",
      answer: "All students receive community forum support, regular Q&A sessions, and detailed feedback on projects. Higher-tier plans include one-on-one coaching sessions and priority support for more personalized guidance."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-secondary-900 relative overflow-hidden">
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
            Frequently <span className="gradient-text">Asked Questions</span>
          </h2>
          <p className="text-lg text-gray-400">
            Have questions about our courses or learning process? Find answers to common questions below.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <a href="#contact" className="btn-secondary">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;