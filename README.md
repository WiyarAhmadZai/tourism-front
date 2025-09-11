# Tourism Frontend (React SPA)

This is the frontend for the Afghanistan Tourism website, built with React and Tailwind CSS.

## Features

- Responsive design with Tailwind CSS
- User authentication (login/register)
- Interactive UI components
- API integration with Laravel backend
- Animations with AOS (Animate On Scroll)

## Tech Stack

- React 18+
- Vite
- Tailwind CSS
- Axios for API calls
- React Router for navigation
- AOS for scroll animations

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd tourism-front
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

## Project Structure

```
src/
├── assets/          # Images, videos, and other static assets
├── components/      # Reusable UI components
├── pages/           # Page components
├── routes/          # Routing configuration
├── services/        # API services and utilities
├── App.jsx          # Main App component
└── index.jsx        # Entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).