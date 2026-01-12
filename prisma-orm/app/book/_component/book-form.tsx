'use client';
import { Calendar, Clock } from 'lucide-react';
import { BookContext } from '@/app/book/_context/BookContext';
import { useContext, useState, useEffect } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import CustomerDetails from './customer-details';

// 2026-01-22 11:00 AM 1769050800000
// 2026-01-11 04:00 PM 1768118400000
// 2026-01-11 09:00 AM 1768093200000
const booked = [1769050800000, 1768118400000, 1768093200000];

function BookForm() {
  const { data } = useContext(BookContext);
  const dataRes = data[0] || [];

  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const availableTime = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
  ];

  console.log(selectedDate, selectedTime);

  dayjs.extend(customParseFormat);

  const tsValue = dayjs(
    `${selectedDate} ${selectedTime}`,
    'YYYY-MM-DD h:mm A'
  ).valueOf();

  const timestamp = isNaN(tsValue) ? undefined : tsValue;

  console.log(selectedDate, selectedTime, timestamp);

  const availability = booked.includes(tsValue) || false;

  console.log('avaialability', availability);

  return (
    <div className={`grid lg:grid-cols-3 gap-8 `}>
      {/* Left Column - Date & Time */}
      <div className='lg:col-span-2'>
        <div className='bg-white rounded-xl shadow-lg p-8'>
          <h3 className='text-2xl font-bold text-gray-900 mb-6'>
            Select Date & Time
          </h3>
          {/* Selected Service Display */}
          <div
            className={`${
              !dataRes?.service &&
              'pointer-events-none opacity-50 cursor-not-allowed'
            } bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-6`}
          >
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
          <div
            className={`${
              !dataRes?.service &&
              'pointer-events-none opacity-50 cursor-not-allowed'
            } mb-6`}
          >
            <label className='block text-sm font-medium text-gray-700 mb-3'>
              <Calendar className='w-4 h-4 inline mr-2' />
              Choose Date
            </label>
            <input
              type='date'
              value={selectedDate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSelectedDate(e.target.value)
              }
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
            />
          </div>
          {/* Time Slots */}
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700 mb-3'>
              <Clock className='w-4 h-4 inline mr-2' />
              Available Times
            </label>
            <div
              className={`grid grid-cols-4 gap-3 ${
                !selectedDate &&
                'pointer-events-none opacity-50 cursor-not-allowed'
              }`}
            >
              {availableTime.map((available) => (
                <button
                  onClick={() => setSelectedTime(available)}
                  key={available}
                  className={`py-3 px-4 border-2 border-indigo-800  text-white rounded-lg font-medium hover:bg-indigo-700 transition cursor-pointer
                    ${
                      selectedTime === available
                        ? 'bg-indigo-700'
                        : 'bg-indigo-500'
                    }
                    `}
                >
                  {available}
                </button>
              ))}
            </div>
          </div>
          {selectedTime && (
            <div
              className={`p-4 font-bold text-center ${
                availability ? 'bg-red-600' : 'bg-green-400'
              }`}
            >
              {availability ? 'Not Available' : 'Available'}
            </div>
          )}
        </div>
      </div>

      <CustomerDetails
        availability={availability}
        timestamp={timestamp}
        total={dataRes.price}
      />
    </div>
  );
}
export default BookForm;
