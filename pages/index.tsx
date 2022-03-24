import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import InfoBox from '../components/InfoBox'

const Home: NextPage = ({ response }: any) => {
  console.log(response)
  return (
    <main className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <InfoBox.Active activeQuantity={response.active} />
      <InfoBox.Closed />
    </main>
  )
}

export default Home

export async function getServerSideProps() {
  // https://dribbble.com/shots/10804647-Corona-Virus-Statistics
  // fetch https://disease.sh/v3/covid-19/all
  const response = await fetch('https://disease.sh/v3/covid-19/all').then(
    (res) => res.json()
  )
  return {
    props: {
      response,
    },
  }
}
