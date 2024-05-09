import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Users = () => {

    const [users, setUsers] = useState([]);

    const FetchUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        if (response?.status === 200) {
            setUsers(response?.data)
        };

        console.log(users);
    }

    useEffect(() => {
        FetchUsers()
    }, [])

    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{user?.name}</td>
                                            <td>{user?.username}</td>
                                            <td>{user?.email}</td>
                                            <td>{user?.phone}</td>
                                            <td>
                                                <Link to={`/user/${user?.id}/`}>View</Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users
