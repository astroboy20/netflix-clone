import styled from 'styled-components'

export const LoginBody = styled.div`
    position: relative;
    height: 100%;
    background: url('/images/logo-bg.jpeg') center no-repeat;
    background-size :cover ;
    .loginScreen-gradient{
        width: 100%;
        z-index: 1;
        height: 100vh;
        background: rgba(0,0,0,0.4);
        background-image: linear-gradient(
            to top,
            rgba(0,0,0,0.8) 0,
            rgba(0,0,0,0) 60%,
            rgba(0,0,0,0.8) 100%,
        );
    }
`
export const LoginBG = styled.div`
    .logo{
        position:fixed;
        left: 0;
        width: 150px;
        object-fit: contain;
        padding-left: 20px;

    }
`
export const Button =styled.button`
    position:fixed;
    right: 20px;
    top: 30px;
    padding: 10px 20px;
    font-size: 1rem;
    color:#fff;
    background-color: #e50914;
    font-weight: 600;   
    border: none;
    cursor: pointer;

`

export const LoginContent =styled.div`
    position: absolute;
    top: 30%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index:1;
    color:#fff;
    padding: 20px;
    left: 0;
    right: 0;

    h1{
        font-size: 3.125rem;
        margin-bottom: 20px;
    }
    h2{
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 30px;
    }
    h2{
        font-size: 1.3rem;
        font-weight: 400;
    }
    .input-screen{
        margin: 20px;
    }
    input{
        padding: 10px;
        outline-width: 0;
        height:30px;
        width: 30%;
        border:none;
        max-width:600px;
    }
    .form-btn{
        padding:16px 20px;
        font-size:1rem; 
        color:#fff;
        font-size: 1rem;
        background-color: #e50914;
        font-weight: 600;   
        border: none;
        cursor: pointer;

    }

`