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
    padding: 20px;
    &::-webkit-scrollbar{
        display: none;
    }
    .row-poster{
        max-height: 100px;
        object-fit: contain;
        margin-right: 10px;
        width: 100%;
        transition: transform 450ms;
    }
    .row-poster:hover{
        opacity: 1;
        transform: scale(1.00);
    }
    .row-posterLarge{
        max-height: 250px;

    }
`
export const RowH1 = styled.h2`

`