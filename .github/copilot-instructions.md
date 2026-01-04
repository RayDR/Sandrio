# Sanrio Store - Development Guidelines

## Project Overview
Premium, scalable multi-language Sanrio e-commerce platform with React frontend and Node.js backend.

## Stack
- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS
- **Backend**: Express.js + PostgreSQL + Prisma
- **Package Manager**: npm workspaces (monorepo)

## Key Principles
1. **Modularity** - Reusable components and services
2. **Scalability** - Plugin architecture for extensibility
3. **Configuration-Driven** - JSON-based configs over hardcoding
4. **User-Centric** - Premium UX with smooth animations
5. **Type-Safe** - Full TypeScript throughout
6. **Multi-language** - i18n support from the start

## Color Palette (Sanrio-Inspired Pastels)
- Primary: #FFB6E1 (Pink)
- Secondary: #FFE4E1 (Light Pink)
- Accent: #E0FFFF (Light Cyan)
- Neutral: #F5F5F5 (Off-white)
- Text: #333333 (Dark Gray)

## Development Workflow
1. Create feature branches from main
2. Follow TypeScript strict mode
3. Write tests for critical paths
4. Use Prettier + ESLint for code style
5. Commit messages: conventional commits

## Important Notes
- JSON catalogs in frontend avoid constant API calls for menus
- Plugin system should be extensible without core changes
- All API endpoints must support multi-language responses
- Components should be mobile-first responsive
