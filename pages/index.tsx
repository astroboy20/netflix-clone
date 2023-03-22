import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import 'global.css'
import { Header } from '@/components/header'
import { Banner } from '@/components/banner'
import { Row } from '@/components/Row'
import requests from '@/utils/request'
import useAuth from '@/utils/hooks/useAuth'
import { useRecoilValue } from 'recoil'
import { modalState } from '@/atoms/modalAtom'
import { Modal } from '@/components/modal'
import { Movie } from '@/typings'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  

  //modal using the hook recoil
  const showModal = useRecoilValue(modalState)

  //loading state
  // const {loading} = useAuth()
  // if (loading) return <div>Loading...</div>
  return (
    <>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./logo.png" />
      </Head>
      <main className={styles.main}>
       <Header/>
       <Banner/>
        <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginal} isLargeRow />
        <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
        <Row title='Romance Movie' fetchUrl={requests.fetchRomanceMovies}/>
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
          
      </main>
      {showModal && <Modal/>}
    </>
  )
}
