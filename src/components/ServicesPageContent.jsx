import React from 'react'
import Skills from './Skills';
import Accordion from './Accordian';

export default function ServicesPageContent() {
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
    <div className='bg-white p-9 rounded-xl'>
        {/* 1st section */}
        <div className='pb-[40px]'>
            <h1 className='text-4xl mb-[30px]'>Services I  <span className='text-blue-600'>Offered</span></h1>
            <p className='text-2xl  '>I deliver quality web, app, and API solutions, turning ideas into impactful digital experiences with custom and cloud development</p>
        </div>
        
        {/* second section  */}
        <div className='rounded-xl mt-[40px] mb-[50px]'>
            <div className='mt-5 grid grid-cols-4 gap-4'> 
                {offeredServices.map((service, index) => (
                <div
                    key={index}
                    className='p-[18px] bg-light-bg-color  rounded-xl flex flex-col items-center' // Adjusted width
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

        {/* 3rd section  */}
        <div>
            <img src="https://ifraheem.com/wp-content/uploads/2024/12/I-will-solve-all-your-awsgcpazure-wordpress-devops-issues.jpeg" alt="" className='w-[100%]' />
        </div>

        {/* 4th section  */}

        <Skills/>

        {/* 5th section  */}
        <Accordion/>

    </div>
  )
}



