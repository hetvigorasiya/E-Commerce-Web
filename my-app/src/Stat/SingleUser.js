import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleUser = () => {

    // Accept Parameters From Routes => useParams > React Router Dom

    const { id } = useParams()
    const [user, setUser] = useState({});

    const FetchUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/');

        if (response?.status === 200) {
            const FindUser = response?.data?.find((user) => user?.id == id);
            setUser(FindUser)
        };
    }

    useEffect(() => {
        FetchUsers()
    }, [])

    return (
        <div className='container'>
            <div className='row mt-3'>
                <div className='col-12'>
                    <div className="d-flex justify-content-start align-items-center">
                        <h3>{user?.name}</h3>
                        <h5 className='ms-3'> | {user?.username}</h5>
                    </div>
                    <div>
                        <span>E-Mail:</span> <span className='fw-bold'>{user?.email}</span>
                    </div>
                    <div>
                        <span>Phone:</span> <span className='fw-bold'>{user?.phone}</span>
                    </div>
                    <div>
                        <span className='d-block'>Addres:-</span>
                        <address className='fw-bold'>{user?.address?.street}, {user?.address?.suite}, {user?.address?.city}, {user?.address?.zipcode} </address>
                    </div>
                    <div><span>Website:</span><span className='fw-bold'> {user?.website}</span></div>
                </div>
            </div>

        </div>
    )
}

export default SingleUser