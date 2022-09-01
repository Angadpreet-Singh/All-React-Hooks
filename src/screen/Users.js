import { useParams } from "react-router";

const Users=()=>{
    const param=useParams()
    const {name}=param
    console.log(param)
    return(
        <div className="comp-wrapper">
        <h1>Welcome {name}</h1></div>
    )
}
export default Users;