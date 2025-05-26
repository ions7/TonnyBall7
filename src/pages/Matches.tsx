import React, { useState } from 'react';
import { Calendar, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import MatchCard from '../components/ui/MatchCard';
import { matches } from '../data/matchesData';

const Matches: React.FC = () => {
  const [season, setSeason] = useState<'All' | 'Summer' | 'Fall'>('All');
  const [showHotOnly, setShowHotOnly] = useState(false);

  // Filter matches based on selected filters
  const filteredMatches = matches.filter(match => {
    if (season !== 'All' && match.season !== season) return false;
    if (showHotOnly && !match.isHot) return false;
    return true;
  });

  // Get hot matches for highlight section
  const hotMatches = matches.filter(match => match.isHot);

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative py-16 bg-dark-500 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/90 via-dark-500/90 to-dark-500"></div>
          <div 
            className="absolute inset-0 bg-[url('https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg')]"
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
              Upcoming <span className="text-primary">Matches</span>
            </h1>
            <p className="text-light-300 text-lg mb-8">
              Find all the exciting football matches coming in 2025. Filter by season, 
              check out the hottest matchups, and plan your football viewing calendar!
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Hot Matches Section */}
      <section className="py-12 bg-dark-500">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <div className="text-primary">
              <Calendar size={24} />
            </div>
            <h2 className="text-2xl font-bold font-montserrat text-light-500">
              Hot Matches of the Month 🔥
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotMatches.map((match, index) => (
              <MatchCard key={match.id} match={match} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* All Matches Section */}
      <section className="py-12 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold font-montserrat text-light-500">
              All Upcoming Matches
            </h2>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                <Filter size={18} className="mr-2 text-primary" />
                <span className="text-light-300 mr-2">Filters:</span>
              </div>
              
              <select 
                value={season}
                onChange={(e) => setSeason(e.target.value as 'All' | 'Summer' | 'Fall')}
                className="bg-dark-300 border border-dark-200 rounded-md px-3 py-2 text-light-500 focus:outline-none focus:border-primary"
              >
                <option value="All">All Seasons</option>
                <option value="Summer">Summer 2025</option>
                <option value="Fall">Fall 2025</option>
              </select>
              
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={showHotOnly}
                  onChange={() => setShowHotOnly(!showHotOnly)}
                  className="mr-2 h-4 w-4 accent-primary"
                />
                <span className="text-light-300">Hot Matches Only</span>
              </label>
            </div>
          </div>
          
          {filteredMatches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMatches.map((match, index) => (
                <MatchCard key={match.id} match={match} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-light-300 text-lg">No matches found with the selected filters.</p>
              <button
                onClick={() => { setSeason('All'); setShowHotOnly(false); }}
                className="mt-4 text-primary hover:text-primary-400"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Matches;