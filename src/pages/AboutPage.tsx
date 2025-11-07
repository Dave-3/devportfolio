import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface CertificationLink {
  label: string;
  url: string;
}

interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  image: string;
  links: CertificationLink[];
}

const AboutPage: React.FC = () => {
  const { theme } = useTheme();

  const skills = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'Django', 'GraphQL'] },
    { category: 'Mobile', items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
    { category: 'Other', items: ['AWS', 'Docker', 'CI/CD', 'Jest', 'Figma', 'Odoo'] },
  ];

  const certifications: Certification[] = [
    {
      id: 'oracle-devops',
      title: 'Oracle Cloud DevOps Professional',
      issuer: 'Oracle University',
      year: '2024',
      description: 'Validated expertise in deploying, automating, and monitoring workloads on Oracle Cloud Infrastructure.',
      image: '/Oracle%20Devops%20Professional%20eCertificate.jpg',
      links: [
        { label: 'View badge', url: '/Oracle%20Devops%20Professional%20eCertificate.jpg' },
        { label: 'Download eCertificate', url: '/Oracle%20Devops%20Professional%20eCertificate.pdf' }
      ]
    },
    {
      id: 'simplon',
      title: 'Simplon Fullstack Developer Programme',
      issuer: 'Simplon.co',
      year: '2023',
      description: 'Immersive training focused on product strategy, UX, and full-stack delivery for impact-focused teams.',
      image: '',
      links: [
        { label: 'Download certificate', url: '/David%20Njenga%20Mburu%20Simplon.pdf' }
      ]
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
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-4xl md:text-5xl font-display font-bold mb-8
            ${theme === 'light' ? 'text-light-text' : ''}
            ${theme === 'dark' ? 'text-dark-text' : ''}
            ${theme === 'neon' ? 'text-neon-text' : ''}
          `}
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2"
          >
            <h2 className={`text-2xl font-title font-semibold mb-4
              ${theme === 'light' ? 'text-light-text' : ''}
              ${theme === 'dark' ? 'text-dark-text' : ''}
              ${theme === 'neon' ? 'text-neon-text' : ''}
            `}>
              My Journey
            </h2>
            <div className={`space-y-4 text-base md:text-lg
              ${theme === 'light' ? 'text-light-secondary' : ''}
              ${theme === 'dark' ? 'text-dark-secondary' : ''}
              ${theme === 'neon' ? 'text-neon-secondary' : ''}
            `}>
              <p>
                I'm a passionate developer with over 4 years of experience specializing in web and mobile development. 
                Throughout my career, I've dedicated myself to creating user-centric solutions that combine functionality 
                with exceptional user experiences.
              </p>
              <p>
                My journey in tech began with a curiosity for how things work. That curiosity evolved into formal education 
                in computer science, followed by hands-on experience across diverse projects and industries. 
                I've worked with startups, established companies, and as an independent developer.
              </p>
              <p>
                What drives me is the intersection of technology and human experience. I believe the best solutions are not 
                just technically sound but also intuitive and accessible to the people who use them.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`rounded-lg p-6
              ${theme === 'light' ? 'bg-gray-100' : ''}
              ${theme === 'dark' ? 'bg-gray-800/50' : ''}
              ${theme === 'neon' ? 'bg-neon-secondary/10' : ''}
            `}
          >
            <h2 className={`text-xl font-title font-semibold mb-4
              ${theme === 'light' ? 'text-light-text' : ''}
              ${theme === 'dark' ? 'text-dark-text' : ''}
              ${theme === 'neon' ? 'text-neon-text' : ''}
            `}>
              Quick Facts
            </h2>
            <ul className="space-y-3">
              <li className={`flex items-start
                ${theme === 'light' ? 'text-light-secondary' : ''}
                ${theme === 'dark' ? 'text-dark-secondary' : ''}
                ${theme === 'neon' ? 'text-neon-secondary' : ''}
              `}>
                <span className={`mr-2 font-medium
                  ${theme === 'light' ? 'text-light-primary' : ''}
                  ${theme === 'dark' ? 'text-dark-primary' : ''}
                  ${theme === 'neon' ? 'text-neon-primary' : ''}
                `}>▹</span>
                Based in Nairobi, Kenya
              </li>
              <li className={`flex items-start
                ${theme === 'light' ? 'text-light-secondary' : ''}
                ${theme === 'dark' ? 'text-dark-secondary' : ''}
                ${theme === 'neon' ? 'text-neon-secondary' : ''}
              `}>
                <span className={`mr-2 font-medium
                  ${theme === 'light' ? 'text-light-primary' : ''}
                  ${theme === 'dark' ? 'text-dark-primary' : ''}
                  ${theme === 'neon' ? 'text-neon-primary' : ''}
                `}>▹</span>
                BSc in Software Engineering
              </li>
              <li className={`flex items-start
                ${theme === 'light' ? 'text-light-secondary' : ''}
                ${theme === 'dark' ? 'text-dark-secondary' : ''}
                ${theme === 'neon' ? 'text-neon-secondary' : ''}
              `}>
                <span className={`mr-2 font-medium
                  ${theme === 'light' ? 'text-light-primary' : ''}
                  ${theme === 'dark' ? 'text-dark-primary' : ''}
                  ${theme === 'neon' ? 'text-neon-primary' : ''}
                `}>▹</span>
                Full-stack Developer
              </li>
              <li className={`flex items-start
                ${theme === 'light' ? 'text-light-secondary' : ''}
                ${theme === 'dark' ? 'text-dark-secondary' : ''}
                ${theme === 'neon' ? 'text-neon-secondary' : ''}
              `}>
                <span className={`mr-2 font-medium
                  ${theme === 'light' ? 'text-light-primary' : ''}
                  ${theme === 'dark' ? 'text-dark-primary' : ''}
                  ${theme === 'neon' ? 'text-neon-primary' : ''}
                `}>▹</span>
                Open Source Contributor
              </li>
              <li className={`flex items-start
                ${theme === 'light' ? 'text-light-secondary' : ''}
                ${theme === 'dark' ? 'text-dark-secondary' : ''}
                ${theme === 'neon' ? 'text-neon-secondary' : ''}
              `}>
                <span className={`mr-2 font-medium
                  ${theme === 'light' ? 'text-light-primary' : ''}
                  ${theme === 'dark' ? 'text-dark-primary' : ''}
                  ${theme === 'neon' ? 'text-neon-primary' : ''}
                `}>▹</span>
                Tech Conference Speaker
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-16"
        >
          <h2 className={`text-2xl font-title font-semibold mb-6
            ${theme === 'light' ? 'text-light-text' : ''}
            ${theme === 'dark' ? 'text-dark-text' : ''}
            ${theme === 'neon' ? 'text-neon-text' : ''}
          `}>
            Certifications & Credentials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className={`rounded-lg p-6 flex flex-col gap-4 border
                  ${theme === 'light' ? 'bg-gray-50 border-gray-200' : ''}
                  ${theme === 'dark' ? 'bg-gray-800/40 border-gray-700/60' : ''}
                  ${theme === 'neon' ? 'bg-neon-secondary/10 border-neon-secondary/20' : ''}
                `}
              >
                {cert.image ? (
                  <div className="w-full overflow-hidden rounded-md border border-dashed border-current/20">
                    <img
                      src={cert.image}
                      alt={`${cert.title} credential`}
                      className="w-full h-48 object-contain bg-white"
                    />
                  </div>
                ) : (
                  <div className={`w-full h-48 rounded-md grid place-items-center text-center text-sm uppercase tracking-[0.18em] font-title
                    ${theme === 'light' ? 'bg-light-primary/5 text-light-primary' : ''}
                    ${theme === 'dark' ? 'bg-dark-primary/10 text-dark-primary' : ''}
                    ${theme === 'neon' ? 'bg-neon-primary/10 text-neon-primary' : ''}
                  `}>
                    {cert.title}
                  </div>
                )}
                <div className="space-y-2">
                  <h3 className={`text-lg font-title font-semibold
                    ${theme === 'light' ? 'text-light-text' : ''}
                    ${theme === 'dark' ? 'text-dark-text' : ''}
                    ${theme === 'neon' ? 'text-neon-text' : ''}
                  `}>
                    {cert.title}
                  </h3>
                  <p className={`text-sm uppercase tracking-[0.12em] font-title
                    ${theme === 'light' ? 'text-light-secondary' : ''}
                    ${theme === 'dark' ? 'text-dark-secondary' : ''}
                    ${theme === 'neon' ? 'text-neon-secondary' : ''}
                  `}>
                    {cert.issuer} · {cert.year}
                  </p>
                  <p className={`text-sm leading-relaxed
                    ${theme === 'light' ? 'text-light-secondary' : ''}
                    ${theme === 'dark' ? 'text-dark-secondary' : ''}
                    ${theme === 'neon' ? 'text-neon-secondary' : ''}
                  `}>
                    {cert.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-2">
                  {cert.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-[0.14em] font-title rounded-full border transition-colors duration-200
                        ${theme === 'light' ? 'border-light-primary text-light-primary hover:bg-light-primary/5' : ''}
                        ${theme === 'dark' ? 'border-dark-primary text-dark-primary hover:bg-dark-primary/10' : ''}
                        ${theme === 'neon' ? 'border-neon-primary text-neon-primary hover:bg-neon-primary/10' : ''}
                      `}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className={`text-2xl font-title font-semibold mb-6
            ${theme === 'light' ? 'text-light-text' : ''}
            ${theme === 'dark' ? 'text-dark-text' : ''}
            ${theme === 'neon' ? 'text-neon-text' : ''}
          `}>
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                className={`rounded-lg p-5
                  ${theme === 'light' ? 'bg-gray-100' : ''}
                  ${theme === 'dark' ? 'bg-gray-800/50' : ''}
                  ${theme === 'neon' ? 'bg-neon-secondary/10' : ''}
                `}
              >
                <h3 className={`text-lg font-medium mb-3
                  ${theme === 'light' ? 'text-light-primary' : ''}
                  ${theme === 'dark' ? 'text-dark-primary' : ''}
                  ${theme === 'neon' ? 'text-neon-primary' : ''}
                `}>
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, idx) => (
                    <li 
                      key={idx}
                      className={`
                        ${theme === 'light' ? 'text-light-secondary' : ''}
                        ${theme === 'dark' ? 'text-dark-secondary' : ''}
                        ${theme === 'neon' ? 'text-neon-secondary' : ''}
                      `}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;