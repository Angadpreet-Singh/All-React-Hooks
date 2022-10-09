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
    <Link to='/use-callback'>use-callback</Link><br />
    <Link to='/use-param'>use-param</Link><br />
    <Link to='/use-Search-Param'>use-search-param</Link><br />
    <Link to='/use-Navigate'>use-navigate</Link><br />
    <Link to='/use-Location' state={{data:"This is useLocation State Data"}} >use-Location</Link><br />
    <Link to='/react-Redux' >React-Redux</Link><br />
    </div>
    )
}
export default Home;