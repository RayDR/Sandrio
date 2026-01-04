#!/usr/bin/env node

/**
 * Sanrio Store - CLI Helper
 * Useful commands and shortcuts
 */

const commands = {
  dev: {
    all: 'npm run dev',
    frontend: 'npm run dev:frontend',
    backend: 'npm run dev:backend',
    description: 'Start development servers',
  },
  build: {
    all: 'npm run build',
    frontend: 'npm run build:frontend',
    backend: 'npm run build:backend',
    description: 'Build all or specific workspace',
  },
  database: {
    push: 'npm -w backend run db:push',
    seed: 'npm -w backend run db:seed',
    studio: 'npm -w backend run db:studio',
    description: 'Database management commands',
  },
  lint: {
    all: 'npm run lint',
    description: 'Lint code in all workspaces',
  },
  format: {
    all: 'npm run format --workspaces',
    frontend: 'npm -w frontend run format',
    backend: 'npm -w backend run format',
    description: 'Format code with Prettier',
  },
};

function printHelp() {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║         Sanrio Store - CLI Helper Commands                 ║
╚════════════════════════════════════════════════════════════╝

${'DEVELOPMENT'.padEnd(30)} COMMAND
${'─'.repeat(60)}
Start all servers               npm run dev
Start frontend only            npm run dev:frontend
Start backend only             npm run dev:backend

${'BUILD'.padEnd(30)} COMMAND
${'─'.repeat(60)}
Build all workspaces           npm run build
Build frontend only            npm run build:frontend
Build backend only             npm run build:backend

${'DATABASE'.padEnd(30)} COMMAND
${'─'.repeat(60)}
Push Prisma schema             npm -w backend run db:push
Seed database                  npm -w backend run db:seed
Open Prisma Studio            npm -w backend run db:studio

${'CODE QUALITY'.padEnd(30)} COMMAND
${'─'.repeat(60)}
Lint all code                  npm run lint
Format all code                npm run format --workspaces
Format frontend only           npm -w frontend run format
Format backend only            npm -w backend run format

${'USEFUL LINKS'.padEnd(30)}
${'─'.repeat(60)}
Frontend                       http://localhost:5173
API Backend                    http://localhost:3000
API Health Check               http://localhost:3000/health
Prisma Studio                  http://localhost:5555

${'DOCUMENTATION'.padEnd(30)}
${'─'.repeat(60)}
Quick Start                    See QUICKSTART.md
Architecture                   See ARCHITECTURE.md
Roadmap                        See ROADMAP.md
Contributing                   See CONTRIBUTING.md
Changelog                      See CHANGELOG.md

${'PROJECT STRUCTURE'.padEnd(30)}
${'─'.repeat(60)}
Frontend                       /frontend (React + TypeScript + Vite)
Backend                        /backend (Express + PostgreSQL + Prisma)
Shared Types                   /shared (Shared TypeScript types)
Configuration                  .github/ (GitHub workflows)

${'NEXT STEPS'.padEnd(30)}
${'─'.repeat(60)}
1. npm install                 (Install all dependencies)
2. Configure .env files        (See .env.example files)
3. npm run dev                 (Start development servers)
4. Open http://localhost:5173  (View the app)

For more information, visit https://github.com/sanrio-store
  `);
}

if (process.argv[2] === '--help' || process.argv[2] === '-h') {
  printHelp();
} else {
  printHelp();
}
