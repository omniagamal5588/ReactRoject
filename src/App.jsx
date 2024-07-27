import './App.css';
import { Home } from './pages/Home';
import{Products} from './pages/Products';
//import{NotFoundPage} from './pages/NotFoundPage';
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom';
import { SharedLayout } from './layout/ShardLayout';
import { ProductDetails } from './pages/ProductDetails';
import {ProductForm} from'./pages/ProductForm';
import{NotFoundPage} from './pages/NotFoundPage';
import{getAllProducts} from './api/ProductsApi';
import { Error } from './pages/Error';
//import {CounterWithRedux} from './pages/CounterWithRedux';
import {CounterWithToolkit} from './pages/CounterWithToolkit';

function App() {
 
   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<SharedLayout />}>
     
      <Route index element={<Home/>} />
      <Route path='products' loader={getAllProducts} errorElement={<Error/>} element={<Products/>}/>
      <Route path='products/:id' element={<ProductDetails/>}/>
      <Route path='products/add/' element={<ProductForm/>}/>
       <Route path='products/:id/edit/' element={<ProductForm/>}/>
       {/* <Route path='/counter' element={<CounterWithRedux/>}/> */}
        <Route path='/counterToolkit' element={<CounterWithToolkit/>}/>
       <Route path='*' element={<NotFoundPage/>}/>
     </Route>
    )
   )
   
  
  return(
    <RouterProvider  router={router}>
     
    </RouterProvider>
  
  )
}

export default App;
