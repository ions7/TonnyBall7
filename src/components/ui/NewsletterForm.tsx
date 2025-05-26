import React from 'react';
import { motion } from 'framer-motion';

const NewsletterForm: React.FC = () => {
  return (
    <section className="bg-dark-400 py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            Join the <span className="text-primary">TonnyClub</span>
          </h2>
          <p className="text-light-300 mb-8">
            Get Weekly Football Energy! Subscribe to receive exclusive content, match predictions, 
            and special offers directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your name"
              className="flex-1 bg-dark-300 border border-dark-200 rounded-md px-4 py-3 focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-dark-300 border border-dark-200 rounded-md px-4 py-3 focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-600 text-light-500 px-6 py-3 rounded-md transition-colors duration-300 font-medium"
            >
              Subscribe
            </button>
          </form>
          <p className="text-light-400 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterForm;