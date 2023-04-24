import '../styles/globals.css';
import '../styles/marketplace.css';
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
import localFont from '@next/font/local';
import ogImg from '../public/img/og-img.png';
import { ParallaxProvider } from 'react-scroll-parallax';
import { appWithTranslation } from 'next-i18next';

//SEO & Head:
import Head from 'next/head';

const DOMAIN = 'https://www.moreabstract.xyz';
const DEFAULT_OG_IMAGE = ogImg;

// Fonts:
const din = localFont({
  src: [
    { path: '../public/fonts/din-regular.woff2', weight: '400' },
    { path: '../public/fonts/din-bold.woff2', weight: '800', style: 'bold' },
    { path: '../public/fonts/din-italic.woff2', style: 'italic' },
    { path: '../public/fonts/din-light.woff2', style: 'light', weight: '100' },
  ],
  variable: '--din-font',
  display: 'block',
});

function MyApp({ Component, pageProps }) {
  /**
   * NOTE: prior to v3 of marketplace widgets, it was necessary to trigger the `m-refresh-widgets`
   * event when dynamically changing elements on the page/routes.
   * See the docs for more details: https://docs.manifold.xyz/v/manifold-for-developers/resources/widgets/marketplace-widgets/window-events
   */
  // const router = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = (url, { shallow }) => {
  //     // Note: need to trigger a m-refresh-widgets event every time the URL changes client side
  //     window.dispatchEvent(new Event('m-refresh-widgets'));
  //   };
  //   router.events.on('routeChangeStart', handleRouteChange);

  //   // If the component is unmounted, unsubscribe
  //   // from the event with the `off` method:
  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange);
  //   };
  // }, []);

  const title = 'MORE ABSTRACT';
  const description = 'Pedro Victor Brandão at Portas Vilaseca';
  const siteName = 'Pedro Victor Brandão';
  const canonical = DOMAIN;
  const ogImage = DEFAULT_OG_IMAGE;
  const ogType = 'website';
  const twitterHandle = '@pierresacoman';

  return (
    <>
      <Head>
        <title key='title'>{title}</title>
        <meta name='description' content={description} />
        <meta key='og_type' property='og:type' content={ogType} />
        <meta key='og_title' property='og:title' content={title} />
        <meta
          key='og_description'
          property='og:description'
          content={description}
        />
        <meta key='og_locale' property='og:locale' content='en_IE' />
        <meta key='og_site_name' property='og:site_name' content={siteName} />
        <meta key='og_url' property='og:url' content={canonical ?? DOMAIN} />
        <meta key='og_site_name' property='og:site_name' content={siteName} />
        <meta
          key='og_image'
          property='og:image'
          content={ogImage ?? DEFAULT_OG_IMAGE}
        />
        <meta
          key='og_image:alt'
          property='og:image:alt'
          content={`${title} | ${siteName}`}
        />
        <meta key='og_image:width' property='og:image:width' content='1200' />
        <meta key='og_image:height' property='og:image:height' content='630' />

        <meta name='robots' content='index,follow' />

        <meta
          key='twitter:card'
          name='twitter:card'
          content='summary_large_image'
        />
        <meta key='twitter:site' name='twitter:site' content={twitterHandle} />
        <meta
          key='twitter:creator'
          name='twitter:creator'
          content={twitterHandle}
        />
        <meta key='twitter:title' property='twitter:title' content={title} />
        <meta
          key='twitter:description'
          property='twitter:description'
          content={description}
        />

        <link rel='canonical' href={canonical ?? DOMAIN} />

        <link rel='shortcut icon' href='/img/favicon.jpg' />
      </Head>
      <main className={`${din.variable} font-din`}>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </main>
    </>
  );
}

export default appWithTranslation(MyApp);
