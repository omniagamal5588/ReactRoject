import {  useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link, useLoaderData } from 'react-router-dom';
import {deleteProduct} from '../api/ProductsApi';

export function Products(){
    let {data}=useLoaderData();
    let [products,setProducts]=useState(data);
  
//   useEffect(()=>{
//   getAllProducts().then((resopse)=>{
//        setProducts(resopse.data);
//     }).catch(error=>console.log(error));
//   },[]);
 //////// 
  const deleteHandler= async(productId)=>{
    deleteProduct(productId).then(response=>{
        let filteredProList= products.filter((product)=>product.id!==productId);
        setProducts(filteredProList);
    })
    .catch(err=>console.log(err));

  }
    return(
        <div className="product text-center m-3">
            <h1>Our Products</h1>
            <div className="container">
              <Link to='/products/add/'> <i className="bi bi-plus-circle-fill fs-2 text-center"></i> </Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {products&&products.map((product)=>{
                            return(
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                   <td >
                                        <Link to={`/products/${product.id}`}> <i className="bi bi-eye-fill  text-warning fs-5 p-2 "></i></Link>
                                        <Link to={`/products/${product.id}/edit/`} ><i className="bi bi-pencil-square text-info fs-5 p-2"></i></Link>
                                        <Link><i onClick={()=>deleteHandler(product.id)} className="bi bi-trash3-fill  text-danger fs-5  p-2"></i></Link>
                                     </td>
                            </tr>
                            )
                        })}     
                    </tbody>
                    </Table>
                            </div>

                        </div>
    )
}