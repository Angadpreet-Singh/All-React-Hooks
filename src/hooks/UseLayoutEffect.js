import { useState,useEffect,useLayoutEffect } from "react"
const UseLayoutEffect=()=>{
        const [count,setCount]= useState(0)
        const update=()=>{
            setCount(count+1)
        }
        useEffect(()=>{
            setTimeout(()=>{console.log("render",count)},5000)
        },[count])
        useLayoutEffect(()=>{
            setTimeout(()=>{console.log("useEffect render")},5000)
        },[count])
        console.log('Main page')
        return(
    <div className="comp-wrapper">
        <h1>UseLayoutEffect Hook :-</h1>
        <span style={{ margin: '5px' }}>{count}</span>
            <button style={{ margin: '5px' }} onClick={update}>Increment</button>
    </div>)
}
export default UseLayoutEffect