import { useEffect, useState } from "react"
const UseEffect=()=>{
    const [count,setCount]= useState(0)
    const update=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        console.log("Render Times :",count)
    },[count])
    console.log('Main page')
    return(
    <div className="comp-wrapper">
        <h1>UseEffect Hook :-</h1>
        <span style={{ margin: '5px' }}>{count}</span>
            <button style={{ margin: '5px' }} onClick={update}>Increment</button>
    </div>)
}
export default UseEffect