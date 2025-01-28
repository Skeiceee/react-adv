import { createContext } from 'react';

import { ProductContextProps, Props } from '../interfaces/productTypes';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';

import useProducts from '../hooks/useProducts';

import styles from '../styles/styles.module.css'
import '../styles/custom-styles.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext

const ProductCard = ({ children, product,  className }: Props) => {
  const { counter, increaseBy } = useProducts()
  return (
    <Provider value={{ 
      counter,
      increaseBy,
      product
     }}>
      <div className={`${styles.productCard} ${className}`} >
        { children }
      </div>
    </Provider>
  );
};


ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;

export default ProductCard
