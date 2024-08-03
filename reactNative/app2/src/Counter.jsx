import { useState } from "react"
export default function Counter({num}){
    const [count , setCount] = useState(0);

    const increment = () => setCount(count => count+1) 
    return (<div>
         <ul> {num.map((e) =>
        <li>player{e}:{count} <span><button onClick={increment}>+1</button></span> </li>
        )
       }</ul>
       
       <button>Reset</button>

    </div>)
}