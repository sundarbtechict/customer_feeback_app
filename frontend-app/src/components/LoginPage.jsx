import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = ()=>{
        if(username.toLowerCase().trim()=='admin' && password.toLowerCase()=='admin')
            navigate("/admin");
        else
            alert('Incorrect Username or Password')
    }

  return (
    <div className='w-full'>
    <div className=' mt-12 mx-auto w-[30%] p-4 shadow-md border border-gray-400 rounded bg-gray-50'>
        <div className=' font-semibold text-xl py-4 text-center'>
            Admin Login
        </div>
        <div className=' pt-4'>
            <form name='loginForm'>
                <div className='py-2 flex'>
                    <label className=' text-sm w-[100px]'>Email:</label>
                    <input name='name' className=' login-input' onChange={(e)=> setUsername(e.target.value)}></input>
                </div>
                <div className='py-2 flex'>
                    <label className=' text-sm w-[100px]'>Password:</label>
                    <input name='email' type='password' className='login-input' onChange={(e)=> setPassword(e.target.value)}></input>
                </div>
                <div className='py-6 text-center'>
                    <button onClick={onSubmit} className=' rounded px-6 py-1 bg-green-600 text-white'>Login</button>
                </div>
            </form>
        </div>
    </div>
</div>
    
  )
}

export default LoginPage