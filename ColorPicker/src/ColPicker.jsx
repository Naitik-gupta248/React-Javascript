import { useState } from 'react'; 

function ColPicker(){
    
    const [color, setColor] = useState('#1a1a1a');

    function handleColorChange(event){
        setColor(event.target.value);
    }
    
    return(
        <div className='color-Picker'>
            <h1>Color Picker</h1>
            <div className='color-display' style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color:</label>
            <input type="color" value = {color} onChange = {handleColorChange}/>
        </div>
    )
}
export default ColPicker;