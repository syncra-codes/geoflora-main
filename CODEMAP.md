# GeoFlora Codebase Map

## Repository Layout

```
geoflora-web-backend/
├── client/                 # React Web Curation & GIS Portal (Vite + React + MUI)
│   ├── public/             # Static assets (favicon, icons)
│   ├── src/
│   │   ├── components/     # Reusable UI components (AppShell, PageHeader, ProtectedRoute)
│   │   ├── pages/          # Page views (Dashboard, VerificationQueue, Catalog, MapView, AdminPanel)
│   │   ├── services/       # API service wrappers
│   │   ├── utils/          # Helper utilities
│   │   ├── App.jsx         # Application shell with routing
│   │   ├── theme.js        # Material UI theme configuration
│   │   ├── index.css       # Global styles
│   │   └── main.jsx        # React entry point
│   ├── index.html          # Vite HTML template
│   ├── package.json        # Client dependencies
│   └── vite.config.js      # Vite configuration
│
├── server/                 # Node.js / Express REST API
│   ├── config/             # Configuration (index.js)
│   ├── controllers/        # Route handlers (auth, flora, submission)
│   ├── middleware/         # Auth, RBAC, error handling, EXIF sanitization
│   ├── models/             # Mongoose schemas (User, Flora, Submission)
│   ├── routes/             # Express API route definitions (auth, flora, submission, gis)
│   ├── server.js           # Express entry point
│   └── package.json        # Server dependencies
│
├── docs/                   # Planning documents
│   ├── backend/PLAN-B-00.md
│   └── frontend/PLAN-F-00.md
│
├── CODEMAP.md              # This file — codebase structure index
├── GUIDE.md                # Developer guide
├── INSTRUCTIONS.md         # Repository development instructions
├── LOG.md                  # Development changelog
├── PROJECT-SPECS.md        # Project specifications
├── README.md               # Project overview & setup
├── LICENSE                 # MIT License
├── .env.example            # Environment variable templates
├── .gitignore              # Git ignore patterns
└── package.json            # Root monorepo manifest (workspaces: client, server)
```

## Module Responsibilities

### Client (Frontend)
- **components/AppShell.jsx** — Layout wrapper with AppBar and theme
- **components/PageHeader.jsx** — Page title/subtitle component
- **components/ProtectedRoute.jsx** — Route guard placeholder
- **pages/Dashboard.jsx** — Overview dashboard
- **pages/VerificationQueue.jsx** — Submission review table
- **pages/Catalog.jsx** — Flora catalog management
- **pages/MapView.jsx** — Geospatial dashboard placeholder
- **pages/AdminPanel.jsx** — Admin controls placeholder
- **App.jsx** — Routing and navigation shell
- **theme.js** — Material UI theme (primary green palette)
- **services/index.js** — API base URL configuration
- **utils/index.js** — Date formatting helper

### Server (Backend)
- **config/index.js** — Environment configuration
- **controllers/auth.controller.js** — Auth handlers (register, login, logout)
- **controllers/flora.controller.js** — Flora CRUD handlers
- **controllers/submission.controller.js** — Submission handlers
- **middleware/auth.middleware.js** — JWT authentication
- **middleware/rbac.middleware.js** — Role-based access control
- **middleware/error.middleware.js** — Global error handler
- **middleware/exif.middleware.js** — EXIF sanitization placeholder
- **models/User.js** — User schema (email, password, role)
- **models/Flora.js** — Flora schema with 2dsphere index
- **models/Submission.js** — Submission schema with 2dsphere index
- **routes/auth.routes.js** — Auth endpoints
- **routes/flora.routes.js** — Flora CRUD endpoints
- **routes/submission.routes.js** — Submission endpoints
- **routes/gis.routes.js** — GIS/heatmap endpoints
- **server.js** — Express app entry point with /health route

## Key Data Flows

1. **Authentication:** Client → POST /api/auth/register|login → Server validates → JWT returned → Stored client-side
2. **Flora CRUD:** Client → /api/flora/* → Server validates RBAC → Mongoose queries MongoDB Atlas
3. **Submissions:** Client → POST /api/submissions → Server stores → Review queue → Verification
4. **GIS:** Client → GET /api/gis/heatmap|provinces → Server queries 2dsphere index → GeoJSON response

## Technologies

- **Frontend:** React 19, Vite, Material UI (MUI), React Router, react-map-gl, Turf.js
- **Backend:** Node.js, Express, Mongoose/MongoDB Atlas, JWT, bcryptjs, CORS, dotenv, Multer
- **Database:** MongoDB Atlas with 2dsphere geospatial indexes
