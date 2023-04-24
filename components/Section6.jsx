import Section6CardItem from './Section6CardItem';

const listingId = '1045020912';

export default function Section6() {
  return (
    <div className='w-screen' id='faucet'>
      <div className='h-16 w-full bg-black/80 sticky top-0 left-0 px-10 sm:px-20  z-10 flex items-center tracking-[6px] text-sm sm:text-md'>
        FAUCET (2023), FROM PREPARED SCREEN SERIES (2012-)
      </div>
      <div className='w-full  pt-20 pb-32 px-10 sm:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 sm:gap-6'>
        <div className='rounded-sm bg-slate-900 h-fit' key={listingId}>
          <Section6CardItem instance={listingId} />
        </div>
      </div>
    </div>
  );
}
