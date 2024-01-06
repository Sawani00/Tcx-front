import React from 'react'
import Editpatient from './Editpatient'
import Addpatient from './Addpatient'
import Userprofile from './Userprofile'

function HomeUser() {
  return ( 
    <>
      <div className="flex flex-row">
        <Userprofile/>
      </div>
    </>   
  )
}

export default HomeUser