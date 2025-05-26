import React from 'react';
import { Calendar, MapPin, Ticket } from 'lucide-react';
import { motion } from 'framer-motion';
import { Match } from '../../types';

interface MatchCardProps {
  match: Match;
  index: number;
}

const MatchCard: React.FC<MatchCardProps> = ({ match, index }) => {
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-dark-400 rounded-lg overflow-hidden shadow-lg ${
        match.isHot ? 'border-2 border-primary' : 'border border-dark-300'
      }`}
    >
      {match.isHot && (
        <div className="bg-primary py-1 px-3 text-center">
          <span className="text-light-500 text-sm font-semibold">🔥 HOT MATCH 🔥</span>
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="text-center">
            <span className="text-4xl mb-2">{match.homeTeam.flag}</span>
            <h3 className="font-semibold text-light-500">{match.homeTeam.name}</h3>
          </div>
          <div className="text-center">
            <span className="text-lg font-bold text-light-300">VS</span>
          </div>
          <div className="text-center">
            <span className="text-4xl mb-2">{match.awayTeam.flag}</span>
            <h3 className="font-semibold text-light-500">{match.awayTeam.name}</h3>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-light-300">
            <Calendar size={18} className="mr-2 text-primary" />
            <span>{formatDate(match.date)} • {match.time}</span>
          </div>
          <div className="flex items-center text-light-300">
            <MapPin size={18} className="mr-2 text-primary" />
            <span>{match.location.city}, {match.location.country}</span>
          </div>
          <div className="flex items-center text-light-300">
            <Ticket size={18} className="mr-2 text-primary" />
            <span>Estimated price: {match.ticketPrice}</span>
          </div>
        </div>

        <button className="w-full bg-primary hover:bg-primary-600 text-light-500 py-2 rounded-md transition-colors duration-300 font-medium">
          {new Date(match.date) > new Date() ? 'Buy Tickets' : 'Match Details'}
        </button>
      </div>
    </motion.div>
  );
};

export default MatchCard;