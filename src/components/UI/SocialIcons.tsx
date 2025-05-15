import React from 'react';
import { Github, Linkedin, Mail, Twitter, Music } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const SocialIcons: React.FC = () => {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/Dave-3', label: 'GitHub' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com/', label: 'Twitter' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/davidnmburu/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:mdnjenga@gmail.com', label: 'Email' },
    { icon: <Music size={20} />, url: '#', label: 'Music' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="flex space-x-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          variants={item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`transition-colors duration-200
            ${theme === 'light' ? 'text-light-text hover:text-light-primary' : ''}
            ${theme === 'dark' ? 'text-dark-text hover:text-dark-primary' : ''}
            ${theme === 'neon' ? 'text-neon-text hover:text-neon-primary' : ''}
          `}
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialIcons;