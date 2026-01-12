'use client';

import { User, Mail, Phone, MapPin } from 'lucide-react';
import { handleCustomerDetailsSubmit } from '@/actions/query';

type CustomerProps = {
  availability: boolean;
  timestamp?: number;
};

function CustomerDetails({ availability, timestamp }: CustomerProps) {
  return (
    <form action={handleCustomerDetailsSubmit}>
      {/* Right Column - Customer Details */}
      <input type='hidden' name='timestamp' value={timestamp ?? ''} />
      <div
        className={`lg:col-span-1 ${
          availability && 'pointer-events-none opacity-50 cursor-not-allowed'
        }`}
      >
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
                name='full-name'
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
                name='email'
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
                name='tel'
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
    </form>
  );
}
export default CustomerDetails;
