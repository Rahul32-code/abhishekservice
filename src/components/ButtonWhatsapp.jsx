import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const ButtonWhatsApp = () => {
  return (
    <div className='fixed bottom-5 right-5 z-50 flex items-center justify-center'>
      <a 
        href="https://wa.me/11234567890"
        target='_blank'
        rel='noopener noreferrer'
        className=' text-white shadow-lg rounded-xl p-2 bg-green-500 hover:bg-green-600 transition duration-300'
      >
        <FaWhatsapp className='text-6xl w-10 h-10' />
      </a>
    </div>
  )
}

export default ButtonWhatsApp
