import { useState } from "react"

function Counter(){
    const [count, setCount] =useState(0)
    return(<div>
    <h1>counter App</h1>
    
    <button onClick={() => setCount(count + 1 )}> Add</button>
    </div>)
}