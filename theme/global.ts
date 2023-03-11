import { createGlobalStyle } from "styled-components";
import { fontFamily } from "./fonts";
import {reset} from './reset'

export const GlobalStyles = createGlobalStyle`
    ${reset}
    ${fontFamily}

`