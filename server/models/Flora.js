// Flora model schema
import mongoose from 'mongoose'

const floraSchema = new mongoose.Schema(
  {
    scientificName: { type: String, required: true },
    vernacularName: { type: String },
    family: { type: String },
    plantPartsUsed: [String],
    traditionalPreparation: { type: String },
    therapeuticUses: [String],
    region: { type: String },
    abundanceLevel: { type: String },
    location: { type: { type: String, default: 'Point' }, coordinates: { type: [Number] } },
  },
  { timestamps: true }
)

floraSchema.index({ location: '2dsphere' })

export const Flora = mongoose.model('Flora', floraSchema)
export default Flora
