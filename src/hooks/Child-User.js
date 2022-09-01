import { myContext } from "./UseContext"
import { useContext } from "react"
const ChildUser=()=>{
    const {val}=useContext(myContext)
    return(
        <>
            <h3>{val}</h3>
        </>
    )
}
export default ChildUser