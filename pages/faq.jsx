import React from 'react';
import Faq from 'react-faq-component';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Footer from '../components/Footer';
import Image from 'next/image';
import faqImg from '../public/img/detail/004.jpg';
import { useRouter } from 'next/router';

const styles = {
  bgColor: 'transparent',
  titleTextColor: '#b1b1b1',
  rowTitleColor: 'white',
  rowContentColor: '#b1b1b1',
  arrowColor: '#b1b1b1',
  // rowContentPaddingLeft: '30px',
  // rowContentPaddingRight: '70px',
  rowContentPaddingBottom: '1.5rem',
  // padding: '50px',
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: false,
};

export default function FaqPage() {
  const { t } = useTranslation('common');
  const router = useRouter();

  const data = {
    title: t('faq.instructions'),
    rows: [
      {
        title: t('faq.q1'),
        content: t('faq.a1'),
      },
      {
        title: t('faq.q2'),
        content: t('faq.a2'),
      },
      {
        title: t('faq.q3'),
        content: t('faq.a3'),
      },
      {
        title: t('faq.q4'),
        content: t('faq.a4'),
      },
      {
        title: t('faq.q5'),
        content: t('faq.a5'),
      },
      {
        title: t('faq.q6'),
        content: t('faq.a6'),
      },
      {
        title: t('faq.q7'),
        content: t('faq.a7'),
      },
      {
        title: t('faq.q8'),
        content: t('faq.a8'),
      },
      {
        title: t('faq.q9'),
        content: t('faq.a9'),
      },
      {
        title: t('faq.q10'),
        content: t('faq.a10'),
      },
      {
        title: t('faq.q11'),
        content: t('faq.a11'),
      },
      {
        title: t('faq.q12'),
        content: t('faq.a12'),
      },
      {
        title: t('faq.q13'),
        content: t('faq.a13'),
      },
    ],
  };

  return (
    <div className='w-screen'>
      <div className='w-full h-[40vh] bg-slate-700 relative'>
        <Image src={faqImg} fill className='object-cover' />
        <div className='absolute bottom-4 right-6 text-5xl text-black tracking-wider'>
          FAQ
        </div>
      </div>
      <div className='py-20 px-6 md:px-20 xl:px-60'>
        <div className='pb-24 text-lg'>{t('faq.intro')}</div>
        <Faq data={data} styles={styles} config={config} />
        <div className='mt-10 flex w-full justify-between items-stretch pt-12 md:pb-8'>
          <div
            onClick={() => router.push('/')}
            className='flex justify-center items-center cursor-pointer rounded-lg border-[0.5px] py-3 px-5 hover:text-slate-400 hover:bg-slate-900 text-sm tracking-widest md:w-[200px]'
          >
            HOME
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
