import React from 'react';

export default function HirringSection() {
  return (
    <div className="bg-white rounded-xl p-8 space-y-8">
      {/* First Section */}
      <div className="space-y-6">
        {/* Available For Hire Badge */}
        <div className="w-fit bg-blue-600 text-white px-4 py-2 rounded-full shadow-md">
          <span className="text-sm font-semibold">Available For Hire</span>
        </div>

        {/* About Bio Section */}
        <div id="about-bio">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="text">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Hi, This Is <span className="text-blue-600">Faizan Ali</span> 👋
              </h2>
              <p className="mt-2 text-gray-600 text-base leading-relaxed">
                A Passionate <strong className='text-xl'>Full Stack + MERN Stack Developer</strong> 🌐 &amp; <strong className='text-xl'  >App Developer</strong> with <strong className='text-xl'>3 years</strong> of experience in WordPress and custom solutions for clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Stats */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center p-5">
        {/* Experience */}
        <div>
          <h3 className="text-3xl font-bold">3+</h3>
          <p className="text-gray-700">Year of Experience</p>
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-3xl font-bold">28+</h3>
          <p className="text-gray-700">Project Completed</p>
        </div>

        {/* Clients */}
        <div>
          <h3 className="text-3xl font-bold">100%</h3>
          <p className="text-gray-700">Happy Client</p>
        </div>
      </div>
    </div>
  );
}
