import React from 'react'

const plans = [
  {
    id: 'Basic',
    title: 'Basic',
    price: '$19',
    subtitle: 'For individuals',
    features: [
      '10 projects',
      '50GB storage',
      'Basic support',
      'No branding',
      'Limited analytics',
    ],
  },
  {
    id: 'Business',
    title: 'Business',
    price: '$79',
    subtitle: 'Perfect for  businesses',
    features: [
      'Unlimited projects & users',
      '500GB storage',
      '24/7 premium support',
      'Custom branding',
      'Analytics dashboard',
    ],
    popular: true,
  },
  {
    id: 'Enterprise',
    title: 'Enterprise',
    price: '$199',
    subtitle: 'Best for large ',
    features: [
      'Unlimited everything',
      '2TB storage',
      'Dedicated support',
      'Custom integrations',
      'Advanced reporting',
    ],
  },
]

const BuyCredits = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-16 text-gray-800">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Choose Your <span className="text-indigo-500">Plan</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {plans.map((plan) => (
          <div key={plan.id} className="relative max-w-80 w-full">
            {plan.popular && (
              <div className="absolute inset-x-0 top-1 flex justify-center z-10">
                <span className="rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mt-4 rounded-lg border-2 md:border-1 border-gray-800 bg-white shadow-lg flex flex-col h-full">
              <div className="border-b p-6">
                <h3 className="text-2xl md:text-1xl font-bold">{plan.title}</h3>
                <p className="text-gray-500">{plan.subtitle}</p>
              </div>

              <div className="p-6 flex-grow">
                <div className="mb-4 flex items-baseline">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="ml-1 text-sm text-gray-500">/100 credits</span>
                </div>

               
              </div>

              <div className="border-t p-6">
                <button className="w-full rounded-lg bg-gray-800 px-4 py-2 text-white transition-opacity hover:opacity-90">
                  Choose {plan.title}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredits
