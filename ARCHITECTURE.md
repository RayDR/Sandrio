# Sanrio Store - Arquitectura del Sistema

## 📐 Visión General

Sanrio Store es una **plataforma de e-commerce modular y escalable** diseñada específicamente para vender productos Sanrio con énfasis en:
- UX Premium con colores pasteles
- Gamificación (sorteos de productos)
- Videos de empaque
- Soporte multiidioma (Español/Inglés)
- Sistema de plugins extensible
- 100% configurable via JSON

## 🏗️ Arquitectura de Capas

```
┌─────────────────────────────────────────────────────────┐
│                   Interfaz de Usuario                    │
│              (React Components + Framer Motion)          │
└────────────┬────────────────────────────────┬────────────┘
             │                                │
┌────────────▼─────────────────────┐  ┌─────▼──────────────────┐
│      Frontend Services Layer      │  │   JSON Catalogs        │
│  (API Calls, State Management)    │  │  (Config, i18n, etc)   │
└────────────┬─────────────────────┘  └─────┬──────────────────┘
             │                                │
             └────────────┬────────────────────┘
                          │
                    ┌─────▼──────────────────────┐
                    │    Zustand State Store     │
                    │  (Cart, User, Products)    │
                    └─────┬──────────────────────┘
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
    ┌───▼────┐   ┌────────▼────────┐   ┌──▼──────┐
    │ Axios  │   │  React Router   │   │  Hooks  │
    │ Client │   │    Navigation   │   │ (Custom)│
    └───┬────┘   └────────┬────────┘   └──┬──────┘
        │                 │                 │
        └─────────────────┼─────────────────┘
                          │
        ┌─────────────────▼─────────────────┐
        │        API Gateway (CORS)         │
        │      http://localhost:3000        │
        └─────────────────┬─────────────────┘
                          │
        ┌─────────────────▼──────────────────────┐
        │    Express.js Application Server       │
        └─────────────────┬──────────────────────┘
                          │
        ┌─────────────────┼──────────────────────┐
        │                 │                      │
    ┌───▼────┐   ┌────────▼────────┐   ┌────────▼────────┐
    │ Routes │   │  Middleware     │   │  Controllers   │
    │/api/*  │   │  (Auth, Error)  │   │  (Business     │
    │        │   │                 │   │   Logic)       │
    └───┬────┘   └────────┬────────┘   └────────┬────────┘
        │                 │                      │
        └─────────────────┼──────────────────────┘
                          │
        ┌─────────────────▼──────────────────────┐
        │    Service Layer & Business Logic      │
        │  (ProductService, OrderService, etc)   │
        └─────────────────┬──────────────────────┘
                          │
        ┌─────────────────▼──────────────────────┐
        │         Prisma ORM (Data Access)       │
        └─────────────────┬──────────────────────┘
                          │
                    ┌─────▼──────────────────────┐
                    │    PostgreSQL Database     │
                    │  (Users, Products, Orders) │
                    └────────────────────────────┘
```

## 🔌 Sistema de Plugins

### Arquitectura de Plugins

```
src/
├── plugins/
│   ├── gallery/
│   │   ├── Gallery.tsx
│   │   └── config.json
│   ├── videos/
│   │   ├── VideoPlayer.tsx
│   │   └── config.json
│   ├── coupons/
│   │   ├── CouponInput.tsx
│   │   └── config.json
│   └── manager.ts (Plugin Registry)
```

### Plugin Lifecycle

1. **Discovery** - Detectar plugins disponibles
2. **Load** - Cargar configuración del plugin
3. **Enable/Disable** - Controlar si está activo
4. **Configure** - Personalizar parámetros
5. **Execute** - Renderizar/ejecutar

### Plugins Incluidos

- ✅ **Gallery** - Galería de imágenes de productos
- ✅ **Videos** - Integración de videos de empaque
- ✅ **Coupons** - Sistema de códigos de descuento
- ✅ **Reviews** - Reseñas y calificaciones
- ⚪ **Blog** - Integración de blog
- ✅ **Analytics** - Seguimiento de productos

## 📊 Modelos de Datos

### User
```typescript
{
  id: string
  email: string
  name: string
  phone?: string
  avatar?: string
  preferences: UserPreferences
  addresses: Address[]
  orders: Order[]
  reviews: Review[]
  favorites: Favorite[]
}
```

### Product
```typescript
{
  id: string
  name: string
  slug: string
  description: string
  price: number
  originalPrice?: number
  category: Category
  image: string
  images: string[]
  stock: number
  rating: number
  reviews: Review[]
  featured: boolean
  video?: string
  sku: string
}
```

### Order
```typescript
{
  id: string
  orderNumber: string
  user: User
  items: OrderItem[]
  totalPrice: number
  status: OrderStatus
  shippingAddress: Address
  coupon?: Coupon
  discount: number
  createdAt: DateTime
  updatedAt: DateTime
}
```

## 🔐 Flujo de Autenticación

```
┌─────────────┐
│   Usuario   │
└──────┬──────┘
       │
       │ POST /api/auth/login
       │ { email, password }
       ▼
┌──────────────────────────────┐
│  Backend - Auth Controller   │
│  1. Validate credentials     │
│  2. Hash password check      │
└──────────────┬───────────────┘
       │
       │ Generate JWT Token
       │
       ▼
┌──────────────────────────────┐
│  Send Token + User Data      │
│  { token, user }             │
└──────────────┬───────────────┘
       │
       │ Store in localStorage
       │
       ▼
┌──────────────────────────────┐
│  Frontend - Zustand Store    │
│  { user, token, isAuth }     │
└──────────────┬───────────────┘
       │
       │ Include token in headers
       │ Authorization: Bearer {token}
       │
       ▼
┌──────────────────────────────┐
│  Subsequent Requests         │
│  Axios Interceptor validates │
└──────────────────────────────┘
```

## 🛒 Flujo de Compra

```
1. Browse Products
   └─ GET /api/products (with filters)

2. Add to Cart
   └─ Zustand cartStore.addItem()
   └─ Store in localStorage

3. View Cart
   └─ useCartStore() hook

4. Checkout
   ├─ Validate user auth
   ├─ Validate address
   ├─ Apply coupon (if any)
   └─ Review order

5. Place Order
   └─ POST /api/orders
   ├─ Create order record
   ├─ Reduce stock
   ├─ Clear cart
   └─ Return orderNumber

6. Order Confirmation
   └─ Store order in DB
   └─ Send confirmation email
   └─ Display confirmation page
```

## 🌍 Configuración Multiidioma

```
frontend/src/config/
├── locales/
│   ├── es-MX.json     # Spanish Mexico
│   └── en-US.json     # English USA
├── i18n.ts            # i18n manager
└── store.json         # Store config with languages array

Usage:
const text = getTranslation('es-MX', 'common.search')
// Returns: "Buscar"
```

## 🎨 Sistema de Temas

```json
{
  "colors": {
    "primary": "#FFB6E1",
    "secondary": "#FFE4E1",
    "accent": "#E0FFFF",
    "neutral": "#F5F5F5",
    "text": "#333333",
    "border": "#E8E8E8"
  },
  "typography": {
    "fontFamily": "Inter, system-ui",
    "fontSize": { "sm": "0.875rem", ... }
  }
}
```

## 📦 Deployments

### Frontend
- **Vercel**: Deployment automático de `dist/`
- **Netlify**: Support para SPA con redirects
- **AWS S3 + CloudFront**: Para máximo control

### Backend
- **Railway**: Deploy fácil con PostgreSQL
- **Heroku**: Support para Node.js apps
- **AWS EC2**: Máximo control y escalabilidad
- **Docker**: Containerizar application

### Database
- **AWS RDS PostgreSQL**
- **Railway PostgreSQL** (más fácil)
- **DigitalOcean Managed DB**

## 🔒 Consideraciones de Seguridad

1. **JWT Tokens**
   - Corta duración (7 días)
   - Almacenados en localStorage (susceptible a XSS)
   - Alternativamente usar httpOnly cookies

2. **Password Hashing**
   - Bcrypt con salt rounds = 10
   - Nunca almacenar en plain text

3. **CORS**
   - Whitelist de origins
   - Credentials: true para cookies

4. **Input Validation**
   - Zod schemas en backend
   - Validación en cliente para UX

5. **Rate Limiting**
   - Implementar en producción
   - Especialmente en /api/auth endpoints

## 📈 Escalabilidad

### Horizontal Scaling
- Load balancer (Nginx, AWS ELB)
- Multiple backend instances
- Database read replicas

### Caching
- Redis para sesiones
- CDN para assets estáticos
- HTTP caching headers

### Optimización
- Lazy loading de componentes
- Code splitting con Vite
- Image optimization
- Database query optimization

## 🧪 Testing

```bash
# Frontend
npm run test          # Unit tests
npm run test:e2e      # E2E tests (Cypress)
npm run coverage      # Coverage report

# Backend
npm run test          # Unit tests
npm run test:integration  # Integration tests
```

## 📚 Referencias

- [Prisma Documentation](https://www.prisma.io/docs/)
- [React Documentation](https://react.dev/)
- [Framer Motion API](https://www.framer.com/motion/)
- [Express.js Guide](https://expressjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Última actualización**: January 3, 2026
