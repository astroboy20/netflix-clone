import { LoginHeader } from '@/components/loginHeader/loginHeader'
import Head from 'next/head'
import React from 'react'


const Login = () => {
  return (
    <div>
        <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" /> 
        </Head>
        <>
          <LoginHeader/>
        </>
    </div>
  )
}

export default Login