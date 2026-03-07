'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  async function onSubmit(formData: FormData) {}

  return (
    <div>
      <Card className='w-full max-w-2xl mx-auto'>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <form id='contact-form' className=''>
            <div className='flex gap-2 space-y-5'>
              <div className='flex-1'>
                <div className='flex gap-2'>
                  <Label htmlFor='email'>Name</Label>
                  <Input
                    id='name'
                    type='text'
                    placeholder='Enter your mane'
                    required
                  />
                </div>
              </div>

              <div className='flex-1'>
                <div className='flex gap-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='m@example.com'
                    required
                  />
                </div>
              </div>
            </div>

            <div className='flex gap-2 mb-2'>
              <Label htmlFor='subject'>Subject</Label>
              <Input
                id='subject'
                type='text'
                placeholder='Enter Subject'
                required
              />
            </div>

            <div className='flex items-start gap-2 mb-2'>
              <Label htmlFor='message'>Message</Label>

              <Textarea id='message' placeholder='Your Message' required />
            </div>
            <Button className='w-full'>Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
export default ContactForm;
