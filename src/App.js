import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Login from './component/Login/Login/Login';
import Navbar from './component/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
