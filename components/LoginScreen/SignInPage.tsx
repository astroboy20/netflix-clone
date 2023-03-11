'use client'
import React, { FormEvent, useRef } from 'react'
import { SignupScreen } from './SignIn.style'
import {auth} from '../../utils/firebase'


type EmailInputRef = React.RefObject<HTMLInputElement>
type PasswordInputRef = React.RefObject<HTMLInputElement>
const SignInPage = () => {

  //using useRef to get the input (email and password) from the form
  //set to null at first and typecast it as an HTMLInputElement

  const emailRef:any = useRef<HTMLInputElement>(null)
  const passwordRef:any = useRef<HTMLInputElement>(null)

  const register = (e:FormEvent)=>{
    e.preventDefault()

    //create a new user with firebase by using the values obtained from the email and password
    //
    auth.createUserWithEmailAndPassword(
      emailRef.current?.value,
      passwordRef.current?.value
    ).then((authUser)=>{
      console.log(authUser)
    }).catch(error=>{
      console.log(error)
    })
  }

  const signIn =(e:FormEvent)=>{
    e.preventDefault()
    auth.signInWithEmailAndPassword(
      emailRef.current?.value,
      passwordRef.current?.value
    ).then(authUser=>{
      console.log(authUser)
    }).catch(error=>console.log(error))
  }
  return (
    <>
      <SignupScreen>
        <form>
          <h1>Sign In</h1>
          <input ref={emailRef} type="email" placeholder='Email' />
          <input ref={passwordRef} placeholder='Password' type='password'/>
          <button type='submit' onClick={signIn}>Sign In</button>

          <h4>
            <span className='question'>New to Netflix? </span> 
            <span className="signup-link" onClick={register}>Sign Up now.</span> 
          </h4>
        </form>
      </SignupScreen>
    </>
  )
}

export  {SignInPage}