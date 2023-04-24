import Connect from '../../components/Connect';
import Listing from '../../components/Listing';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ListingID() {
  const router = useRouter();
  const listingId = router.query.listingId;

  return (
    <div className='w-screen'>
      {/* -- Add Connect Widget -- */}
      <div className='flex w-full justify-between items-stretch p-8 pb-4 md:pb-8 px-3 md:px-8'>
        <div
          onClick={() => router.push('/')}
          className='flex justify-center items-center cursor-pointer rounded-lg border-[0.5px] py-3 px-5 md:px-8 hover:text-slate-400 hover:bg-slate-900 text-sm tracking-widest md:w-[200px]'
        >
          HOME
        </div>

        <Connect network='1' />
      </div>

      {/* ~~ Add Marketplace Widget component ~~ */}
      <div className='max-w-[1100px] mx-auto'>
        <Listing
          id={listingId}
          // network={process.env.NEXT_APP_NETWORK}
          // id={'4250'}
          network={'1'}
        />
      </div>

      <div className='mt-10 flex w-full justify-between items-stretch p-8 pb-4 md:pb-8 px-3 md:px-8'>
        <div
          onClick={() => router.push('/')}
          className='flex justify-center items-center cursor-pointer rounded-lg border-[0.5px] py-3 px-5 hover:text-slate-400 hover:bg-slate-900 text-sm tracking-widest md:w-[200px]'
        >
          HOME
        </div>

        <Connect network='1' />
      </div>
    </div>
  );
}
