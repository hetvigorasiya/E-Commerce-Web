import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='mt-5'>
                <div className='bg-light py-5'>
                    <div className="container">
                        <div className="row">

                            <div className="col-md-4">
                                <div className="full">
                                    <div className="logo_footer mb-3">
                                        <img width="210" src="https://themewagon.github.io/famms/images/logo.png" alt="#" />
                                    </div>
                                    <div className="information_f">
                                        <p><strong>ADDRESS:</strong> 28 White tower, Street Name New York City, USA</p>
                                        <p><strong>TELEPHONE:</strong> +91 987 654 3210</p>
                                        <p><strong>EMAIL:</strong> yourmain@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="widget_menu">
                                    <h4 className='fw-bold'>Menu</h4>
                                    <div >Home</div>
                                    <div >bout</div>
                                    <div >Services</div>
                                    <div >Testimonial</div>
                                    <div >Blog</div>
                                    <div >Contact</div>
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div>
                                    <h4 className='fw-bold'>Account</h4>
                                    <div>Account</div>
                                    <div>Checkout</div>
                                    <div>Login</div>
                                    <div>Register</div>
                                    <div>Shopping</div>
                                    <div>Widget</div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="widget_menu">
                                    <h4 className='fw-bold'>Newsletter</h4>
                                    <div class="information_f">
                                        <p>Subscribe by our newsletter and get update protidin.</p>
                                    </div>
                                    <div class="form_sub">
                                        <form>
                                            <fieldset>
                                                <div class="field">
                                                    <input type="email" placeholder="Enter Your Mail" name="email" className='E-mail' />
                                                    <input type="submit" value="Subscribe" className='btn4 text-light' />
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="text-light copy text-center pt-4 pb-2">
                    <p className="mx-auto mb-1">© 2021 All Rights Reserved By <span className='product'>Free Html Templates</span></p>
                    <p className='mx-auto'> Distributed By <span className='product'>ThemeWagon</span></p>
                </div>
            </footer>
        </>
    )
}

export default Footer
