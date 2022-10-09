const Redux=(props)=>{
    console.log(props)
    return(
        <div className="comp-wrapper">
            <h1>React Redux  :-</h1>
            <h3>value: </h3>
            <button onClick={()=>{props.inc({data1:'hi',data2:'yo'})}}>Increment</button>
            <button >Decrement</button>
        </div>
    )
}
export default Redux;