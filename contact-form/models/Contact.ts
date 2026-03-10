import mongoose, { Document, Model } from 'mongoose';

// 1. Create a TypeScript interface that extends Document
export interface IContact extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  photo?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// 2. Define the schema
const ContactSchema = new mongoose.Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      maxlength: [100, 'Cannot exceed 100 characters'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      maxlength: [100, 'Cannot exceed 100 characters'],
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      maxlength: [100, 'Cannot exceed 100 characters'],
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      maxlength: [1000, 'Cannot exceed 1000 characters'], // increased length for message
      trim: true,
    },
    status: {
      type: String,
      enum: ['new', 'read', 'replied'],
      default: 'new',
    },
    photo: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

// 3. Fix "Cannot overwrite model" issue
const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
