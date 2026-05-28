import { ICONS } from "@/assets/icons";
import { ProductItemEntity } from "@/domain/entities/ProductItemEntity";
import Image from "next/image";
import "./Breadcrum.css";

interface BreadcrumProps {
  product: ProductItemEntity;
}

const Breadcrum = ({ product }: BreadcrumProps) => {
  return (
    <div className="breadcrum">
      Home <Image src={ICONS.chevron_right_gray_icon} alt="" />
      Shop <Image src={ICONS.chevron_right_gray_icon} alt="" />
      {product.category} <Image src={ICONS.chevron_right_gray_icon} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
