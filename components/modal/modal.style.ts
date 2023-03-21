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
   
    
`
export const Buttons= styled.div`
    
    
`