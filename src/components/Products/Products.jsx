import React, { useEffect , useState } from "react";
import { useCart } from "../../context/CartContext";
import Product from "./Product/Product";

const Products = () => {
  
  let [datas , setDatas] = useState([])

  const {cart, setCart} = useCart();
  
  const [counter, setCounter] = useState(0);
   

  useEffect(()=>{
    const getData = async () =>{
      let res = await fetch("http://localhost:8080/products")
      let data = await res.json()
      console.log(data)
      setDatas(data)
    }
    getData()
  },[])
  return <div>{/* Code here */}
  {
    datas.map((el) =>{
      return <Product productValue={el} />
    })
  }
  </div>;
};

export default Products;
