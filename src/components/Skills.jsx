import React from 'react';

export default function Skills() {
  const skillset = [
    { img: 'https://ifraheem.com/wp-content/uploads/2024/11/python_5968350.png', alt: 'Python' },
    { img: 'https://ifraheem.com/wp-content/uploads/2024/11/django.png', alt: 'Django' },
    { img: 'https://ifraheem.com/wp-content/uploads/2024/11/Flask-1.png', alt: 'Flask' },
    { img: 'https://ifraheem.com/wp-content/uploads/2024/11/FastAPI.png', alt: 'FastAPI' },
    { img: 'https://ifraheem.com/wp-content/uploads/2024/11/python_5968350.png', alt: 'Python' },
    { img: 'https://ifraheem.com/wp-content/uploads/2024/11/django.png', alt: 'Django' },
    { img: 'https://ifraheem.com/wp-content/uploads/2024/11/Flask-1.png', alt: 'Flask' },
    { img: 'https://ifraheem.com/wp-content/uploads/2024/11/FastAPI.png', alt: 'FastAPI' },
    { img: 'https://ifraheem.com/wp-content/uploads/2024/11/python_5968350.png', alt: 'Python' },
    { img: 'https://ifraheem.com/wp-content/uploads/2024/11/django.png', alt: 'Django' },
    { img: 'https://ifraheem.com/wp-content/uploads/2024/11/Flask-1.png', alt: 'Flask' },
    { img: 'https://ifraheem.com/wp-content/uploads/2024/11/FastAPI.png', alt: 'FastAPI' },
    { img: 'https://ifraheem.com/wp-content/uploads/2024/11/python_5968350.png', alt: 'Python' },
    { img: 'https://ifraheem.com/wp-content/uploads/2024/11/django.png', alt: 'Django' },
    { img: 'https://ifraheem.com/wp-content/uploads/2024/11/Flask-1.png', alt: 'Flask' },
    { img: 'https://ifraheem.com/wp-content/uploads/2024/11/FastAPI.png', alt: 'FastAPI' },
  ];

  return (
    <div className="bg-white p-8">
      <h2 className="text-2xl font-semibold">
        Skills and Specializations 🔍
      </h2>

      <div className="mt-5 grid grid-cols-8 gap-x-4 gap-y-4">
        {skillset.map((skill, index) => (
          <div
            key={index}
            className="w-[60px] h-[60px] rounded-[16px] bg-light-bg-color flex justify-center items-center"
          >
            <img
              src={skill.img}
              alt={skill.alt || `Skill ${index}`}
              className="w-[48px] h-[48px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}