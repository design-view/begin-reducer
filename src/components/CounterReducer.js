import React, { useReducer } from 'react';

//리듀서 함수
function reducer(state,action){
    switch(action.type){
        case 'INCREASE':
            return state+action.payload;
        case 'DECREASE':
            return state-action.payload;
        default: return state;
    }
}
function CounterReducer() {
    const [number, dispatch] = useReducer(reducer,0);
    const onIncrease = () => {
        dispatch({type:'INCREASE',payload: 1000});
    }
    const onDecrease = () => {
        dispatch({type:'DECREASE',payload: 100});
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
     );
}

export default CounterReducer;