import { useState } from 'react';

function ColorPicker() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [card, setCard] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handleCardChange(event) {
        setCard(event.target.value);
    }
    return (
        <div>
            <input value={name} onChange={handleChange} />
            <p>Name: {name}</p>
            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>
            <p>Comment: {comment}</p>
            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
            <select name="card" id="card" value={card} onChange={handleCardChange}>
                <option value="">Select an option</option>
                <option value="visa">Visa</option>
                <option value="mastercard">MasterCard</option>
                <option value="amex">American Express</option>
            </select>
        </div>
    )
}
export default ColorPicker;