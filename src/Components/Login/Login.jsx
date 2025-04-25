import React from 'react';

const Login = () => {

    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        
        
    }

    return (
        <div className='w-[40%] mx-auto '>
        <form onSubmit={handleLogin} className='space-y-3'>
            
            <div>
                <p>Email</p>
                <input name='email' type="email" placeholder="email" className="input input-md" />

            </div>
            <div>
                <p>Password</p>
                <input name='password' type="password" placeholder="Password" className="input input-md" />

            </div>
            
            <button type='submit' className='btn'>Login</button>
        </form>
    </div>
    );
};

export default Login;