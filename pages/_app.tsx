import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Navbar from '../components/nav'
export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <ThemeProvider attribute="class" enableSystem>
      <Navbar />
      <Component {...pageProps} />
      </ThemeProvider>
    </>
  ) 
}

