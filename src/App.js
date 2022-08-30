import './App.css';
import AllRoutes from './routes/AllRoutes'
import Home from './screen/home';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AllRoutes/>
      <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
