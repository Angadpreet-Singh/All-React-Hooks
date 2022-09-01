import { useLocation } from "react-router"

const UseLocation=()=>{
    const backup=useLocation();
    console.log(backup)
    return(
        <div className="comp-wrapper">
            <h1>UseLocation Hook :-</h1>
            <h3>{backup.state.data}</h3>
        </div>
    )
}
export default UseLocation