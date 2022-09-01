import { useContext } from "react"
import { myContext } from "./UseContext"
const ChildLogin=()=>{
    const {setVal}=useContext(myContext)
    return(
        <>
            <input type="text" onChange={(e)=>{setVal(e.target.value)}} />
        </>
    )
}
export default ChildLogin