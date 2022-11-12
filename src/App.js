import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Products from './Pages/Products/Products';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
