import React from 'react';
import { Play, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Video } from '../../types';

interface VideoCardProps {
  video: Video;
  index: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, index }) => {
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
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
      className="bg-dark-400 rounded-lg overflow-hidden shadow-lg border border-dark-300 group"
    >
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-dark-500 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            href={video.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary rounded-full p-3 transform transition-transform duration-300 hover:scale-110"
          >
            <Play className="text-light-500" size={24} />
          </a>
        </div>
        <div className="absolute top-2 right-2 bg-primary text-light-500 text-xs py-1 px-2 rounded-md">
          {video.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold font-montserrat text-light-500 mb-2 line-clamp-2">
          {video.title}
        </h3>
        <p className="text-light-300 text-sm mb-4 line-clamp-2">{video.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-light-400 text-sm">
            <Calendar size={14} className="mr-1" />
            <span>{formatDate(video.date)}</span>
          </div>
          <a 
            href={video.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:text-primary-400 text-sm font-medium transition-colors duration-300"
          >
            Watch Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;