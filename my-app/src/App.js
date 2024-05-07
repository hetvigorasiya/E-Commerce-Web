import React from 'react';
import './App.css';
import { Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Component/Global/Navbar/Navbar';
import Blog from './Pages/Blog';
import Pages from './Pages/Pages';
import Contact from './Pages/Contact';
import Products from './Pages/Products';


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<Pages />} /> 
        <Route path='/products' element={<Products />} /> 
        <Route path='/blog' element={<Blog />} /> 
        <Route path='/contact' element={<Contact />} /> 
      </Routes>
    </>
  );
}

export default App;
