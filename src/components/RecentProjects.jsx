import React from 'react';

export default function RecentProjects() {
  const recentProjects = [
    {
      img: 'https://ifraheem.com/wp-content/uploads/2024/05/project-1.png',
      title: 'Product Design'
    },
    {
      img: 'https://ifraheem.com/wp-content/uploads/2024/05/project-2.png',
      title: 'Development'
    }
  ];

  return (
    <div className='bg-white p-[50px] rounded-xl'>
      <h1 className='text-xl font-bold mb-4'>Recent Projects</h1>
      <div className='flex flex-col gap-9'>
        {
          recentProjects.map((recentproj, index) => (
            <div key={index} className='relative cursor-pointer'>
              <img
                src={recentproj.img}
                alt={`Project ${index + 1}`}
                className='w-full rounded shadow'
              />
              <p className='absolute bottom-5 left-2 bg-white border border-gray-300 w-[150px] text-center text-blue-600 text-sm py-1 px-2 rounded'>
                {recentproj.title}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
