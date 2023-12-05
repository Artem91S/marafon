import React from 'react'
import Button from '../ui/Button'

function Header() {
  return (
    <header className='flex justify-between border-b-[1px] item-center p-3 sticky top-0 backdrop-blur-md w-full z-10'> 
    <div>
      <span className=' font-semibold text-[24px]'>A</span>
      <span className='text-[40px]'>.</span>
      <span className='font-semibold text-[24px] text-btnColor'>Б</span></div>
    <Button 
    style='px-3 py-2 text-[18px]' />
    </header>
  )
}

export default Header