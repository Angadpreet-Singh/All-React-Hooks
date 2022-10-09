import { DECREMENT, INCREMENT, } from "../constant";
export const incrementAction=(data)=>{
    console.log("action part of redux")
    return({
        data:data,
        type:INCREMENT
    })
}
export const decrementAction=(data)=>{
    return({
        data:data,
        type:DECREMENT
    })
}