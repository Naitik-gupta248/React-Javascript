import {useState} from 'react';

function FoodList(){
    const [foods, setfoods] = useState(["Appple", "Banana", "Orange"]);

    function handleAdd(){
        const NewFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';
        setfoods(f => [...f,NewFood]);
    }

    function handleRemove(index){
        setfoods(foods.filter((Element, index)))
    }
    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) =>
                    <li key={index} onClick={() =>handleRemove(index)}>
                        {food}
                    </li>)}
            </ul>
            <input type="text" id='foodInput' placeholder='Enter food name' />
            <button onClick={handleAdd}>Add Food</button>
        </div>
    )
}
export default FoodList;