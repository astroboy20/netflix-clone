'use client'

import React,{useEffect, useState} from 'react'
import { NavContent } from './header.style'
import Image from 'next/image'


const Header = () => {
  const [show,handleShow] = useState(false)

  const trasitionNavbar= () =>{
    if (window.scrollY > 100){
      handleShow(true)
    }else{
      handleShow(false)
    }
  }

useEffect(() => {
  window.addEventListener('scroll',trasitionNavbar)
  return ()=> window.removeEventListener('scroll',trasitionNavbar)

}, [])

  return (
    // the nav and nav_black style is under global styles
    <div className={`nav ${ show &&` nav_black`}`}>
      <NavContent>
        <Image
          src='/images/logo.png'
          height={100}
          width={100}
          alt='logo'
          className='nav_logo'
        />
        <Image
          src='/images/avatar.png'
          height={50}
          width={50}
          alt='avatar'
          className='nav_avatar'
        />
      </NavContent>
      
    </div>
  )
}

export  {Header}
