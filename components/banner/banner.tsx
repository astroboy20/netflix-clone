import  { AxiosResponse } from 'axios';
import axios from '../../utils/axios'
import React, { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { InformationCircle } from 'heroicons-react';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '@/atoms/modalAtom';
import {
  BannerButton,
  BannerContent,
  BannerDescription,
  BannerFadeButton,
  BannerTitle,
} from './Banner.style';
import requests from '../../utils/request';

interface Movie {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  name: string;
  original_name: string;
  overview: string;
}

const Banner: React.FC = () => {
  const [movie, setMovie] = useState<Movie>({
    id: 0,
    poster_path: '',
    backdrop_path: '',
    title: '',
    name: '',
    original_name: '',
    overview: '',
  });

  // modal
  const [showModal, setShowModal] = useRecoilState(modalState);

  // movie state
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  // for fetching the data from TMDb
  useEffect(() => {
    async function fetchData() {
      const request: AxiosResponse<{ results: Movie[] }> = await axios.get(requests.fetchTrending);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    }
    fetchData();
  }, []);

  console.log('movie', movie?.backdrop_path);

  // to truncate the description text
  const truncate = (string: string, n: number): string => {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string;
  };

  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  const backgroundImage = movie?.backdrop_path || movie?.poster_path;

  return (
    <>
      <div
        className="banner_body"
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundImage: `url(${baseUrl}${backgroundImage})`,
        }}
      >
        <BannerContent>
          <BannerTitle>{movie?.title || movie?.name || movie?.original_name}</BannerTitle>
          <BannerButton>
            <button className="banner-button">
              <FaPlay className="react-icon" />
              Play
            </button>
            <button
              className="banner-button"
              onClick={() => {
                setCurrentMovie(movie);
                setShowModal(true);
              }}
            >
              More Info<InformationCircle className="react-icon" />
            </button>
          </BannerButton>
          <BannerDescription>{truncate(movie?.overview, 150)}</BannerDescription>
        </BannerContent>
      </div>
      <BannerFadeButton />
    </>
  );
};

export  {Banner};
