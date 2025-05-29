import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { Header } from './components/Header';
import Card from './components/Card';
import DataTable from './components/DataTable';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <div className="min-h-screen bg-gray-100">
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="md:ml-74">
                <Header toggleSidebar={toggleSidebar} />
                <main className="p-4 md:p-6">
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <Card title="Total Users" value="1,234" />
                        <Card title="Revenue" value="$56,789" />
                        <Card title="Orders" value="456" />
                        <Card title="Active Sessions" value="78" />
                    </div> */}

                    <Outlet />
                    {/* <DataTable /> */}
                </main>
            </div>
            {sidebarOpen && (
                <div
                    className="fixed inset-0  md:hidden z-20"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
}

export default Layout;
