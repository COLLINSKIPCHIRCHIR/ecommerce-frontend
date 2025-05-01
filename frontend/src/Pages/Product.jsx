import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import { ProductDisplay } from '../Components/Productdisplay/ProductDisplay'
import { DescriptionBox } from '../Components/description box/DescriptionBox'
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts'

export const Product = () => {
  const {all_product}= useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id ===Number(productId))

  console.log("productId from URL:", productId);
  console.log("all_product:", all_product);
  console.log("Found product:", product);
  
  if (!product) {
      return <div>Product not found</div>;
    }

  return (
    <div>
        <Breadcrum product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox />
        <RelatedProducts/>
    </div>
  )
}
