'use server';

import fs from 'fs';
import path from 'path';

import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';

type FormState = {
  name?: string;
  email?: string;
  subject?: string;
  message: string;
  success: boolean;
};

export async function createContact(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  await dbConnect();

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  const file = formData.get('photo') as File;

  let photoPath = '';

  if (file && file.size > 0) {
    // ✅ limit file size (2MB)
    const MAX_SIZE = 2 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      throw new Error('Image must be less than 2MB');
    }

    // ✅ allowed mime types
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];

    if (!allowedTypes.includes(file.type)) {
      return { success: false, message: `Only image files are allowed` };
    }

    // ✅ validate extension
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const ext = path.extname(file.name).toLowerCase();

    if (!allowedExtensions.includes(ext)) {
      return { success: false, message: `Invalid image extension` };
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // ✅ sanitize filename
    const filename = `${Date.now()}-${crypto.randomUUID()}${ext}`;

    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    fs.mkdirSync(uploadDir, { recursive: true });

    const uploadPath = path.join(uploadDir, filename);

    fs.writeFileSync(uploadPath, buffer);

    photoPath = `/uploads/${filename}`;
  }

  console.log(photoPath);

  try {
    await Contact.create({
      name,
      email,
      subject,
      message,
      photo: photoPath,
    });

    return { success: true, message: 'Message sent successfully' };
  } catch (error) {
    return { success: false, message: `Failed to send message ${error}` };
  }
}
