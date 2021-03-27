import Head from 'next/head'
import styles from '../styles/Home.module.css'
import gql from 'graphql-tag';
import {useQuery} from 'urql';

const HELLO_QUERY = gql`
  query {
    hello
  }
`;

export default function Home() {
  const [helloResult] = useQuery({ query: HELLO_QUERY });
  if (helloResult.error) {
    return <div>there was an error</div>
  }

  if (helloResult.fetching) {
    return <div>loading...</div>
  }

  const {data} = helloResult;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        text = {data.hello}
      </main>
    </div>
  )
}
