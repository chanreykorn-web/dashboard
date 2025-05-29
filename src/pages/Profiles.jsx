import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';

export const Profiles = () => {
    const data = [
        { id: 1, name: 'chanrey korn', image: 'profile.png', bio: 'null', facebook: 'null', telegram: 'null', instragram: 'null', github: 'null', status: 'Active' },
    ];

    return (
        <div>
            {/* <Breadcrumbs /> */}

            <div className='mb-6'>
                <Link to='/profile/create' className='bg-blue-600 px-5 py-3 text-white rounded-sm'>
                    Create Profile
                </Link>
                {/* <button type='submit' className='py-3 bg-blue-600 px-10'></button> */}
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">List Profiles</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Image
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Bio
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Telegram
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Facebook
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Instragram
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Github
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.image}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.bio}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.facebook}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.telegram}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.instragram}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.github}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
