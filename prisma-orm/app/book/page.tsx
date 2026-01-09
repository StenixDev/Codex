import Header from './_component/header';
import Services from './_component/services';
import BookForm from './_component/book-form';
import Footer from './_component/footer';
import Modal from './_component/modal';
import Hero from './_component/hero';
import BookProvider from './BookProvider';

export default function BookingSystem() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      <Header />

      {/* Main Content */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <Hero />

        <BookProvider>
          {/* Services Grid */}

          <Services />

          {/* Booking Form Section */}

          <BookForm />

          {/* Confirmation Modal/Section */}
          <Modal />
        </BookProvider>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
