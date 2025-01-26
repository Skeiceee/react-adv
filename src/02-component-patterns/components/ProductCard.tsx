import { createContext } from 'react';

import { ProductContextProps, Props } from '../interfaces/productTypes';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';

import useProducts from '../hooks/useProducts';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext

const ProductCard = ({ children, product }: Props) => {
  const { counter, increaseBy } = useProducts()
  return (
    <Provider value={{ 
      counter,
      increaseBy,
      product
     }}>
      <div className={styles.productCard}>
        { children }
      </div>
    </Provider>
  );
};


ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;

export default ProductCard
