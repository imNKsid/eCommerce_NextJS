"use client";

import { ICONS } from "@/assets/icons";
import { ShopContext } from "@/context/ShopContext";
import { ProductItemEntity } from "@/domain/entities/ProductItemEntity";
import Image from "next/image";
import { useContext } from "react";
import "./CartItems.css";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div className="cart-items">
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((item: ProductItemEntity, index) => {
        if (cartItems[item.id] > 0) {
          return (
            <div key={index}>
              <div className="cart-items-format cart-items-format-main">
                <Image src={item.image} alt="" className="cart-product-icon" />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button className="cart-items-quantity">
                  {cartItems[item.id]}
                </button>
                <p>${item.new_price * cartItems[item.id]}</p>
                <Image
                  src={ICONS.cart_cross_icon}
                  className="cart-items-remove-icon"
                  alt=""
                  onClick={() => removeFromCart(item.id)}
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cart-items-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed to Checkout</button>
        </div>
        <div className="cart-items-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-items-promobox">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
