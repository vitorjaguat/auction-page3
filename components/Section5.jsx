import Section5CardItem from './Section5CardItem';

const listingIds = [5197, 5198, 5199, 5200];

export default function Section5() {
  return (
    <div className='w-screen' id='cloud'>
      <div className='h-16 w-full bg-black/80 sticky top-0 left-0 px-10 sm:px-20  z-10 flex items-center tracking-[6px] uppercase text-sm sm:text-md'>
        CLOUD, CONTINENT, ISLAND SERIES (2010)
      </div>
      <div className='w-full pt-20 pb-32 px-4 sm:px-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8 sm:gap-6'>
        {listingIds.map((listingId) => (
          <div className='rounded-sm bg-slate-900 h-fit' key={listingId}>
            <Section5CardItem id={listingId} />
          </div>
        ))}
      </div>
    </div>
  );
}
