'use client'
import styled from "styled-components";
import { responsive } from "@/theme/responsive";

export const NavContent = styled.div`
    display:flex;
    justify-content: space-between;
    color: #fff;
    align-items: center;
    
    .left,.right, .icon{
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }
    
    .links{
        display: flex;
        gap: 20px;
        color: #efefef;
        
    }
    .links:hover{
        transition: 0.5 ease-in-out;
        color: #fff;
    }


    .nav_logo{
        cursor: pointer;
    }

    .nav_avatar{
    }

    ${responsive('$small')`
        .links{
            display:none;
        }
        .bell-icon{
            display:none;
        }

    `}


`