import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ title }) => {
    return (
        <div>
            <h1 className='text-2xl font-semibold mb-2'>{title}</h1>
            <nav className='flex text-sm text-gray-600' aria-label='Breadcrumb'>
                <ol className='inline-flex items-center space-x-1 md:space-x-3'>
                    <li className='inline-flex items-center'>
                        <Link to='/' className='text-blue-600 hover:underline'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <span className='mx-1'>/</span>
                        <Link to='/dashboard' className='text-gray-500 hover:underline'>
                            Dashboard
                        </Link>
                    </li>
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumbs;
