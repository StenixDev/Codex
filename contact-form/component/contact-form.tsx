'use client';

import { createContact } from '@/action';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

const initialState = {
  success: false,
  message: '',
  name: '',
  email: '',
  subject: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button className='w-full' disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </Button>
  );
}

function ContactForm() {
  const [state, formAction] = useActionState(createContact, initialState);

  return (
    <div>
      <Card className='w-full max-w-2xl mx-auto'>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>

        <CardContent>
          {state.message && <p>{state.message}</p>}

          <form action={formAction}>
            <div className='flex gap-2 space-y-5'>
              <div className='flex-1'>
                <div className='flex gap-2'>
                  <Label htmlFor='name'>Name</Label>
                  <Input
                    id='name'
                    name='name'
                    type='text'
                    placeholder='Enter your name'
                    required
                  />
                </div>
              </div>

              <div className='flex-1'>
                <div className='flex gap-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    name='email'
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
                name='subject'
                type='text'
                placeholder='Enter Subject'
                required
              />
            </div>

            <div className='flex items-start gap-2 mb-2'>
              <Label htmlFor='message'>Message</Label>

              <Textarea
                id='message'
                name='message'
                placeholder='Your Message'
                required
              />
            </div>

            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContactForm;
