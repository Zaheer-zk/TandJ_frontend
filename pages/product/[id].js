import { GET_PRODUCT_QUERY } from '@/lib/query';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useQuery } from 'urql';
import {
  Buy,
  DetailsStyle,
  ProductInfo,
  Quantity,
} from '@/styles/ProductDetailsStyle';

import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import Link from 'next/link';
//qty
import { ShopContext } from '@/lib/context';

const ProductDetails = () => {
  //Quantity
  const { qty, increaseQty, decreaseQty, onAdd } = useContext(ShopContext);

  //get param from url
  const { query } = useRouter();
  console.log(query);

  //Fetch product by id
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.id },
  });
  const { data, fetching, error } = results;

  //Check for data
  if (fetching) {
    return <p>Fetching...</p>;
  }
  if (error) {
    return <p>Ohh no!!! {error.message}</p>;
  }

  // console.log(data);

  const { Title, Description, Price, Image } = data.products.data[0].attributes;

  return (
    <>
      {/* <button className="p-3 bg-slate-400 m-3 rounded-lg">
        <Link href={'/'}>Back</Link>
      </button> */}
      <DetailsStyle>
        <div>
          <img
            src={Image?.data?.attributes?.formats?.thumbnail?.url}
            alt="Product Image"
          />
        </div>
        <ProductInfo>
          <h1>{Title}</h1>
          <p>{Description}</p>
          <h3>₹ : {Price}</h3>
          <Quantity>
            <span>Quantity</span>
            <button onClick={decreaseQty}>
              <AiFillMinusCircle />
            </button>
            <p>{qty}</p>
            <button onClick={increaseQty}>
              <AiFillPlusCircle />
            </button>
          </Quantity>
          <Buy onClick={() => onAdd(data.products.data[0].attributes, qty)}>
            Add to cart
          </Buy>
        </ProductInfo>
      </DetailsStyle>
    </>
  );
};

export default ProductDetails;
