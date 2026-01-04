# Guía de Inicio Rápido - Sanrio Store

## 📋 Pre-requisitos

- Node.js 18+ 
- npm 9+
- PostgreSQL 13+ (para producción)
- Git

## 🚀 Instalación Rápida

### 1. Clonar e Instalar Dependencias

```bash
# Instalar todas las dependencias del monorepo
npm install
```

### 2. Configurar Variables de Entorno

```bash
# Backend
cp backend/.env.example backend/.env

# Editar backend/.env con tus credenciales:
# DATABASE_URL="postgresql://user:password@localhost:5432/sanrio_store"
# JWT_SECRET="your-secret-key"
# CORS_ORIGIN="http://localhost:5173"
```

### 3. Preparar Base de Datos (Opcional)

```bash
# Crear/Actualizar schema de Prisma
cd backend
npx prisma db push

# Seed con datos de ejemplo
npm run db:seed

# Visualizar base de datos
npm run db:studio
```

## 🎯 Desarrollo

### Iniciar Ambos Servidores

```bash
# Desde la raíz del proyecto
npm run dev

# Esto iniciará:
# - Frontend en http://localhost:5173
# - Backend en http://localhost:3000
```

### Iniciar por Separado

```bash
npm run dev:frontend   # Solo frontend
npm run dev:backend    # Solo backend
```

## 📁 Estructura del Proyecto

```
sanrio-store/
├── frontend/                 # React 18 + TypeScript + Vite
│   ├── src/
│   │   ├── components/      # Componentes reutilizables
│   │   ├── pages/           # Páginas
│   │   ├── services/        # Servicios API
│   │   ├── store/           # Zustand stores
│   │   ├── config/          # JSON configs & i18n
│   │   └── styles/          # Estilos globales
│   └── index.html
├── backend/                  # Express + PostgreSQL + Prisma
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── controllers/     # Lógica de negocios
│   │   ├── middleware/      # Auth, validation
│   │   ├── services/        # Lógica de servicios
│   │   ├── plugins/         # Sistema de plugins
│   │   └── config/          # Configuración
│   ├── prisma/
│   │   ├── schema.prisma    # Modelos de BD
│   │   └── seed.ts          # Datos iniciales
├── shared/                   # Tipos compartidos
└── package.json             # Workspace config
```

## 🔧 Scripts Disponibles

### Frontend
```bash
cd frontend
npm run dev       # Desarrollo con Vite
npm run build     # Compilar para producción
npm run preview   # Preview de build
npm run lint      # Verificar errores
npm run format    # Formatear código
```

### Backend
```bash
cd backend
npm run dev       # Desarrollo con ts-node
npm run build     # Compilar TypeScript
npm run db:push   # Actualizar schema
npm run db:seed   # Poblar con datos
npm run db:studio # UI de Prisma
npm run lint      # Verificar errores
npm run format    # Formatear código
```

## 🎨 Personalización

### Cambiar Colores (Sanrio Pastels)
Editar `frontend/src/index.css` y `frontend/tailwind.config.ts`:
```css
--primary: #FFB6E1      /* Pink */
--secondary: #FFE4E1    /* Light Pink */
--accent: #E0FFFF       /* Cyan */
--neutral: #F5F5F5      /* Off-white */
--text: #333333         /* Dark Gray */
```

### Agregar Idiomas
1. Crear archivo en `frontend/src/config/locales/[idioma].json`
2. Actualizar `frontend/src/config/i18n.ts`
3. Agregar al array `languages` en `store.json`

### Activar/Desactivar Plugins
Editar `frontend/src/config/store.json` en la sección `plugins`:
```json
{
  "enabled": true/false
}
```

## 🔐 Seguridad

- JWT tokens para autenticación
- Hashed passwords con bcrypt
- CORS configurado
- Rate limiting recomendado para producción
- Variables de entorno para secretos

## 📊 Base de Datos

### Modelos Principales
- **User**: Usuarios y perfiles
- **Product**: Productos, categorías, reviews
- **Order**: Pedidos y items
- **Coupon**: Códigos de descuento
- **BlogPost**: Contenido de blog
- **Plugin**: Configuración de plugins

## 🚢 Deploying

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy `dist/` folder
```

### Backend (Heroku/Railway/Render)
```bash
npm run build
# Deploy with `npm start`
```

### Database
Usar PostgreSQL hosted (AWS RDS, Railway, etc.)

## 📞 Soporte y Contribución

Para reportar bugs o sugerencias, crea un issue en el repositorio.

## 📝 Licencia

MIT License - Feel free to use for commercial projects

---

**¡Listo! Tu tienda Sanrio está lista para comenzar.** 🎀
