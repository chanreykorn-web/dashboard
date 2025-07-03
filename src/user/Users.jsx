import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ActionButton from '../components/ActionButton';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import { Button, IconButton, Tooltip } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { ActionButtonEdite } from '../components/ActionButtonEdite';



export const Users = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUsers(response.data);
        } catch (error) {
            toast.error('Failed to fetch users')
            console.error('Failed to fetch users:', error);
        }
    };

    // const updateUser = async () => {
    //     try {
    //         const token = localStorage.getItem('token');
    //         const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });
    //         setUsers(response.data);
    //     } catch (error) {
    //         toast.error('Failed to update users');
    //     }
    // }

    useEffect(() => {
        fetchUsers();
        // updateUser();
    }, []);


    return (
        <div>
            {/* <Breadcrumbs /> */}

            <div className='mb-6'>
                <Link to='/users/create'>
                    <Button variant="contained">Create User</Button>
                </Link>
                {/* <button type='submit' className='py-3 bg-blue-600 px-10'></button> */}
            </div>

            <ToastContainer position="top-right" autoClose={3000} />
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">List Profiles</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Active
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Username
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Password
                                </th> */}
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Role
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users.map((item) => (
                                <tr key={item.id}>
                                    <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">
                                        <ActionButton link={`${import.meta.env.VITE_API_URL}/users/delete/${item.id}`} onDelete={fetchUsers} message="User deleted successfully" />
                                        <ActionButtonEdite link={`${import.meta.env.VITE_API_URL}/users/update/${item.id}`} onEdit={fetchUsers} message="User updated successfully" />
                                    </td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{item.username}</td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{item.email}</td>
                                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.password}</td> */}
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{item.role}</td>
                                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.status}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}