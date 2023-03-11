import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles,theme } from '@/theme'
import 'styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Component {...pageProps} />
    </ThemeProvider>
    
  ) 
}
