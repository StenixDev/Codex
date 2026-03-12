import ContactForm from '@/component/contact-form';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Home() {
  return (
    <main className='min-h-screen py-12 px-4'>
      <div className='container mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>Server Action</h1>
          <p className='text-xl text-gray-600 '>
            {' '}
            ContactForm with MongoDB and revalidation{' '}
          </p>
          <Link href='/contacts'>
            <Button
              size='lg'
              className='my-5 cursor-pointer '
              variant='outline'
            >
              All Contacts
            </Button>
          </Link>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
export default Home;
