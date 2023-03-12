'use client'
import styled from "styled-components"
import { responsive } from "@/theme/responsive"


export const LoginBody = styled.div`
      background: url('images/BG-BG.jpg');
      background-size: cover;
      height: 100vh;
      color: #fff;
      padding:1% 3% ;
      form{
        background:rgba(0,0,0,0.75);
        text-align: left;
        width: 50%;
        margin: 20px auto;
        padding: 3%;
        
      }
      h1{
        font-size: 3.125rem;
        margin-bottom: 20px;
        }
      .input{
        
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }
      .input label{
            width:100%;
        }
      .input input{
            padding: 10px 20px;
            border-radius:5px;
            outline:none;
            border:none;
            width: 100%;
            
        }
      h4{
        text-align: left;
        margin-top: 30px;
        

    }
    .question{
        color: gray;
    }
    .signup-link:hover{
        cursor: pointer;
        text-decoration: underline;
    }
    p{
        color: #e50914;
        font-size: 12px;
        margin-top:5px;
    }
      ${responsive(`$small`)`
        background:#000;
        h1{
            font-size: 1.5rem;
            margin-bottom: 20px;
        }
        .input label{
            width:100%;
        }
        form{
            width:100%;
        }
        .input input{
            padding: 10px 20px;
            width:100%;
            border-radius:5px;
            background-color:#333;
            outline:none;
            border:none;
            
        }
        .input input:focus{
           color:#454545
            
        }
        .input input::placeholder{
            color:grey;
            
        }
        h4{
            font-size:1rem;
        }
        
      `}
`

export const Button =styled.button`
       padding: 10px 20px;
        font-size: 1rem;
        color:#fff;
        background-color: #e50914;
        font-weight: 600;   
        border: none;
        cursor: pointer;
        width: 100%;
        border-radius: 5px;


`