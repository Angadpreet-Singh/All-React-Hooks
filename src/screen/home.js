import {Link} from 'react-router-dom'
const Home=()=>{
    return(<div className='home-wrapper'>
    <Link to='/use-state'>use-state</Link><br />
    <Link to='/use-ref'>use-ref</Link><br />
    <Link to='/use-reducer'>use-reducer</Link><br />
    <Link to='/use-memo'>use-memo</Link><br />
    <Link to='/use-layout-effect'>use-layout-effect</Link><br />
    <Link to='/use-imperative-handle'>use-imperative-handle</Link><br />
    <Link to='/use-effect'>use-effect</Link><br />
    <Link to='/use-context'>use-context</Link><br />
    <Link to='/use-callback'>use-callback</Link></div>
    )
}
export default Home;