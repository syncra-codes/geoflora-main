// Flora routes
import { Router } from 'express'
import { getAllFlora, getFloraById, createFlora, updateFlora, deleteFlora } from '../controllers/flora.controller.js'

const router = Router()

router.get('/', getAllFlora)
router.get('/:id', getFloraById)
router.post('/', createFlora)
router.put('/:id', updateFlora)
router.delete('/:id', deleteFlora)

export default router
