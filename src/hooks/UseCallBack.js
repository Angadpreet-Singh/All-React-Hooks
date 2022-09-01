import { useState,useMemo,useEffect,useCallback} from "react"
const UseCallBack=()=>{
    const[state,setState]=useState(false)
    const[data,setData]=useState(1)
    const[triger,setTriger]=useState(0)
    function change(){
        setState(!state)
    }
    function fun() {
        console.log("Function called always")
    }

    const update=useCallback(()=>{
        console.log('update function')
        return(triger)
    },[])

    useEffect(()=>{
        console.log("useEffect Function")
    },[update])

    const memoFunction=useMemo(()=>{
        console.log("useMemo Function")
    },[update])

    return(
    <div className="comp-wrapper">
        <h1>UseCallback Hook :-</h1>
        {fun()}
        <h3>{update()}</h3>
        <button onClick={change}>Change State</button><br />
        <button onClick={()=>{setData(data+1)}}>Change data</button><br />
        <button onClick={()=>{setTriger(triger+1)}}>Change triger</button><br />
        {console.log(triger)}
    </div>)
}
export default UseCallBack;