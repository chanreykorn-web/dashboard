import React from 'react';

export const Create = () => {
    return (
        <div className="">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Create Profile</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-md font-medium text-gray-600 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="border border-gray-300 p-2 rounded w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-md font-medium text-gray-600 mb-1">Facebook Link</label>
                        <input
                            type="text"
                            id="name"
                            className="border border-gray-300 p-2 rounded w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-md font-medium text-gray-600 mb-1">Telegram Link</label>
                        <input
                            type="text"
                            id="name"
                            className="border border-gray-300 p-2 rounded w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-md font-medium text-gray-600 mb-1">Instagram Link</label>
                        <input
                            type="text"
                            id="name"
                            className="border border-gray-300 p-2 rounded w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-md font-medium text-gray-600 mb-1">Github Link</label>
                        <input
                            type="text"
                            id="name"
                            className="border border-gray-300 p-2 rounded w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <button type="button" className='w-full bg-blue-600 py-2 rounded text-white cursor-pointer'>Upload Image</button>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="bio" className="block text-md font-medium text-gray-600 mb-1">Bio</label>
                        <textarea
                            id="bio"
                            className="border border-gray-300 p-2 rounded w-full h-24"
                        ></textarea>
                    </div>



                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
