import Section6CardItem from './Section6CardItem';
import claimImg from '../public/img/claim.jpg';
import Image from 'next/image';

const listingId = '1045020912';

export default function Section6() {
  return (
    <div className='w-screen' id='faucet'>
      <div className='h-16 w-full bg-black/80 sticky top-0 left-0 px-10 sm:px-20  z-10 flex items-center tracking-[6px] text-sm sm:text-md'>
        FAUCET (2023), FROM PREPARED SCREEN SERIES (2012-)
      </div>
      {/* <div className='w-full  pt-20 pb-32 px-10 sm:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 sm:gap-6'> */}
      <div className=''>
        {/* <div className='rounded-sm bg-slate-900 h-fit'>
          <Section6CardItem instance={listingId} />
        </div> */}
        <div className='pb-36'>
          {/* <a
            href='https://app.manifold.xyz/c/firstfaucet'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={claimImg}
              height={1249}
              width={1873}
              alt='Faucet (2023)'
            />
          </a> */}
          <iframe
            src='https://app.manifold.xyz/c/firstfaucet'
            title='Faucet (2023) - Claim Here'
            className='w-screen h-[1200px]'
          />
        </div>
      </div>
    </div>
  );
}
