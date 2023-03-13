'use client'
import styled from "styled-components"

export const RowBody = styled.div`
    color: white;
    margin: 20px;
`
export const RowPoster = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px 20px 20px 0;
    &::-webkit-scrollbar{
        display: none;
    }
    .row-poster{
        max-height: 100px;
        object-fit: contain;
        margin-right: 10px;
        width: 100%;
        transition: 200ms ease-out;
        position: relative;
    }
    .row-poster:hover{
        opacity: 1;
        scale: 1.2;
    }
    .row-posterLarge{
        max-height: 250px;

    }
    .nav-icons{
        position: relative;
    }
    .icons{
        position:absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        cursor: poointer;
        opacity: 0;

    }
`
export const RowH1 = styled.h2`

`