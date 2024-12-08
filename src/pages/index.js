import Home from '@/components/Home'
import Modal from '@/components/Modal'
import Navbar from '@/components/Navbar'
import React from 'react'

const index = () => {
  return (
    <div className='bg_gradient'>
      <Navbar />
      <Home />
      {/* <Modal/> */}
    </div>
  )
}

export default index