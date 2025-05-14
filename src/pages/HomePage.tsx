import React from 'react';
import Hero from '../components/Home/Hero';
import ProjectsList from '../components/Projects/ProjectsList';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <ProjectsList />
    </motion.div>
  );
};

export default HomePage;