import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,incrementMultiplier,decrementMultiplier} from '../../redux/Slice/counterSlice';
import {useState} from 'react';

function Counter() {

  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch();
  const [multiplier,setMultiplier] = useState(10);
  return (
    <div className='mt-2 pt-3 pl-2 text-center'
    style={{ borderTop:'1 px solid #999'}}>   
    <div className="text-white pb-2 h4">
      Counter : {count}
    </div>
    <div className='row'>
      <div className='p-4 col-12 col-md-6'>
      <div className='border p-4'>
        <button className="btn btn-primary" onClick={()=> dispatch(increment())}>Add</button>
        <button className='btn btn-danger' onClick={()=> dispatch(decrement())}>Remove</button>
      </div>

      <div className='border p-4'>
        <input placeholder="multiplier..." value = {multiplier}
        onChange={(e)=>{setMultiplier(e.target.value)}}></input>
        <button className="btn btn-primary" onClick={()=> dispatch(incrementMultiplier(multiplier))}>Add</button>
        <button className='btn btn-danger' onClick={()=> dispatch(decrementMultiplier(multiplier))}>Remove</button>
      </div>
      </div>
      </div>   
    </div> 
  )
}

export default Counter
