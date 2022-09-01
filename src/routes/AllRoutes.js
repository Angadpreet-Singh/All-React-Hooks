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
import UseParam from "../hooks/Useparam";
import Users from "../screen/Users";
import Home from "../screen/home";
import Searchparam from "../hooks/UseSearchParam";
import UseNavigate from "../hooks/UseNavigate";
import UseLocation from "../hooks/UseLocation";
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
            <Route path="/use-param" element={<UseParam/>}></Route>
            <Route path="/user/:name" element={<Users/>}></Route>
            <Route path="/use-Search-Param" element={<Searchparam/>}></Route>
            <Route path="/use-Navigate" element={<UseNavigate/>}></Route>
            <Route path="/use-Location" element={<UseLocation/>}></Route>
        </Routes>
        </div>)
}
export default AllRoutes;