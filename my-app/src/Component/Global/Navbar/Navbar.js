import React from 'react'
import { Link } from 'react-router-dom';
import { imgConfig } from '../../../Image/logo';
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="bg-light">
            <nav className="container navbar navbar-expand-lg custom_nav-container ">

                <div className="navbar-brand">
                    <img width="200px" src={imgConfig?.logo1} alt="#" className='logo' />
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className=""> </span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                    <ul className="navbar-nav fs-5 fw-bold">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/about'}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/products'}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/blog'}>Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/contact'}>Contact</Link>
                        </li>

                        <form className="fs-4">
                            <div>
                              <FaShoppingCart  className='mx-3 mt-2'/>
                              <FaSearch  className='mt-2' />
                            </div>
                        </form>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
