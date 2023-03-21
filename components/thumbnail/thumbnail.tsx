import React from 'react'
import Image from 'next/image'
import { Movie } from '@/typings'
import { DocumentData } from 'firebase/firestore'
import { movieState, modalState } from '@/atoms/modalAtom'
import { useRecoilState } from 'recoil'
import { ThumbnailBody } from './thumbnail.style'


interface Props{
    movie: Movie | DocumentData
    isLargeRow?:boolean
}

const Thumbnail = ({movie,isLargeRow}:Props) => {
    const base_url = "https://image.tmdb.org/t/p/original/"

    const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
    const [showModal, setShowModal] = useRecoilState(modalState)
  return (
    <>
        <ThumbnailBody   
            onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
        }}>
            <Image                
                key={movie.id}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt='show werey'
                width={150}
                height={100}/>    
                                                     
        </ThumbnailBody>
        
      
    </>
  )
}

export {Thumbnail}
