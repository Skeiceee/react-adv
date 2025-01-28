import { useContext } from "react";

import styles from '../styles/styles.module.css'
import { ProductContext } from "./ProductCard";

interface Props {
  className?: string;
  title?: string;
}

export const ProductTitle = ({ title = '', className = ''}: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <div style={{ 
      marginTop: '10px',
      marginBottom: '10px',
     }}>
      <span className={ `${styles.productDescription} ${className}` }>{ title ? title : product.title }</span>
    </div>
  )
}