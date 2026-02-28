import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 100,
    },
    content: {
      type: String,
      required: true,
      maxLength: 2000,
    },
  },
  {
    timestamps: true, // ✅ automatically adds createdAt & updatedAt
  },
);

export default mongoose.models.Note || mongoose.model('Note', NoteSchema);
