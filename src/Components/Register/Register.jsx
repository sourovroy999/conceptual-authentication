import React, { use, useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
  
    const {registerUser}=useContext(AuthContext)
    // console.log(registerUser);
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const confirmPassword=e.target.confirmPassword.value;

        console.log(name, photo, email,password,confirmPassword);
        registerUser(email,password)
        
    }

    return (
        <div className='w-[40%] mx-auto '>
            <form onSubmit={handleSubmit} className='space-y-3'>
                <div>
                    <p>Name</p>
                    <input name='name' type="text" placeholder="name" className="input input-md" />

                </div>
                <div>
                    <p>Photo</p>
                    <input name='photo' type="text" placeholder="Photo" className="input input-md" />

                </div>
                <div>
                    <p>Email</p>
                    <input name='email' type="email" placeholder="email" className="input input-md" />

                </div>
                <div>
                    <p>Password</p>
                    <input name='password' type="password" placeholder="Password" className="input input-md" />

                </div>
                <div>
                    <p>Confirm Password</p>
                    <input name='confirmPassword' type="password" placeholder="Confirm Password" className="input input-md" />

                </div>
                <button type='submit' className='btn'>Submit</button>
            </form>
        </div>
    );
};

export default Register;