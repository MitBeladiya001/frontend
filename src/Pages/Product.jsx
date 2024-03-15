import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {

  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  // element id is number so we convert product id to number
  const product = all_product.find((e) => e.id === Number(productId))

  return (
    <div>
      <Breadcrum product={product} />
      {/* product img price and many more to display when we click to certain product then it is display whole it's value*/}
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product
