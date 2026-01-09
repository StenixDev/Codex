import { CheckCircle } from 'lucide-react';

function Modal() {
  return (
    <div className='mt-16 bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto hidden'>
      <div className='text-center'>
        <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
          <CheckCircle className='w-10 h-10 text-green-600' />
        </div>
        <h3 className='text-3xl font-bold text-gray-900 mb-2'>
          Booking Confirmed!
        </h3>
        <p className='text-gray-600 mb-8'>
          Your appointment has been successfully scheduled
        </p>

        <div className='bg-gray-50 rounded-lg p-6 text-left mb-6'>
          <h4 className='font-semibold text-gray-900 mb-4'>
            Appointment Details
          </h4>
          <div className='space-y-3 text-sm'>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Service:</span>
              <span className='font-medium text-gray-900'>
                Standard Service
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Date:</span>
              <span className='font-medium text-gray-900'>
                January 15, 2026
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Time:</span>
              <span className='font-medium text-gray-900'>09:00 AM</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Location:</span>
              <span className='font-medium text-gray-900'>Downtown Office</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Confirmation #:</span>
              <span className='font-medium text-gray-900'>BK-2026-0001</span>
            </div>
          </div>
        </div>

        <div className='flex gap-4'>
          <button className='flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition'>
            Add to Calendar
          </button>
          <button className='flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:border-indigo-400 transition'>
            View Receipt
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
