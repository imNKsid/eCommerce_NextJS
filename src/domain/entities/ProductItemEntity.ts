export interface ProductItemEntity {
  id: number;
  name: string;
  category: string;
  image: any;
  new_price: number;
  old_price: number;
}

export const defaultProductItemEntity: ProductItemEntity = {
  id: 0,
  name: "",
  category: "",
  image: undefined,
  new_price: 0,
  old_price: 0,
};
