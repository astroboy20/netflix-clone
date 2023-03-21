import styled from 'styled-components'
import { responsive } from '@/theme/responsive'

export const MButton = styled.button`
    position: absolute;
    right: 20px;
    top: 6%;
    z-index:40;
    border:none;
    background: #181818;
    
    &:hover{
        background-color: #181818;
    }
    x-icon{
        height: 6px;
        width: 6px;
    }
    .play-button{
        display:flex;
        align-items:center;
        gap:10px;
        border-radius:10px;
        background: white;
    }
`

export const Player = styled.div`
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    
`
export const ButtonContainer = styled.div`
   position:absolute;
   bottom: 200px;
   display: flex;
   width:100%;
   align-items:center;
   justify-content:space-between;
   padding-left:40px;
   padding-right:40px;
   margin-bottom:20px ;
   ${responsive("$small")`
    text-align:center;
     bottom:70%;
     padding:3%;
    `}
    
`
export const Buttons= styled.div`
    display: flex;
    gap:10px;
    .play-button{
        display: flex;
        align-items:center;
        gap: 28px;
        border-radius:10px;
        background: white;
        padding-left: 2rem; /* 32px */
        padding-right: 2rem;
        transition: 0.5s ease-in;
        cursor: pointer;
        outline:none;
        border:none;

    }
    .play-button:hover{
        background: #e6e6e6;
    }
    
    
`
export const InfoBody = styled.div`
    background: black;
    color: white;
    display: flex;
    flex-direction:column ;
    gap: 10px;
    padding:6% 3%;
    font-size: 16px;
    span{
        font-size:16px;
        color: grey;
    }

    ${responsive("$small")`
        font-size:12px;
    `}
`
export const Info= styled.div`
    display: flex;
    align-items:center;
    gap: 8px;
    color: white;
    
    .HD{
        display: flex;
        height: 16px;
        align-items:center;
        justify-content:center;
        border: #000/40;
        padding-left:6px;
        padding-right:6px;
    }
`