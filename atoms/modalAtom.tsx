import { Movie } from '@/typings'
import {DocumentData} from 'firebase/firestore'
import {atom} from 'recoil'

//for modal
export const modalState = atom({
    key:'modalState',
    default:false,
})

//for movie
export const movieState = atom<Movie | DocumentData| null>({
    key:'movieState',
    default:null,
})

//when we click on the we want to save it to our recoil store