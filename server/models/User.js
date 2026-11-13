// User model schema
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['User', 'Conservationist', 'Admin'], default: 'User' },
  },
  { timestamps: true }
)

export const User = mongoose.model('User', userSchema)
export default User
