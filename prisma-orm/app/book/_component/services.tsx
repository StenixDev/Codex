import { Calendar, Clock, User, CheckCircle } from 'lucide-react';

function Services() {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
      <div className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer border-2 border-transparent hover:border-indigo-500'>
        <div className='w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4'>
          <Clock className='w-6 h-6 text-indigo-600' />
        </div>
        <h3 className='text-xl font-semibold text-gray-900 mb-2'>
          Consultation
        </h3>
        <p className='text-gray-600 text-sm mb-4'>30 minutes session</p>
        <div className='text-2xl font-bold text-indigo-600'>$50</div>
      </div>

      <div className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer border-2 border-transparent hover:border-indigo-500'>
        <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4'>
          <User className='w-6 h-6 text-green-600' />
        </div>
        <h3 className='text-xl font-semibold text-gray-900 mb-2'>
          Standard Service
        </h3>
        <p className='text-gray-600 text-sm mb-4'>1 hour session</p>
        <div className='text-2xl font-bold text-green-600'>$100</div>
      </div>

      <div className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer border-2 border-transparent hover:border-indigo-500'>
        <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4'>
          <CheckCircle className='w-6 h-6 text-purple-600' />
        </div>
        <h3 className='text-xl font-semibold text-gray-900 mb-2'>
          Premium Service
        </h3>
        <p className='text-gray-600 text-sm mb-4'>2 hours session</p>
        <div className='text-2xl font-bold text-purple-600'>$200</div>
      </div>

      <div className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer border-2 border-transparent hover:border-indigo-500'>
        <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4'>
          <Calendar className='w-6 h-6 text-orange-600' />
        </div>
        <h3 className='text-xl font-semibold text-gray-900 mb-2'>Full Day</h3>
        <p className='text-gray-600 text-sm mb-4'>8 hours session</p>
        <div className='text-2xl font-bold text-orange-600'>$500</div>
      </div>
    </div>
  );
}
export default Services;
