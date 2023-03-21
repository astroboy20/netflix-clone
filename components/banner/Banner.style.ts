'use client'
import { responsive } from "@/theme/responsive";
import styled from "styled-components";

export const BannerBody = styled.div`
    background-size: cover;
    height: 500px;
    color: white;
    object-fit:contain;
    position: relative;
    ${responsive("$small")`
        height: 300px;
    `}

    
     
`

export const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* margin-left: 30px; */
    padding: 0 3%;
    padding-top: 130px;
    height: 190px;
    ${responsive("$small")`
       gap: 15px;
    `}
`
export const BannerTitle = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;

    ${responsive("$small")`
        font-size:24px;
    `}
`

export const BannerButton = styled.div`
    display: flex;

    .banner-button{
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        color: #fff;
        outline: none;
        border: none;
        font-weight: 700;
        border-radius: 0.2vw;
        padding:0 2rem;
        margin-right: 1rem;
        padding-top: 0.5rem;
        background-color: #fff;
        color: #000;
        padding-bottom: 0.5rem;
    }
    .banner-button:hover{
       opacity: 0.75;
        transition:all 0.2s ;
    }
    .react-icon{
        color: #000;
    }
    ${responsive("$small")`
        .banner-button{
            font-size:1rem;
            padding:0.5rem 1.5em;
        }
        // .react-icon{
        //     padding:0 1rem;
        // }
    `}

`
export const BannerDescription =styled.h1`
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 0.8rem;
    max-width: 360px;
    height: 80px;
    ${responsive("$small")`
        width:15rem
    `}
`
export const BannerFadeButton = styled.div`
    height: 5rem;
    background-image:linear-gradient(
        180deg,
        transparent,
        rgba(37,37,37,0.61),
        #111
    ) ;
`