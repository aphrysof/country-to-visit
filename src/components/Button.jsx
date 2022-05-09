import React from 'react'
import Dropdown from '../logo/dropdown.png'

export const Button = () => {
  return (
    <>
         <button className = 'w-[200px] h-[50px] bg-[#F2F2F2] inline-flex items-center justify-between pl-3 rounded-[10px]'>Filter by Region<img src = {Dropdown} alt= 'dropdown' />
         </button>
    </>
  )
}
