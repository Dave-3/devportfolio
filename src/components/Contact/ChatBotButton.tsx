import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { MessageSquare } from 'lucide-react';
import ChatBot from './ChatBot';

const ChatBotButton: React.FC = () => {
  const { theme } = useTheme();
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsChatOpen(true)}
        className={`chat-bot-trigger fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg flex items-center justify-center
          ${isChatOpen ? 'hidden md:flex' : 'flex'}
          ${theme === 'light' ? 'bg-light-primary text-white' : ''}
          ${theme === 'dark' ? 'bg-dark-primary text-white' : ''}
          ${theme === 'neon' ? 'bg-neon-primary text-neon-bg' : ''}
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </motion.button>

      <AnimatePresence mode="wait">
        {isChatOpen && (
          <ChatBot
            key="chatbot"
            onClose={() => setIsChatOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBotButton;
