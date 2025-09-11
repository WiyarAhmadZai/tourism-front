import React, { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Dummy user data
  const user = {
    name: "Ahmad Farhad",
    email: "ahmad.farhad@example.com",
    phone: "+93 776 992 603",
    joinDate: "January 15, 2023",
    avatar: "/images/user-avatar.jpg"
  };
  
  // Dummy booking data
  const bookings = [
    {
      id: 1,
      packageName: "Cultural Heritage Tour",
      destination: "Kabul, Herat, Bamiyan",
      date: "June 15, 2023",
      status: "Completed",
      price: 899
    },
    {
      id: 2,
      packageName: "Mountain Adventure",
      destination: "Hindu Kush Mountains",
      date: "July 22, 2023",
      status: "Upcoming",
      price: 1299
    },
    {
      id: 3,
      packageName: "Desert Exploration",
      destination: "Southern Afghanistan",
      date: "August 5, 2023",
      status: "Cancelled",
      price: 699
    }
  ];
  
  // Dummy cart items
  const cartItems = [
    {
      id: 1,
      name: "Jewels of the Silk Road",
      price: 1099,
      duration: "8 days"
    },
    {
      id: 2,
      name: "Northern Circuit",
      price: 799,
      duration: "6 days"
    }
  ];
  
  // Dummy notifications
  const notifications = [
    {
      id: 1,
      title: "Booking Confirmation",
      message: "Your booking for the Cultural Heritage Tour has been confirmed.",
      date: "May 20, 2023",
      unread: false
    },
    {
      id: 2,
      title: "Special Offer",
      message: "Get 15% off on your next booking with code WELCOME15.",
      date: "June 1, 2023",
      unread: true
    },
    {
      id: 3,
      title: "Payment Reminder",
      message: "Your payment for the Mountain Adventure tour is due in 3 days.",
      date: "July 19, 2023",
      unread: true
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-64 flex items-center justify-center overflow-hidden bg-gray-800">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold text-white mb-4">My Profile</h1>
          <p className="text-xl text-gray-200">Manage your account and travel information</p>
        </div>
      </div>
      
      {/* Profile Content */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="mx-auto mb-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 mx-auto" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                  <p className="text-gray-600">Member since {user.joinDate}</p>
                </div>
                
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'profile' 
                        ? 'bg-green-100 text-green-800 font-medium' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Profile Information
                  </button>
                  <button
                    onClick={() => setActiveTab('bookings')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'bookings' 
                        ? 'bg-green-100 text-green-800 font-medium' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    My Bookings
                  </button>
                  <button
                    onClick={() => setActiveTab('cart')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'cart' 
                        ? 'bg-green-100 text-green-800 font-medium' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    My Cart
                  </button>
                  <button
                    onClick={() => setActiveTab('notifications')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex justify-between items-center ${
                      activeTab === 'notifications' 
                        ? 'bg-green-100 text-green-800 font-medium' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>Notifications</span>
                    <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {notifications.filter(n => n.unread).length}
                    </span>
                  </button>
                </nav>
                
                <button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                  Logout
                </button>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:w-3/4">
              {activeTab === 'profile' && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue={user.name}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        defaultValue={user.email}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        defaultValue={user.phone}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                    </div>
                  </div>
                  
                  <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    Update Profile
                  </button>
                </div>
              )}
              
              {activeTab === 'bookings' && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">My Bookings</h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4">Package</th>
                          <th className="text-left py-3 px-4">Destination</th>
                          <th className="text-left py-3 px-4">Date</th>
                          <th className="text-left py-3 px-4">Price</th>
                          <th className="text-left py-3 px-4">Status</th>
                          <th className="text-left py-3 px-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookings.map((booking) => (
                          <tr key={booking.id} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="py-4 px-4">
                              <div className="font-medium text-gray-800">{booking.packageName}</div>
                            </td>
                            <td className="py-4 px-4 text-gray-600">{booking.destination}</td>
                            <td className="py-4 px-4 text-gray-600">{booking.date}</td>
                            <td className="py-4 px-4 font-medium text-gray-800">${booking.price}</td>
                            <td className="py-4 px-4">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                booking.status === 'Completed' 
                                  ? 'bg-green-100 text-green-800' 
                                  : booking.status === 'Upcoming' 
                                    ? 'bg-blue-100 text-blue-800' 
                                    : 'bg-red-100 text-red-800'
                              }`}>
                                {booking.status}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <button className="text-green-600 hover:text-green-800 mr-3">
                                View
                              </button>
                              {booking.status === 'Upcoming' && (
                                <button className="text-red-600 hover:text-red-800">
                                  Cancel
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              {activeTab === 'cart' && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">My Cart</h2>
                  
                  {cartItems.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h3>
                      <p className="text-gray-600 mb-6">Start adding tour packages to your cart</p>
                      <a 
                        href="/packages" 
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                      >
                        Browse Packages
                      </a>
                    </div>
                  ) : (
                    <div>
                      <div className="space-y-4 mb-8">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center border border-gray-200 rounded-lg p-4">
                            <div className="flex-grow">
                              <h3 className="font-bold text-gray-800">{item.name}</h3>
                              <p className="text-gray-600 text-sm">{item.duration}</p>
                            </div>
                            <div className="font-bold text-gray-800 mr-6">${item.price}</div>
                            <button className="text-red-600 hover:text-red-800">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t border-gray-200 pt-6">
                        <div className="flex justify-between mb-4">
                          <span className="text-gray-600">Subtotal</span>
                          <span className="font-medium">${cartItems.reduce((sum, item) => sum + item.price, 0)}</span>
                        </div>
                        <div className="flex justify-between mb-4">
                          <span className="text-gray-600">Service Fee</span>
                          <span className="font-medium">$49</span>
                        </div>
                        <div className="flex justify-between text-xl font-bold mb-6">
                          <span>Total</span>
                          <span>${cartItems.reduce((sum, item) => sum + item.price, 0) + 49}</span>
                        </div>
                        <div className="flex space-x-4">
                          <button className="flex-grow bg-gray-800 hover:bg-black text-white font-bold py-3 px-4 rounded-lg transition-colors">
                            Continue Shopping
                          </button>
                          <button className="flex-grow bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                            Proceed to Checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'notifications' && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Notifications</h2>
                  
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`border border-gray-200 rounded-lg p-4 ${
                          notification.unread ? 'bg-blue-50 border-blue-200' : 'bg-white'
                        }`}
                      >
                        <div className="flex justify-between">
                          <h3 className="font-bold text-gray-800">{notification.title}</h3>
                          <span className="text-gray-500 text-sm">{notification.date}</span>
                        </div>
                        <p className="text-gray-600 mt-2">{notification.message}</p>
                        {notification.unread && (
                          <div className="mt-3">
                            <button className="text-sm text-green-600 hover:text-green-800 font-medium">
                              Mark as read
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;