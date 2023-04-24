import Section4CardItem from './Section4CardItem';

const listingId = '5192';

export default function Section4() {
  return (
    <div className='w-screen' id='click'>
      <div className='h-16 w-full bg-black/80 sticky top-0 left-0 px-10 sm:px-20  z-10 flex items-center tracking-[6px] uppercase text-sm sm:text-md'>
        CLIQUE NO SAIBA MAIS (2023), FROM DETREMURA SERIES (2019-)
      </div>
      <div className='w-full py-[15vh] md:py-[25vh] flex justify-center'>
        {/* {listingIds.map((listingId) => ( */}
        <div
          className='w-[90%] md:w-[800px] no-image rounded-sm bg-slate-900 h-fit'
          key={listingId}
        >
          <Section4CardItem id={listingId} />
        </div>
        {/* ))} */}
      </div>
    </div>
  );
}
