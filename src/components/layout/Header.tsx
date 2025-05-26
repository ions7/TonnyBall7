import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Youtube, Instagram, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-500 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary">
            <img
              src="/tonnyball-avatar.png"
              alt="TonnyBall Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-2xl font-bold font-montserrat tracking-wider text-light-500">
              <span className="text-primary">Tonny</span>Ball
            </h1>
            <p className="text-xs text-light-300 -mt-1">WHERE FOOTBALL LIVES</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 font-medium">
          {['Home', 'Matches', 'Videos', 'Blog', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={`transition-colors duration-300 hover:text-primary ${
                location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                  ? 'text-primary'
                  : 'text-light-500'
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://www.youtube.com/channel/UC1SMA2DymRtJY7T-2YUl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-500 hover:text-primary transition-colors duration-300"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-500 hover:text-primary transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.youtube.com/channel/UC1SMA2DymRtJY7T-2YUl"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-600 text-light-500 px-4 py-2 rounded-md transition-colors duration-300 flex items-center gap-2"
          >
            <Play size={16} /> Subscribe
          </a>
        </div>

        <button
          className="md:hidden text-light-500 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-dark-400 border-t border-dark-300"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {['Home', 'Matches', 'Videos', 'Blog', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`transition-colors duration-300 py-2 ${
                    location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                      ? 'text-primary'
                      : 'text-light-500'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-dark-300">
              <a
                href="https://www.youtube.com/channel/UC1SMA2DymRtJY7T-2YUl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-500 hover:text-primary transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-500 hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/channel/UC1SMA2DymRtJY7T-2YUl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-600 text-light-500 px-4 py-2 rounded-md transition-colors duration-300 flex items-center gap-2"
              >
                <Play size={16} /> Subscribe
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;