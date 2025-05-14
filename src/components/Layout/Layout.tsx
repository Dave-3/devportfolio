import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Layout: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`
      flex flex-col min-h-screen
      ${theme === 'light' ? 'bg-light-bg text-light-text' : ''}
      ${theme === 'dark' ? 'bg-dark-bg text-dark-text' : ''}
      ${theme === 'neon' ? 'bg-neon-bg text-neon-text' : ''}
    `}>
      <Navbar />
      <main className="flex-grow pt-36">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;