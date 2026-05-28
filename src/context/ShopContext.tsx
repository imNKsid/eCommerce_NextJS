"use client";

import all_product from "@/assets/data/all_product";
import {
  AllProductListEntity,
  defaultAllProductListEntity,
} from "@/domain/entities/AllProductListEntity";
import { createContext, useState } from "react";

export const ShopContext = createContext(defaultAllProductListEntity);

const ShopContextProvider = (props: any) => {
  const [cartItems, setCartItems] =
    useState<Record<number, number>>(getDefaultCart());

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (productItem) => productItem.id === Number(item),
        );
        const new_price = itemInfo ? itemInfo.new_price : 0;
        totalAmount += new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue: AllProductListEntity = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

const getDefaultCart = (): Record<number, number> => {
  let cart: { [key: number]: number } = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[i] = 0;
  }

  return cart;
};
