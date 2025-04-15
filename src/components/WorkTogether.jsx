import React from 'react';
import { motion } from 'framer-motion';

export default function WorkTogether() {
  return (
    <div className='bg-white border border-gray-300 rounded-xl p-[40px] h-[300px]'>
      <div className="bg-light-bg-color p-2 rounded-xl w-full backdrop-blur-md overflow-hidden">
        <div className="flex items-center">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{
              repeat: Infinity,
              duration: 30, // smooth and slow
              ease: 'linear',
              repeatType: 'loop',
            }}
            className="whitespace-nowrap font-medium text-gray-400 text-sm md:text-base"
          >
            Available For Hire 🚀 Crafting Digital Experiences 🎨 Available For Hire 🚀 Crafting Digital Experiences 🎨
          </motion.div>
        </div>
      </div>


      <div className='mt-6 text-3xl font-bold text-gray-800'>
        Let's 👋 <br />
        Work Together
      </div>

      <button className='mt-4 px-5 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all'>
        Let's Talk
      </button>
    </div>
  );
}
