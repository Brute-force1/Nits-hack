import './App.css';
import {Routes, Route} from "react-router-dom"
import Trackingpage from './pages/Tracking';


function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/tracking' element={<Trackingpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
