import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
