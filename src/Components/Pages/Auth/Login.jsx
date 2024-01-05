import React from 'react'
import Title from './Title'

function Login() {
  return (
    <>
    <div class="flex flex-row justify-between">
      <div>
        <img src="../../public/doctor1.svg" alt="Image1" />
      </div>
      <div>
        <Title/>
      </div>
      <div>
        <img src="../../public/doctor2.svg" alt="Image2"/>
      </div>
    </div>
    </>
  )
}

export default Login