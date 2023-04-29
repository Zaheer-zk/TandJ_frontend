import Link from 'next/link';
import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';

const Nav = () => {
  return (
    <div className="flex justify-between items-center text-lg min-h-full m-3">
      <Link href="/" className="text-lg">
        TandJ
      </Link>
      <div className="flex items-center justify-around">
        <div className="ml-3 relative flex flex-col items-center">
          <FiShoppingBag />
          <h3 className="text-sm p-1 font-bold">Cart</h3>
        </div>
      </div>
    </div>
  );
};

export default Nav;
