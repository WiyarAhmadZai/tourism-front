# React with Tailwind CSS

This project was set up with React and Tailwind CSS.

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Open your browser to http://localhost:5173 (or the port shown in the terminal)

## Project Structure

- `src/App.jsx` - Main React component
- `src/index.jsx` - Entry point
- `src/index.css` - Tailwind CSS directives
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `vite.config.js` - Vite configuration

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run preview` - Previews the production build locally

## Troubleshooting

If you encounter the PostCSS plugin error, make sure you're using `@tailwindcss/postcss` instead of the older `tailwindcss` package.

The project is configured to use ES modules, so make sure your Node.js version supports ES modules.