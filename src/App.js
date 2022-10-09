import './App.css';
import AllRoutes from './routes/AllRoutes'
import Home from './screen/home';
import {BrowserRouter} from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux/es/exports';
import RootReducer from './redux-services/reducer/index'
const store=createStore(RootReducer)
console.log(store)
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <AllRoutes/>
      <Home/>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
