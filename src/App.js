import logo from './logo.svg';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Opportunities from './pages/Opportunities';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import './App.css';
import Navbar from './navbar';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
)}

export default App;