import '../styles/globals.css'
import { EmptyLayout } from '@/components/layouts'
import { AppPropsWithLayout } from '@/models/common'
import { SWRConfig } from 'swr'
import axiosClient from '@/api/axios-client'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {

  const Layout = Component.Layout ?? EmptyLayout

  return (
    <SWRConfig value={{
      fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false
    }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}

export default App
