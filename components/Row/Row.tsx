'use client'
import axios from '@/utils/axios'
import requests from '@/utils/request'
import React,{useState,useEffect} from 'react'
import { RowBody, RowH1, RowPoster } from './Row.style'
import Image from 'next/image'

type RowProps =  {
    title:string
    fetchUrl:string
    isLargeRow?:boolean
}

interface Movie{
    id:number;
    poster_path:string;
    backdrop_path:string;
    name:string
}
const Row =({title,fetchUrl,isLargeRow}:RowProps)=>{

    //initializing the movie
    const [movies,setMovies] = useState<Movie[]>([])
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
    fetchData()  
    }, [fetchUrl])
const base_url = "https://image.tmdb.org/t/p/original/"
    return (
        <div>
            <RowBody>
                <RowH1>{title}</RowH1>
                <RowPoster>
                    {/* {movies.map((movies)=>{})} */}
                    {movies.map((movie)=>(
                        ((isLargeRow && movie.poster_path) || 
                        (!isLargeRow && movie.backdrop_path)) && (
                            <Image
                            className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
                                key={movie.id}
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt='show werey'
                                width={100}
                                height={100}
                            />
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