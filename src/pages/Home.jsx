import React from 'react';
import Hero from '../components/layout/Hero';
import DestinationCard from '../components/cards/DestinationCard';
import PackageCard from '../components/cards/PackageCard';
import PostCard from '../components/cards/PostCard';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const Home = () => {
  // Dummy data for featured destinations
  const featuredDestinations = [
    {
      id: 1,
      name: "Bamiyan Valley",
      description: "Home to the ancient Buddha statues and stunning mountain landscapes.",
      image: "/images/destination1.jpg",
      price: 299,
      region: "Bamiyan"
    },
    {
      id: 2,
      name: "Band-e-Amir",
      description: "Afghanistan's first national park with stunning turquoise lakes.",
      image: "/images/destination2.jpg",
      price: 199,
      region: "Bamiyan"
    },
    {
      id: 3,
      name: "Herat Citadel",
      description: "Historic fortress showcasing Afghan architecture and history.",
      image: "/images/destination3.jpg",
      price: 149,
      region: "Herat"
    }
  ];

  // Dummy data for top packages
  const topPackages = [
    {
      id: 1,
      name: "Cultural Heritage Tour",
      description: "Explore the ancient cities and cultural sites of Afghanistan.",
      image: "/images/package1.jpg",
      price: 899,
      duration: "7 days",
      rating: 5
    },
    {
      id: 2,
      name: "Mountain Adventure",
      description: "Hiking and trekking through the beautiful Hindu Kush mountains.",
      image: "/images/package2.jpg",
      price: 1299,
      duration: "10 days",
      rating: 4
    },
    {
      id: 3,
      name: "Desert Exploration",
      description: "Discover the unique desert landscapes of southern Afghanistan.",
      image: "/images/package3.jpg",
      price: 699,
      duration: "5 days",
      rating: 4
    }
  ];

  // Dummy data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "The Hidden Gems of Afghanistan",
      excerpt: "Discover the lesser-known but breathtaking destinations that make Afghanistan truly special.",
      image: "/images/blog1.jpg",
      date: "May 15, 2023",
      author: "Ahmad Rahman"
    },
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
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Destinations */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the most beautiful and historically significant places in Afghanistan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/destinations" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View All Destinations
            </a>
          </div>
        </div>
      </section>
      
      {/* Top Packages */}
      <section className="py-16 bg-gray-100" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Top Tour Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Curated experiences for unforgettable journeys through Afghanistan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topPackages.map((tourPackage) => (
              <PackageCard key={tourPackage.id} tourPackage={tourPackage} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/packages" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View All Packages
            </a>
          </div>
        </div>
      </section>
      
      {/* Why Visit Afghanistan */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Visit Afghanistan?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the unique beauty and rich heritage of our nation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Rich Culture</h3>
              <p className="text-gray-600">
                Immerse yourself in thousands of years of history and tradition
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Historic Sites</h3>
              <p className="text-gray-600">
                Explore ancient cities, monuments, and archaeological wonders
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Natural Beauty</h3>
              <p className="text-gray-600">
                Breathtaking landscapes from mountains to deserts to pristine lakes
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Warm Hospitality</h3>
              <p className="text-gray-600">
                Experience the legendary Afghan hospitality and kindness
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-100" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Traveler Experiences</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from visitors who have discovered the beauty of Afghanistan
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Sarah Johnson</h4>
                  <p className="text-gray-600">Travel Blogger</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Afghanistan exceeded all my expectations. The landscapes are breathtaking, 
                the people are incredibly welcoming, and the history is fascinating. 
                This is a destination that deserves to be on every traveler's bucket list."
              </p>
              <div className="flex text-yellow-500 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Latest from our Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stories, tips, and insights from Afghanistan and its travelers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/blog" 
              className="inline-block bg-gray-800 hover:bg-black text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View All Articles
            </a>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-green-600 text-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-green-100 mb-8">
              Subscribe to our newsletter for the latest travel tips, special offers, and destination guides
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;