import React, { useState } from "react";
function Counter(){
    
    const stataArr = useState(0); //상태생성
    console.log(stataArr);
    const number = stataArr[0];
    const setNumber = stataArr[1];
    const onIncrease = () => {
        setNumber(number+1);
        console.log(number);
    }
    const onDecrase = () => {
        setNumber(number-1);
        console.log(number);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrase}>-1</button>
        </div>
    );
}
export default Counter;