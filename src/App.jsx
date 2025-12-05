import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const App = () => {
       
  const[products,setProducts]=useState([]);
        

       function getProduct(){

        
  const endpoint = "https://fakestoreapi.com/products";

  fetch(endpoint)
    .then(result => result.json())
    .then(response => {
      setProducts(response);
    })
    .catch(err => {
      console.log("Error:", err);
    });
}


         
      //  const endpoint="https://fakestoreapi.com/products";
        // fetch (endpoint)
         //.then((result)=>{result.json().then((response)=>
          //{
            //setProducts(response)
          //}).
         //catch((err)=>{}).catch((err)=>{})
          
         //}) 
         
         
        //const endpoint="https://fakestoreapi.com/products";
        //const response=await fetch ("endpoint", {method:'GET'});
        //const data=await response.json();

       

       
        useEffect(()=>{
             getProduct();
        },[])
         
  return (
    <div>
      {
         products.map((item)=>{
          return <ProductCard  title={item.title} image={item.image} price={item.price} key={item.id}/>

          
         })
      }
      
       </div>
  )
}

export default App