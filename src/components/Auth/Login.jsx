import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    const fillCredentials = (userEmail, userPass) => {
        setEmail(userEmail)
        setPassword(userPass)
    }

    return (
        <div className='min-h-screen w-full flex flex-col items-center justify-center p-4 bg-[#111111] text-white'>
            {/* Login Card */}
            <div className='w-full max-w-md border border-emerald-500/40 bg-[#1c1c1c] rounded-2xl p-8 sm:p-10 shadow-2xl backdrop-blur-sm'>
                <div className='text-center mb-6'>
                    <h1 className='text-3xl font-bold tracking-tight text-white'>Welcome Back</h1>
                    <p className='text-sm text-gray-400 mt-1'>Log in to access your Employee Management dashboard</p>
                </div>

                <form onSubmit={submitHandler} className='flex flex-col gap-4'>
                    <div>
                        <label className='text-xs font-medium text-gray-300 ml-1'>Email Address</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='w-full mt-1 outline-none bg-[#111] border border-emerald-500/50 focus:border-emerald-400 font-medium text-base py-2.5 px-4 rounded-xl placeholder:text-gray-500 transition-colors'
                            type="email"
                            placeholder='name@example.com'
                        />
                    </div>

                    <div>
                        <label className='text-xs font-medium text-gray-300 ml-1'>Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className='w-full mt-1 outline-none bg-[#111] border border-emerald-500/50 focus:border-emerald-400 font-medium text-base py-2.5 px-4 rounded-xl placeholder:text-gray-500 transition-colors'
                            type="password"
                            placeholder='••••••••'
                        />
                    </div>

                    <button
                        type="submit"
                        className='mt-2 text-white font-semibold bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] transition-all text-base py-3 px-6 rounded-xl shadow-lg shadow-emerald-900/30'
                    >
                        Log In
                    </button>
                </form>

                {/* Demo Credentials Box */}
                <div className='mt-8 pt-6 border-t border-gray-800'>
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5'>
                            <span className='h-2 w-2 rounded-full bg-emerald-400 animate-pulse'></span>
                            Demo Credentials
                        </span>
                        <span className='text-[11px] text-gray-400'>Click to auto-fill</span>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2.5'>
                        {/* Admin Card */}
                        <div
                            onClick={() => fillCredentials('admin@me.com', '123')}
                            className='cursor-pointer group p-3 rounded-lg bg-[#242424] hover:bg-[#2b2b2b] border border-gray-700/60 hover:border-emerald-500/60 transition-all text-left'
                            title='Click to auto-fill Admin credentials'
                        >
                            <div className='flex items-center justify-between mb-1'>
                                <span className='text-xs font-bold text-emerald-400'>👑 Admin</span>
                                <span className='text-[10px] text-gray-400 group-hover:text-emerald-300'>Auto-fill ↗</span>
                            </div>
                            <p className='text-xs text-gray-300 font-mono'>admin@me.com</p>
                            <p className='text-[11px] text-gray-400 font-mono mt-0.5'>Pass: 123</p>
                        </div>

                        {/* Employee Card */}
                        <div
                            onClick={() => fillCredentials('e@e.com', '123')}
                            className='cursor-pointer group p-3 rounded-lg bg-[#242424] hover:bg-[#2b2b2b] border border-gray-700/60 hover:border-emerald-500/60 transition-all text-left'
                            title='Click to auto-fill Employee credentials'
                        >
                            <div className='flex items-center justify-between mb-1'>
                                <span className='text-xs font-bold text-blue-400'>👤 Employee (Arjun)</span>
                                <span className='text-[10px] text-gray-400 group-hover:text-blue-300'>Auto-fill ↗</span>
                            </div>
                            <p className='text-xs text-gray-300 font-mono'>e@e.com</p>
                            <p className='text-[11px] text-gray-400 font-mono mt-0.5'>Pass: 123</p>
                        </div>
                    </div>

                    <div className='mt-3 text-center'>
                        <p className='text-[11px] text-gray-400'>
                            Other employees: <code className='text-gray-300 bg-[#252525] px-1 py-0.5 rounded'>employee2@example.com</code> to <code className='text-gray-300 bg-[#252525] px-1 py-0.5 rounded'>employee5@example.com</code> (Pass: <code className='text-gray-300 bg-[#252525] px-1 py-0.5 rounded'>123</code>)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login