import '../styles/globals.css'
import { Provider, Client, defaultExchanges } from 'urql'

const client = new Client({
  url: '/api/graphql',
  exchanges: defaultExchanges
})

function MyApp({ Component, pageProps }) {
  return <Provider value={client}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
