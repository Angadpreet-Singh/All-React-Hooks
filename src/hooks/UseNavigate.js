import { useNavigate } from "react-router"
const UseNavigate=()=>{
    const nav=useNavigate()
    return(
        <div className="comp-wrapper">
            <h1>UseNavigate Hook :-</h1>
            <button onClick={()=>{nav('/')}} >Home</button>
        </div>
    )
}
export default UseNavigate