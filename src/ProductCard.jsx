import React from 'react'

const ProductCard = ({title,price,image}) => {
  return (
    <div className='product-card'>
       <img  src={image} alt={title} width={100} height={100}/>
       <h3>{title}</h3>
       <p>price:{price}$</p>

    </div>
  );
}

export default ProductCard