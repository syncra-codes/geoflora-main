# GeoFlora Developer Guide

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- MongoDB Atlas account (for database)

### Installation

1. Clone the repository
2. Install all dependencies:
   ```bash
   npm run install:all
   ```
3. Copy `.env.example` to `.env` and fill in your values:
   ```bash
   cp .env.example .env
   ```
4. Start the development servers:
   ```bash
   # Terminal 1 — Backend
   npm run dev:server
   
   # Terminal 2 — Frontend
   npm run dev:client
   ```

### Available Scripts (root)

| Script | Description |
|--------|-------------|
| `npm run install:all` | Install root, client, and server dependencies |
| `npm run dev:client` | Start Vite dev server (client) |
| `npm run dev:server` | Start Express dev server (server) |
| `npm run build:client` | Build client for production |
| `npm run lint` | Run ESLint on client |

## Project Structure

The repository is a monorepo with two workspaces:

- **`/client`** — React frontend (Vite + Material UI) deployed on Vercel
- **`/server`** — Node.js/Express backend (Deployed on Render)

## Development Rules

1. Inspect existing files before editing.
2. Make small, focused changes that preserve existing behavior.
3. Follow conventions already used in the project.
4. Run the narrowest applicable validation after code changes.
5. Record every action in `LOG.md` with date, action, affected paths, and result.
6. Keep `CODEMAP.md`, `GUIDE.md`, and `README.md` in sync with structural changes.

## Key Directories

### Client
- `src/components/` — Shared UI components
- `src/pages/` — Route-level page views
- `src/services/` — API service layer
- `src/utils/` — Pure helper functions

### Server
- `config/` — Environment configuration
- `controllers/` — Request handlers
- `middleware/` — Auth, RBAC, error handling, EXIF
- `models/` — Mongoose schemas
- `routes/` — Express route definitions

## Environment Variables

See `.env.example` for the full list. Required minimum:
- `PORT` — Server port
- `MONGODB_URI` — MongoDB Atlas connection string
- `JWT_SECRET` — Secret for signing JWT tokens
- `VITE_API_BASE_URL` — Client API base URL
- `VITE_MAPBOX_ACCESS_TOKEN` — Mapbox access token for maps
