'use client'
import styled from "styled-components";

export const NavContent = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    
    .nav_logo{
        position: fixed;
        left: 10px;
        left: 0;
        object-fit: contain;
        padding-left: 20px;
        cursor: pointer;
    }

    .nav_avatar{
        position: fixed;
        right: 20px;
        width: auto;
        cursor: pointer;
    }


`