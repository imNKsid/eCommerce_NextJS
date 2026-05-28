"use client";

import Breadcrum from "@/components/breadcrum/Breadcrum";
import ProductDiscription from "@/components/product-description/ProductDiscription";
import ProductDisplay from "@/components/product-display/ProductDisplay";
import RelatedProducts from "@/components/related-products/RelatedProducts";
import { ShopContext } from "@/context/ShopContext";
import { defaultProductItemEntity } from "@/domain/entities/ProductItemEntity";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const Product = () => {
  const pathname = usePathname();
  const { all_product } = useContext(ShopContext);

  const productId = pathname ? parseInt(pathname?.split("/product/")?.[1]) : 0;

  const productDetails =
    all_product.find((item) => item.id === productId) ??
    defaultProductItemEntity;

  return (
    <div>
      <Breadcrum product={productDetails} />
      <ProductDisplay product={productDetails} />
      <ProductDiscription />
      <RelatedProducts product={productDetails} />
    </div>
  );
};

export default Product;
