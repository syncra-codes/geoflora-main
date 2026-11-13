// GIS routes
import { Router } from 'express'

const router = Router()

router.get('/heatmap', (_req, res) => {
  res.status(501).json({ error: 'Not implemented' })
})

router.get('/provinces', (_req, res) => {
  res.status(501).json({ error: 'Not implemented' })
})

export default router
