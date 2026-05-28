import { ProductItemEntity } from "@/domain/entities/ProductItemEntity";
import all_product from "../../assets/data/all_product";
import Item from "../item/Item";
import "./RelatedProducts.css";

interface RelatedProductsProps {
  product: ProductItemEntity;
}

const RelatedProducts = ({ product }: RelatedProductsProps) => {
  const related_products = all_product.filter(
    (item) => item.category === product.category && item.id !== product.id,
  );

  return (
    <div className="related-products">
      <h1>Related Products</h1>
      <hr />
      <div className="related-products-item">
        {related_products.slice(0, 4).map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
