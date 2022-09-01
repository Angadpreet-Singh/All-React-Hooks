import { useRef } from "react"
import ChildUseImperative from "./Child-UseImperative"

const UseImperativeHandle=()=>{
    const buttonRef=useRef(null)
    return(
    <div className="comp-wrapper">
        <h1>UseImperativeHandle Hook :-</h1>
            <button onClick={()=>{buttonRef.current.toggle()}}>Parent Button</button>
        <ChildUseImperative ref={buttonRef}/>
    </div>)
}
export default UseImperativeHandle