import React, { useEffect, useState } from 'react'
import MuiModal from '@mui/material/Modal'
import { modalState, movieState } from '@/atoms/modalAtom'
import {useRecoilState} from 'recoil'
import { ButtonContainer, Buttons, Info, InfoBody, MButton, Player } from './modal.style'
import { Plus, ThumbUp, VolumeOff, VolumeUp, X } from 'heroicons-react'
import { API_KEY } from '@/utils/request'
import { Element, Genre } from '@/typings'
import ReactPlayer from 'react-player/lazy'
import { FaPlay } from 'react-icons/fa'

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
      if (!movie || !movie.id) return
  
      async function fetchMovie() {
        const data = await fetch(
          `https://api.themoviedb.org/3/${
            movie?.media_type === 'tv' ? 'tv' : 'movie'
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
  return <MuiModal open={showModal} onClose={handleClose} className='muiModal'>
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
        <ButtonContainer>
          <Buttons>
            <button className='play-button'> <FaPlay/>Play</button>
            <button className='modalButton '> <Plus/></button>
            <button className='modalButton '> <ThumbUp/></button>
            
          </Buttons>
          <div>
            <button className='modalButton' onClick={()=>setMuted(!muted)}>
              {muted ? (
                <VolumeUp/>
              ):(
                <VolumeOff/>
              )}
            </button>
          </div>
        </ButtonContainer>

        <InfoBody>

          <div>
            <Info >
              <p style={{display:'flex',color:'green',fontWeight:'bold'}}> {movie!.vote_average *10}%  Match </p>
              <p>{movie?.release_date || movie?.first_air_date} </p>
              <div className='HD'>HD</div>
            </Info>
          </div>

          <div className='overview'>
            <p>{movie?.overview}</p>
          </div>

            <div className='genre'>
              <span>Genres: </span>
              {genre.map((gen)=>gen.name).join(', ')}
            </div>
          
          
            <div className='lang' style={{display:'flex', gap:'10px', alignItems:'center'}}>
              <span>Original Language: </span>
              <p>{movie?.original_language}</p>
            </div>
          
          
            <div className='vote' style={{display:'flex', gap:'10px', alignItems:'center'}}>
              <span>Vote: </span>
              <p>{movie?.vote_count}</p>
            </div>
         
        </InfoBody>
    </>
  </MuiModal>
}

export {Modal}
