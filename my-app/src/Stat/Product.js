import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



const Product = () => {

    const [product, setProduct] = useState([]);

    const FindProduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/products');

        if (response?.status === 200) {
            setProduct(response?.data)
        }
        console.log(product);
    }

    useEffect(() => {
        FindProduct()
    }, [FindProduct()])

    return (

        <>
            <div className="container">
                <div className="row">
                    {
                        product?.map((user, index) => {
                            return (
                                <div className="col-sm-6 col-md-4 col-lg-4">
                                    <div className="products mt-5">
                                        <div className='text-center'>
                                            <img src={user?.image} alt="" className='img-box2' />
                                        </div>
                                        <div className="d-flex mt-5 justify-content-center">
                                            <h5 className='fw-bold mx-2'>{user?.category}</h5>
                                            <h6 className='price fs-6 fw-bold mt-1'>{user?.price}</h6>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center mt-2'>
                                        <Link className='btn2 text-light fw-bold text-decoration-none' to={`/product/${product?.id}`}>Buy Now</Link>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Product
