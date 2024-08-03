import { useState } from "react";
export default function Form1(){
    const [userName , setuserName] = useState({product:"tim",quantity:0})
    const Input= (e) => {
        setuserName(e.target.value )
    }
    return (
        <form>
            <label>Product Name: {product.value}</label><br />
        <input type="text" placeholder="userName" name="product" id="product" value={userName.product} onChange={Input} />
        <label>Quantity: {quantity.value}</label><br />
        <input type="number" placeholder="quantity" name="quantity" id="quantity" value={userName.quantity} onChange={Input} />
        <button >submit</button>
        </form>
    )
}