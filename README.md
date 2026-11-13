# GeoFlora (Web Portal & Backend API)

**GeoFlora: A Geospatial Information System and Mobile Catalog for Philippine Medicinal Flora with Computer Vision-Based Leaf Species Identification**

> *Note: This repository strictly houses the **React Web Curation & Analytics Portal** and the **Node.js/Express Backend API** for the GeoFlora capstone project. The Flutter mobile application resides in a separate repository.*

---

## 📖 Overview

GeoFlora is a digital ethnobotanical catalog and Geospatial Information System (GIS) designed to map the regional provenance, distribution density, and botanical profiles of Philippine medicinal flora across **Luzon**.

Serving as the central data hub and expert workspace of the system, this repository powers:

1. **The Expert Curation & Analytics Web Portal (React):** Allows ethnobotanists, researchers, and administrators to review AI pre-screened leaf submissions, manage the medicinal flora catalog, and visualize Luzon-wide regional provenance and abundance heatmaps.
2. **The Core RESTful API & Geospatial Engine (Node.js/Express):** Handles authentication, role-based access control, image metadata sanitization, geospatial queries, and data synchronization with the companion Flutter mobile app.

---

## ✨ Key Features

* **Geospatial Provenance & Abundance Mapping:** Visualizes where medicinal plants originate and tracks regional distribution densities across Luzon provinces using Mapbox GL JS, Turf.js, and administrative shapefiles.
* **Expert Verification Queue:** Structured moderation workflow for researchers and curators to validate leaf submissions pre-screened by the mobile app's computer vision model (MobileNetV3).
* **Medicinal Flora Catalog Management:** Full CRUD interface for managing taxonomic data, local vernacular names, traditional therapeutic preparations, plant parts utilized, and regional abundance metrics.
* **Privacy & Security by Design:**
  * **Three-Tier Role-Based Access Control (RBAC):** Distinct permission scopes for standard users (`User`), botanical verifiers (`Conservationist`/`Curator`), and system administrators (`Admin` with planned TOTP 2FA).
  * **Automated EXIF Stripping & Coordinate Masking:** Removes sensitive device metadata upon upload and enforces server-side coordinate masking on public-facing spatial endpoints.
* **Offline-First Sync Support:** REST endpoints engineered to handle batched background uploads and conflict resolution from the companion mobile client's local SQLite/Drift queue.

---

## 🛠️ Tech Stack

### Frontend (Web Portal)
* **Framework:** React (deployed on Vercel)
* **GIS & Spatial Visualization:** Mapbox GL JS (`react-map-gl`), Turf.js
* **Styling & UI:** Material UI (MUI)

### Backend (API & Database)
* **Runtime & Framework:** Node.js, Express.js (deployed on Render)
* **Database:** MongoDB Atlas with `2dsphere` geospatial indexing
* **Authentication & Security:** JSON Web Tokens (JWT), Role-Based Access Control (RBAC), EXIF metadata sanitization
* **Image Storage:** *[Add storage provider, e.g., Cloudinary / AWS S3 / Firebase Storage]*

---

## 📂 Repository Structure

```text
geoflora-web-backend/
├── client/                 # React Web Curation & GIS Portal
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable UI & Map components
│   │   ├── pages/          # Dashboard, Verification Queue, Catalog, Map Views
│   │   ├── services/       # Axios/Fetch API wrappers
│   │   └── utils/          # GeoJSON & Turf.js helpers
│   └── package.json
│
├── server/                 # Node.js / Express REST API
│   ├── config/             # MongoDB Atlas & environment configurations
│   ├── controllers/        # Route handlers (Auth, Flora, Submissions, GIS)
│   ├── middleware/         # JWT verification, RBAC guards, EXIF stripping
│   ├── models/             # Mongoose schemas (with 2dsphere indexes)
│   ├── routes/             # Express API route definitions
│   └── server.js           # Entry point
│
├── .env.example
├── .gitignore
├── LICENSE
├── package.json
└── README.md
```
