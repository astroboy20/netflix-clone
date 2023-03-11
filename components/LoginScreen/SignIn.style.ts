import styled from "styled-components";


export const SignupScreen = styled.div`
    max-width:300px ;
    padding: 70px;
    margin-left:  auto;
    margin-right:  auto;
    background: rgba(0,0,0,0.85);
    text-align: left;
    margin-bottom: 25px;
    color:#fff;

    form{
        display: grid;
        flex-direction: column;
    }

    input{
        margin-bottom:14px;
        outline-width: 0;
        height: 40px;
        border-radius: 5px;
        border: none;
        padding:5px 15px;
        width: auto;
        /* width: 100%; */
    }
    button{
       padding: 16px 20px;
       font-size: 1rem;
       color: #fff;
       border-radius: 5px;
       background-color: #e50914;
       font-weight: 600;
       border: none;
       cursor: pointer;
       margin-top: 20px;
       /* width: 110%; */
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
`