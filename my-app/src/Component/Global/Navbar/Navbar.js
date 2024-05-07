import React from 'react'
import { Link } from 'react-router-dom';
import { imgConfig } from '../../../Image/logo';
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="bg-light" style={{height:'80px'}}>
            <nav className="container navbar navbar-expand-lg custom_nav-container pt-3">

                <div className="navbar-brand">
                    <img width="200px" src={imgConfig?.logo1} alt="#" className='logo' />
                </div>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                    <ul className="navbar-nav fs-5 fw-bold">
                        <li className="nav-item mx-2">
                            <Link className="nav-link item" to={'/'}>Home </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to={'/about'}>About</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to={'/products'}>Products</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to={'/blog'}>Blog</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to={'/contact'}>Contact</Link>
                        </li>

                        <form className="fs-4">
                            <div>
                                <FaShoppingCart className='mx-4 mt-2 icon' />
                                <FaSearch className='mt-2 icon' />
                            </div>
                        </form>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
