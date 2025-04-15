import React from 'react'
import ProfileCard from '../components/Profilecard'
import ContactContent from '../components/ContactContent'
import Navbar from '../components/Navbar'
import Accordion from '../components/Accordian'

export default function Contact() {
  return (
    <div>
        <Navbar />
      <div className='flex gap-5 w-[90%] m-auto'>
        <div className='w-[30%]'>
            <ProfileCard/>
        </div>
        <div className='w-[70%]'>
            <ContactContent />
            <Accordion />
        </div>
      </div>
    </div>
  )
}
