import React, { createContext,useState, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if(context){
    return context;
  }
}


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(0);
  const [counter, setCounter] = useState(0)
  
  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1)
  }
  
  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1)
  }
  const providerValue = {
    cart,
    setCart,
  }
  return <CartContext.Provider value={providerValue }>{children}</CartContext.Provider>;
};
