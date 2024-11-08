import './App.css';
import {Routes, Route} from "react-router-dom"
import Header from './components/Header';
import HomeBody from './components/HomeBody';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <p>This is a home page</p>
      <Routes>
        {/* <Route path='/' element={<HomeBody />}></Route> */}
        {/* <Route path='/tracking' element={<Tracking/>}></Route> 
      </Routes> */}
      <HomeBody/>
    </div>
  );
}

export default App;
