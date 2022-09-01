import { useState,useMemo,useEffect } from "react"
const UseMemo=()=>{
    const[state,setState]=useState(false)
    const[data,setData]=useState(1)
    function change(){
        setState(!state)
    }
    function fun() {
        console.log("Function called always")
    }

    useEffect(()=>{
        console.log("useEffect Function")
    },[data,update])

    const memoFunction=useMemo(()=>{
        console.log("useMemo Function")
        return data
    },[data])

    function update(){
        return "helo"
    }

    return(
    <div className="comp-wrapper">
        <h1>UseMemo Hook :-</h1>
        {fun()}
        {memoFunction}
        <button onClick={change}>Change State</button><br />
        <button onClick={()=>{setData(data+1)}}>Change data</button><br />
    </div>)
}
export default UseMemo