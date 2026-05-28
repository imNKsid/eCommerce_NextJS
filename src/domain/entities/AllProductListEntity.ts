import {
  defaultProductItemEntity,
  ProductItemEntity,
} from "./ProductItemEntity";

export interface AllProductListEntity {
  all_product: ProductItemEntity[];
  cartItems: { [key: number]: number };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  getTotalCartItems: () => number;
}

export const defaultAllProductListEntity = {
  all_product: [defaultProductItemEntity],
  cartItems: {} as Record<number, number>,
  addToCart: (itemId: number) => {},
  removeFromCart: (itemId: number) => {},
  getTotalCartAmount: () => 0,
  getTotalCartItems: () => 0,
};
