"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import "./Item.css";

interface ItemProps {
  id: number;
  image: any;
  name: string;
  new_price: number;
  old_price: number;
}

const Item = ({ id, image, name, new_price, old_price }: ItemProps) => {
  const router = useRouter();

  return (
    <div className="item-container">
      <Image src={image} alt="" onClick={() => router.push(`/product/${id}`)} />
      <p>{name}</p>
      <div className="item-price-container">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>
    </div>
  );
};

export default Item;
