import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServicesOffered() {
  const offeredServices = [
    {
      img: 'https://ifraheem.com/wp-content/uploads/2024/11/web-dev.webp',
      title: 'web development',
    },
    {
      img: 'https://ifraheem.com/wp-content/uploads/2024/11/api-2.webp',
      title: 'API Development',
    },
    {
      img: 'https://ifraheem.com/wp-content/uploads/2024/11/app-2.webp',
      title: 'Mobile App',
    },
    {
      img: 'https://ifraheem.com/wp-content/uploads/2024/11/wp.webp',
      title: 'WordPress',
    },
  ];

  return (
    <div className='bg-white p-9  rounded-xl h-[300px]'>
      <div className="flex justify-between items-center">
        <p className="capitalize text-2xl font-semibold">Services I offer</p>
        <a
          href="#"
          className="flex items-center gap-1 text-blue-600 underline underline-offset-2 decoration-blue-600/30 "
        >
          See all services
          <ArrowRight size={16} />
        </a>
      </div>

      <div className='mt-5 flex  justify-start gap-5'> {/* Added flex-wrap and justify-start */}
        {offeredServices.map((service, index) => (
          <div
            key={index}
            className='p-[18px] bg-[#f0f2f5] w-[250px] rounded-xl flex flex-col items-center' // Adjusted width
          >
            <div className='flex justify-center items-center bg-white p-[24px] rounded-xl w-[120px]'> {/* Added h and w for container */}
              <img
                src={service.img}
                alt={service.title}
                className='max-h-[100%] max-w-[100%] object-contain' // Adjusted image styling
              />
            </div>
            <p className='text-center pt-3 capitalize font-semibold'>{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
