import React, {useContext} from 'react';
import {UserContext} from './ComponentA.jsx';
function ComponentC(){
    const user = useContext(UserContext);
    return(
        <div>
            <h1>Component C</h1>
            <h2>{`Nice to meet you, ${user}!`}</h2>
            {alert("Hello and Welcome back to my channel")}
        </div>
    )
}
export default ComponentC;