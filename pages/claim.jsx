import Connect from '../components/Connect';
import { useRouter } from 'next/router';

export default function Claim() {
  const router = useRouter();

  return (
    <div className='w-screen'>
      {/* -- Add Connect Widget -- */}
      {/* <div className='flex w-full justify-between items-stretch p-8 pb-4 md:pb-8 px-3 md:px-8'>
        <div
          onClick={() => router.push('/')}
          className='flex justify-center items-center cursor-pointer rounded-lg border-[0.5px] py-3 px-5 md:px-8 hover:text-slate-400 hover:bg-slate-900 text-sm tracking-widest md:w-[200px]'
        >
          HOME
        </div>

        <Connect network='1' />
      </div> */}

      {/* ~~ Add Claim Widget component ~~ */}
      <div className='max-w-[1100px] mx-auto'>
        <div
          data-widget='m-claim-complete'
          // data-id='1040586992' //notably nyc, works!
          // data-id='1044943088' // new pepe, no!
          data-id='1045020912' // antílope, no!
          // data-fallback-provider
          // data-v-app
          // data-network='1'
        ></div>
      </div>

      {/* <div className='mt-10 flex w-full justify-between items-stretch p-8 pb-4 md:pb-8 px-3 md:px-8'>
        <div
          onClick={() => router.push('/')}
          className='flex justify-center items-center cursor-pointer rounded-lg border-[0.5px] py-3 px-5 hover:text-slate-400 hover:bg-slate-900 text-sm tracking-widest md:w-[200px]'
        >
          HOME
        </div>

        <Connect network='1' />
      </div> */}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
