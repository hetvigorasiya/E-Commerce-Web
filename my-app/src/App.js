import React from 'react';
import './App.css';
import { Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Component/Global/Navbar/Navbar';
import Blog from './Pages/Blog';
import Pages from './Pages/Pages';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import Footer from './Component/Global/Footer/Footer';
import Users from './Stat/Users';
import SingleUser from './Stat/SingleUser';
import Product from './Stat/Product';
import SingalProduct from './Stat/SingalProduct';


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about/' element={<Pages />} /> 
        <Route path='/products/' element={<Products />} /> 
        <Route path='/blog/' element={<Blog />} /> 
        <Route path='/contact/' element={<Contact />} /> 
        <Route path='/user/' element={<Users/>} /> 
        <Route path='/user/:id' element={<SingleUser/>} /> 
        <Route path='/product/' element={<Product/>} /> 
        <Route path='/product/:id' element={<SingalProduct/>} /> 

      </Routes>
    <Footer/>
    </>
  );
}

export default App;
