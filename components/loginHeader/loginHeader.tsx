import React, { useState } from 'react'
import Image from 'next/image'
import { Button, LoginBody } from './loginHeader.style'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  email: string,
  password: string,
};

const LoginHeader = () => {


  const [login, setLogin] = useState(false)

  const { register, handleSubmit,  formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> =async ({email, password}) => {
    // if(login){
    //   await 
    // }else{

    // }
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
            <span className="signup-link" onClick={()=>setLogin(false)}>Sign Up now.</span> 
          </h4>

        </form>
      </LoginBody>
      
    </div>
  )
}

export {LoginHeader}