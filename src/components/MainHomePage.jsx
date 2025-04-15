import React from 'react';
import RecentProjects from './RecentProjects';

export default function MainHomePage() {
  const jobs = [
    {
      startDate: "Jan 2022",
      endDate: "Dec 2023",
      logo: "https://ifraheem.com/wp-content/uploads/2024/11/xactmind.jpeg.webp",
      company: "TechCorp Inc.",
      title: "Frontend Developer",
    },
    {
      startDate: "Feb 2021",
      endDate: "Dec 2021",
      logo: "https://ifraheem.com/wp-content/uploads/2024/11/xactmind.jpeg.webp",
      company: "DevSolutions",
      title: "Full Stack Developer",
    },
    {
      startDate: "Mar 2020",
      endDate: "Jan 2021",
      logo: "https://ifraheem.com/wp-content/uploads/2024/11/xactmind.jpeg.webp",
      company: "Cloudify",
      title: "React Developer",
    },
    {
      startDate: "Jun 2019",
      endDate: "Feb 2020",
      logo: "https://ifraheem.com/wp-content/uploads/2024/11/xactmind.jpeg.webp",
      company: "AppTech",
      title: "Junior Developer",
    },
  ];
  const expertAreas = [
    { src: "https://ifraheem.com/wp-content/uploads/2024/11/python_5968350.png", title: "Python" },
    { src: "https://ifraheem.com/wp-content/uploads/2024/11/django.png", title: "Django" },
    { src: "https://ifraheem.com/wp-content/uploads/2024/11/Flask-1.png", title: "Flask" },
    { src: "https://ifraheem.com/wp-content/uploads/2024/11/FastAPI.png", title: "Fast Api" },
    { src: "https://ifraheem.com/wp-content/uploads/2024/11/js_5968292.png", title: "JavaScript" },
    { src: "https://ifraheem.com/wp-content/uploads/2024/11/atom_17711611.png", title: "React js" },
    { src: "https://ifraheem.com/wp-content/uploads/2024/11/Node.js.png", title: "Node js" },
    { src: "https://ifraheem.com/wp-content/uploads/2024/11/MongoDB.png", title: "MongoDB" },
  ];

  return (
    <div className="">

      <div className="flex flex-col flex flex-cols gap-5">
        {/* This is first div for marque  */}
        <div className='bg-white rounded-xl shadow-lg  p-[25px] '>
            <h1 className="text-2xl font-bold mb-6">Work Experience</h1>

            <div className="overflow-hidden h-64 relative">
                <div className="space-y-6 animate-scroll">
                    {jobs.map((job, index) => (
                    <div key={index} className="flex gap-6 items-start">
                        {/* Left Column: Dates */}
                        <div className="w-1/4 text-gray-600 text-sm">
                        <p>{job.startDate} - {job.endDate}</p>
                        </div>

                        {/* Right Column: Logo + Text */}
                        <div className="w-3/4 flex gap-4 items-center">
                        <img
                            src={job.logo}
                            alt={job.company}
                            className="w-[20px] h-[20px] object-contain"
                        />
                        <div>
                            <p className="text-base font-semibold">{job.company}</p>
                            <p className="text-sm text-gray-600">{job.title}</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        {/* This is second div contains expert area  */}
        <div className='bg-white p-5 rounded-xl'>
            <div>
                <h2 className="text-2xl font-bold mb-6">My expert area</h2>
            </div>
            <div className='grid grid-cols-4 bg-white gap-5'>
                    {expertAreas.map((area, index) => (
                    <div key={index}>
                        <div className='pt-[14px] pb-[14px] pl-[10px] pr-[10px] bg-[#f0f2f5] text-center rounded'>
                        <img src={area.src} alt={area.title} className='w-[32px] h-[32px] mx-auto' />
                        </div>
                        <p className='text-center mt-2'>{area.title}</p>
                    </div>
                    ))}
            </div>
        </div> 
      </div>
    </div>
  );
}
