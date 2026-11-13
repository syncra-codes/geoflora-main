// JWT authentication middleware
import jwt from 'jsonwebtoken'

export const authenticate = (req, res, next) => {
  res.status(501).json({ error: 'Not implemented' })
}

export default { authenticate }
