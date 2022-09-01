import { useReducer } from "react"
const UseReducer = () => {
    const reducer=(state,action)=>{
        switch(action.type){
            case "Increment":
                return {count:state.count+1,visible:state.visible}
            case 'Toogle':
                return {count:state.count,visible:!state.visible}
            default:
                return state
        }
    }
    const [state,dispatch]=useReducer(reducer,{count:0,visible:true})
    console.log("club of state",state)
    return (
        <div className="comp-wrapper">
            <h1>UseReducer Hook :-</h1>
            <span style={{ margin: '5px' }}>{state.count}</span>
            <button style={{ margin: '5px' }} onClick={()=>{dispatch({type:'Increment'}); dispatch({type:'Toogle'})}}>Increment</button><br /><br />{state.visible && <span>Hello how are you</span>}
        </div>)
}
export default UseReducer