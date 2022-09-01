import { forwardRef, useImperativeHandle, useState } from "react"
const ChildUseImperative=(props,ref)=>{
const[val,setval]=useState(false)

function change(){
        setval(!val)
    }
useImperativeHandle(ref,()=>{
    return {
        toggle:()=>{
            change()
        }
    }
})
return(
    <div>
        <h1>Child for UseImperativeHandle :-</h1>
        <button onClick={change}>Child Button</button><br />
        {val && <span>Trigger</span>}
    </div>
)
}
export default forwardRef(ChildUseImperative)