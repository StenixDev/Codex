'use server';

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

  try {
    await Contact.create({
      name,
      email,
      subject,
      message,
    });

    return { success: true, message: 'Message sent successfully' };
  } catch (error) {
    return { success: false, message: `Failed to send message ${error}` };
  }
}
