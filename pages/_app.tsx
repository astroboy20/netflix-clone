import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles,theme } from '@/theme'
import 'styles/globals.css'
import { AuthProvider } from '@/utils/hooks/useAuth'
import { RecoilRoot } from 'recoil'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      {/* HOC */}
      <ToastContainer position='top-center' />
      <RecoilRoot>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </RecoilRoot>
      
      
    </ThemeProvider>
    
  ) 
}
