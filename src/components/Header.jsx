import React, { useState } from 'react';

const Header = ({ toggleSidebar }) => {
    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center md:ml-full">
            <div className="flex items-center">
                <button
                    onClick={toggleSidebar}
                    className="md:hidden text-gray-600 focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
                <h1 className="text-xl font-semibold ml-2">Dashboard</h1>
            </div>
            <div>
                <span className="text-gray-600">User Name</span>
            </div>
        </header>
    );
};

export default Header;