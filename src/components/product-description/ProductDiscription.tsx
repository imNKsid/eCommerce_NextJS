import "./ProductDiscription.css";

const ProductDiscription = () => {
  return (
    <div className="product-discription">
      <div className="product-discription-navigator">
        <div className="product-discription-nav-box">Description</div>
        <div className="product-discription-nav-box fade">Reviews (122)</div>
      </div>
      <div className="product-discription-text">
        <p>
          An e-commerce website, short for electronic commerce website, is an
          online platform dedicated to the sale of products, whether goods or
          services. It is a digital extension of traditional commerce, allowing
          businesses and individuals to showcase, promote, and market their
          products or services on the internet. The internet allows individuals
          and businesses to buy and sell an increasing amount of physical goods,
          digital goods, and services electronically. Thus, it offers consumers
          the opportunity to browse a virtual catalog of products or services,
          add items to their shopping cart, and complete their purchases by
          making secure electronic transactions.
        </p>
        <p>
          There are several different eCommerce business models, including B2B,
          C2C (marketplace), B2C, B2G, C2B, D2C, and B2B2C. Businesses may
          combine these models. For example, Amazon is both B2C (selling
          directly) and C2C (other vendors selling via Amazon Marketplace).
        </p>
      </div>
    </div>
  );
};

export default ProductDiscription;
