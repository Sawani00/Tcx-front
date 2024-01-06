import React from 'react'

function Card({ icon, title, text }) {
  return (
  <>
    <div className="flex flex-col bg-white p-10 rounded-[16px] shadow-lg w-1/3 font-[Gilroybold]">
        {icon && <img src={icon} alt="Icon" className="mr-2 h-6 w-6 my-10" />}  
        <h2 className="text-lg mb-6">{title}</h2>
        <p className="mb-10 font-[Gilroy] text-[15px]">{text}</p>
    </div>
  </>
  )
}

export default Card