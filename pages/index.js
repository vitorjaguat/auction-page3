import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Listing from '../components/Listing';
import Connect from '../components/Connect';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Footer from '../components/Footer';
import Detail from '../components/Detail';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Section6 from '../components/Section6';
import Vista from '../components/Vista';
import vista2 from '../public/img/vistas/002.jpg';
import vista3 from '../public/img/vistas/003.jpg';
import vista4 from '../public/img/vistas/004.jpg';
import vista5 from '../public/img/vistas/005.jpg';

export default function Home() {
  const [showListings, setShowListings] = useState(false);

  useEffect(() => {
    setShowListings(true);
  }, []);

  return (
    <div className='w-screen'>
      {/* <Head>
        <title>Marketplace do Antílope</title>
        <meta name='description' content='Marketplace do Antílope Cerejinha' />
        <link rel='icon' href='/favicon.ico' />
      </Head> */}
      <Hero />
      <Section2 />
      {/* <Detail /> */}
      <Vista img={vista2} />
      <Section3 />
      <Section4 />
      <Vista img={vista3} />

      <Section5 />
      <Vista img={vista4} />

      <Section6 />
      <Vista img={vista5} />
      <Footer />
    </div>
  );
}

// export function getStaticProps() {
//   return {
//     props: {},
//   };
// }

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
