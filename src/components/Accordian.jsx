import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    open: {
      height: 'auto',
      opacity: 1,
      paddingBottom: 20,
      paddingTop: 20,
      transition: {
        height: { duration: 0.3, ease: 'easeInOut' },
        opacity: { duration: 0.2 },
        paddingBottom: { duration: 0.3, ease: 'easeInOut' },
        paddingTop: { duration: 0.3, ease: 'easeInOut' },
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      paddingBottom: 0,
      paddingTop: 0,
      transition: {
        height: { duration: 0.3, ease: 'easeInOut' },
        opacity: { duration: 0.2 },
        paddingBottom: { duration: 0.3, ease: 'easeInOut' },
        paddingTop: { duration: 0.3, ease: 'easeInOut' },
      },
    },
  };

  return (
    <div
      className={`last:border-0 rounded-md ${
        isOpen ? 'border border-gray-400 dark:border-gray-400 p-5' : 'border-0'
      }`}
    >
      <button
        type="button"
        className={`flex items-center justify-between w-full py-5 text-left transition-colors duration-300
                    ${
                      isOpen
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900'
                    } rounded-none`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold p-2">{title}</span>
        <div className="flex items-center">
          <motion.div
            className="w-8 h-8 flex items-center justify-center transition-all duration-300 p-[3px] rounded-none"
            animate={{
              backgroundColor: isOpen ? 'bg-gray-200 dark:bg-gray-700' : 'transparent',
            }}
          >
            {isOpen ? (
              <Minus className="h-6 w-6 text-blue-500" />
            ) : (
              <Plus className="h-6 w-6 text-blue-500" />
            )}
          </motion.div>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="text-gray-700 dark:text-gray-300"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion = () => {
  const accordionData = [
    {
      title: 'What is React?',
      content:
        'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.',
    },
    {
      title: 'How does Tailwind CSS work?',
      content:
        'Tailwind CSS works by providing a set of pre-defined CSS classes that you can use directly in your HTML or JSX.  You compose these classes to style your elements, rather than writing custom CSS rules.',
    },
    {
      title: 'What are the benefits of using React with Tailwind?',
      content:
        "Using React with Tailwind can speed up development, improve maintainability, and help you create consistent and visually appealing user interfaces.  React's component model and Tailwind's utility-first approach complement each other well.",
    },
    {
      title: 'Can I use custom CSS with Tailwind CSS?',
      content:
        'Yes, you can! Tailwind is designed to be customized. You can extend Tailwind\'s default configuration, add your own CSS classes, or even use regular CSS alongside Tailwind classes.',
    },
  ];
  return (
    <div className="bg-white backdrop-blur-md w-full p-8">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold  mb-4">Frequently Asked Questions</h2>
        {accordionData.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
