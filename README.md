# 🎀 Sanrio Premium Online Store

**Premium, Scalable, Multi-language E-commerce Platform for Sanrio Products**

A production-ready, fully configurable online store built with React and Node.js, designed to sell Sanrio products with an emphasis on beautiful UI/UX, plugin architecture, and seamless user experience.

## ✨ Features

- 🛍️ **Complete E-commerce Functionality** - Products, Cart, Checkout, Orders
- 🎨 **Premium UI/UX** - Pastel colors, smooth animations, responsive design
- 🌍 **Multi-language Support** - Spanish, English, and more
- 🎬 **Video Integration** - Product unboxing videos with gamification
- 🎰 **Random Product Mechanics** - Gamified shopping experience
- 🔌 **Plugin Architecture** - Galleries, Videos, Offers, Coupons, Blogs, Tracking
- ⚙️ **100% Configurable** - JSON-based configuration system
- 📱 **Fully Responsive** - Mobile-first design
- 🔐 **Secure** - JWT authentication, encrypted payments
- 📊 **Analytics** - Product tracking, user behavior
- ⚡ **Performance** - Optimized, fast loading, caching

## 📁 Project Structure

```
sanrio-store/
├── frontend/              # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   ├── services/      # API & utilities
│   │   ├── store/         # State management
│   │   ├── config/        # JSON catalogs
│   │   ├── styles/        # Global styles
│   │   └── App.tsx
│   └── package.json
├── backend/               # Express + Node.js + PostgreSQL
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── controllers/   # Business logic
│   │   ├── models/        # Database models
│   │   ├── middleware/    # Auth, validation
│   │   ├── plugins/       # Plugin system
│   │   ├── config/        # Configuration
│   │   └── app.ts
│   └── package.json
├── shared/                # Shared types & utilities
│   ├── types.ts
│   └── package.json
├── package.json           # Root workspace config
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm 9+
- PostgreSQL (for production)

### Installation

```bash
# Clone repository
git clone <repo-url>
cd sanrio-store

# Install dependencies
npm install

# Start development servers
npm run dev

# Frontend: http://localhost:5173
# Backend: http://localhost:3000
```

### Development Commands

```bash
npm run dev              # Start all services
npm run dev:frontend    # Frontend only
npm run dev:backend     # Backend only
npm run build           # Build all
npm run test            # Run tests
npm run lint            # Lint code
```

## 🛠️ Tech Stack

**Frontend:**
- React 18+ with TypeScript
- Vite (ultra-fast build tool)
- Tailwind CSS (utility-first styling)
- React Router (navigation)
- Zustand (state management)
- Axios (HTTP client)
- React Query (data fetching)
- Framer Motion (animations)

**Backend:**
- Express.js
- PostgreSQL + Prisma ORM
- JWT (authentication)
- Zod (validation)
- Socket.io (real-time features)

**Development:**
- ESLint + Prettier
- Jest (testing)
- TypeScript
- Git hooks (Husky)

## 📦 Plugin System

Extensible plugin architecture supporting:
- 🖼️ Product Galleries
- 🎬 Video Integration
- 🎁 Offers & Promotions
- 🎟️ Coupon System
- 📝 Blog Integration
- 📊 Product Tracking
- 🎰 Gamification
- And more...

## ⚙️ Configuration

All configurations are JSON-based:
- `menus.json` - Navigation structure
- `theme.json` - Colors, typography, spacing
- `locales/` - Multi-language translations
- `plugins.json` - Active plugins
- `products.json` - Product catalog

## 🌐 Multi-language Support

Currently supported:
- 🇲🇽 Spanish (es-MX)
- 🇺🇸 English (en-US)

Easy to add more languages via locale files.

## 🔒 Security

- JWT token-based authentication
- Password hashing with bcrypt
- CORS protection
- Rate limiting
- Input validation with Zod
- SQL injection protection (Prisma ORM)
- HTTPS ready

## 📊 Performance

- Lazy loading for images
- Code splitting
- Caching strategies
- Optimized bundle size
- Database query optimization
- CDN-ready

## 🎨 Design Philosophy

- **Sanrio Brand Colors**: Soft pastels (#FFB6E1, #FFE4E1, #E0FFFF, etc.)
- **Smooth Animations**: Micro-interactions with Framer Motion
- **Accessibility**: WCAG 2.1 AA compliant
- **User-Centric**: Every feature prioritizes UX
- **Premium Feel**: Elegant typography and spacing

## 📝 License

MIT License - Feel free to use and modify for your projects

## 🤝 Contributing

Contributions welcome! Please follow our code style guidelines.

## 📞 Support

For issues and questions, please create an issue in the repository.

---

**Created with ❤️ for Sanrio lovers**
