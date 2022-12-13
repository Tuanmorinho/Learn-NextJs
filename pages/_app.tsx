import axiosClient from '@/api/axios-client'
import { EmptyLayout } from '@/components/layouts'
import { AppPropsWithLayout } from '@/models/common'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { SWRConfig } from 'swr'
import { createEmotionCache, theme } from 'utils'
import '../styles/globals.css'

const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) => {
    
    const Layout = Component.Layout ?? EmptyLayout

    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </SWRConfig>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default App
