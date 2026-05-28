import all_product from "../../assets/data/all_product";
import Item from "../item/Item";
import "./Popular.css";

const Popular = () => {
  return (
    <div className="popular-container">
      <h1>Popular In Women</h1>
      <hr />
      <div className="popular-item">
        {all_product.slice(0, 4).map((item, i) => {
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

export default Popular;
