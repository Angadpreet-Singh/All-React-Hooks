import { createContext, useState } from "react"
import ChildLogin from "./Child-Login"
import ChildUser from "./Child-User"
export const myContext = createContext(null)
const UseContext = () => {
    const [val,setVal] = useState("default")

    return (
        <myContext.Provider value={{ val, setVal }}>
            <div className="comp-wrapper">
                <h1>UseContext Hook :-</h1>
                <ChildLogin />
                <ChildUser />
            </div>
        </myContext.Provider>)
}
export default UseContext