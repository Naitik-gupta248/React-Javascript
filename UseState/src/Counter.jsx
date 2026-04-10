import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(20);

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)} className="Click">
                Click me
            </button>

            <button onClick={() => setCount(count - 1)}>
                Reduce me
            </button>
        </div> 
    )
}
export default Counter;