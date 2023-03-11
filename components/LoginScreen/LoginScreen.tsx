import React,{useState,useRef} from 'react'
import { Button, LoginBG, LoginBody, LoginContent } from './LoginScreen.style'
import Image from 'next/image'
import {SignInPage} from 'features/LoginScreen/SignInPage'

// type UserState = {
//   stat
// }

const LoginScreen = () => {

  


  //sign-in state
  const [signIn,setSignIn] = useState(false)

  //function to handle click event
  // const handleClick = ()=>{
  //   return setSignIn(!signIn)
  // }
  return (
    <div>
      <LoginBody>
        <LoginBG>
          
            <>
              <Image
              className='logo'
              src = '/images/logo.png'
              width={150}
              height={100}
              alt='logo'
              />

              <Button onClick={()=>setSignIn(true)}>Sign In</Button>

              <div className="loginScreen-gradient"></div>

              <LoginContent>
                {/*conditional rendering of the signin page */}
                {signIn ? (
                  <SignInPage/>
                ):(
                  <>
                    <h1>Unlimited films, TV programmes and more. </h1>
                    <h2>Watch anywhere, Cancel at anytime.</h2>
                    <h3>Ready to watch? Enter your mail to create or restart your membership</h3>

                    <div className="input-screen">
                      <form>
                        <input type='email' placeholder='Email Address'/>
                        <button onClick={()=>{setSignIn(!signIn)}} className="form-btn">Get Started</button>
                      </form>
                    
                    </div>
                  </>
                )}
              </LoginContent>
            </>
            
          
          
        </LoginBG>
      </LoginBody>
    </div>
  )
}

export  {LoginScreen}