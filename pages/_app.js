import '@/styles/globals.css'
import { KioscoProvider } from '@/context/KioscoProvider'

export default function App({ Component, pageProps }) {
  return(
    <KioscoProvider>
      <Component {...pageProps} />
    </KioscoProvider>
  )
}
