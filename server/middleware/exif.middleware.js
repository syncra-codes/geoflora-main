// EXIF metadata sanitization middleware
export const stripExif = (req, res, next) => {
  res.status(501).json({ error: 'Not implemented' })
}

export default { stripExif }
