import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react'; // Import the icons

const Testimonial = () => {
  const testimonials = [
    {
      stars: 5,
      company: 'Aesky Drive',
      text:
        'Ifraheem did an excellent job developing my WordPress website, Aeskydrive.com. He was professional, efficient, and attentive to every detail, delivering a site that perfectly matches my needs. Highly recommended!',
      author: 'M Wajid',
      role: 'CEO, Aesky Drive',
    },
    {
      stars: 5,
      company: 'Farmar.com',
      text:
        "We've been using BentoFolio for over a year now, and I must say, it's been a game-changer for us. The user interface is intuitive and the feature...",
      author: 'Oliver Clain',
      role: 'Product Designer',
    },
    {
      stars: 4,
      company: 'TechCorp',
      text:
        "Impressed with the speed and quality of work.  Delivered ahead of schedule.",
      author: "Alice Smith",
      role: "CTO",
    },
    {
      stars: 5,
      company: "Global Innovations",
      text:
        "Exceptional service!  Understood our needs perfectly and provided a tailored solution.",
      author: "Bob Johnson",
      role: "CEO",
    }
  ];

  const [startIndex, setStartIndex] = useState(0);

  const displayedTestimonials = testimonials.slice(startIndex, startIndex + 2);
  const showPrev = startIndex > 0;
  const showNext = startIndex + 2 < testimonials.length;


  const renderStars = (count) => { // Removed type annotation :number
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />);
    }
    return stars;
  };

  const handlePrev = () => {
    setStartIndex(Math.max(0, startIndex - 2));
  };

  const handleNext = () => {
    setStartIndex(Math.min(testimonials.length - 2, startIndex + 2));
  };


  return (
    <div className="bg-white p-8">
      {/* 1st Testimonial section  */}
      <div className="flex justify-between items-center">
        <div className='mb-5'>
          <h2 className="text-2xl font-semibold">Trusted By 1200+ Clients</h2>
        </div>
        <div className="flex gap-2">
          <button
            className={`text-gray-500  rounded-full p-1 ${showPrev ? "hover:text-blue-700" : "cursor-not-allowed opacity-50"}`}
            onClick={handlePrev}
            disabled={!showPrev}
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <button
            className={`text-gray-500  rounded-full p-1 ${showNext ? "hover:text-blue-700" : "cursor-not-allowed opacity-50"}`}
            onClick={handleNext}
            disabled={!showNext}
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* second testimonial section with reviews  */}
      <div className="flex  gap-6">
        {displayedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-light-bg-color backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10  w-1/2"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">{renderStars(testimonial.stars)}</div>
              <span
                className="text-blue-400  flex items-center gap-1 text-sm"

              >
                {testimonial.company}

              </span>
            </div>
            <p className=" mb-4 font-medium">
              {testimonial.text}
            </p>
            <p className="text-gray-400 font-bold">{testimonial.author}</p>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
