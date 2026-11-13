# GeoFlora: A Geospatial Information System and Mobile Catalog for Philippine Medicinal Flora and Computer Vision-Based Leaf Species Identification

## 1. Executive Summary & Project Scope
GeoFlora is a comprehensive digital ethnobotanical platform and Geospatial Information System (GIS) designed to map regional provenance, distribution density, and botanical profiles of Philippine medicinal flora across the entire Luzon region. The system bridges everyday cultivation and expert conservation by decoupling operations into two distinct user pipelines: a mobile field and garden application for horticultural enthusiasts and urban gardeners, and a professional web curation portal for researchers, botanists, and administrators.

## 2. System Architecture & User Pipelines

### Mobile Field & Garden Pipeline (Flutter)
* **Target Users:** Horticultural Enthusiasts & Urban Gardeners — hobbyists, herbal plant growers, and backyard cultivators interested in growing and identifying medicinal flora.
* **Core Capabilities:** 
  * Single-hand camera interface with leaf-framing guides optimized for backyard, nursery, and community garden capture.
  * Offline-first data persistence and submission queuing via SQLite and Drift.
  * Local map caching and vector tile rendering using Mapbox SDK.
  * On-device AI pre-screening of leaf images via MobileNetV3 (TFLite).

### Professional Web Portal Pipeline (React & MERN)
* **Target Users:** Expert Curators, Academic Researchers, Botanists, and System Administrators.
* **Core Capabilities:**
  * Expert verification queue for validating AI pre-screened plant submissions.
  * Full CRUD management interface for the medicinal flora catalog and cultivation guides.
  * Geospatial dashboard featuring Luzon provincial provenance and harvest abundance heatmaps.
  * Administrative controls, role management, and audit logs.

## 3. Technical Stack & Components

| Layer / Module | Technology / Framework | Key Responsibilities |
| --- | --- | --- |
| **Mobile App** | Flutter (Dart), Drift, SQLite | Garden/field UI, offline catalog caching, submission queuing, camera integration |
| **Web Portal** | React, Vite, Mapbox GL JS, Turf.js | Curation dashboard, spatial visualization, provenance heatmaps, interactive mapping |
| **Backend API** | Node.js, Express.js, JWT | RESTful endpoints, authentication, EXIF sanitization, RBAC guards |
| **Database & GIS** | MongoDB Atlas (`2dsphere` indexes) | Geospatial vector storage, spatial queries, structured botanical & cultivation records |
| **AI Module** | MobileNetV3, TensorFlow Lite / ONNX | Transfer learning for leaf species classification and pre-screening |

## 4. Security, Privacy, and Data Governance
* **Role-Based Access Control (RBAC):** Three-tier permission model consisting of standard `User` (Horticultural Enthusiasts & Urban Gardeners), botanical verifier (`Conservationist`/`Curator`), and system administrator (`Admin` with planned TOTP 2FA).
* **Coordinate Masking & Privacy:** Automated server-side coordinate masking on public-facing spatial endpoints to protect private home gardens and sensitive plant habitats.
* **Metadata Sanitization:** Automatic stripping of sensitive EXIF device metadata upon image upload.
* **Compliance:** Alignment with Indigenous Cultural Communities (FPIC guidelines) and the Philippine Data Privacy Act.

## 5. Data Sourcing & Repositories
* **Computer Vision Dataset:** *PhilMedic: Philippine Medicinal Plant Leaf Dataset* (E. Custodio, 2024 – Mendeley Data) for model training and fine-tuning.
* **Provenance & Statistics:** Philippine Statistics Authority (PSA) agricultural reports and Department of Agriculture – Bureau of Plant Industry (DA-BPI) documentation.
* **Geospatial Boundaries:** Humanitarian Data Exchange (HDX) and PhilGIS provincial/municipal administrative shapefiles.

## 6. Evaluation Framework & Research Metrics
* **Quality Standard:** Evaluated using the ISO/IEC 25010 Software Product Quality Model.
* **Empirical Research Variables:** Measures independent variables (camera resolution, background clutter, and cellular network connectivity) against dependent variables (AI inference accuracy, submission latency, and coordinate masking reliability).
