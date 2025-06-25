import React from 'react'

const clients = [
  {
    name: 'Michael',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
  },
  {
    name: 'James',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
  },
  {
    name: 'Emily',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
  },
  {
    name: 'John',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
]

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center text-slate-800 py-12">
      <h2 className="text-3xl font-medium mb-2">
        Happy{' '}
        <span className="text-indigo-500 font-bold">
          Clients
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {clients.map((client, index) => (
          <div key={index} className="relative group flex flex-col items-center">
            <p className="opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition duration-300 mb-3 px-2 py-1 text-sm font-medium">
              {client.name}
            </p>
            <img
              src={client.image}
              alt={client.name}
              className="w-20 h-20 rounded-full border-4 border-white hover:-translate-y-1 transition hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
