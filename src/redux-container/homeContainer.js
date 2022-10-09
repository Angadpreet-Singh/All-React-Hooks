import { connect } from "react-redux";
import Redux from "../redux-component/home";
import { decrementAction, incrementAction } from "../redux-services/action/action";

const mapStateToProps=(state)=>{
    return({
        mystate:state
    })
}

const mapDispatchTOProps=(dispatch)=>{
    return({
        inc:(data)=>{dispatch(incrementAction(data))},
        dec:(data)=>{dispatch(decrementAction(data))}
    })
}

export default connect(mapStateToProps,mapDispatchTOProps)(Redux)