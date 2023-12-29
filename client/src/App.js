import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Routes>
                 <Route path = "/" element = {<Dashboard/>} />
                 <Route path = "/necleo-web" element = {<Dashboard/>} />
            </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
