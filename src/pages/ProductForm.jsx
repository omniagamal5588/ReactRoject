import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { addNewProduct } from "../api/ProductsApi";
export function  ProductForm(){
   let navigate=useNavigate();

    let [formData,setFormData]=useState({
        productName:'',
        price:'',
       quantity:''
    })

    const formHandler=(e)=>{
        setFormData({
            ...formData,[e.target.name]:e.target.value
        })
    }
    const addNewPro=(e)=>{
        e.preventDefault();
        addNewProduct(formData).then(()=>{
            navigate('/products');
        }).catch(err=>console.log(err))
    }


 return(
     <div className="m-5">
    <Form onSubmit={addNewPro} className="container p-5">
        <label className="fs-2 m-1" htmlFor="ProductName"> Product Name</label>
        <input onChange={formHandler} className="form-control" type="text" placeholder="Enter Product Name" name="productName" />
         <label className="fs-2 m-1" htmlFor="ProductPice"> Product Price</label>
        <input onChange={formHandler} className="form-control" type="number" placeholder="Enter The Price" name="price" />
         <label className="fs-2 m-1" htmlFor="ProductQuantity"> Product Quantity</label>
        <input  onChange={formHandler} className="form-control" type="text" placeholder="Enter The Quantity" name="quantity" />
        <button className="btn btn-primary m-3" >Add New Product</button>


    </Form>
  </div>
 )

}