import React ,{useEffect, useState } from "react";
import { useCart } from "../../../context/CartContext";
const Product = (props) => {
  const {productValue} = props;
  const {cart, setCart} = useCart();
  const [counter , setCounter] = useState(0)

  // Note: this id should come from api
  const product = { id: 1 };
  useEffect(() => {
    if(counter == 0 && cart > 0){
      setCart(cart-1)
    }
  }, [counter])
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{productValue.name}</h3>
      <h6 data-cy="product-description">{productValue.description}</h6>
      {
        counter ===0 ? <button data-cy="product-add-item-to-cart-button" onClick={() => {setCart(cart+1); setCounter(counter+1)}}>Add to cart</button> :
        <div>
        
        <button data-cy="product-increment-cart-item-count-button" onClick={ () =>setCounter(counter+1) }>+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
            counter
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"  onClick={ () =>setCounter(counter-1) }>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={ () =>{setCart(cart-1); setCounter(0)} }>Remove from cart</button>
      </div>
      }     
    </div>
  );
};

export default Product;
