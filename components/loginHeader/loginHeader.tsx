import React, { useState } from 'react'
import Image from 'next/image'
import { Button, LoginBody } from './loginHeader.style'
import { SubmitHandler, useForm } from 'react-hook-form'
import useAuth from '@/utils/hooks/useAuth';

type Inputs = {
  email: string,
  password: string,
};

const LoginHeader = () => {


  const [login, setLogin] = useState(false)

  const {signIn, signUp} = useAuth()


  //from react hooks for getting user values and for validation
  const { register, handleSubmit,  formState: { errors } } = useForm<Inputs>();

  //on submission the user is either signed in or out
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)

    if(login){
      await signIn(data.email, data.password)
    }
    else{
      await signUp(data.email, data.password).then((data)=>console.log(data)).catch(error=>console.error(error))
    }
  };

 
  return (
    <div>
      <LoginBody>
        <Image
          src='/images/logo.png'
          width={150}
          height={150}
          alt='logo'
          className='image'/>
        {/* <Image/> */}

        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign In</h1>
          <div className="input">
            <label htmlFor="">
              <input 
                type="email"  
                placeholder='Email' 
                {...register("email",{required:true})}  
              />
            {errors.email && <p>Please enter a valid email</p>}
            </label>
            <label htmlFor="">
              <input 
                type="password"  
                placeholder='Password' 
                {...register("password", {required:true})} 
                />
                 {errors.email && <p>Please enter a password that contains 4 to 60 characters </p>}
            </label>
            <Button onClick={()=>setLogin(true)} >Sign In</Button>
          </div>
          
          <h4>
            <span className='question'>New to Netflix? </span> 
            <button className="signup-link" onClick={()=>setLogin(false)}>Sign Up now.</button> 
          </h4>

        </form>
      </LoginBody>
      
    </div>
  )
}

export {LoginHeader}


