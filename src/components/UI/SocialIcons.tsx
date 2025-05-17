import React, { useState } from 'react';
import { Github, Linkedin, Mail, Twitter, Music } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const SocialIcons: React.FC = () => {
  const { theme } = useTheme();
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    // If the user's email client doesn't open, they can click again to copy
    if (showEmailTooltip) {
      e.preventDefault();
      navigator.clipboard.writeText('mdnjenga@gmail.com');
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
        setShowEmailTooltip(false);
      }, 2000);
    } else {
      // Show tooltip after first click
      setTimeout(() => {
        setShowEmailTooltip(true);
      }, 500);
    }
  };

  interface SocialLink {
    icon: React.ReactNode;
    url: string;
    label: string;
    onClick?: (e: React.MouseEvent) => void;
    tooltip?: string | null;
  }

  const socialLinks: SocialLink[] = [
    { icon: <Github size={20} />, url: 'https://github.com/Dave-3', label: 'GitHub' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com/', label: 'Twitter' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/davidnmburu/', label: 'LinkedIn' },
    {
      icon: <Mail size={20} />,
      url: 'mailto:mdnjenga@gmail.com',
      label: 'Email',
      onClick: handleEmailClick,
      tooltip: showEmailTooltip ? (emailCopied ? "Email copied!" : "Click again to copy email") : null
    },
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
        <motion.div key={index} className="relative">
          <motion.a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            onClick={link.onClick}
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

          {link.tooltip && (
            <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-xs rounded whitespace-nowrap
              ${theme === 'light' ? 'bg-light-primary text-white' : ''}
              ${theme === 'dark' ? 'bg-dark-primary text-white' : ''}
              ${theme === 'neon' ? 'bg-neon-primary text-neon-bg' : ''}
            `}>
              {link.tooltip}
              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent
                ${theme === 'light' ? 'border-t-light-primary' : ''}
                ${theme === 'dark' ? 'border-t-dark-primary' : ''}
                ${theme === 'neon' ? 'border-t-neon-primary' : ''}
              `}></div>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SocialIcons;