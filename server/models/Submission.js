// Submission model schema
import mongoose from 'mongoose'

const submissionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    leafImageUrl: { type: String },
    aiPreScreenResult: { type: String },
    aiConfidenceScore: { type: Number },
    verificationStatus: {
      type: String,
      enum: ['pending', 'verified', 'rejected'],
      default: 'pending',
    },
    verifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    location: { type: { type: String, default: 'Point' }, coordinates: { type: [Number] } },
  },
  { timestamps: true }
)

submissionSchema.index({ location: '2dsphere' })

export const Submission = mongoose.model('Submission', submissionSchema)
export default Submission
