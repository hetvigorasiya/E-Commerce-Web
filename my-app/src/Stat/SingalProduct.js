
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../Pages/Products'

const SingalProduct = () => {

    const { id } = useParams()
    const [user, setUser] = useState({});

    const FindProduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/products');

        if (response?.status === 200) {
            const FindProduct = response?.data?.find((user) => user?.id == id);
            setUser(FindProduct)
        }

    }

    useEffect(() => {
        FindProduct()
    }, [FindProduct()])

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
        </div>
    )
}

export default SingalProduct
