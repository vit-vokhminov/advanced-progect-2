import React from 'react';
import './Counter.css';

export const Counter = () => {
    const [count, setcounter] = React.useState(0);

    const handleInc = () => {
        setcounter(count + 1);
    };

    const handleDec = () => {
        setcounter(count - 1);
    };

    const screenWidth = window.screen.width
    const screenHeight = window.screen.height
    console.log(screenWidth,screenHeight)
    //1366 768
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleDec}>-</button>
            <button onClick={handleInc}>+</button>
        </div>
    );
};

