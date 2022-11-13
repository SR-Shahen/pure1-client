import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Products from './Pages/Products/Products';
import Footer from './Pages/Shared/Footer';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Login from './Pages/Shared/Login';
import SignUp from './Pages/Shared/SignUp';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
