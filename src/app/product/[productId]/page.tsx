import Product from "@/pages/product/Product";

type Props = {
  params: {
    productId: string;
  };
};

const ProductDetailsPage = ({ params }: Props) => {
  return <Product />;
};

export default ProductDetailsPage;
