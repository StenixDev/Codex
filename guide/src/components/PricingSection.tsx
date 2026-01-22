export default function PricingSection() {
  const plans = [
    {
      name: 'Freelancer',
      description: 'The essentials to provide your best work for clients.',
      price: 19,
      popular: false,
      features: [
        '5 products',
        'Up to 1,000 subscribers',
        'Basic analytics',
        '48-hour support response time',
      ],
    },
    {
      name: 'Startup',
      description: 'A plan that scales with your rapidly growing business.',
      price: 49,
      popular: true,
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
        'Marketing automations',
      ],
    },
    {
      name: 'Enterprise',
      description: 'Dedicated support and infrastructure for your company.',
      price: 99,
      popular: false,
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
      ],
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <p className='text-indigo-600 font-semibold text-sm sm:text-base mb-3'>
            Pricing
          </p>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
            Pricing that grows with you
          </h1>
          <p className='text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed'>
            Choose an affordable plan that's packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl shadow-sm border-2 p-8 relative flex flex-col ${
                plan.popular ? 'border-indigo-600' : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className='absolute top-0 right-8 transform -translate-y-1/2'>
                  <span className='inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-600'>
                    Most popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                {plan.name}
              </h3>

              {/* Description */}
              <p className='text-gray-600 text-sm mb-6 leading-relaxed'>
                {plan.description}
              </p>

              {/* Price */}
              <div className='mb-8'>
                <span className='text-4xl sm:text-5xl font-bold text-gray-900'>
                  ${plan.price}
                </span>
                <span className='text-gray-600 text-base ml-1'>/month</span>
              </div>

              {/* Features List */}
              <ul className='space-y-4 mb-8 grow'>
                {plan.features.map((feature, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    ✔️
                    <span className='text-gray-600 text-sm leading-relaxed'>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Buy Button */}
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50'
                }`}
              >
                Buy plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
