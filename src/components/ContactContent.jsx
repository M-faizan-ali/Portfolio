import React, { useState } from 'react';
import Navbar from './Navbar';

const ContactContent = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    cardHolder: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData({
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      cardHolder: '',
    });
  };

  return (
    <>
        <div className=''>
            <div className="container mx-auto p-8">
                <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                    Let's 👋 Work Together
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    I'm here to help if you're looking for a Software Engineer to bring your idea to life or a tech partner to elevate your business.          
                </p>
                </div>
                <div className="w-full  mx-auto">
                <div className="bg-light-bg-color rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-6">Payment Information</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                        <label
                            htmlFor="cardNumber"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter Your Name"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        </div>
                        <div>
                        <label
                            htmlFor="expirationDate"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name=""
                            id=""
                            placeholder="Enter Your Email"
                            value={formData.expirationDate}
                            onChange={handleChange}
                            className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        </div>
                        <div>
                        <label
                            htmlFor="cvv"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Phone
                        </label>
                        <input
                            type="number"
                            name=""
                            id=""
                            placeholder="Enter Your Number"
                            value={formData.cvv}
                            onChange={handleChange}
                            className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        </div>
                        <div>
                        <label
                            htmlFor="cardHolder"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Subject"
                            value={formData.cardHolder}
                            onChange={handleChange}
                            className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-800 text-white font-medium py-3 rounded-lg focus:outline-none"
                    >
                        Submit
                    </button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </>

  );
};

export default ContactContent;
