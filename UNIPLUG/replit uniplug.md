# UniPlug Website

## Overview
UniPlug is a campus marketplace React application that connects students with local vendors for food, fashion, gadgets, services and more. The website features a modern design with gradient backgrounds and Tailwind CSS styling.

## Recent Changes (Sept 25, 2025)
- Fixed nested src/src directory structure
- Added complete React project configuration with package.json
- Installed Node.js 20 and all dependencies
- Configured Tailwind CSS for styling
- Set up development server to work in Replit environment (host: 0.0.0.0, port: 5000, disabled host checking)
- Configured deployment settings for autoscale deployment
- Frontend server workflow configured and running successfully

## Project Architecture
- **Frontend**: React 18.2.0 with Create React App
- **Styling**: Tailwind CSS 3.1.6 with PostCSS and Autoprefixer
- **Build System**: React Scripts 5.0.1
- **Deployment**: Autoscale deployment with static file serving via 'serve'

## Key Files
- `src/App.js`: Main React application component
- `src/Home.jsx`: Main landing page component with all sections
- `src/index.js`: React entry point with CSS imports
- `src/index.css`: Tailwind CSS imports
- `package.json`: Dependencies and scripts configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS configuration for Tailwind

## Current State
- Development server running on port 5000
- Website fully functional with all sections rendered
- Ready for deployment to production