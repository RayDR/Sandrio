# Sanrio Store - Referencia Rápida

## 🚀 Comandos Esenciales

### Desarrollo
```bash
npm run dev              # Inicia frontend + backend
npm run dev:frontend    # Solo frontend (puerto 5173)
npm run dev:backend     # Solo backend (puerto 3000)
```

### Base de Datos
```bash
npm -w backend run db:push     # Actualizar schema
npm -w backend run db:seed     # Poblar datos
npm -w backend run db:studio   # Visualizar datos
```

### Compilación
```bash
npm run build           # Compilar todo
npm run lint            # Verificar código
npm run format --workspaces  # Formatear código
```

## 📁 Estructura de Carpetas

```
sanrio-store/
├── frontend/
│   ├── src/
│   │   ├── components/      ← Componentes React
│   │   ├── pages/           ← Páginas
│   │   ├── services/        ← API calls
│   │   ├── store/           ← Zustand stores
│   │   ├── config/          ← JSON configs
│   │   ├── hooks/           ← Custom hooks
│   │   ├── utils/           ← Utilidades
│   │   └── types/           ← TypeScript types
│   ├── index.html
│   ├── vite.config.ts
│   └── tailwind.config.ts
├── backend/
│   ├── src/
│   │   ├── routes/          ← API routes
│   │   ├── controllers/     ← Lógica
│   │   ├── services/        ← Servicios
│   │   ├── middleware/      ← Middleware
│   │   ├── plugins/         ← Plugins
│   │   └── config/          ← Config
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── seed.ts
│   └── package.json
├── shared/
│   └── types.ts             ← Tipos compartidos
└── package.json             ← Workspace root
```

## 🎨 Colores Sanrio

```
Primary:   #FFB6E1 (Pink pastel)
Secondary: #FFE4E1 (Light pink)
Accent:    #E0FFFF (Cyan suave)
Neutral:   #F5F5F5 (Off-white)
Text:      #333333 (Dark gray)
Border:    #E8E8E8 (Light border)
```

## 🔧 Agregar Componente Nuevo

```bash
# 1. Crear archivo en frontend/src/components/category/ComponentName.tsx
# 2. Escribir componente con TypeScript + Framer Motion
# 3. Exportar desde index si necesario
# 4. Usar en páginas/otros componentes

import { Button } from '@components/common/Button';
import { motion } from 'framer-motion';
```

## 📦 Agregar Dependencia

```bash
# Frontend
npm -w frontend install package-name
npm -w frontend install -D dev-package

# Backend
npm -w backend install package-name
npm -w backend install -D dev-package

# Ambos
npm install package-name --workspaces
```

## 🌍 Agregar Idioma Nuevo

1. Crear `frontend/src/config/locales/xx-YY.json`
2. Copiar estructura de `es-MX.json`
3. Traducir textos
4. Agregar a `store.json` en array `languages`

## 🔌 Sistema de Plugins

```json
{
  "id": "mi-plugin",
  "name": "Mi Plugin",
  "enabled": true,
  "version": "1.0.0",
  "config": {
    "custom-setting": "value"
  }
}
```

## 📊 URLs Importantes

| Servicio | URL | Descripción |
|----------|-----|-------------|
| Frontend | http://localhost:5173 | App React |
| Backend API | http://localhost:3000/api | API endpoints |
| Health Check | http://localhost:3000/health | Status API |
| Prisma Studio | http://localhost:5555 | Base de datos visual |

## 🔐 Variables de Entorno

### Backend (.env)
```env
DATABASE_URL="postgresql://user:pass@localhost:5432/sanrio_store"
JWT_SECRET="your-secret-key"
NODE_ENV="development"
API_PORT=3000
CORS_ORIGIN="http://localhost:5173"
```

### Frontend (vite.config.ts)
```typescript
// Configurado como proxy:
// http://localhost:5173/api/ → http://localhost:3000/
```

## 🚢 Deployment

### Frontend
```bash
# Vercel
npm run build
# Deploy /dist folder

# Netlify
npm run build
# Deploy /dist folder

# Self-hosted
npm run build
npm -g install http-server
http-server dist
```

### Backend
```bash
# Build
npm -w backend run build

# Start
npm -w backend run start

# Environment: set NODE_ENV=production
```

## 🧪 Testing

```bash
# Frontend (cuando esté setup)
npm -w frontend run test
npm -w frontend run test:e2e

# Backend (cuando esté setup)
npm -w backend run test
npm -w backend run test:integration
```

## 📈 Rendimiento

- **Frontend**: Lazy loading, code splitting con Vite
- **Backend**: Caching en queries, rate limiting
- **Database**: Indexes en columnas frecuentes
- **API**: Response compression con gzip

## 🐛 Debugging

### Frontend
```typescript
// Usar React DevTools
// Ver logs en console
console.log('Debug:', data);

// Zustand DevTools
import { devtools } from 'zustand/middleware';
```

### Backend
```bash
# Con debug
DEBUG=* npm run dev:backend

# Logs
console.log('Debug:', data);
```

## 📞 Stack de Soporte

- **React Docs**: https://react.dev
- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind**: https://tailwindcss.com
- **Prisma**: https://www.prisma.io/docs/
- **Express**: https://expressjs.com/
- **TypeScript**: https://www.typescriptlang.org/docs/

## 💡 Tips Útiles

1. **Usar path aliases**: `@components`, `@services`, etc.
2. **Componentes reutilizables**: Crear en `/components/common`
3. **Type safety**: Siempre usar TypeScript strict
4. **Animaciones**: Usar Framer Motion para transiciones suaves
5. **Estado global**: Zustand para cart, user, etc.
6. **Configs**: JSON en lugar de hardcoding

## 🔄 Workflow Git

```bash
# Feature branch
git checkout -b feature/feature-name

# Commit
git commit -m "feat(scope): description"

# Push & PR
git push origin feature/feature-name

# Merge después de review
git merge feature/feature-name
```

---

**¡Listo para desarrollar!** 🎀

Para más detalles, ver:
- README.md - Descripción general
- QUICKSTART.md - Guía de inicio
- ARCHITECTURE.md - Arquitectura técnica
- ROADMAP.md - Plan futuro
