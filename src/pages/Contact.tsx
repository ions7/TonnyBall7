import React from 'react';
import { Mail, MapPin, Phone, Clock, Youtube, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ui/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <section className="relative py-16 bg-dark-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-light-500">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-light-300 text-lg mb-8">
              Have questions, suggestions, or just want to say hello? 
              We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-12 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-1 lg:col-span-2">
              <ContactForm />
            </div>
            
            <div className="col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-dark-500 rounded-lg p-6 shadow-lg border border-dark-300 mb-6">
                  <h2 className="text-2xl font-bold font-montserrat mb-6 text-light-500">Contact Info</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="text-primary mt-1 mr-3" size={20} />
                      <div>
                        <h3 className="text-light-500 font-medium">Email</h3>
                        <p className="text-light-300">info@tonnyball.org</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="text-primary mt-1 mr-3" size={20} />
                      <div>
                        <h3 className="text-light-500 font-medium">Location</h3>
                        <p className="text-light-300">Global (Online Based)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="text-primary mt-1 mr-3" size={20} />
                      <div>
                        <h3 className="text-light-500 font-medium">Response Time</h3>
                        <p className="text-light-300">Within 48 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-dark-500 rounded-lg p-6 shadow-lg border border-dark-300">
                  <h2 className="text-2xl font-bold font-montserrat mb-6 text-light-500">Connect With Us</h2>
                  
                  <div className="space-y-4">
                    <a 
                      href="https://www.youtube.com/@TonnyBall"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center py-3 px-4 bg-dark-400 hover:bg-dark-300 rounded-md transition-colors duration-300"
                    >
                      <Youtube className="text-primary mr-3" size={20} />
                      <span className="text-light-500">YouTube</span>
                    </a>
                    
                    <a 
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center py-3 px-4 bg-dark-400 hover:bg-dark-300 rounded-md transition-colors duration-300"
                    >
                      <Instagram className="text-primary mr-3" size={20} />
                      <span className="text-light-500">Instagram</span>
                    </a>
                    
                    <a 
                      href="https://www.tiktok.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center py-3 px-4 bg-dark-400 hover:bg-dark-300 rounded-md transition-colors duration-300"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary mr-3"
                      >
                        <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                        <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                        <path d="M15 8v8a4 4 0 0 1-4 4" />
                        <line x1="15" y1="4" x2="15" y2="12" />
                      </svg>
                      <span className="text-light-500">TikTok</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-dark-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-dark-400 rounded-lg p-6 shadow-lg border border-dark-300"
          >
            <h2 className="text-2xl font-bold font-montserrat mb-6 text-light-500 text-center">
              Business Inquiries & Collaborations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-light-500">Interested in Working Together?</h3>
                <p className="text-light-300 mb-4">
                  We're open to partnerships, sponsorships, and collaborations with brands and other content creators. 
                  If you have a proposal, please reach out with details about your brand and ideas.
                </p>
                <a 
                  href="mailto:business@tonnyball.org"
                  className="text-primary hover:text-primary-400 font-medium"
                >
                  business@tonnyball.org
                </a>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-light-500">Suggest a Video Topic</h3>
                <p className="text-light-300 mb-4">
                  Have an idea for a football video you'd like to see? We're always looking for fresh content ideas 
                  from our community. Let us know what you'd like to watch!
                </p>
                <a 
                  href="#suggestion-form"
                  className="bg-primary hover:bg-primary-600 text-light-500 px-4 py-2 rounded-md transition-colors duration-300 inline-block"
                >
                  Suggest a Topic
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;