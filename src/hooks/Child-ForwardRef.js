import { forwardRef } from "react";

const ChildForwardRef=(props,ref)=>{
    return(
        <input type="text" ref={ref} />
    )
}
export default forwardRef(ChildForwardRef);