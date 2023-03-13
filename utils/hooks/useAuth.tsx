import React,{createContext,useContext,useEffect,useState,useMemo} from 'react'
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signOut,User } from 'firebase/auth'
import { auth } from '../firebase'
import { useRouter } from 'next/router'
import { error } from 'console'



interface AuthProps{
    //type of children in typescript
    children:React.ReactNode
}

interface IAuth {
    user: User | null
    signUp:(email:string,password:string) => Promise<void>
    signIn:(email:string,password:string) => Promise<void>
    logOut:() => Promise<void>
    error: string | null
    loading: boolean
}

// creating context
const AuthContext = createContext<IAuth>({
    user:null,
    signUp: async () =>{},
    signIn: async () =>{},
    logOut: async () =>{},
    error:null,
    loading:false
})
export const AuthProvider = ({children}:AuthProps) => {
    //loading
    const [loading,setLoading] = useState(false)

    //loading
    const [initialloading,setInitialLoading] = useState(false)

    //user
    const [user, setUser] = useState<User |  null>(null)

    //router 
    const router = useRouter()

    //error
    const [error, setError]=useState(null)

    useEffect(() => {
      onAuthStateChanged(auth,(user) =>{
        if (user){
            //logged in
            setUser(user)
            setLoading(false)
        }else{
            setUser(null)
            setLoading(true)
            router.push('/Login')

        }
        setInitialLoading(false)
      })
    
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[auth])
    

    //signup
    const signUp =  async (email:string, password:string) =>{
        setLoading(false)

        await createUserWithEmailAndPassword(auth,email,password).
        then((userCridential)=>{
            setUser(userCridential.user)
            router.push('/')
            setLoading(false)
        }).catch((error)=>{
            alert(error.message)
        }).finally(()=> setLoading(false))

    }

    //signin
    const signIn =  async (email:string, password:string) =>{
        setLoading(false)

        await signInWithEmailAndPassword(auth,email,password).
        then((userCredential)=>{
            setUser(userCredential.user)
            router.push('/')
            setLoading(false)
        }).catch((error)=>{
            alert(error.message)
        }).finally(()=> setLoading(false))

    }

    //logout
    const logOut  =async () => {
        setLoading(true)

        signOut(auth).then(()=>{
            setUser(null)
        }).catch((error)=>{
            error.message
        }).finally(()=>{
            setLoading(false)
        })
    }

  //usememo looks for changes in any of the variable and update the state
    const memoValue = useMemo(()=>({
        user,signUp,signIn,loading,logOut,error
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }),[user,loading])


  return (
    //using the provider 
    <AuthContext.Provider value={memoValue} >
        {!initialloading && children}
    </AuthContext.Provider>
  )
}

export default function useAuth(){
    return useContext(AuthContext)
}