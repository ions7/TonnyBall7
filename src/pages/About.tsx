import React from 'react';
import { Youtube, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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
              About <span className="text-primary">TonnyBall</span>
            </h1>
            <p className="text-light-300 text-lg mb-8">
              The story, mission, and passion behind TonnyBall.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-12 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold font-montserrat mb-6 text-light-500">
                The <span className="text-primary">Story</span>
              </h2>
              <p className="text-light-300 mb-4">
                TonnyBall was born from a simple passion: the love of football. As a lifelong fan and player, 
                I've always been fascinated by the beautiful game's ability to unite people across cultures, languages, 
                and borders.
              </p>
              <p className="text-light-300 mb-4">
                In 2023, I started creating football content online, sharing my insights, analysis, and enthusiasm 
                with a small but dedicated audience. What began as a hobby quickly grew into something much bigger 
                as football fans from around the world connected with my energetic approach to the game.
              </p>
              <p className="text-light-300 mb-6">
                Today, TonnyBall is growing into a global football community where fans can discover fascinating 
                content, engage with like-minded enthusiasts, and celebrate the sport we all love.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-4 italic text-light-200 mb-6">
                "I don't just play the game — I live it."
              </blockquote>
              
              <div className="flex space-x-4">
                <a
                  href="https://www.youtube.com/channel/UC1SMA2DymRtJY7T-2YUl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-600 text-light-500 p-3 rounded-full transition-colors duration-300"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-300 hover:bg-dark-200 text-light-500 p-3 rounded-full transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-300 hover:bg-dark-200 text-light-500 p-3 rounded-full transition-colors duration-300"
                  aria-label="TikTok"
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
                  >
                    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                    <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                    <path d="M15 8v8a4 4 0 0 1-4 4" />
                    <line x1="15" y1="4" x2="15" y2="12" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary p-1 bg-dark-500">
                  <img 
                    src="https://i.postimg.cc/W1VhQVnw/Flux-Dev-Create-a-highquality-digital-avatar-of-a-young-footba-0.jpg"
                    alt="TonnyBall Character" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-dark-500">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-montserrat mb-10 text-center text-light-500">
            Our <span className="text-primary">Mission</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-dark-400 p-6 rounded-lg border border-dark-300"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-light-500 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-light-500">Entertain</h3>
              <p className="text-light-300">
                Create engaging, energetic content that captures the excitement and passion of football.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-dark-400 p-6 rounded-lg border border-dark-300"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-light-500 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-light-500">Educate</h3>
              <p className="text-light-300">
                Share knowledge, insights, and analysis that helps fans understand and appreciate the game on a deeper level.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-dark-400 p-6 rounded-lg border border-dark-300"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-light-500 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-light-500">Unite</h3>
              <p className="text-light-300">
                Build a global community of passionate football fans who connect through their shared love of the beautiful game.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-dark-400">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-montserrat mb-10 text-center text-light-500">
            The <span className="text-primary">Journey</span> So Far
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary transform md:translate-x-0 translate-x-6"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col md:flex-row items-center"
              >
                <div className="flex-1 md:text-right md:pr-8 md:pb-0 pb-4 order-2 md:order-1">
                  <h3 className="text-xl font-semibold text-light-500">The Beginning</h3>
                  <p className="text-light-300">TonnyBall YouTube channel created. First video released.</p>
                </div>
                <div className="order-1 md:order-2 z-10 mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-dark-400">
                    <span className="text-light-500 font-bold">2023</span>
                  </div>
                </div>
                <div className="flex-1 md:pl-8 order-3 hidden md:block"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col md:flex-row items-center"
              >
                <div className="flex-1 md:pr-8 md:text-right hidden md:block order-1"></div>
                <div className="order-2 z-10 mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-dark-400">
                    <span className="text-light-500 font-bold">2024</span>
                  </div>
                </div>
                <div className="flex-1 md:pl-8 order-3 md:pb-0 pb-4">
                  <h3 className="text-xl font-semibold text-light-500">Growth Phase</h3>
                  <p className="text-light-300">Reached 10,000 subscribers. Expanded to Instagram and TikTok.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col md:flex-row items-center"
              >
                <div className="flex-1 md:text-right md:pr-8 md:pb-0 pb-4 order-2 md:order-1">
                  <h3 className="text-xl font-semibold text-light-500">Present Day</h3>
                  <p className="text-light-300">Launch of TonnyBall.org website. Community building and content expansion.</p>
                </div>
                <div className="order-1 md:order-2 z-10 mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-dark-400">
                    <span className="text-light-500 font-bold">2025</span>
                  </div>
                </div>
                <div className="flex-1 md:pl-8 order-3 hidden md:block"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col md:flex-row items-center"
              >
                <div className="flex-1 md:pr-8 md:text-right hidden md:block order-1"></div>
                <div className="order-2 z-10 mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-dark-300 rounded-full flex items-center justify-center border-4 border-dark-400">
                    <span className="text-light-500 font-bold">Next</span>
                  </div>
                </div>
                <div className="flex-1 md:pl-8 order-3 md:pb-0 pb-4">
                  <h3 className="text-xl font-semibold text-light-500">The Future</h3>
                  <p className="text-light-300">Exciting plans for expansion, collaborations, and live events coming soon!</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;