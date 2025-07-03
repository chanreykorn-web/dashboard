import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [profileOpen, setProfileOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);
    const [productOpen, setProductOpen] = useState(false);

    const handleLinkClick = () => {
        setProfileOpen(false); // Close the dropdown when a main link is clicked
        setUserOpen(false); // Close the dropdown when a main link is clicked
        setProductOpen(false); // Close the dropdown when a main link is clicked
    };

    return (
        <div
            className={`fixed inset-y-0 left-0 w-74 bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 transition-transform duration-300 ease-in-out z-30`}
        >
            <div className="p-4">
                <a href="#" className="text-2xl font-bold text-center">Dashboard Admin</a>
                <nav className="mt-6">
                    <Link
                        to="/"
                        onClick={handleLinkClick}
                        className="block py-2 px-4 hover:bg-gray-700 rounded"
                    >
                        Dashboard
                    </Link>

                    {/* products */}
                    <div>
                        <button
                            onClick={() => setProductOpen(!productOpen)}
                            className="w-full flex justify-between items-center py-2 px-4 hover:bg-gray-700 rounded"
                        >
                            <span>Products</span>
                            <svg
                                className={`w-4 h-4 transform transition-transform ${profileOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {productOpen && (
                            <div className="ml-4 mt-1 space-y-1">
                                <Link
                                    to="/product"
                                    onClick={handleLinkClick}
                                    className="block py-2 px-4 hover:bg-gray-700 rounded text-sm"
                                >
                                    All
                                </Link>
                                <Link
                                    to="/product/edit"
                                    onClick={handleLinkClick}
                                    className="block py-2 px-4 hover:bg-gray-700 rounded text-sm"
                                >
                                    Edit
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* profile */}
                    <div>
                        <button
                            onClick={() => setProfileOpen(!profileOpen)}
                            className="w-full flex justify-between items-center py-2 px-4 hover:bg-gray-700 rounded"
                        >
                            <span>Profile</span>
                            <svg
                                className={`w-4 h-4 transform transition-transform ${profileOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {profileOpen && (
                            <div className="ml-4 mt-1 space-y-1">
                                <Link
                                    to="/profile/view"
                                    onClick={handleLinkClick}
                                    className="block py-2 px-4 hover:bg-gray-700 rounded text-sm"
                                >
                                    View Profile
                                </Link>
                                <Link
                                    to="/profile/edit"
                                    onClick={handleLinkClick}
                                    className="block py-2 px-4 hover:bg-gray-700 rounded text-sm"
                                >
                                    Edit Profile
                                </Link>
                            </div>
                        )}
                    </div>

                    <div>
                        <button
                            onClick={() => setUserOpen(!userOpen)}
                            className="w-full flex justify-between items-center py-2 px-4 hover:bg-gray-700 rounded"
                        >
                            <span>Users</span>
                            <svg
                                className={`w-4 h-4 transform transition-transform ${userOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {userOpen && (
                            <div className="ml-4 mt-1 space-y-1">
                                <Link
                                    to="/users/view"
                                    onClick={handleLinkClick}
                                    className="block py-2 px-4 hover:bg-gray-700 rounded text-sm"
                                >
                                    Users
                                </Link>
                                <Link
                                    to="/profile/edit"
                                    onClick={handleLinkClick}
                                    className="block py-2 px-4 hover:bg-gray-700 rounded text-sm"
                                >
                                    Role
                                </Link>
                                <Link
                                    to="/profile/edit"
                                    onClick={handleLinkClick}
                                    className="block py-2 px-4 hover:bg-gray-700 rounded text-sm"
                                >
                                    Permission
                                </Link>
                                <Link
                                    to="/profile/edit"
                                    onClick={handleLinkClick}
                                    className="block py-2 px-4 hover:bg-gray-700 rounded text-sm"
                                >
                                    Role & Permission
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link
                        to="/gallary/view"
                        onClick={handleLinkClick}
                        className="block py-2 px-4 hover:bg-gray-700 rounded"
                    >
                        Gallary
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
