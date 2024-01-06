import React from 'react'
import Card from './Sub components/Card'

function why() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[50px] font-[Gilroybold] text-[#023E8A] my-8">Why DocOrganizer ?</h1>
        <p className='w-1/2 mx-auto text-center font-[Gilroy] text-[#ababa9]'>You will have all the features to import your Inbound & Outbound leads in real-time from your CRM, qualify them, schedule appointments, and earn points</p>
      </div>
      <div className='flex flex-row justify-between mx-20 space-x-10'>
        <Card
          icon="../../../../public/icon1.svg"
          title="Efficient Management"
          text="The platform offers comprehensive features to efficiently qualify leads, ensuring a streamlined and effective lead management process"
        />
        <Card
          icon="../../../../public/icon2.svg"
          title="Time-saving"
          text="Take advantage of the scheduling capabilities on our website to easily book and manage appointments."
        />
        <Card
          icon="../../../../public/icon3.svg"
          title="User friendly"
          text="Enjoy a hassle-free experience while efficiently managing your leads and appointments."
        />
      </div>
    </>
  )
}

export default why