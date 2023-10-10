import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import './App.css';
import Guestpage from './components/Guestpage';
import LoginPage from './components/LoginPage';
import Adminpage from './components/Adminpage';
import Successpage from './components/Successpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Guestpage/>}/>
          <Route path="/guest" element={<Guestpage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/admin" element={<Adminpage/>}/>
          <Route path="/success" element={<Successpage/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
