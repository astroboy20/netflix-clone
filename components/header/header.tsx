'use client'

import React,{useEffect, useState} from 'react'
import { NavContent } from './header.style'
import Image from 'next/image'
import { Search,Bell } from 'heroicons-react'
import Link from 'next/link'
import useAuth from '@/utils/hooks/useAuth'


const Header = () => {
  const [show,handleShow] = useState(false)
  //logout

  const {logOut}= useAuth()
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
        <div className="left">
          <Image
            src='/images/logo.png'
            height={100}
            width={100}
            alt='logo'
            className='nav_logo'
          />
          <ul className='links'>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
          </ul>
        </div>
        
        <div className="right">
          <div className="icon">
            <Search/>
            {/* <p>Kids</p> */}
            <Bell className='icon-bell'/>
            
          </div>
          {/* <Link href=''> */}
            <Image
              src='/images/avatar.png'
              height={30}
              width={30}
              alt='avatar'
              className='nav_avatar'
              onClick={logOut}
            />
          {/* </Link> */}
          
        </div>
        
      </NavContent>
      
    </div>
  )
}

export  {Header}
