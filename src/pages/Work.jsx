import React from 'react'
import ProfileCard from '../components/Profilecard'
import WorkContent from '../components/WorkContent'
import Navbar from '../components/Navbar'

export default function Work() {
  return (
    <div>
      <Navbar/>
      <div className='flex gap-5 w-[90%] m-auto'>
        <div className='w-[30%]'>
            <ProfileCard/>
        </div>
        <div className='bg-white rounded-xl w-[70%]'>
            <WorkContent />
        </div>
      </div>
    </div>
  )
}
