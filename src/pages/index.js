import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import Body from '../components/body';


export default function Home() {
  return (
    <>
      <Head>
        <title>Guest House</title>
        <meta name="title" content="Bartwal Guest House" />
        <meta name="description" content="Best Guest House In Selaqui" />
        <meta name="keywords" content="Hotel, Guest House, Selaqui, Best Rooms" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Body />
      <Footer />
    </>
  )
}
