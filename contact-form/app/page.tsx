import ContactForm from '@/component/contact-form';

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
        </div>
        <ContactForm />
        Test!
      </div>
    </main>
  );
}
export default Home;
