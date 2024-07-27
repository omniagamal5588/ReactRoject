import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store/counterSlice";

export function CounterWithToolkit(){
      const {count}=useSelector(state=>state.slice);
    let {increase,decrease}=counterAction;
    const dispatch=useDispatch();

    
    function increaseCount(){
      dispatch(increase(5));
     
    }
    function decreaseCount(){
       dispatch(decrease(2));
      
    }
    return(
        <div className=' text-center mt-5'>
           <h2>Counter Component With Redux Toolkit</h2>
           <p>Count : {count}</p>
           <button onClick={increaseCount} className="btn bg-success m-2">+</button>
           <button onClick={decreaseCount} className="btn bg-danger"> - </button>
        </div>
    )
}