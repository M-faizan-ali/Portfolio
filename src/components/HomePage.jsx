import React from 'react'
import ProfileCard from './Profilecard'
import MainHomePage from './MainHomePage'
import RecentProjects from './RecentProjects'
import ServicesOffered from './ServicesOffered'
import WorkTogether from './WorkTogether'
import Accordion from './Accordian'
import Navbar from './Navbar'

export default function HomePage() {
  return (
  <>
      <Navbar/>
      <div className="flex gap-5 p-3">
      <div className="w-1/3 fi">
        <ProfileCard />
      </div>
      <div className="w-1/3">
        <MainHomePage />
      </div>
      <div className="w-1/3">
        <RecentProjects />
      </div>
    </div>


    <div className='flex gap-5 p-3'> {/* Added items-stretch */}
      {/* First child - 2/3 width */}
      <div className='w-2/3'>
        <ServicesOffered />
      </div>

      {/* Second child - 1/3 width */}
      <div className='w-1/3 overflow-hidden'>
        <WorkTogether />
      </div>
    </div>

    
  </>

  )
}
