'use client'

import axios from '@/utils/axios'
import requests, { API_KEY } from '../../utils/request'
import React,{useEffect, useState} from 'react'
import { BannerButton, BannerContent, BannerDescription, BannerFadeButton, BannerTitle } from './banner.style'
import {FaPlay} from 'react-icons/fa'
import {InformationCircle} from 'heroicons-react'
import { modalState, movieState } from '@/atoms/modalAtom'
import { useRecoilState } from 'recoil'

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
    // axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=850c1ff854a8e55e79ae5d97b8a9fbb9&language=en-US')
    // .then(response=>{
    //   console.log(response)
    // }).catch(error=>{
    //   console.log(error)
    // })
  }, [])
  console.log(movie)
  //to truncate the description text
  const truncate=(string:string, n:number)=>{
    return string?.length > n ? string.substring(0, n -1) + '...' : string
  }
  return (
    <div>
        <div 
        className='banner_body'
        style={{ 
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat',
          backgroundPosition:'center center',
          backgroundImage:`url("https:image.tmdb.org/t/p/original/${movie?.backdrop_path}")`        
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
    </div>
  )
}

export {Banner}