# Afghanistan Tourism Website - Frontend

A modern, responsive React application for promoting tourism in Afghanistan with beautiful animations and a comprehensive set of features.

## Tech Stack

- **Framework**: React 18+ with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **Animations**: AOS (Animate On Scroll) and Framer Motion
- **State Management**: React Context API
- **API Calls**: Axios
- **Fonts**: Playfair Display, Merriweather, Inter, Poppins

## Project Structure

```
tourism-frontend/
├─ public/
│  ├─ images/ (static images)
│  └─ videos/ (hero and gallery videos)
├─ src/
│  ├─ assets/ (fallback local assets, icons, svgs)
│  ├─ components/
│  │  ├─ layout/
│  │  │   ├─ HeaderFooter.jsx
│  │  │   └─ Hero.jsx
│  │  ├─ cards/
│  │  │   ├─ DestinationCard.jsx
│  │  │   ├─ PackageCard.jsx
│  │  │   └─ PostCard.jsx
│  │  └─ ui/ (buttons, modals, etc.)
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Explore.jsx
│  │  ├─ Destinations.jsx
│  │  ├─ DestinationDetail.jsx
│  │  ├─ Packages.jsx
│  │  ├─ PackageDetail.jsx
│  │  ├─ Gallery.jsx
│  │  ├─ Blog.jsx
│  │  ├─ BlogDetail.jsx
│  │  ├─ About.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Profile.jsx
│  │  ├─ Login.jsx
│  │  └─ Register.jsx
│  ├─ routes/
│  │  └─ AppRoutes.jsx
│  ├─ services/
│  │  └─ api.js
│  ├─ context/
│  │  ├─ AuthContext.jsx
│  │  └─ CartContext.jsx
│  ├─ App.jsx
│  └─ main.jsx
├─ tailwind.config.js
├─ vite.config.js
├─ package.json
└─ README.md
```

## Features

### Core Components
- **Header & Footer**: Combined in a single file with responsive navigation
- **Hero Section**: Full-width video background with animated text
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Pages
1. **Home**: Featured destinations, top packages, testimonials, and newsletter signup
2. **Explore**: Interactive map of Afghan provinces
3. **Destinations**: Filterable grid of destinations with pagination
4. **Destination Detail**: Comprehensive information with gallery and visitor info
5. **Packages**: Filterable tour packages with detailed information
6. **Package Detail**: Itinerary, pricing, and booking options
7. **Gallery**: Photo and video gallery with lightbox
8. **Blog**: Article listing with categories and search
9. **Blog Detail**: Full article view with related posts
10. **About**: Company information, values, and team
11. **Contact**: Contact form with multiple communication options
12. **Profile**: User dashboard with bookings, cart, and notifications
13. **Login/Register**: Authentication pages

### Animations & UX
- **AOS Scroll Animations**: For section transitions
- **Framer Motion**: For hero text and interactive elements
- **Hover Effects**: Scale-up and shadow effects on cards
- **Smooth Scrolling**: For navigation links

### API Integration
- **Axios Setup**: Configured with Sanctum authentication
- **Helper Functions**: Pre-built functions for all API endpoints
- **Context Providers**: Auth and Cart context for state management

## Color Palette

- **Primary Green**: #2E7D32 (nature, peace)
- **Secondary Blue**: #1565C0 (trust, sky, lakes)
- **Accent Gold**: #D4AF37 (heritage, tradition)
- **Background**: #F9FAFB

## Typography

- **Headlines**: Playfair Display / Merriweather (serif, elegant)
- **Body**: Inter / Poppins (sans-serif, clean)

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

## Media Assets

Place all static images in `public/images/` and videos in `public/videos/`. The application expects:
- `public/images/logo.png` for the site logo
- `public/videos/hero.mp4` for the hero section background
- `public/images/map.png` for the interactive map

## Environment Variables

Create a `.env` file in the root directory with the following variables:
```
VITE_API_BASE_URL=http://localhost:8000/api
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.