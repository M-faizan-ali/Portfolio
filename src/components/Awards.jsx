import React from 'react';
import { ArrowRight, File } from 'lucide-react';

const AwardCard = ({ title, date, imageUrl, percentage }) => {
  return (
    <div className="bg-gray-50 hover:bg-white cursor-pointer border border-gray-200 rounded-lg p-8 flex items-center justify-between shadow-md mb-4 ">
      {/* First Child Div (Flex Row) */}
      <div className="flex items-center space-x-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      {/* Second Child Div (Flex Row) */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center mr-8">
          <File className="w-5 h-5 mr-2 " />
          <span className="text-xl font-semi-bold">{percentage}</span>
        </div>
        <button className="bg-white border border-gray-300 rounded-full px-4 py-2 flex items-center shadow-md hover:shadow-md transition-shadow duration-200">
          <span className="text-sm font-medium">Certificate</span>
          <ArrowRight className="w-5 h-5 ml-2 transform rotate-360 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

const Awards = () => {
  const awardsData = [
    {
      title: 'Python Data Structures',
      date: 'June, 2023',
      imageUrl: 'https://ifraheem.com/wp-content/uploads/2024/11/python_5968350.png',
      percentage: '100%',
    },
    {
      title: 'JavaScript Algorithms',
      date: 'May, 2023',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png',
      percentage: '95%',
    },
    {
      title: 'React Fundamentals',
      date: 'April, 2023',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      percentage: '100%',
    },
        {
      title: 'Node.js Basics',
      date: 'March, 2023',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      percentage: '80%',
    },
    {
      title: 'React.js',
      date: 'February, 2023',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      percentage: '90%',
    },
  ];

  return (
    <div className="bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Awards and Recognitions</h2>
        {awardsData.map((award, index) => (
          <AwardCard
            key={index}
            title={award.title}
            date={award.date}
            imageUrl={award.imageUrl}
            percentage={award.percentage}
          />
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
};

export default Awards;
