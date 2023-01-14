import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Login from './component/Login/Login/Login';
import Navbar from './component/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Footer from './component/Shared/Footer/Footer';
import { useState } from 'react';

function App() {
  const [displayNone,setDisplayNone] = useState(false)

  const allScroolId = () =>{
    if(window.scrollY >= 350){
      setDisplayNone(true)
    }else{
      setDisplayNone(false)
    }
  }
  window.addEventListener('scroll',allScroolId)
  return (
    <div className="app" id='scrool'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='home' element={<Home/>} />
        <Route path='login' element={<Login/>} />
      </Routes>
      <ToastContainer/>
      <div className={displayNone ? 'all-scrool displayBlock' : 'all-scrool displayNone'}>
      <a href="#scrool"><FontAwesomeIcon className='all-scrool-icon' icon={faArrowUp}/></a>
      </div>   
     
      <Footer/>
    </div>
  );
}

export default App;
