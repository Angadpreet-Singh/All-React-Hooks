import {Link} from "react-router-dom"
const UseParam=()=>{
    return(<div className="comp-wrapper">
        <h1>UseParam Hook :-</h1>
        <Link to='/user/User1'>User 1</Link><br />
        <Link to='/user/User2'>User 2</Link><br />
        <Link to='/user/User3'>User 3</Link>
        </div>
    )
}
export default UseParam;