import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/ui/BlogCard';
import { blogPosts } from '../data/blogData';

const Blog: React.FC = () => {
  // Group blog posts by category
  const postsByCategory: Record<string, typeof blogPosts> = {};
  
  blogPosts.forEach(post => {
    if (!postsByCategory[post.category]) {
      postsByCategory[post.category] = [];
    }
    postsByCategory[post.category].push(post);
  });

  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Get latest post for featured
  const featuredPost = sortedPosts[0];
  
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative py-16 bg-dark-500 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/90 via-dark-500/90 to-dark-500"></div>
          <div 
            className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3811867/pexels-photo-3811867.jpeg')]"
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
              TonnyBall <span className="text-primary">Blog</span>
            </h1>
            <p className="text-light-300 text-lg mb-8">
              Dive deeper into the world of football with our insightful articles, analysis, and stories.
              Stay updated with the latest trends, predictions, and behind-the-scenes content.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Post Section */}
      <section className="py-12 bg-dark-400">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold font-montserrat mb-8 text-light-500">
            Featured <span className="text-primary">Article</span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-500 rounded-lg overflow-hidden shadow-lg border border-dark-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img 
                  src={featuredPost.thumbnail} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="bg-primary text-light-500 text-xs py-1 px-2 rounded-md">
                      {featuredPost.category}
                    </span>
                    <span className="text-light-400 text-sm ml-3">
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-montserrat text-light-500 mb-3">
                    {featuredPost.title}
                  </h3>
                  <p className="text-light-300 mb-4">
                    {featuredPost.excerpt}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-light-400">By {featuredPost.author}</span>
                  <a 
                    href={`/blog/${featuredPost.id}`}
                    className="bg-primary hover:bg-primary-600 text-light-500 px-4 py-2 rounded-md transition-colors duration-300"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Articles by Category */}
      <section className="py-12 bg-dark-500">
        <div className="container mx-auto px-4">
          {Object.entries(postsByCategory).map(([category, posts]) => (
            <div key={category} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold font-montserrat mb-6 text-light-500">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;