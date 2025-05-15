import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { X, Send, ExternalLink, Download, Mail, User, FileText } from 'lucide-react';

// Define message types
interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  options?: Option[];
}

interface Option {
  id: string;
  text: string;
  action: () => void;
}

const ChatBot: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const welcomeSentRef = useRef<boolean>(false);

  // Predefined responses
  const botResponses = {
    welcome: {
      text: "Hi! I'm David's bot assistant. How can I help you today?",
      options: [
        {
          id: 'resume',
          text: 'I want to see your resume',
          action: () => handleBotResponse('resume')
        },
        {
          id: 'hire',
          text: 'I want to hire you',
          action: () => handleBotResponse('hire')
        },
        {
          id: 'project',
          text: 'I have a project idea',
          action: () => handleBotResponse('project')
        },
        {
          id: 'hello',
          text: 'Just saying hello!',
          action: () => handleBotResponse('hello')
        }
      ]
    },
    resume: {
      text: "Great! You can view or download my resume using the links below:",
      options: [
        {
          id: 'view-resume',
          text: 'View Resume Online',
          action: () => window.open('https://resume.example.com', '_blank')
        },
        {
          id: 'download-resume',
          text: 'Download PDF Resume',
          action: () => window.open('/resume.pdf', '_blank')
        },
        {
          id: 'back',
          text: 'Ask something else',
          action: () => handleBotResponse('welcome')
        }
      ]
    },
    hire: {
      text: "I'm excited about the possibility of working together! You can reach me directly via email or schedule a call:",
      options: [
        {
          id: 'email',
          text: 'Send an Email',
          action: () => window.open('mailto:mdnjenga@gmail.com?subject=Job Opportunity', '_blank')
        },
        {
          id: 'schedule',
          text: 'Schedule a Call',
          action: () => window.open('https://calendly.com/mdnjenga/30min', '_blank')
        },
        {
          id: 'back',
          text: 'Ask something else',
          action: () => handleBotResponse('welcome')
        }
      ]
    },
    project: {
      text: "I'd love to hear about your project! Please tell me a bit more about what you have in mind, or use one of these options:",
      options: [
        {
          id: 'email-project',
          text: 'Email Project Details',
          action: () => window.open('mailto:mdnjenga@gmail.com?subject=Project Inquiry', '_blank')
        },
        {
          id: 'schedule-project',
          text: 'Schedule a Discussion',
          action: () => window.open('https://calendly.com/mdnjenga/30min', '_blank')
        },
        {
          id: 'back',
          text: 'Ask something else',
          action: () => handleBotResponse('welcome')
        }
      ]
    },
    hello: {
      text: "Hello there! Thanks for stopping by. Is there anything specific you'd like to know about me or my work?",
      options: [
        {
          id: 'skills',
          text: 'What are your skills?',
          action: () => handleBotResponse('skills')
        },
        {
          id: 'experience',
          text: 'Tell me about your experience',
          action: () => handleBotResponse('experience')
        },
        {
          id: 'back',
          text: 'Ask something else',
          action: () => handleBotResponse('welcome')
        }
      ]
    },
    skills: {
      text: "I specialize in web and mobile development with expertise in React, TypeScript, Node.js, and modern frontend frameworks. I'm also experienced with UI/UX design principles and creating responsive, accessible applications.",
      options: [
        {
          id: 'resume-from-skills',
          text: 'See detailed skills in resume',
          action: () => handleBotResponse('resume')
        },
        {
          id: 'back',
          text: 'Ask something else',
          action: () => handleBotResponse('welcome')
        }
      ]
    },
    experience: {
      text: "I have over 8 years of experience in web and mobile development, working with startups and established companies. My focus is on creating user-centric solutions with a commitment to continuous learning and innovation.",
      options: [
        {
          id: 'projects',
          text: 'See my projects',
          action: () => window.location.href = '/projects'
        },
        {
          id: 'back',
          text: 'Ask something else',
          action: () => handleBotResponse('welcome')
        }
      ]
    },
    fallback: {
      text: "I'm not sure I understand. Could you try one of these options instead?",
      options: [
        {
          id: 'back-fallback',
          text: 'Go back to main options',
          action: () => handleBotResponse('welcome')
        }
      ]
    }
  };

  // Initialize chat with welcome message only once
  useEffect(() => {
    if (!welcomeSentRef.current) {
      welcomeSentRef.current = true;
      setTimeout(() => {
        handleBotResponse('welcome');
      }, 500);
    }
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle sending a message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      setIsTyping(false);
      // Simple keyword matching for responses
      if (inputValue.toLowerCase().includes('resume')) {
        handleBotResponse('resume');
      } else if (inputValue.toLowerCase().includes('hire') || inputValue.toLowerCase().includes('job')) {
        handleBotResponse('hire');
      } else if (inputValue.toLowerCase().includes('project')) {
        handleBotResponse('project');
      } else if (inputValue.toLowerCase().includes('hello') || inputValue.toLowerCase().includes('hi')) {
        handleBotResponse('hello');
      } else if (inputValue.toLowerCase().includes('skill')) {
        handleBotResponse('skills');
      } else if (inputValue.toLowerCase().includes('experience')) {
        handleBotResponse('experience');
      } else {
        handleBotResponse('fallback');
      }
    }, 1000);
  };

  // Handle bot responses
  const handleBotResponse = (responseKey: keyof typeof botResponses) => {
    const response = botResponses[responseKey];

    // Check if this exact message already exists to prevent duplicates
    const messageExists = messages.some(
      msg => msg.sender === 'bot' && msg.text === response.text
    );

    if (!messageExists) {
      const botMessage: Message = {
        id: Date.now().toString(),
        text: response.text,
        sender: 'bot',
        options: response.options
      };

      setMessages(prev => [...prev, botMessage]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={`fixed inset-0 md:inset-auto md:bottom-6 md:right-6 w-full md:max-w-md rounded-none md:rounded-2xl shadow-xl overflow-hidden z-50 flex flex-col
        h-screen max-h-screen md:h-[calc(100vh-6rem)] md:max-h-[700px]
        ${theme === 'light' ? 'bg-white border border-gray-200' : ''}
        ${theme === 'dark' ? 'bg-gray-900 border border-gray-800' : ''}
        ${theme === 'neon' ? 'bg-neon-bg border border-neon-primary/20' : ''}
      `}
    >
      {/* Chat header */}
      <div className={`p-4 flex justify-between items-center border-b
        ${theme === 'light' ? 'bg-light-primary text-white border-light-primary' : ''}
        ${theme === 'dark' ? 'bg-dark-primary text-white border-dark-primary' : ''}
        ${theme === 'neon' ? 'bg-neon-primary text-neon-bg border-neon-primary' : ''}
      `}>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
            <User size={16} />
          </div>
          <div>
            <h3 className="font-medium">David Bot</h3>
            <p className="text-xs opacity-80">Ask me anything</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Close chat"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages container */}
      <div className={`flex-grow p-4 overflow-y-auto
        ${theme === 'light' ? 'bg-gray-50' : ''}
        ${theme === 'dark' ? 'bg-gray-900' : ''}
        ${theme === 'neon' ? 'bg-neon-bg/80' : ''}
      `}>
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`mb-4 ${message.sender === 'user' ? 'flex justify-end' : 'flex justify-start'}`}
            >
              <div className={`max-w-[80%] rounded-2xl p-3 ${
                message.sender === 'user'
                  ? `${theme === 'light' ? 'bg-light-primary text-white' : ''}
                     ${theme === 'dark' ? 'bg-dark-primary text-white' : ''}
                     ${theme === 'neon' ? 'bg-neon-primary text-neon-bg' : ''}`
                  : `${theme === 'light' ? 'bg-white border border-gray-200 text-light-text' : ''}
                     ${theme === 'dark' ? 'bg-gray-800 border border-gray-700 text-dark-text' : ''}
                     ${theme === 'neon' ? 'bg-gray-900/50 border border-neon-primary/20 text-neon-text' : ''}`
              }`}>
                <p className="text-sm">{message.text}</p>

                {/* Options buttons */}
                {message.options && message.options.length > 0 && (
                  <div className="mt-3 flex flex-col space-y-2">
                    {message.options.map(option => (
                      <button
                        key={option.id}
                        onClick={option.action}
                        className={`text-xs py-2 px-3 rounded-full text-left flex items-center transition-colors
                          ${theme === 'light' ? 'bg-gray-100 hover:bg-gray-200 text-gray-800' : ''}
                          ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : ''}
                          ${theme === 'neon' ? 'bg-neon-bg hover:bg-neon-primary/20 text-neon-text' : ''}
                        `}
                      >
                        {option.id.includes('resume') && <FileText size={14} className="mr-2" />}
                        {option.id.includes('email') && <Mail size={14} className="mr-2" />}
                        {(option.id.includes('view') || option.id.includes('schedule') || option.id.includes('projects')) && <ExternalLink size={14} className="mr-2" />}
                        {option.id.includes('download') && <Download size={14} className="mr-2" />}
                        {option.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start mb-4"
            >
              <div className={`rounded-2xl p-3 flex items-center space-x-1
                ${theme === 'light' ? 'bg-white border border-gray-200 text-light-text' : ''}
                ${theme === 'dark' ? 'bg-gray-800 border border-gray-700 text-dark-text' : ''}
                ${theme === 'neon' ? 'bg-gray-900/50 border border-neon-primary/20 text-neon-text' : ''}
              `}>
                <div className="w-2 h-2 rounded-full animate-bounce bg-gray-400" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 rounded-full animate-bounce bg-gray-400" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 rounded-full animate-bounce bg-gray-400" style={{ animationDelay: '300ms' }}></div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </AnimatePresence>
      </div>

      {/* Input area */}
      <form onSubmit={handleSendMessage} className={`p-4 border-t flex items-center
        ${theme === 'light' ? 'bg-white border-gray-200' : ''}
        ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''}
        ${theme === 'neon' ? 'bg-gray-900/30 border-neon-primary/20' : ''}
      `}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          className={`flex-grow px-4 py-2 rounded-full focus:outline-none
            ${theme === 'light' ? 'bg-gray-100 text-gray-800 placeholder-gray-500' : ''}
            ${theme === 'dark' ? 'bg-gray-700 text-white placeholder-gray-400' : ''}
            ${theme === 'neon' ? 'bg-neon-bg/80 text-neon-text placeholder-neon-text/50 border border-neon-primary/20' : ''}
          `}
        />
        <button
          type="submit"
          className={`ml-2 p-2 rounded-full
            ${theme === 'light' ? 'bg-light-primary text-white' : ''}
            ${theme === 'dark' ? 'bg-dark-primary text-white' : ''}
            ${theme === 'neon' ? 'bg-neon-primary text-neon-bg' : ''}
          `}
          disabled={!inputValue.trim()}
        >
          <Send size={18} />
        </button>
      </form>
    </motion.div>
  );
};

export default ChatBot;
