import Link from 'next/link';

export default function Section3CardItem({ id }) {
  return (
    <Link href={`/artwork/${id}`}>
      {/* <div data-widget='m-card-catalog' data-id={id} data-network='1'></div> */}
      <div
        dangerouslySetInnerHTML={{
          __html: `<div
            data-widget='m-card-catalog'
            data-network='1'
            data-id=${id}
          ></div>`,
        }}
      />
    </Link>
  );
}
