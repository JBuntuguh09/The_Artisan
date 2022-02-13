import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Pages/Register';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/register" exact element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
