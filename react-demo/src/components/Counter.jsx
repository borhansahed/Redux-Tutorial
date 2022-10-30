import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './services/reducer/CounterSlice';

const Counter = () => {

    const count = useSelector(state => state.counter.count)
   const dispatch = useDispatch()

    return (
        <div>
            <h3>Count</h3>
            <p>{count}</p>
            <button onClick={() =>  dispatch(increment())  }>increment</button> 
            <button onClick={() => dispatch(decrement())}>decrement</button> 
            <button onClick={() => dispatch(reset())}>reset</button> 
           
        </div>
    );
};

export default Counter;