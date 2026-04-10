import {useState, useEffect} from 'react';

function MyComponent(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('red');

    useEffect(() => {
        document.title = `Count:${count}`;
        }, [count]);

    function addCount(){
        setCount(count => count + 1);
    }

    function delCount(){
        setCount(count => count-1);
    }

    function ChangeColor(){
        setColor(color => color === 'red' ? 'blue' : 'red');
    }
    return(
        <>
        <p style={{ color: color }}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={delCount}>Substract</button>
        <button onClick={ChangeColor}>Change Color</button>
        </>
    )
}
export default MyComponent;