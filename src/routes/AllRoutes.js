import { Route,Routes } from "react-router-dom";
import UseCallBack from "../hooks/UseCallBack";
import UseContext from "../hooks/UseContext";
import UseEffect from "../hooks/UseEffect";
import UseImperativeHandle from "../hooks/UseImperativeHandle";
import UseLayoutEffect from "../hooks/UseLayoutEffect";
import UseMemo from "../hooks/UseMemo";
import UseReducer from "../hooks/UseReducer";
import UseRef from "../hooks/UseRef";
import UseState from "../hooks/UseState";
import Home from "../screen/home";
const AllRoutes=()=>{
    return(
        <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/use-state" element={<UseState/>}></Route>
            <Route path="/use-ref" element={<UseRef/>}></Route>
            <Route path="/use-reducer" element={<UseReducer/>}></Route>
            <Route path="/use-memo" element={<UseMemo/>}></Route>
            <Route path="/use-layout-effect" element={<UseLayoutEffect/>}></Route>
            <Route path="/use-imperative-handle" element={<UseImperativeHandle/>}></Route>
            <Route path="/use-effect" element={<UseEffect/>}></Route>
            <Route path="/use-context" element={<UseContext/>}></Route>
            <Route path="/use-callback" element={<UseCallBack/>}></Route>
        </Routes>
        </div>)
}
export default AllRoutes;