import { useState } from 'react';

export default function ProductModal() {
  const [selectedColor, setSelectedColor] = useState('black');
  const [isOpen, setIsOpen] = useState(true);

  const colors = [
    { name: 'black', class: 'bg-gray-900' },
    { name: 'white', class: 'bg-white border-2 border-gray-300' },
    { name: 'gray', class: 'bg-gray-500' },
  ];

  if (!isOpen) {
    return (
      <div className='min-h-screen bg-gray-400 flex items-center justify-center p-4'>
        <button
          onClick={() => setIsOpen(true)}
          className='px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors'
        >
          Open Product Modal
        </button>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-400 flex items-center justify-center p-4'>
      {/* Modal Overlay */}
      <div
        className='fixed inset-0 bg-black bg-opacity-50 z-40'
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Container */}
      <div className='relative bg-white rounded-lg shadow-2xl max-w-5xl w-full z-50 overflow-hidden'>
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className='absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10'
        >
          X
        </button>

        {/* Modal Content */}
        <div className='grid md:grid-cols-2 gap-8 p-6 sm:p-8 lg:p-12'>
          {/* Product Image */}
          <div className='flex items-center justify-center bg-gray-50 rounded-lg p-8'>
            <img
              src='https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=600&fit=crop'
              alt='Zip Tote Basket'
              className='w-full h-auto max-w-md object-contain'
            />
          </div>

          {/* Product Details */}
          <div className='flex flex-col justify-center space-y-6'>
            <div>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3'>
                Zip Tote Basket
              </h2>
              <p className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                $220
              </p>

              {/* Star Rating */}
              <div className='flex gap-1 mb-6'>
                {[1, 2, 3, 4].map((star) => (
                  <svg
                    key={star}
                    className='w-6 h-6 fill-gray-400'
                    viewBox='0 0 20 20'
                  >
                    <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                  </svg>
                ))}
                <svg className='w-6 h-6 fill-gray-300' viewBox='0 0 20 20'>
                  <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                </svg>
              </div>
            </div>

            {/* Description */}
            <p className='text-gray-600 leading-relaxed text-base sm:text-lg'>
              The Zip Tote Basket is the perfect midpoint between shopping tote
              and comfy backpack. With convertible straps, you can hand carry,
              should sling, or backpack this convenient and spacious bag. The
              zip top and durable canvas construction keeps your goods protected
              for all-day use.
            </p>

            {/* Color Selection */}
            <div>
              <h3 className='text-gray-900 font-semibold mb-3 text-lg'>
                Color
              </h3>
              <div className='flex gap-3'>
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${color.class} ${
                      selectedColor === color.name
                        ? 'ring-2 ring-offset-2 ring-gray-900'
                        : 'hover:ring-2 hover:ring-offset-2 hover:ring-gray-400'
                    } transition-all`}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className='space-y-4 pt-4'>
              <button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-lg transition-colors text-lg'>
                Add to bag
              </button>
              <button className='w-full text-indigo-600 hover:text-indigo-700 font-semibold py-2 transition-colors text-lg'>
                View full details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
