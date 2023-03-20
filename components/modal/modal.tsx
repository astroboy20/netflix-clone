import React, { useEffect, useState } from 'react'
import MuiModal from '@mui/material/Modal'
import { modalState, movieState } from '@/atoms/modalAtom'
import {useRecoilState} from 'recoil'
import { MButton, Player } from './modal.style'
import { X } from 'heroicons-react'
import { API_KEY } from '@/utils/request'
import { Element, Genre } from '@/typings'
import ReactPlayer from 'react-player/lazy'

const Modal = () => {
  //sate for the modal
    const [showModal, setShowModal] = useRecoilState(modalState)
    //state for the movie
    const [movie, setMovie] = useRecoilState(movieState)
    // to close modal
    const handleClose =()=>{
        setShowModal(false)
    }

    const [trailer,setTrailer] =useState("")
    const [genre,setGenre] =useState<Genre[]>([])
    const[muted,setMuted]=useState(false)

    useEffect(() => {
      if (!movie) return
  
      async function fetchMovie() {
        const data = await fetch(
          `https://api.themoviedb.org/3/${
            movie?.media_type  === 'tv' ? 'tv' : 'movie'
          }/${movie?.id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
        ).then((response) => response.json())
        if (data?.videos) {
          const index = data.videos.results.findIndex(
            (element: Element) => element.type === 'Trailer'
          )
          setTrailer(data.videos?.results[index]?.key)
        }
        if (data?.genres) {
          setGenre(data.genres)
        }
      }
  
      fetchMovie()
    }, [movie])


console.log(trailer)
  return <MuiModal open={showModal} onClose={handleClose}>
    <>
        <MButton className='modalButton' onClick={handleClose}>
            <X className='x-icon'/>
        </MButton>

        <Player>
          <ReactPlayer 
          url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing
            muted={muted}/>
        </Player>
    </>
  </MuiModal>
}

export {Modal}
