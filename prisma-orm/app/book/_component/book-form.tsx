'use client';
import { Calendar, Clock, User, Mail, Phone, MapPin } from 'lucide-react';
import { BookContext } from '@/app/book/_context/BookContext';
import { useContext } from 'react';

function BookForm() {
  const { data } = useContext(BookContext);
  const dataRes = data[0] || [];

  console.log(dataRes);

  return (
    <div
      className={`grid lg:grid-cols-3 gap-8 ${
        !dataRes?.service && 'pointer-events-none opacity-50 cursor-not-allowed'
      }`}
    >
      {/* Left Column - Date & Time */}
      <div className='lg:col-span-2'>
        <div className='bg-white rounded-xl shadow-lg p-8'>
          <h3 className='text-2xl font-bold text-gray-900 mb-6'>
            Select Date & Time
          </h3>

          {/* Selected Service Display */}
          <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-gray-600'>Selected Service</p>
                <p className='text-lg font-semibold text-gray-900'>
                  {dataRes?.service}
                </p>
              </div>
              <div className='text-right'>
                <p className='text-sm text-gray-600'>Duration</p>
                <p className='text-lg font-semibold text-gray-900'>
                  {dataRes?.hours}{' '}
                  {dataRes?.hours > 8
                    ? 'minutes'
                    : dataRes?.hours > 1 && dataRes?.hours <= 8
                    ? 'hours'
                    : dataRes !== null && 'hour'}{' '}
                </p>
              </div>
            </div>
          </div>

          {/* Date Picker */}
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700 mb-3'>
              <Calendar className='w-4 h-4 inline mr-2' />
              Choose Date
            </label>
            <input
              type='date'
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
            />
          </div>

          {/* Time Slots */}
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700 mb-3'>
              <Clock className='w-4 h-4 inline mr-2' />
              Available Times
            </label>
            <div className='grid grid-cols-4 gap-3'>
              <button className='py-3 px-4 border-2 border-indigo-600 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition'>
                09:00 AM
              </button>
              <button className='py-3 px-4 border border-gray-300 bg-white text-gray-700 rounded-lg font-medium hover:border-indigo-400 transition'>
                10:00 AM
              </button>
              <button className='py-3 px-4 border border-gray-300 bg-white text-gray-700 rounded-lg font-medium hover:border-indigo-400 transition'>
                11:00 AM
              </button>
              <button className='py-3 px-4 border border-gray-300 bg-white text-gray-700 rounded-lg font-medium hover:border-indigo-400 transition'>
                12:00 PM
              </button>
              <button className='py-3 px-4 border border-gray-300 bg-white text-gray-700 rounded-lg font-medium hover:border-indigo-400 transition'>
                01:00 PM
              </button>
              <button className='py-3 px-4 border border-gray-300 bg-white text-gray-700 rounded-lg font-medium hover:border-indigo-400 transition'>
                02:00 PM
              </button>
              <button className='py-3 px-4 border border-gray-300 bg-white text-gray-700 rounded-lg font-medium hover:border-indigo-400 transition'>
                03:00 PM
              </button>
              <button className='py-3 px-4 border border-gray-300 bg-white text-gray-700 rounded-lg font-medium hover:border-indigo-400 transition'>
                04:00 PM
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Customer Details */}
      <div className='lg:col-span-1'>
        <div className='bg-white rounded-xl shadow-lg p-8'>
          <h3 className='text-2xl font-bold text-gray-900 mb-6'>
            Your Details
          </h3>

          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                <User className='w-4 h-4 inline mr-2' />
                Full Name
              </label>
              <input
                type='text'
                placeholder='John Doe'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                <Mail className='w-4 h-4 inline mr-2' />
                Email
              </label>
              <input
                type='email'
                placeholder='john@example.com'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                <Phone className='w-4 h-4 inline mr-2' />
                Phone
              </label>
              <input
                type='tel'
                placeholder='+1 (555) 000-0000'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                <MapPin className='w-4 h-4 inline mr-2' />
                Location
              </label>
              <select className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent'>
                <option>Select location</option>
                <option>Downtown Office</option>
                <option>Uptown Branch</option>
                <option>Virtual Meeting</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Additional Notes
              </label>
              <textarea
                rows={3}
                placeholder='Any special requests or notes...'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none'
              ></textarea>
            </div>
          </div>

          {/* Booking Summary */}
          <div className='mt-6 pt-6 border-t border-gray-200'>
            <div className='flex justify-between items-center mb-4'>
              <span className='text-gray-600'>Subtotal</span>
              <span className='font-semibold text-gray-900'>$100.00</span>
            </div>
            <div className='flex justify-between items-center mb-4'>
              <span className='text-gray-600'>Tax (10%)</span>
              <span className='font-semibold text-gray-900'>$10.00</span>
            </div>
            <div className='flex justify-between items-center text-lg font-bold mb-6'>
              <span>Total</span>
              <span className='text-indigo-600'>$110.00</span>
            </div>

            <button className='w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl'>
              Confirm Booking
            </button>

            <p className='text-xs text-gray-500 text-center mt-4'>
              By confirming, you agree to our Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookForm;
