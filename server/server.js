import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import config from './config/index.js'
import authRoutes from './routes/auth.routes.js'
import floraRoutes from './routes/flora.routes.js'
import submissionRoutes from './routes/submission.routes.js'
import gisRoutes from './routes/gis.routes.js'
import { errorHandler } from './middleware/error.middleware.js'

dotenv.config()

const app = express()
const PORT = config.port

app.use(cors({ origin: config.corsOrigin }))
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'geoflora-api' })
})

app.use('/api/auth', authRoutes)
app.use('/api/flora', floraRoutes)
app.use('/api/submissions', submissionRoutes)
app.use('/api/gis', gisRoutes)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`GeoFlora API running on port ${PORT}`)
})

export default app
