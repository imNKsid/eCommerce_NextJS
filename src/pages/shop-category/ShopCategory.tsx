"use client";

import { ICONS } from "@/assets/icons";
import { IMAGES } from "@/assets/images";
import Item from "@/components/item/Item";
import { ShopContext } from "@/context/ShopContext";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContext, useMemo } from "react";
import "./ShopCategory.css";

const ShopCategory = () => {
  const pathname = usePathname();
  const { all_product } = useContext(ShopContext);

  const category: string = useMemo(() => {
    if (pathname) {
      if (pathname.includes("women")) {
        return "women";
      } else if (pathname.includes("men")) {
        return "men";
      } else if (pathname.includes("kids")) {
        return "kid";
      }
    }
    return "";
  }, [pathname]);

  const bannerImage = useMemo(() => {
    if (pathname) {
      if (pathname.includes("women")) {
        return IMAGES.banner_women;
      } else if (pathname.includes("men")) {
        return IMAGES.banner_men;
      } else if (pathname.includes("kids")) {
        return IMAGES.banner_kids;
      }
    }
    return IMAGES.banner_men;
  }, [pathname]);

  return (
    <div className="shop-category">
      <Image className="shop-category-banner" src={bannerImage} alt="" />
      <div className="shop-category-index-sort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          <p>Sort by</p>
          <Image
            src={ICONS.dropdown_black_icon}
            width={24}
            height={24}
            alt=""
          />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product.map((item, index) => {
          if (category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className="shop-category-load-more">Explore more</div>
    </div>
  );
};

export default ShopCategory;
