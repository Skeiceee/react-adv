import ProductCard from '../components/ProductCard'

import { ProductTitle } from '../components/ProductTitle'
import { ProductImage } from '../components/ProductImage'
import { ProductButtons } from '../components/ProductButtons'

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: '/coffee-mug.png'
}

const ShoppingPage = () => {
  return (
    <div style={{ paddingLeft: '20px' }}>
      <h1>Shooping Page</h1>
      <hr />
      <div style={{ 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '10px'
       }}>
        
        <ProductCard product={ product } className="bg-dark">
          <ProductImage className='custom-image'/>
          <ProductCard.Title className="text-white"/>
          <ProductCard.Buttons/>
        </ProductCard>

        <ProductCard product={ product }>
          <ProductImage className='custom-image'/>
          <ProductTitle/>
          <ProductButtons/>
        </ProductCard>

      </div>
    </div>
  )
}

export default ShoppingPage
