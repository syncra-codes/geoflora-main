// Submission routes
import { Router } from 'express'
import { getAllSubmissions, createSubmission, verifySubmission } from '../controllers/submission.controller.js'

const router = Router()

router.get('/', getAllSubmissions)
router.post('/', createSubmission)
router.post('/:id/verify', verifySubmission)

export default router
