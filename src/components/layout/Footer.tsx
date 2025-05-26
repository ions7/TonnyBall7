import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Mail, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-500 border-t border-dark-400 pt-12 pb-8 text-light-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary">
                <img
                  src="https://i.postimg.cc/W1VhQVnw/Flux-Dev-Create-a-highquality-digital-avatar-of-a-young-footba-0.jpg"
                  alt="TonnyBall Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold font-montserrat tracking-wider text-light-500">
                  <span className="text-primary">Tonny</span>Ball
                </h1>
                <p className="text-xs text-light-300 -mt-1">WHERE FOOTBALL LIVES</p>
              </div>
            </Link>
            <p className="text-light-300 mb-6">
              The ultimate destination for football fans! Discover amazing football facts, player breakdowns, 
              powerful teams, and more.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@TonnyBall"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-500 hover:text-primary transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-500 hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-500 hover:text-primary transition-colors duration-300"
                aria-label="TikTok"
              >
                <svg
                  width="24"
                  height="24"
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
              <a
                href="mailto:info@tonnyball.org"
                className="text-light-500 hover:text-primary transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4 font-montserrat">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Matches', 'Videos', 'Blog', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-light-300 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4 font-montserrat">Latest Content</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/videos" className="text-light-300 hover:text-primary transition-colors duration-300">
                  Recent Videos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-light-300 hover:text-primary transition-colors duration-300">
                  Latest Articles
                </Link>
              </li>
              <li>
                <Link to="/matches" className="text-light-300 hover:text-primary transition-colors duration-300">
                  Upcoming Matches
                </Link>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@TonnyBall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-300 hover:text-primary transition-colors duration-300"
                >
                  YouTube Channel
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4 font-montserrat">Join the TonnyClub</h3>
            <p className="text-light-300 mb-4">Get weekly football energy delivered to your inbox!</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-dark-400 border border-dark-300 rounded-l-md px-4 py-2 w-full focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-600 text-light-500 px-4 py-2 rounded-r-md transition-colors duration-300"
                aria-label="Subscribe"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-dark-400 mt-8 pt-8 text-center text-light-400 text-sm">
          <p>&copy; {new Date().getFullYear()} TonnyBall. All rights reserved. | <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;