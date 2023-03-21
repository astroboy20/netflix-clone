'use client'
import axios from '@/utils/axios'
import React,{useState,useEffect, useRef} from 'react'
import Image from 'next/image'
import { RowBody, RowH1, RowPoster } from './bigrow.style'
import { modalState, movieState } from '@/atoms/modalAtom'
import { useRecoilState } from 'recoil'
import { request } from 'http'
import { Thumbnail } from '../thumbnail'


type RowProps =  {
    title:string
    fetchUrl:string
    isLargeRow?:boolean
}

interface Movie{
    poster_path:string;
    backdrop_path:string;
    name:string;
    id:number
    
}
const Row =({title,fetchUrl,isLargeRow}:RowProps)=>{
    // for easy scrolling
    // const rowRef = useRef<HTMLDivElement>(null)

    // const [isMoved, setIsMoved] = useState(false)

    // const handleClick = (direction:string)=>{
    //     setIsMoved(true)

    //     if (rowRef.current){
    //         const {scrollLeft, clientWidth} = rowRef.current

    //         const scrollTo = direction === 'left' 
    //             ? scrollLeft - clientWidth 
    //             : scrollLeft + clientWidth

    //         rowRef.current.scrollTo({left:scrollLeft,behavior:'smooth'})
    //     }
    // }
    //initializing the movie
    const [movies,setMovies] = useState<Movie[]>([])
      //modal
  const [showModal, setShowModal] = useRecoilState(modalState)

  //movie state
  const [currentMovie,setCurrentMovie]=useRecoilState(movieState)
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
            
        }
    fetchData()  
    }, [fetchUrl])
    movies.forEach(m=>{
        console.log('movie id',m.id)
    })
const base_url = "https://image.tmdb.org/t/p/original/"
    

    return (
        <div>
            <RowBody>
                <RowH1>{title}</RowH1>
                
                   
                    <RowPoster >
                        {/* {movies.map((movies)=>{})} */}
                        {movies.map((movie)=>(
                            ((isLargeRow && movie.poster_path) || 
                            (!isLargeRow && movie.backdrop_path)) && (
                                <div className={`row-poster ${isLargeRow && 'row-posterLarge'}`}>
                                    <Thumbnail key={movie.id} movie={movie}/>
                                </div>
                                
                        )
                        
                        ))}
                        {/* <Image
                            src='/images/bgnetflix.png'
                            width={100}
                            height={100}
                            alt='i dey work'
                        /> */}
                    </RowPoster>
                    
            </RowBody>
        </div>
    )
}

export {Row}