# Portfolio Website Project

## Overview

This is a modern, fully static portfolio website built for Muhammad Sohaib Jameel, a Senior Mobile Application Developer. The project is now converted to Next.js (App Router) with static export capabilities, featuring a dark-themed design with smooth animations and interactive elements. The site is deployable to any static hosting platform like Vercel, GitHub Pages, or Netlify.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern static site architecture with Next.js:

### Frontend Architecture
- **Framework**: Next.js 15 with App Router and TypeScript
- **Export Mode**: Static site generation with `output: 'export'`
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Custom React components with responsive design
- **Images**: Next.js Image component with unoptimized setting for static export
- **Build Tool**: Next.js built-in compiler and bundler

### Static Architecture
- **No Backend**: Fully static site with no server dependencies
- **Assets**: All images, icons, and files served from public directory
- **Deployment**: Ready for static hosting platforms (Vercel, GitHub Pages, Netlify)
- **Development**: Next.js dev server with hot reload

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scroll navigation and active section tracking
2. **Hero Section**: Animated typewriter effect with profile image and call-to-action buttons
3. **About Section**: Personal information with achievement statistics and core expertise
4. **Skills Section**: Horizontal scrolling technology showcase with custom Flutter/Fiverr icons
5. **Projects Section**: Featured mobile apps with app store links and technology stacks
6. **Experience Section**: Professional timeline with detailed achievements and technologies
7. **Contact Section**: Contact information, social media links, and CV download functionality

### UI System
- **Design System**: shadcn/ui components built on Radix UI primitives
- **Theme**: Dark theme with blue/purple accent colors
- **Typography**: Inter font family
- **Icons**: Font Awesome and Lucide React icons
- **Responsive**: Mobile-first responsive design approach

### Backend Components
1. **Server Setup**: Express server with middleware for JSON parsing and logging
2. **Route Registration**: Modular route system with `/api` prefix
3. **Storage Interface**: Abstract storage layer with in-memory implementation
4. **Development Tools**: Vite integration for SSR and hot module replacement

## Data Flow

### Frontend Data Flow
1. React components use React Query for server state management
2. Local state managed with React hooks (useState, useEffect)
3. Form data handled through controlled components
4. Toast notifications for user feedback

### Backend Data Flow
1. Express middleware processes incoming requests
2. Route handlers interact with storage interface
3. Responses formatted as JSON
4. Error handling middleware for consistent error responses

### Development Flow
1. Vite serves the frontend with hot reload
2. Express server handles API routes
3. TypeScript compilation and type checking
4. Automatic browser refresh on changes

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Library**: Radix UI components, shadcn/ui
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Routing**: Wouter
- **Forms**: React Hook Form with Zod validation
- **Utilities**: date-fns, embla-carousel-react

### Backend Dependencies
- **Server**: Express.js
- **Database ORM**: Drizzle ORM with PostgreSQL adapter
- **Database Driver**: Neon Database serverless driver
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution

### Build Dependencies
- **Build Tool**: Vite with React plugin
- **TypeScript**: Full TypeScript setup with strict mode
- **Linting/Formatting**: ESBuild for production builds
- **Replit Integration**: Replit-specific plugins for development

## Deployment Strategy

### Development Environment
- Local development server with Vite hot reload
- Express server with automatic restart on changes
- TypeScript compilation and type checking
- Replit integration for cloud development

### Production Build Process
1. Frontend build with Vite (optimized bundle)
2. Backend build with ESBuild (Node.js bundle)
3. Static assets served from `dist/public`
4. Express server serves API routes and static files

### Database Strategy
- Currently using in-memory storage for development
- Drizzle ORM configured for PostgreSQL
- Database migrations managed through Drizzle Kit
- Schema defined in shared directory for type safety

### Environment Configuration
- Environment variables for database connection
- Separate development and production configurations
- Build scripts for different environments
- Type-safe environment variable handling

The architecture is designed to be scalable and maintainable, with clear separation of concerns and modern development practices. The use of TypeScript throughout ensures type safety, while the component-based architecture allows for easy maintenance and feature additions.