import React from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-dark-400 rounded-lg p-6 shadow-lg border border-dark-300"
    >
      <h2 className="text-2xl font-bold font-montserrat mb-6 text-light-500">Get in Touch</h2>
      
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-light-300 mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full bg-dark-300 border border-dark-200 rounded-md px-4 py-2 focus:outline-none focus:border-primary text-light-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-light-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full bg-dark-300 border border-dark-200 rounded-md px-4 py-2 focus:outline-none focus:border-primary text-light-500"
              placeholder="Your email"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-light-300 mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            className="w-full bg-dark-300 border border-dark-200 rounded-md px-4 py-2 focus:outline-none focus:border-primary text-light-500"
            placeholder="Subject"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-light-300 mb-1">Message</label>
          <textarea
            id="message"
            rows={5}
            className="w-full bg-dark-300 border border-dark-200 rounded-md px-4 py-2 focus:outline-none focus:border-primary text-light-500 resize-none"
            placeholder="Your message"
          ></textarea>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            className="bg-primary hover:bg-primary-600 text-light-500 px-6 py-3 rounded-md transition-colors duration-300 font-medium w-full md:w-auto"
          >
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;