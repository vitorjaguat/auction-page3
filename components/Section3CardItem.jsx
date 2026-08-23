import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Section3CardItem({ id }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link href={`/artwork/${id}`}>
      {mounted && (
        <div data-widget='m-card-catalog' data-id={id} data-network='1'></div>
      )}
    </Link>
  );
}
