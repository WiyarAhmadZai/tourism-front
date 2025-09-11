import axios from 'axios';

// Create an axios instance
const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Add a request interceptor to include the token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle token storage
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid, remove token and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth functions
export const login = (credentials) => api.post('/login', credentials);
export const register = (userData) => api.post('/register', userData);
export const logout = () => api.post('/logout');

// Destination functions
export const getDestinations = (params) => api.get('/destinations', { params });
export const getDestination = (id) => api.get(`/destinations/${id}`);

// Tour Package functions
export const getPackages = (params) => api.get('/tour-packages', { params });
export const getPackage = (id) => api.get(`/tour-packages/${id}`);

// Blog functions
export const getBlogPosts = (params) => api.get('/blog-posts', { params });
export const getBlogPost = (id) => api.get(`/blog-posts/${id}`);

// Booking functions
export const getBookings = () => api.get('/bookings');
export const createBooking = (bookingData) => api.post('/bookings', bookingData);
export const cancelBooking = (id) => api.delete(`/bookings/${id}`);

// Cart functions
export const getCart = () => api.get('/cart');
export const addToCart = (item) => api.post('/cart', item);
export const removeFromCart = (id) => api.delete(`/cart/${id}`);
export const clearCart = () => api.delete('/cart');

// Contact functions
export const sendMessage = (messageData) => api.post('/contact', messageData);

// User functions
export const getUserProfile = () => api.get('/user');
export const updateUserProfile = (userData) => api.put('/user', userData);

export default api;