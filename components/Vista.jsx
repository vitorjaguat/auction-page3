import Image from 'next/image';

export default function Vista({ img }) {
  return (
    <div className='w-screen overflow-hidden h-fit max-h-[700px] flex items-center'>
      <Image src={img} alt='Exhibition view' className='object-cover' />
    </div>
  );
}
