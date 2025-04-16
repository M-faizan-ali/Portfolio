import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function WorkContent() {
  const recentProjects = [
    {
      img: 'https://ifraheem.com/wp-content/uploads/2024/12/aesky-home-e1735561802602.jpeg',
      title: 'Product Design',
      role: 'UI UX Design | WordPress',
      companyName: 'Aesky Drive – Driving Company',
    },
    {
        img: 'https://ifraheem.com/wp-content/uploads/2024/12/aesky-home-e1735561802602.jpeg',
        title: 'Product Design',
        role: 'UI UX Design | WordPress',
        companyName: 'Aesky Drive – Driving Company',
      },
  ];

  return (
    <div className="space-y-10 p-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl mt-5">
          Check Out My Latest <span className="text-blue-600">Projects</span>
        </h1>
        <p className="text-xl mt-5">
          I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.
        </p>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-9">
        {recentProjects.map((recentproj, index) => (
          <div key={index} className="group">
            {/* Image Section */}
            <div className="relative cursor-pointer">
              <img
                src={recentproj.img}
                alt={`Project ${index + 1}`}
                className="w-full rounded shadow"
              />
              <p className="absolute bottom-5 left-2 bg-white border border-gray-300 w-[150px] text-center text-blue-600 text-sm py-1 px-2 rounded">
                {recentproj.title}
              </p>
            </div>

            {/* Info Section */}
            <div className=" flex justify-between space-y-2 p-4">
                <div>
                    <h2 className="text-xl font-semibold">
                        {recentproj.companyName || 'Project Name'}
                    </h2>
                    {recentproj.role && (
                        <p className="text-gray-700 text-sm">{recentproj.role}</p>
                    )}
                </div>
              
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
                Visit Site
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

       <div className="bg-gray-200 w-full overflow-hidden flex items-center justify-center py-4">
      <p className="whitespace-nowrap text-5xl text-black animate-scroll-text">
        .Let's 👋 Work Together
      </p>
      <style jsx global>{`
        @keyframes scrollText {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll-text {
          animation: scrollText 10s linear infinite; /* Adjust duration as needed */
        }
      `}</style>
      </div>
    </div>
  );
}
