'use client'

import axios from '@/utils/axios'
import requests, { API_KEY } from '../../utils/request'
import React,{useEffect, useState} from 'react'
import {FaPlay} from 'react-icons/fa'
import {InformationCircle} from 'heroicons-react'
import { modalState, movieState } from '@/atoms/modalAtom'
import { useRecoilState } from 'recoil'
import { BannerButton, BannerContent, BannerDescription, BannerFadeButton, BannerTitle } from './Banner.style'

interface Movie{
  id:number;
  poster_path:string;
  backdrop_path:string;
  name:string
}


const Banner = () => {
  const [movie,setMovie]= useState<any>([])

  //modal
  const [showModal, setShowModal] = useRecoilState(modalState)

  //movie state
  const [currentMovie,setCurrentMovie]=useRecoilState(movieState)


  //for fetching the data from tdmb
  useEffect(() => {
   async function fetchData() {
    const request = await axios.get(requests.fetchTrending)
    setMovie(
      request.data.results[
        //to get random images
        Math.floor(Math.random() * request.data.results.length -1)
      ]
    )
    return request
   }
   fetchData()
  }, [])
 console.log('movie',movie)
  //to truncate the description text
  const truncate=(string:string, n:number)=>{
    return string?.length > n ? string.substring(0, n -1) + '...' : string
  }
  return (
    <>
        <div 
        className='banner_body'
        style={{ 
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat',
          backgroundPosition:'center center',
          backgroundImage:`url("https:image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}")`        
          }}>

            <BannerContent>
              <BannerTitle>{movie?.title || movie?.name || movie?.original_name}</BannerTitle>
              <BannerButton>
                  <button className="banner-button" ><FaPlay className='react-icon'/>Play</button>
                  <button 
                  
                    className="banner-button" 
                    onClick={()=>{
                      setCurrentMovie(movie)
                      setShowModal(true)
                    }}
                  >More Info<InformationCircle className='react-icon'/></button>
              </BannerButton>
              <BannerDescription>
                {truncate(movie?.overview,150)}
                
              </BannerDescription>
            </BannerContent>
            
        </div>
        <BannerFadeButton/>
    </>
  )
}

export {Banner}