import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Mail size={20} />, url: 'mailto:hello@example.com', label: 'Email' },
  ];

  return (
    <footer className={`py-8 border-t 
      ${theme === 'light' ? 'bg-light-bg border-gray-200 text-light-text' : ''}
      ${theme === 'dark' ? 'bg-dark-bg border-gray-800 text-dark-text' : ''}
      ${theme === 'neon' ? 'bg-neon-bg border-neon-secondary/30 text-neon-text' : ''}
    `}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm font-medium">
              &copy; {currentYear} DevPortfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`p-2 rounded-full transition-colors duration-200
                  ${theme === 'light' ? 'text-light-secondary hover:text-light-primary hover:bg-light-primary/10' : ''}
                  ${theme === 'dark' ? 'text-dark-secondary hover:text-dark-primary hover:bg-dark-primary/10' : ''}
                  ${theme === 'neon' ? 'text-neon-secondary hover:text-neon-primary hover:bg-neon-primary/10' : ''}
                `}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;