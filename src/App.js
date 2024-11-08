import './App.css';
import {Routes, Route} from "react-router-dom"

import Header from './components/Header';
import HomeBody from './components/HomeBody';

import Trackingpage from './pages/Tracking';


function App() {
  return (
    <div className="App">
      <Header />
      <HomeBody/>
      <Routes>

        <Route path='/tracking' element={<Trackingpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
