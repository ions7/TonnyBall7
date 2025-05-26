import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
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
      className="bg-dark-400 rounded-lg overflow-hidden shadow-lg border border-dark-300 group h-full flex flex-col"
    >
      <div className="relative">
        <img 
          src={post.thumbnail} 
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-primary text-light-500 text-xs py-1 px-2 rounded-md">
          {post.category}
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold font-montserrat text-light-500 mb-2">
          {post.title}
        </h3>
        <p className="text-light-300 text-sm mb-4 flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center text-light-400 text-sm">
            <Calendar size={14} className="mr-1" />
            <span>{formatDate(post.date)}</span>
          </div>
          <Link 
            to={`/blog/${post.id}`}
            className="text-primary hover:text-primary-400 text-sm font-medium transition-colors duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;