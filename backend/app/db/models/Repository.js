import mongoose from 'mongoose';

const repositorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  sourceType: { type: String, enum: ['github', 'zip'], required: true },
  source: { type: String, required: true },
  latestVersionId: { type: mongoose.Schema.Types.ObjectId, default: null }
}, { timestamps: true });

export default mongoose.model('Repository', repositorySchema);
