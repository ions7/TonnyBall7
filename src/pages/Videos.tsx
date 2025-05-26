import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoCard from '../components/ui/VideoCard';
import { videos } from '../data/videosData';
import { Video } from '../types';

const Videos: React.FC = () => {
  const [category, setCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'latest' | 'oldest'>('latest');

  // Get all unique categories
  const categories = ['All', ...Array.from(new Set(videos.map(video => video.category)))];

  // Filter and sort videos
  const filteredVideos = [...videos]
    .filter(video => category === 'All' || video.category === category)
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortBy === 'latest' ? dateB - dateA : dateA - dateB;
    });

  // Group videos by category for the "All" view
  const videosByCategory: Record<string, Video[]> = {};
  if (category === 'All') {
    categories.forEach(cat => {
      if (cat !== 'All') {
        videosByCategory[cat] = videos
          .filter(video => video.category === cat)
          .sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return sortBy === 'latest' ? dateB - dateA : dateA - dateB;
          })
          .slice(0, 3); // Show only 3 videos per category in "All" view
      }
    });
  }

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative py-16 bg-dark-500 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/90 via-dark-500/90 to-dark-500"></div>
          <div 
            className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg')]"
            style={{ 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.2
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-light-500">
              TonnyBall <span className="text-primary">Videos</span>
            </h1>
            <p className="text-light-300 text-lg mb-8">
              Explore our collection of energetic, informative, and entertaining football videos. 
              From top 5 countdowns to in-depth player spotlights, there's something for every football fan!
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Category Tabs & Filters */}
      <section className="bg-dark-400 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                    category === cat
                      ? 'bg-primary text-light-500'
                      : 'bg-dark-300 text-light-300 hover:bg-dark-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-primary" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'latest' | 'oldest')}
                className="bg-dark-300 border border-dark-200 rounded-md px-3 py-2 text-light-500 focus:outline-none focus:border-primary"
              >
                <option value="latest">Latest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Videos Display */}
      <section className="py-12 bg-dark-500">
        <div className="container mx-auto px-4">
          {category === 'All' ? (
            // Display videos grouped by category
            Object.entries(videosByCategory).map(([cat, catVideos]) => (
              <div key={cat} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold font-montserrat mb-6 text-light-500">
                  {cat}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catVideos.map((video, index) => (
                    <VideoCard key={video.id} video={video} index={index} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Display filtered videos for a specific category
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Videos;