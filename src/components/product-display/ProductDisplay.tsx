"use client";

import { ICONS } from "@/assets/icons";
import { ShopContext } from "@/context/ShopContext";
import { ProductItemEntity } from "@/domain/entities/ProductItemEntity";
import Image from "next/image";
import { useContext } from "react";
import "./ProductDisplay.css";

interface ProductDisplayProps {
  product: ProductItemEntity;
}

const ProductDisplay = ({ product }: ProductDisplayProps) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-image-list">
          <Image src={product.image} alt="" />
          <Image src={product.image} alt="" />
          <Image src={product.image} alt="" />
          <Image src={product.image} alt="" />
        </div>
        <div className="product-display-image">
          <Image
            className="product-display-main-image"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
          <Image src={ICONS.star_icon} alt="" />
          <Image src={ICONS.star_icon} alt="" />
          <Image src={ICONS.star_icon} alt="" />
          <Image src={ICONS.star_icon} alt="" />
          <Image src={ICONS.star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-price-old">
            ${product.old_price}
          </div>
          <div className="product-display-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product-display-right-description">
          A light-weight, usually knitted, pullover shirt, close-fitting, and
          with a round neckline and short sleeves, worn as an undershirt or
          outer garment.
        </div>
        <div className="product-display-right-size-container">
          <h1>Select Size</h1>
          <div className="product-display-right-size">
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
            <p>XXL</p>
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
        <p className="product-display-right-category">
          <span>Category :</span>
          Women, T-Shirt, Crop Top
        </p>
        <p className="product-display-right-category">
          <span>Tags :</span>
          Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
