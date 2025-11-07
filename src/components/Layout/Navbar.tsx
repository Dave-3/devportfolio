import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Music, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import SocialIcons from '../UI/SocialIcons';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing pages
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '#', label: 'Contact', action: () => {
      const chatBotButton = document.querySelector('.chat-bot-trigger');
      if (chatBotButton) {
        (chatBotButton as HTMLElement).click();
      }
    }}
  ];

  const themeIcons = {
    light: <Sun size={18} />,
    dark: <Moon size={18} />,
    neon: <Music size={18} />
  };

  const themeLabels = {
    light: 'LIGHT THEME',
    dark: 'DARK THEME',
    neon: 'NEON THEME'
  };

  const nextTheme = {
    light: 'dark',
    dark: 'neon',
    neon: 'light'
  } as const;

  const toggleTheme = () => {
    setTheme(nextTheme[theme]);
  };

  const navbarClasses = `
    fixed top-4 left-0 right-0 mx-6 z-40 transition-all duration-300 px-6 md:px-8 rounded-full
    ${scrolled ? 'py-3' : 'py-4'}
    ${scrolled ? 'backdrop-blur-md' : 'backdrop-blur-sm'}
    ${theme === 'light' && scrolled ? 'bg-light-bg/90 shadow-sm border border-gray-200' : theme === 'light' ? 'border border-gray-200/50' : ''}
    ${theme === 'dark' && scrolled ? 'bg-dark-bg/90 shadow-md border border-gray-800' : theme === 'dark' ? 'border border-gray-800/50' : ''}
    ${theme === 'neon' && scrolled ? 'bg-neon-bg/90 shadow-md border border-neon-primary/20' : theme === 'neon' ? 'border border-neon-primary/10' : ''}
  `;

  return (
    <motion.nav
      className={navbarClasses}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className={`w-9 h-9 rounded-full overflow-hidden mr-3 border
            ${theme === 'light' ? 'border-light-primary/40 bg-light-bg' : ''}
            ${theme === 'dark' ? 'border-dark-primary/50 bg-dark-bg' : ''}
            ${theme === 'neon' ? 'border-neon-primary/50 bg-neon-bg' : ''}
          `}>
            <img
              src="/favicon.jpg"
              alt="David Njenga"
              className="w-full h-full object-cover"
            />
          </div>
          <span className={`font-sans font-medium text-[0.875rem] tracking-widest uppercase
            ${theme === 'light' ? 'text-light-text' : ''}
            ${theme === 'dark' ? 'text-dark-text' : ''}
            ${theme === 'neon' ? 'text-neon-text' : ''}
          `}>David Njenga</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.action ? (
              <button
                key={link.to}
                onClick={link.action}
                className={`font-sans text-[0.75rem] uppercase tracking-wider transition duration-200
                  ${theme === 'light' ? 'text-light-text hover:text-light-primary' : ''}
                  ${theme === 'dark' ? 'text-dark-text hover:text-dark-primary' : ''}
                  ${theme === 'neon' ? 'text-neon-text hover:text-neon-primary' : ''}
                `}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sans text-[0.75rem] uppercase tracking-wider transition duration-200
                  ${theme === 'light' ? 'text-light-text hover:text-light-primary' : ''}
                  ${theme === 'dark' ? 'text-dark-text hover:text-dark-primary' : ''}
                  ${theme === 'neon' ? 'text-neon-text hover:text-neon-primary' : ''}
                  ${location.pathname === link.to ? 'font-medium' : ''}
                `}
              >
                {link.label}
              </Link>
            )
          ))}

          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-full text-[0.75rem] uppercase tracking-wider transition-colors duration-200 flex items-center
              ${theme === 'light' ? 'bg-light-bg border border-gray-200 text-light-text hover:text-light-primary' : ''}
              ${theme === 'dark' ? 'bg-gray-800 text-dark-text hover:text-dark-primary' : ''}
              ${theme === 'neon' ? 'bg-neon-bg/80 border border-neon-primary/20 text-neon-text hover:text-neon-primary' : ''}
            `}
            aria-label={`Switch to ${nextTheme[theme]} theme`}
          >
            <span className="mr-2">{themeIcons[theme]}</span>
            <span>{themeLabels[theme]}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 mr-3 rounded-full transition-colors duration-200
              ${theme === 'light' ? 'bg-light-bg/80 border border-gray-200 text-light-text' : ''}
              ${theme === 'dark' ? 'bg-gray-800/80 text-dark-text' : ''}
              ${theme === 'neon' ? 'bg-neon-bg/80 border border-neon-primary/20 text-neon-text' : ''}
            `}
            aria-label={`Switch to ${nextTheme[theme]} theme`}
          >
            {themeIcons[theme]}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full
              ${theme === 'light' ? 'bg-light-bg/80 border border-gray-200 text-light-text' : ''}
              ${theme === 'dark' ? 'bg-gray-800/80 text-dark-text' : ''}
              ${theme === 'neon' ? 'bg-neon-bg/80 border border-neon-primary/20 text-neon-text' : ''}
            `}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`
          md:hidden absolute top-full mt-2 left-0 right-0 mx-6 py-6 px-6
          shadow-lg backdrop-blur-lg rounded-2xl border
          ${theme === 'light' ? 'bg-light-bg/95 text-light-text border-gray-200' : ''}
          ${theme === 'dark' ? 'bg-dark-bg/95 text-dark-text border-gray-800' : ''}
          ${theme === 'neon' ? 'bg-neon-bg/95 text-neon-text border-neon-primary/20' : ''}
        `}>
          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              link.action ? (
                <button
                  key={link.to}
                  onClick={link.action}
                  className={`font-sans text-[0.875rem] uppercase tracking-wider py-2 transition duration-200 text-left
                    ${theme === 'light' ? 'text-light-text hover:text-light-primary' : ''}
                    ${theme === 'dark' ? 'text-dark-text hover:text-dark-primary' : ''}
                    ${theme === 'neon' ? 'text-neon-text hover:text-neon-primary' : ''}
                  `}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-sans text-[0.875rem] uppercase tracking-wider py-2 transition duration-200
                    ${theme === 'light' ? 'text-light-text hover:text-light-primary' : ''}
                    ${theme === 'dark' ? 'text-dark-text hover:text-dark-primary' : ''}
                    ${theme === 'neon' ? 'text-neon-text hover:text-neon-primary' : ''}
                    ${location.pathname === link.to ? 'font-medium' : ''}
                  `}
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-800">
              <SocialIcons />
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;