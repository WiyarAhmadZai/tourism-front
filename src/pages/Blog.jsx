import React, { useState } from 'react';
import PostCard from '../components/cards/PostCard';
import { motion } from 'framer-motion';

const Blog = () => {
  // Dummy data for blog posts
  const allPosts = [
    {
      id: 1,
      title: "The Hidden Gems of Afghanistan",
      excerpt: "Discover the lesser-known but breathtaking destinations that make Afghanistan truly special. From remote mountain villages to ancient archaeological sites, Afghanistan has much more to offer than most people realize.",
      image: "/images/blog1.jpg",
      date: "May 15, 2023",
      author: "Ahmad Rahman",
      category: "Destinations",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Afghan Cuisine: A Culinary Journey",
      excerpt: "Explore the rich flavors and traditional dishes that define Afghan culture. From aromatic rice dishes to hearty breads and sweet desserts, Afghan cuisine reflects the country's diverse cultural heritage.",
      image: "/images/blog2.jpg",
      date: "June 2, 2023",
      author: "Fatima Azizi",
      category: "Culture",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Responsible Tourism in Afghanistan",
      excerpt: "How visitors can contribute positively to local communities and preservation efforts. Learn about sustainable travel practices that help protect Afghanistan's natural and cultural heritage.",
      image: "/images/blog3.jpg",
      date: "June 20, 2023",
      author: "Mohammad Yusuf",
      category: "Sustainability",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Silk Road: Afghanistan's Historic Trade Route",
      excerpt: "Explore the ancient trade networks that connected East and West through Afghanistan. Discover how these routes shaped the country's culture, economy, and architecture.",
      image: "/images/blog4.jpg",
      date: "July 5, 2023",
      author: "Zahra Khan",
      category: "History",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Winter in the Hindu Kush",
      excerpt: "Experience Afghanistan's stunning winter landscapes and the unique challenges and beauty of traveling in the mountains during the colder months.",
      image: "/images/blog5.jpg",
      date: "July 18, 2023",
      author: "Ali Hussaini",
      category: "Adventure",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Traditional Afghan Crafts",
      excerpt: "Discover the rich tradition of Afghan handicrafts, from intricate carpets to beautiful pottery and jewelry. Learn about the artisans keeping these traditions alive.",
      image: "/images/blog6.jpg",
      date: "August 1, 2023",
      author: "Saira Mohammadi",
      category: "Culture",
      readTime: "5 min read"
    }
  ];

  const [posts] = useState(allPosts);
  const [filteredPosts, setFilteredPosts] = useState(allPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Get unique categories for filter
  const categories = [...new Set(allPosts.map(post => post.category))];

  // Filter posts based on search and category
  const filterPosts = () => {
    let result = allPosts;
    
    if (searchTerm) {
      result = result.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      result = result.filter(post => post.category === selectedCategory);
    }
    
    setFilteredPosts(result);
    setCurrentPage(1); // Reset to first page when filtering
  };

  // Apply filters when search term or category changes
  React.useEffect(() => {
    filterPosts();
  }, [searchTerm, selectedCategory]);

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.div 
        className="relative h-96 flex items-center justify-center overflow-hidden bg-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Travel Blog
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Stories, tips, and insights from Afghanistan and its travelers
          </motion.p>
        </div>
      </motion.div>
      
      {/* Filter Section */}
      <motion.section 
        className="py-8 bg-gray-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <motion.div
              className="flex-grow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>
            <motion.div
              className="w-full md:w-64"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <motion.option 
                    key={category} 
                    value={category}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {category}
                  </motion.option>
                ))}
              </select>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Blog Posts Grid */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <PostCard post={post} />
                  </motion.div>
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div 
                  className="flex justify-center mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <nav className="flex items-center space-x-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === 1 
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Previous
                    </button>
                    
                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`w-10 h-10 rounded-full ${
                            currentPage === pageNumber
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === totalPages 
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Next
                    </button>
                  </nav>
                </motion.div>
              )}
            </>
          )}
        </div>
      </motion.section>
      
      {/* Featured Categories */}
      <motion.section 
        className="py-16 bg-gray-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our blog by different topics and interests
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Destinations",
                description: "Discover hidden gems and popular travel spots across Afghanistan",
                image: "/images/category-destinations.jpg",
                count: "18 articles"
              },
              {
                title: "Culture",
                description: "Learn about Afghan traditions, festivals, and way of life",
                image: "/images/category-culture.jpg",
                count: "15 articles"
              },
              {
                title: "Adventure",
                description: "Experience thrilling outdoor activities and expeditions",
                image: "/images/category-adventure.jpg",
                count: "12 articles"
              }
            ].map((category, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 relative">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">{category.count}</span>
                    <button 
                      onClick={() => setSelectedCategory(category.title)}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Read Articles
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;