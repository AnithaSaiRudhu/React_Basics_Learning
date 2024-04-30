import { useState, setState } from "react";

const Counter = () =>{

    const [counterState, setCounterState] = useState(() =>{
        return {counter : 10, title : "Fun"}
    });

    function incrementcounter () {
        setCounterState((p) => {
            return{ ...p , counter: p.counter + 1 , title : "Increment"};
        });         
    }

    function decrementcounter () {
        setCounterState((p) => {
            return{...p, counter: p.counter - 1, title : "Decrement"};
        });        
    }

    return (
                <div className="col-12 col-md-2 offset-md-5 border text-white">
                    <span className="h2 pt-4 m-2 text-white-50">{counterState.title} Counter</span>
                    <button className="btn btn-success m-1" onClick={incrementcounter}>+1</button>
                    <button className="btn btn-danger m-1" onClick={decrementcounter}>-1</button>
                    <span className="h4">
                      Counter: &nbsp;
                      <span className="text-success">{counterState.counter}</span>
                    </span>
                </div>

    )        
};

export default Counter;