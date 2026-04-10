function List(props) {

    const itemList = props.items;

    const lowCaloriesFruits = itemList.filter(item => item.calories < 20);
    console.log(lowCaloriesFruits);
    
    
    const listItems = lowCaloriesFruits.map(lowCaloriesFruits => <li key={lowCaloriesFruits.id}>
        {lowCaloriesFruits.name}: &nbsp;
        <b>{lowCaloriesFruits.calories}</b></li>);

const HighCaloriesFruits = fruits.filter(fruit => fruit.calories > 20);
    const listItems2 = HighCaloriesFruits.map(HighCaloriesFruits => <li key={HighCaloriesFruits.id}>
        {HighCaloriesFruits.name}: &nbsp;
        <b>{HighCaloriesFruits.calories}</b></li>);

    return (
        <div>
            <h2>Low Calories Fruits</h2>
            <ol>{listItems}</ol>
            <h2>High Calories Fruits</h2>
            <ol>{listItems2}</ol>
        </div>
    );
}
export default List;