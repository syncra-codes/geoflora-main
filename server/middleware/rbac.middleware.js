// Role-Based Access Control middleware
export const rbacGuard = (roles = []) => {
  return (req, res, next) => {
    res.status(501).json({ error: 'Not implemented' })
  }
}

export default { rbacGuard }
