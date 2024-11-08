import './App.css';
import {Routes, Route} from "react-router-dom"

function Header(){
  return (
    <p>This is a header</p>
  )
}

function App() {
  return (
    <div className="App">
      <p>This is a home page</p>
      <Routes>
        <Route path='/header' element={<Header />}></Route>
      </Routes>
    </div>
  );
}

export default App;
