# GeoFlora (Web & Backend) — Development & Repository Log

> **Repository Scope:** React Web Curation & GIS Portal (`/client`) and Node.js/Express REST API (`/server`).  
> **Project:** *GeoFlora: A Geospatial Information System and Mobile Catalog for Philippine Medicinal Flora with Computer Vision-Based Leaf Species Identification*  
> **Conventions:** All timestamps are recorded in Philippine Standard Time (`UTC+8`). Entries are ordered chronologically from the newest update at the top (or reverse-chronologically as the team prefers).

---

## 📋 Changelog Entries

### `[2026-11-13 18:05 PHT]` — Scaffold backend and frontend structure, populate documentation
* **Author / Contributor:** *[Your Name / GitHub Handle]*
* **Category:** `Feat`
* **Summary:** Established full backend directory structure (config, controllers, middleware, models, routes) with Mongoose schemas and Express routes, updated server/package.json with Express/Mongoose/JWT/CORS/bcryptjs/Multer dependencies, rewrote server/server.js to mount all route modules, added Material UI and react-router-dom to client/package.json, created client component/page scaffold (AppShell, Dashboard, VerificationQueue, Catalog, MapView, AdminPanel), rewrote client/src/App.jsx with routing shell, and populated CODEMAP.md and GUIDE.md with structure and onboarding content.
* **Files Changed:**
  * `MODIFIED`: `/server/package.json` — Added express, mongoose, dotenv, cors, jsonwebtoken, bcryptjs, multer, nodemon.
  * `ADDED`: `/server/config/index.js` — Environment configuration.
  * `ADDED`: `/server/controllers/auth.controller.js` — Register/login/logout handlers.
  * `ADDED`: `/server/controllers/flora.controller.js` — Flora CRUD handlers.
  * `ADDED`: `/server/controllers/submission.controller.js` — Submission handlers.
  * `ADDED`: `/server/controllers/index.js` — Controller barrel export.
  * `ADDED`: `/server/middleware/auth.middleware.js` — JWT auth middleware.
  * `ADDED`: `/server/middleware/rbac.middleware.js` — Role-based access control middleware.
  * `ADDED`: `/server/middleware/error.middleware.js` — Global error handler.
  * `ADDED`: `/server/middleware/exif.middleware.js` — EXIF sanitization placeholder.
  * `ADDED`: `/server/middleware/index.js` — Middleware barrel export.
  * `ADDED`: `/server/models/User.js` — User Mongoose schema.
  * `ADDED`: `/server/models/Flora.js` — Flora Mongoose schema with 2dsphere index.
  * `ADDED`: `/server/models/Submission.js` — Submission Mongoose schema with 2dsphere index.
  * `ADDED`: `/server/models/index.js` — Model barrel export.
  * `ADDED`: `/server/routes/auth.routes.js` — Auth routes.
  * `ADDED`: `/server/routes/flora.routes.js` — Flora CRUD routes.
  * `ADDED`: `/server/routes/submission.routes.js` — Submission routes.
  * `ADDED`: `/server/routes/gis.routes.js` — GIS heatmap/province routes.
  * `ADDED`: `/server/routes/index.js` — Route barrel export.
  * `MODIFIED`: `/server/server.js` — Rewrote to mount all routes with CORS, JSON, error handling, and /health.
  * `MODIFIED`: `/client/package.json` — Added @mui/material, @mui/icons-material, @emotion/react, @emotion/styled, react-map-gl, turf, react-router-dom.
  * `ADDED`: `/client/src/components/index.js` — Components barrel export.
  * `ADDED`: `/client/src/components/AppShell.jsx` — Layout shell with AppBar.
  * `ADDED`: `/client/src/components/PageHeader.jsx` — Page title component.
  * `ADDED`: `/client/src/components/ProtectedRoute.jsx` — Route guard placeholder.
  * `ADDED`: `/client/src/pages/index.js` — Pages barrel export.
  * `ADDED`: `/client/src/pages/Dashboard.jsx` — Dashboard page.
  * `ADDED`: `/client/src/pages/VerificationQueue.jsx` — Submission review table.
  * `ADDED`: `/client/src/pages/Catalog.jsx` — Flora catalog page.
  * `ADDED`: `/client/src/pages/MapView.jsx` — Geospatial dashboard placeholder.
  * `ADDED`: `/client/src/pages/AdminPanel.jsx` — Admin controls placeholder.
  * `ADDED`: `/client/src/theme.js` — Material UI theme (green primary palette).
  * `MODIFIED`: `/client/src/App.jsx` — Replaced Vite template with React Router shell and navigation.
  * `MODIFIED`: `/CODEMAP.md` — Populated with repository layout, module responsibilities, data flows, and tech stack.
  * `MODIFIED`: `/GUIDE.md` — Populated with getting started, installation, scripts, project structure, and env var docs.
* **Branch / Commit Ref:** `main` (uncommitted)

### `[2026-11-13 18:02 PHT]` — Initialize root repository configuration
* **Author / Contributor:** *[Your Name / GitHub Handle]*
* **Category:** `Chore`
* **Summary:** Set up root-level monorepo configuration: root `package.json` with client/server workspaces, `.gitignore`, MIT `LICENSE`, `.env.example`, and `server/server.js` entry point with health check route.
* **Files Changed:**
  * `ADDED`: `/package.json` — Root monorepo manifest with workspaces for `client` and `server`, lifecycle scripts.
  * `ADDED`: `/.gitignore` — Standard Node/React/IDE/OS ignore patterns.
  * `ADDED`: `/LICENSE` — MIT License.
  * `ADDED`: `/.env.example` — Server and client environment variable templates.
  * `ADDED`: `/server/server.js` — Express entry point with CORS, JSON parsing, and `/health` route.
* **Branch / Commit Ref:** `main` (uncommitted)

### `[2026-11-13 18:01 PHT]` — Remove all citation markers from `PROJECT-SPECS.md`
* **Author / Contributor:** *[Your Name / GitHub Handle]*
* **Category:** `Docs`
* **Summary:** Removed every remaining `[cite: x]` citation marker from `PROJECT-SPECS.md` (including `[cite: 3]` entries).
* **Files Changed:**
  * `MODIFIED`: `/PROJECT-SPECS.md` — Stripped all citation references.
* **Branch / Commit Ref:** `main` (uncommitted)

### `[2026-11-13 18:00 PHT]` — Remove `[cite: 2]` markers from `PROJECT-SPECS.md`
* **Author / Contributor:** *[Your Name / GitHub Handle]*
* **Category:** `Docs`
* **Summary:** Removed all `[cite: 2]` citation markers from `PROJECT-SPECS.md`; combined `[cite: 2, 3]` entries were consolidated to `[cite: 3]`, while `[cite: 3]` markers were left intact.
* **Files Changed:**
  * `MODIFIED`: `/PROJECT-SPECS.md` — Stripped `[cite: 2]` references throughout.
* **Branch / Commit Ref:** `main` (uncommitted)

### `[2026-11-13 17:59 PHT]` — Correct `PROJECT-SPECS.md` content
* **Author / Contributor:** *[Your Name / GitHub Handle]*
* **Category:** `Docs`
* **Summary:** Replaced `PROJECT-SPECS.md` with the corrected specification: retargeted mobile pipeline to horticultural enthusiasts/urban gardeners, adjusted capabilities and descriptions accordingly, updated RBAC user scope, coordinate masking rationale, and compliance references.
* **Files Changed:**
  * `MODIFIED`: `/PROJECT-SPECS.md` — Rewrote full project specifications with corrected scope and descriptions.
* **Branch / Commit Ref:** `main` (uncommitted)

### `[2026-11-13 17:57 PHT]` — Set CSS framework in `README.md` to Material UI
* **Author / Contributor:** *[Your Name / GitHub Handle]*
* **Category:** `Docs`
* **Summary:** Replaced the CSS framework placeholder in `README.md` Tech Stack with the selected framework: Material UI (MUI).
* **Files Changed:**
  * `MODIFIED`: `/README.md` — Styling & UI line now reads "Material UI (MUI)".
* **Branch / Commit Ref:** `main` (uncommitted)

### `[2026-11-13 17:58 PHT]` — Populate `PROJECT-SPECS.md` with full project specifications
* **Author / Contributor:** *[Your Name / GitHub Handle]*
* **Category:** `Docs`
* **Summary:** Wrote project specifications covering executive summary/scope, system architecture & user pipelines (mobile Flutter field pipeline and React/MERN web portal pipeline), technical stack & components table, security/privacy/data governance, data sourcing & repositories, and evaluation framework & research metrics.
* **Files Changed:**
  * `ADDED`: `/PROJECT-SPECS.md` — Created project specifications document (file was previously empty).
* **Branch / Commit Ref:** `main` (uncommitted)

### `[2026-11-13 17:56 PHT]` — Remove citation markers from `README.md`
* **Author / Contributor:** *[Your Name / GitHub Handle]*
* **Category:** `Docs`
* **Summary:** Removed all `[cite: x, y]` citation markers throughout `README.md` while retaining existing content structure and placeholder claims.
* **Files Changed:**
  * `MODIFIED`: `/README.md` — Stripped citation markers only; no other changes.
* **Branch / Commit Ref:** `main` (uncommitted)

### `[2026-11-13 17:55 PHT]` — Populate `INSTRUCTIONS.md` with repository maintenance & development rules
* **Author / Contributor:** *[Your Name / GitHub Handle]*
* **Category:** `Docs`
* **Summary:** Wrote documentation maintenance rules (keep `LOG.md`, `CODEMAP.md`, `README.md` current; cross-reference docs) and development rules (inspect before editing, small focused changes, follow conventions, validate, report results to `LOG.md`) into `INSTRUCTIONS.md`.
* **Files Changed:**
  * `MODIFIED`: `/INSTRUCTIONS.md` — Added repository instructions content (file was previously empty).
* **Branch / Commit Ref:** `main` (uncommitted)

### `[2026-11-13 17:54 PHT]` — Repository Documentation Initialization (`LOG.md` & `README.md`)
* **Author / Contributor:** *[Your Name / GitHub Handle]*
* **Category:** `Docs`
* **Summary:** Initialized root repository documentation establishing project overview, tech stack (React, Mapbox GL JS, Turf.js, Node/Express, MongoDB Atlas), environment setup guides, and tracking logs following post-defense title and scope revisions.
* **Repository state at time of initialization:** Branch `main` (up to date with `origin/main`); single commit `24342b3` "Initial commit" (2026-11-12) containing only a 2-line `README.md` stub (`# geoflora-main`, `capstone proj`). `LOG.md` was previously empty; nothing had been logged.
* **Files Changed:**
  * `ADDED`: `/README.md` — Created comprehensive project overview (project title/description, overview, key features, tech stack, repository architecture), setup steps, and data source references.
  * `ADDED`: `/LOG.md` — Created development changelog to track repository updates, file modifications, and milestone progress.
  * `MODIFIED`: `/README.md` — Replaced the 2-line stub with the full project README (overview, key features: geospatial mapping, expert verification queue, catalog management, RBAC, EXIF stripping/coordinate masking, offline-first sync; tech stack: React on Vercel, Node/Express on Render, MongoDB Atlas with 2dsphere indexing, JWT/RBAC; repository structure).
  * `ADDED`: `/CODEMAP.md` — codebase map/documentation.
  * `ADDED`: `/GUIDE.md` — project guide.
  * `ADDED`: `/INSTRUCTIONS.md` — project instructions.
  * `ADDED`: `/PROJECT-SPECS.md` — project specifications.
  * `ADDED`: `/client/` — React Web Curation & GIS Portal (Vite + React): `.env`, `.gitignore`, `eslint.config.js`, `index.html`, `package.json`, `package-lock.json`, `public/`, `src/` (App, assets, main.jsx, index.css, App.css), `vite.config.js`, `README.md`.
  * `ADDED`: `/docs/` — planning docs: `docs/backend/PLAN-B-00.md`, `docs/frontend/PLAN-F-00.md`.
  * `ADDED`: `/server/` — Node.js/Express REST API: `package.json`, `package-lock.json`.
* **Branch / Commit Ref:** `main` (Initial documentation setup)

---

## 📝 Entry Template (Copy & Paste for Future Updates)

```markdown
### `[YYYY-MM-DD HH:MM PHT]` — <Short Action Title>
* **Author / Contributor:** <Name / GitHub Handle>
* **Category:** `<Feat API Chore DB Docs Fix GIS Refactor |>`
* **Summary:** <1–2 concise sentences explaining what was done and why.>
* **Files Changed:**
  * `ADDED`: `/path/to/new-file.js` — <Brief purpose>
  * `MODIFIED`: `/path/to/existing-file.js` — <Brief edit of summary>
  * `DELETED`: `/path/to/removed-file.js` — <Reason for removal>
* **Branch / Commit Ref:** `<branch-name>` (`<short-commit-hash or PR #>`)
```
