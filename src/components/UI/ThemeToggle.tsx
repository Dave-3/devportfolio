import React from 'react';
import { Moon, Sun, Zap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'light', icon: <Sun size={20} />, label: 'Light' },
    { id: 'dark', icon: <Moon size={20} />, label: 'Dark' },
    { id: 'neon', icon: <Zap size={20} />, label: 'Neon' },
  ] as const;

  return (
    <div className={`inline-flex p-1 rounded-lg 
      ${theme === 'light' ? 'bg-gray-100' : ''}
      ${theme === 'dark' ? 'bg-gray-800' : ''}
      ${theme === 'neon' ? 'bg-neon-secondary/20' : ''}
    `}>
      {themes.map(({ id, icon, label }) => (
        <button
          key={id}
          onClick={() => setTheme(id)}
          className={`relative px-3 py-2 rounded-md flex items-center justify-center transition-colors duration-200
            ${theme === id ? 'text-white' : ''}
            ${theme === 'light' && theme !== id ? 'text-light-secondary hover:text-light-text' : ''}
            ${theme === 'dark' && theme !== id ? 'text-dark-secondary hover:text-dark-text' : ''}
            ${theme === 'neon' && theme !== id ? 'text-neon-secondary hover:text-neon-text' : ''}
          `}
          aria-label={`Switch to ${label} theme`}
        >
          {theme === id && (
            <motion.div
              layoutId="themeIndicator"
              className={`absolute inset-0 rounded-md -z-10
                ${theme === 'light' ? 'bg-light-primary' : ''}
                ${theme === 'dark' ? 'bg-dark-primary' : ''}
                ${theme === 'neon' ? 'bg-neon-primary' : ''}
              `}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            />
          )}
          <span className="flex items-center gap-2">
            {icon}
            <span className="sr-only md:not-sr-only md:inline-block text-sm font-medium">
              {label}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;