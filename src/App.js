import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/home.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register/register.component';
import Login from './Components/login/login.component';
import { Jobs } from './Pages/jobs/jobs.component';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/register" exact element={<Register/>}/>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/jobs" exact element={<Jobs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
