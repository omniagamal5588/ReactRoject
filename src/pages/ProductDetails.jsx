import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../api/ProductsApi";
export function ProductDetails(){
    let {id}=useParams();
    let [product,setProducts]=useState({
        id:'',
        productName:'',
        price:'',
        quantity:''
    })
    useEffect(()=>{
       const fetchProduct =()=>{
            getProductById(id).then((response)=>setProducts(response.data)).catch(err=>console.log(err));
        };
         fetchProduct();
    },[id])
    const navigate=useNavigate();
    function backToProductList(){
        navigate('/products')
    }
    return(
        <div className="bg-secondary p-5 text-center">
            <div className="container">
                <h1 className="text-light" >Product Details {id}</h1>
                <p className="text-light fs-3">Product Name: {product.productName}</p>
                <p className="text-light fs-4">Product Price: {product.price}</p>
                <p className="text-light fs-4">Product Quantity: {product.quantity}</p>
            
               <button onClick={backToProductList} className="btn bg-warning">Back To Products</button>

            </div>
        </div>
    )
}