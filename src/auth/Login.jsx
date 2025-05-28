import React from 'react';

export const Login = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    const handleLogin = () => {
        // Simulate login logic (e.g., API call)
        if (username && password) {
            alert(`Logging in with Username: ${username}`);
        } else {
            alert('Please fill in both fields');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='w-screen h-screen flex items-center justify-center bg-gray-800 p-8 md:p-0'>
            <div className='w-[500px] bg-white flex flex-col items-center justify-center p-6 rounded-lg shadow-lg'>
                <h1 className='text-3xl font-bold mb-6'>Admin Login</h1>
                <div className='w-full space-y-4'>
                    <div className='flex flex-col'>
                        <label htmlFor="username" className='text-md'>Username</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='border border-gray-300 rounded-md p-2 focus:outline-none focus:to-black mt-1'
                            placeholder="Enter username"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password" className='text-md'>Password</label>
                        <div className='relative'>
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='border border-gray-300 rounded-md p-2 w-full focus:outline-none mt-1'
                                placeholder="Enter password"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-amber-500'
                            >
                                {showPassword ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={handleLogin}
                        className='w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition'
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};