import { Button, FormControl, InputAdornment, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ActionButton from '../components/ActionButton';
import { ActionButtonEdite } from '../components/ActionButtonEdite';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

export const Product = () => {
    const [product, setProduct] = useState([]);
    const [allProducts, setAllProducts] = useState([]); // store all products for client-side filter
    const [categories, setCategories] = useState('');
    const [searchName, setSearchName] = useState('');

    const handleCategoryChange = (event) => {
        setCategories(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchName(event.target.value);
    };

    const fetchProduct = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProduct(response.data);
            setAllProducts(response.data);
        } catch (error) {
            toast.error('Failed to fetch products');
            console.error('Failed to fetch products:', error);
        }
    };

    const handleSearch = () => {
        let filtered = allProducts;

        if (searchName.trim() !== '') {
            filtered = filtered.filter((item) =>
                item.name.toLowerCase().includes(searchName.toLowerCase())
            );
        }

        if (categories !== '') {
            filtered = filtered.filter(
                (item) => String(item.categories_id) === String(categories)
            );
        }

        setProduct(filtered);
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div>
            <div className='mb-6'>
                <Link to='/product/create'>
                    <Button variant="contained">Create Product</Button>
                </Link>
            </div>

            <ToastContainer position="top-right" autoClose={3000} />

            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">List Products</h2>

                <div className="flex flex-wrap gap-2 items-center mb-4">
                    <TextField
                        placeholder="Search by name..."
                        sx={{ m: 1, width: '50ch' }}
                        value={searchName}
                        onChange={handleSearchChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"></InputAdornment>,
                        }}
                    />

                    <FormControl sx={{ m: 1, width: 300 }}>
                        <Select
                            value={categories}
                            displayEmpty
                            input={<OutlinedInput />}
                            onChange={handleCategoryChange}
                        >
                            <MenuItem value="">
                                <em>All Categories</em>
                            </MenuItem>
                            <MenuItem value="10">Ten</MenuItem>
                            <MenuItem value="20">Twenty</MenuItem>
                            <MenuItem value="30">Thirty</MenuItem>
                        </Select>
                    </FormControl>

                    <Button variant="contained" size="large" onClick={handleSearch}>
                        Search
                    </Button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pickup Time</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ingredient</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categories</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {product.map((item) => (
                                <tr key={item.id}>
                                    <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">
                                        <ActionButton
                                            link={`${import.meta.env.VITE_API_URL}/products/delete/${item.id}`}
                                            onDelete={fetchProduct}
                                            message="Product deleted successfully"
                                        />
                                        <ActionButtonEdite
                                            link={`${import.meta.env.VITE_API_URL}/products/update/${item.id}`}
                                            onEdit={fetchProduct}
                                            message="Product updated successfully"
                                        />
                                    </td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">Image available</td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{item.descriptions}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.rate}</td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{item.pickup_time}</td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{item.delevery}</td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{item.size_id}</td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{item.ingridient_id}</td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{item.categories_id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
