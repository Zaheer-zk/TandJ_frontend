import React, { Children, useState } from 'react';

export const ShopContext = React.createContext();

const QtyContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);

  //Increase product quantity
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  //Decrease product quantity
  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      else {
        return prevQty - 1;
      }
    });
  };

  //Add product to cart
  const onAdd = (product, quantity) => {
    //Check if product exists in cart
    const existingProductIndex = cartItems.findIndex(
      (item) => item.Title === product.Title
    );

    if (existingProductIndex !== -1) {
      // Product already exists in cart, increase the quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      // Product does not exist in cart, add it to the cart
      const newProduct = { ...product, quantity: quantity };
      setCartItems([...cartItems, newProduct]);
    }
  };

  console.log('cartItems : ', cartItems);

  return (
    <>
      <ShopContext.Provider
        value={{
          qty,
          increaseQty,
          decreaseQty,
          showCart,
          setShowCart,
          cartItems,
          setCartItems,
          onAdd,
        }}>
        {children}
      </ShopContext.Provider>
    </>
  );
};

export default QtyContext;
