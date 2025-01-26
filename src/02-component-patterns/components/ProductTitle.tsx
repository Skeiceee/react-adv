import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

export const ProductTitle = ({ title = '' }) => {
  const { product } = useContext(ProductContext);

  return (
    <div style={{ 
      marginTop: '10px',
      marginBottom: '10px',
     }}>
      <span className={ styles.productDescription }>{ title ? title : product.title }</span>
    </div>
  )
}