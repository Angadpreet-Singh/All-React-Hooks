import { useState } from "react"

const UseState = () => {
    const [count, setCount] = useState(0)
    const inc=()=>{
        setCount(count+1)
        console.log('inside of func that change state',count)
    }
    console.log("Render time",count)
    return (
        <div className="comp-wrapper">
            <h1>UseState Hook :-</h1>
            <span style={{ margin: '5px' }}>{count}</span>
            <button style={{ margin: '5px' }} onClick={inc}>Increment</button>
            {/* <button style={{ margin: '5px' }} onClick={() => { setCount(count - 1) }}>Decrement</button> */}
        </div>
    )
}
export default UseState