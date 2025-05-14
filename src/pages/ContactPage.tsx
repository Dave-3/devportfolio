import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import SocialIcons from '../components/UI/SocialIcons';

const ContactPage: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would handle the form submission here
    alert('Thanks for your message! This is a demo, so the message was not actually sent.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin size={20} />,
      title: 'Location',
      content: 'New York, NY, USA'
    },
    {
      icon: <Phone size={20} />,
      title: 'Phone',
      content: '+1 (555) 123-4567'
    },
    {
      icon: <Mail size={20} />,
      title: 'Email',
      content: 'hello@example.com'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className={`text-4xl md:text-5xl font-display font-bold mb-6
            ${theme === 'light' ? 'text-light-text' : ''}
            ${theme === 'dark' ? 'text-dark-text' : ''}
            ${theme === 'neon' ? 'text-neon-text' : ''}
          `}>
            Get In Touch
          </h1>
          <p className={`text-lg max-w-2xl mx-auto
            ${theme === 'light' ? 'text-light-secondary' : ''}
            ${theme === 'dark' ? 'text-dark-secondary' : ''}
            ${theme === 'neon' ? 'text-neon-secondary' : ''}
          `}>
            Have a project in mind or just want to say hello? I'd love to hear from you!
            Fill out the form below or reach out through any of the contact methods.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className={`rounded-lg p-8
              ${theme === 'light' ? 'bg-gray-100' : ''}
              ${theme === 'dark' ? 'bg-gray-800/50' : ''}
              ${theme === 'neon' ? 'bg-neon-secondary/10' : ''}
            `}>
              <h2 className={`text-xl font-display font-semibold mb-6
                ${theme === 'light' ? 'text-light-text' : ''}
                ${theme === 'dark' ? 'text-dark-text' : ''}
                ${theme === 'neon' ? 'text-neon-text' : ''}
              `}>
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`p-3 rounded-full mr-4
                      ${theme === 'light' ? 'bg-light-primary/10 text-light-primary' : ''}
                      ${theme === 'dark' ? 'bg-dark-primary/10 text-dark-primary' : ''}
                      ${theme === 'neon' ? 'bg-neon-primary/10 text-neon-primary' : ''}
                    `}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className={`font-medium
                        ${theme === 'light' ? 'text-light-text' : ''}
                        ${theme === 'dark' ? 'text-dark-text' : ''}
                        ${theme === 'neon' ? 'text-neon-text' : ''}
                      `}>
                        {info.title}
                      </h3>
                      <p className={`
                        ${theme === 'light' ? 'text-light-secondary' : ''}
                        ${theme === 'dark' ? 'text-dark-secondary' : ''}
                        ${theme === 'neon' ? 'text-neon-secondary' : ''}
                      `}>
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className={`font-medium mb-4
                  ${theme === 'light' ? 'text-light-text' : ''}
                  ${theme === 'dark' ? 'text-dark-text' : ''}
                  ${theme === 'neon' ? 'text-neon-text' : ''}
                `}>
                  Follow Me
                </h3>
                <SocialIcons />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className={`rounded-lg p-8 shadow-md
              ${theme === 'light' ? 'bg-white' : ''}
              ${theme === 'dark' ? 'bg-gray-800/40' : ''}
              ${theme === 'neon' ? 'bg-neon-secondary/5' : ''}
            `}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block text-sm font-medium mb-2
                      ${theme === 'light' ? 'text-light-text' : ''}
                      ${theme === 'dark' ? 'text-dark-text' : ''}
                      ${theme === 'neon' ? 'text-neon-text' : ''}
                    `}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg transition duration-200 focus:outline-none focus:ring-2
                      ${theme === 'light' ? 'bg-gray-100 border-gray-200 focus:ring-light-primary text-gray-900' : ''}
                      ${theme === 'dark' ? 'bg-gray-700 border-gray-600 focus:ring-dark-primary text-white' : ''}
                      ${theme === 'neon' ? 'bg-neon-bg border-neon-secondary/30 focus:ring-neon-primary text-neon-text' : ''}
                    `}
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block text-sm font-medium mb-2
                      ${theme === 'light' ? 'text-light-text' : ''}
                      ${theme === 'dark' ? 'text-dark-text' : ''}
                      ${theme === 'neon' ? 'text-neon-text' : ''}
                    `}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg transition duration-200 focus:outline-none focus:ring-2
                      ${theme === 'light' ? 'bg-gray-100 border-gray-200 focus:ring-light-primary text-gray-900' : ''}
                      ${theme === 'dark' ? 'bg-gray-700 border-gray-600 focus:ring-dark-primary text-white' : ''}
                      ${theme === 'neon' ? 'bg-neon-bg border-neon-secondary/30 focus:ring-neon-primary text-neon-text' : ''}
                    `}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="subject" 
                  className={`block text-sm font-medium mb-2
                    ${theme === 'light' ? 'text-light-text' : ''}
                    ${theme === 'dark' ? 'text-dark-text' : ''}
                    ${theme === 'neon' ? 'text-neon-text' : ''}
                  `}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition duration-200 focus:outline-none focus:ring-2
                    ${theme === 'light' ? 'bg-gray-100 border-gray-200 focus:ring-light-primary text-gray-900' : ''}
                    ${theme === 'dark' ? 'bg-gray-700 border-gray-600 focus:ring-dark-primary text-white' : ''}
                    ${theme === 'neon' ? 'bg-neon-bg border-neon-secondary/30 focus:ring-neon-primary text-neon-text' : ''}
                  `}
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2
                    ${theme === 'light' ? 'text-light-text' : ''}
                    ${theme === 'dark' ? 'text-dark-text' : ''}
                    ${theme === 'neon' ? 'text-neon-text' : ''}
                  `}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg transition duration-200 focus:outline-none focus:ring-2
                    ${theme === 'light' ? 'bg-gray-100 border-gray-200 focus:ring-light-primary text-gray-900' : ''}
                    ${theme === 'dark' ? 'bg-gray-700 border-gray-600 focus:ring-dark-primary text-white' : ''}
                    ${theme === 'neon' ? 'bg-neon-bg border-neon-secondary/30 focus:ring-neon-primary text-neon-text' : ''}
                  `}
                />
              </div>
              
              <button
                type="submit"
                className={`px-6 py-3 rounded-lg flex items-center justify-center transition-colors duration-200 text-white font-medium
                  ${theme === 'light' ? 'bg-light-primary hover:bg-light-primary/90' : ''}
                  ${theme === 'dark' ? 'bg-dark-primary hover:bg-dark-primary/90' : ''}
                  ${theme === 'neon' ? 'bg-neon-primary hover:bg-neon-primary/90 text-neon-bg' : ''}
                `}
              >
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;