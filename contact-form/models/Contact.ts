import mongoose from 'mongoose';

interface Contact {
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new mongoose.Schema<Contact>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      maxlength: [100, 'cannot be exceed 100 characters'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      maxlength: [100, 'cannot be exceed 100 characters'],
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },

    subject: {
      type: String,
      required: [true, 'Subject is required'],
      maxlength: [100, 'cannot be exceed 100 characters'],
      trim: true,
    },

    message: {
      type: String,
      required: [true, 'Message is required'],
      maxlength: [100, 'cannot be exceed 100 characters'],
      trim: true,
    },

    status: {
      type: String,
      enum: ['new', 'read', 'replied'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  },
);

const Contact =
  mongoose.models.Note || mongoose.model<Contact>('Contact', ContactSchema);

export default Contact;
