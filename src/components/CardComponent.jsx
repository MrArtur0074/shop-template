import * as React from 'react';
import { Link } from 'react-router-dom'

export default function CardComponent(props) {
    const product = props.cardInfo
  return (
    <div className='card'>
      <Link style={{ textDecoration: 'none', color: 'black'}} to={`/products/${product.id}`}>
        <div className='card-image'>
          <img src={product.image} alt="" />
        </div>
        <div className='card-title'>
          {product.title}
        </div>
        <div className='card-description'>
          {product.description}
        </div>
        <div className='card-price'>
          {product.price} $
        </div>
      </Link>
    </div>
  );
};