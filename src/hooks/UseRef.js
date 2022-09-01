import { useRef } from "react"
import ChildForwardRef from "./Child-ForwardRef"
const UseRef = () => {
    const inputRef=useRef(null)
    const ForwardRef=useRef(null)
    const click1=()=>{
        console.log(inputRef)
        inputRef.current.focus()
    }
    const click2=()=>{
        
        ForwardRef.current.value=1000
    }
    console.log("Renders")
    return (
        <div className="comp-wrapper">
            <h1>UseRef Hook :-</h1>
            <input type="text" ref={inputRef}/><br /><br /><button onClick={click1}>Focus on the input text field</button>
            <h1>Forward Ref :-</h1>
            <ChildForwardRef ref={ForwardRef}/><br /><br />
            <button onClick={click2}>Change Value Of Child input text field</button>
        </div>)
}
export default UseRef