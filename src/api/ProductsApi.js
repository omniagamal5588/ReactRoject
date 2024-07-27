import axios from "axios";

const baseUrl='http://localhost:3005/products';
//CRUD Opertaions

const getAllProducts= ()=> axios.get(baseUrl);
const getProductById =(productId) => axios.get(`${baseUrl}/${productId}`);
const addNewProduct=(product)=>axios.post(baseUrl,product);
const updateProduct=(product,productId)=>axios.put(`${baseUrl}/${productId}`,product);
const deleteProduct =(productId)=> axios.delete(`${baseUrl}/${productId}`);

export{
    getAllProducts,
    getProductById,
    addNewProduct,
    updateProduct,
    deleteProduct
}