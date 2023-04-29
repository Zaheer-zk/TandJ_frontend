import { ProductStyle } from '@/styles/ProductStyle';
import Link from 'next/link';
import React from 'react';

const Products = ({ product }) => {
  //Extract info from product
  const { Description, Title, Image, Price, slug } = product;
  return (
    <Link href={`/product/${slug}`}>
      <ProductStyle>
        <div>
          <h1>{Title}</h1>
          <div>
            <img src={Image?.data?.attributes?.formats?.thumbnail.url} alt="" />
          </div>
          <p>{Description}</p>
          <h3>₹ : {Price}</h3>
        </div>
      </ProductStyle>
    </Link>
  );
};

export default Products;
