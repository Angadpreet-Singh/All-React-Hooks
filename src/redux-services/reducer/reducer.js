import { DECREMENT, INCREMENT } from "../constant";


const initialstate={
    data:[]
}
const action=(state=initialstate,action)=>{
    switch(action.type){
        case INCREMENT:
            return({...state,data:action.data})
        case DECREMENT:
            return({...state,data:action.data})
        default:
            return state
    }
}
export default action;