import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';

export default function Detail({ img }) {
  const { ref } = useParallax({
    speed: -10,
  });

  return (
    <div className='w-screen h-80 overflow-hidden'>
      <div className='w-screen h-96' ref={ref}>
        <Image
          src={img}
          //   width={2000}
          //   height={500}
          fill
          className='object-cover -translate-y-3'
          unoptimized
          alt='View to nothingness (detail)'
        />
      </div>
    </div>
  );
}
