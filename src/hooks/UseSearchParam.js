import {useSearchParams} from 'react-router-dom'
const Searchparam=()=>{
    const [param,setParam]=useSearchParams()
    console.log("Render : ",param.get('name'))
    return(
    <div className="comp-wrapper">
        <h1>UseSearchparam Hook :-</h1>
            <button onClick={()=>{
                setParam({name:'Angad'})
            }} >Change in URl</button><br />
        </div>
    )
}
export default Searchparam