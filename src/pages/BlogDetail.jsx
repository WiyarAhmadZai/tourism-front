import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogDetail = () => {
  const { id } = useParams();
  
  // Dummy data for blog post
  const post = {
    id: id || 1,
    title: "The Hidden Gems of Afghanistan",
    excerpt: "Discover the lesser-known but breathtaking destinations that make Afghanistan truly special.",
    content: `
      <p>Afghanistan is a country of remarkable beauty and rich cultural heritage, yet many of its most stunning destinations remain hidden from the typical tourist trail. Beyond the well-known sites like the Bamiyan Buddhas and the Blue Mosque, Afghanistan harbors countless hidden gems waiting to be discovered by adventurous travelers.</p>
      
      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">The Enchanting Valley of Kalasha</h2>
      <p>Nestled in the Hindu Kush mountains of northern Pakistan, near the Afghan border, lies the Kalasha Valley, home to the Kalash people - an ancient community that has preserved its unique animist traditions despite centuries of Islamic influence in the region. The valley is a living museum of pre-Islamic culture, with colorful festivals, traditional wooden houses, and terraced fields that create a picturesque landscape.</p>
      
      <p>The Kalash celebrate three major festivals each year - Chilam Joshi in May, Uchau in August, and Chaumos in December - each marked by elaborate rituals, traditional music, and dancing. During these celebrations, the entire valley comes alive with vibrant costumes and ancient customs that have been passed down through generations.</p>
      
      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">The Turquoise Lakes of Band-e-Amir</h2>
      <p>Afghanistan's first national park, Band-e-Amir, is a natural wonder that showcases the country's geological diversity. The park features six stunning lakes separated by natural travertine dams, creating a series of turquoise pools that reflect the surrounding mountains like mirrors. The mineral-rich waters have carved spectacular limestone formations over thousands of years, resulting in a landscape that rivals any in the world.</p>
      
      <p>Located in the Bamyan Province, Band-e-Amir is accessible via a scenic drive from the provincial capital. The best time to visit is during spring and early summer when the weather is pleasant and the lakes are at their most vibrant.</p>
      
      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">The Ancient Minaret of Jam</h2>
      <p>Standing 65 meters tall on the banks of the Hari River in the Ghor Province, the Minaret of Jam is a UNESCO World Heritage site and one of Afghanistan's most remarkable architectural achievements. Built in the 12th century during the reign of the Ghurid dynasty, the minaret is adorned with intricate geometric patterns and Kufic inscriptions that have survived centuries of exposure to the elements.</p>
      
      <p>The remote location of the minaret, accessible only by a challenging journey through mountainous terrain, has helped preserve this masterpiece of Islamic architecture. Archaeological excavations in the area have revealed the remains of an ancient city that once thrived here, adding to the historical significance of the site.</p>
      
      <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">Preserving Afghanistan's Hidden Treasures</h2>
      <p>As Afghanistan continues to rebuild and open up to the world, it's crucial that these hidden gems are protected for future generations. Responsible tourism can play a vital role in this preservation effort, providing economic incentives for local communities to maintain these sites while sharing their cultural heritage with visitors.</p>
      
      <p>Travelers interested in exploring these destinations should work with reputable local guides who understand the cultural sensitivities and logistical challenges of visiting these remote locations. By approaching these experiences with respect and humility, visitors can contribute to the preservation of Afghanistan's incredible cultural and natural heritage.</p>
    `,
    image: "/images/blog-detail1.jpg",
    date: "May 15, 2023",
    author: {
      name: "Ahmad Rahman",
      bio: "Ahmad is a travel writer and photographer with a passion for uncovering hidden destinations in Afghanistan. He has been documenting the country's cultural heritage for over a decade.",
      avatar: "/images/author1.jpg"
    },
    category: "Destinations",
    readTime: "5 min read",
    tags: ["Hidden Gems", "Culture", "Adventure", "History"]
  };

  // Dummy data for related posts
  const relatedPosts = [
    {
      id: 2,
      title: "Afghan Cuisine: A Culinary Journey",
      excerpt: "Explore the rich flavors and traditional dishes that define Afghan culture.",
      image: "/images/blog2.jpg",
      date: "June 2, 2023",
      author: "Fatima Azizi"
    },
    {
      id: 3,
      title: "Responsible Tourism in Afghanistan",
      excerpt: "How visitors can contribute positively to local communities and preservation efforts.",
      image: "/images/blog3.jpg",
      date: "June 20, 2023",
      author: "Mohammad Yusuf"
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <motion.div 
        className="relative h-96 md:h-[500px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <motion.span 
                className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {post.category}
              </motion.span>
              <motion.h1 
                className="text-3xl md:text-5xl font-bold text-white mt-4 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {post.title}
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {post.excerpt}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Content Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <motion.div 
                className="flex items-center text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <motion.img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-12 h-12 rounded-full mr-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                  <div>
                    <div className="font-bold text-gray-800">{post.author.name}</div>
                    <div className="text-sm">{post.date} · {post.readTime}</div>
                  </div>
                </div>
                <div className="ml-auto flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-green-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-green-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-green-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              ></motion.div>
              
              <motion.div 
                className="mt-12 pt-8 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <motion.span 
                      key={index} 
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <motion.div 
                className="bg-gray-50 rounded-lg p-6 sticky top-24"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">About the Author</h3>
                
                <div className="flex items-center mb-4">
                  <motion.img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-16 h-16 rounded-full mr-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                  <div>
                    <div className="font-bold text-gray-800">{post.author.name}</div>
                    <div className="text-gray-600 text-sm">{post.date}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{post.author.bio}</p>
                
                <a 
                  href="/blog" 
                  className="inline-block bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  View All Articles
                </a>
              </motion.div>
              
              {/* Related Posts */}
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost, index) => (
                    <motion.div 
                      key={relatedPost.id} 
                      className="border border-gray-200 rounded-lg overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex">
                        <div className="w-24 h-24">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-3 flex-grow">
                          <h4 className="font-bold text-gray-800 text-sm line-clamp-2">{relatedPost.title}</h4>
                          <div className="flex items-center mt-2 text-gray-500 text-xs">
                            <span>{relatedPost.author}</span>
                            <span className="mx-2">•</span>
                            <span>{relatedPost.date}</span>
                          </div>
                          <a 
                            href={`/blog/${relatedPost.id}`} 
                            className="text-green-600 hover:text-green-800 text-sm font-medium mt-2 inline-block"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogDetail;