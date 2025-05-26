import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import MatchCard from '../components/ui/MatchCard';
import VideoCard from '../components/ui/VideoCard';
import NewsletterForm from '../components/ui/NewsletterForm';
import { matches } from '../data/matchesData';
import { videos } from '../data/videosData';

const Home: React.FC = () => {
  // Get hot matches or latest 3
  const featuredMatches = matches
    .filter(match => match.isHot)
    .slice(0, 3);
  
  // Get latest 6 videos
  const latestVideos = [...videos]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 bg-dark-500 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-500/90 to-dark-500"></div>
          <div 
            className="absolute inset-0 bg-[url('https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg')]"
            style={{ 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.15
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat mb-6 text-light-500">
                Where <span className="text-primary">Football</span> Lives
              </h1>
              <p className="text-light-300 text-lg mb-8 max-w-lg">
                Welcome to TonnyBall, the ultimate destination for football fans! Here, you'll discover amazing 
                football facts, player breakdowns, powerful teams, and more — all in energetic, fun videos hosted by TonnyBall.
              </p>
              <p className="text-light-300 text-lg mb-8 max-w-lg">
                Subscribe and join the movement — because football is a lifestyle!
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.youtube.com/channel/UC1SMA2DymRtJY7T-2YUl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-600 text-light-500 px-6 py-3 rounded-md transition-colors duration-300 flex items-center gap-2 font-medium"
                >
                  <Youtube size={20} /> Subscribe Now
                </a>
                <Link 
                  to="/videos"
                  className="border-2 border-light-500 hover:border-primary hover:text-primary text-light-500 px-6 py-3 rounded-md transition-colors duration-300 font-medium"
                >
                  Watch Videos
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary p-1 bg-dark-500">
                  <img 
                    src="/tonnyball-avatar.png" 
                    alt="TonnyBall Character" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 bg-primary text-light-500 rounded-full py-2 px-4 font-bold shadow-lg"
                >
                  #TonnyBall
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Latest Videos Section */}
      <section className="py-16 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold font-montserrat text-light-500">Latest <span className="text-primary">Videos</span></h2>
            <Link to="/videos" className="text-primary hover:text-primary-400 flex items-center gap-1 font-medium">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestVideos.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Next Matches Section */}
      <section className="py-16 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold font-montserrat text-light-500">Next <span className="text-primary">Matches</span></h2>
            <Link to="/matches" className="text-primary hover:text-primary-400 flex items-center gap-1 font-medium">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMatches.map((match, index) => (
              <MatchCard key={match.id} match={match} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <NewsletterForm />
    </div>
  );
};

export default Home;