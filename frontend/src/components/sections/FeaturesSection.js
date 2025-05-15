import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeatureCard = ({ feature, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="glass-card p-8 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute top-0 right-0 h-28 w-28 bg-gradient-to-br from-primary-500/20 to-primary-600/5 rounded-bl-3xl rounded-tr-2xl z-0"></div>
      <div className="relative z-10">
        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-glow mb-6">
          <span className="text-light text-2xl">{feature.icon}</span>
        </div>
        <h3 className="text-xl font-bold mb-4 text-light">{feature.title}</h3>
        <p className="text-gray-400">{feature.description}</p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of practical AI experience and teaching excellence.",
      icon: "👨‍🏫"
    },
    {
      title: "Hands-on Projects",
      description: "Apply your knowledge through real-world projects that build your portfolio and practical skills.",
      icon: "🛠️"
    },
    {
      title: "Cutting-edge Curriculum",
      description: "Our courses are regularly updated to reflect the latest advancements in AI technology.",
      icon: "🔄"
    },
    {
      title: "Community Support",
      description: "Join a community of learners and experts who share knowledge and collaborate on projects.",
      icon: "👥"
    },
    {
      title: "Interactive Learning",
      description: "Engage with dynamic content featuring quizzes, coding exercises, and adaptive learning paths.",
      icon: "💻"
    },
    {
      title: "Career Guidance",
      description: "Get personalized career advice and job placement assistance to break into the AI industry.",
      icon: "🚀"
    }
  ];

  return (
    <section id="features" className="section bg-dark relative overflow-hidden hero-gradient">
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
            Why Choose <span className="gradient-text">AI Academy</span>
          </h2>
          <p className="text-lg text-gray-300">
            Our comprehensive approach to AI education ensures that you not only learn the theory
            but also gain practical skills that make you job-ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;