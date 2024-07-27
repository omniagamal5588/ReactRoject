import { useDispatch, useSelector } from 'react-redux';

export function CounterWithRedux(){
  useSelector((state)=>state.counterSlice);
    const dispatch= useDispatch();
    
    function increaseCount(){
      dispatch({type:"INCREASE"})
    }
    function decreaseCount(){
       dispatch({type:'DECREASE'})
    }
    return(
        <div>
           <h2>Counter Component</h2>
           <p>Count : </p>
           <button onClick={increaseCount} className="btn bg-success m-2">+</button>
           <button onClick={decreaseCount} className="btn bg-danger"> - </button>
        </div>
    )
}