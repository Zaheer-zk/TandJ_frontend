import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useQuery } from 'urql';
import { PRODUCT_QUERY } from '@/lib/query';
import Products from '@/components/Products';
import { Gallery } from '@/styles/Gallery';
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  //Fetch products from strapi
  const [results] = useQuery({ query: PRODUCT_QUERY });
  console.log(results);
  const { data, fetching, error } = results;

  //Check for data
  if (fetching) {
    return <p>Fetching...</p>;
  }
  if (error) {
    return <p>Ohh no!!! {error.message}</p>;
  }
  const products = data.products.data;
  console.log(products);
  return (
    <main>
      <Gallery>
        {products.map((product, index) => (
          <Products key={index} product={product?.attributes} />
        ))}
      </Gallery>
    </main>
  );
}
