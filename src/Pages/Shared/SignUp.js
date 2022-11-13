import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (user) {
        navigate('/about')
    }
    const handelSignUp = event => {
        event.preventDefault();
        setEmail(event.target.email.value);
        setPassword(event.target.password.value);
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div class="card w-84 lg:w-96 bg-base-100 shadow-xl mx-auto my-5 p-5">
            <h1 className='text-2xl text-purple-600 font-bold text-center'>Signup!</h1>
            <form onSubmit={handelSignUp} >
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text text-xl">Name</span>

                    </label>
                    <input type="text" name='name' placeholder="Enter Your Name" required class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text-alt">Alt label</span>

                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text text-xl">Email</span>

                    </label>
                    <input type="email" name='email' placeholder="Enter Your Email" required class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text-alt">Alt label</span>

                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text text-xl">Password</span>

                    </label>
                    <input type="password" name='password' placeholder="Enter Your Password" required class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text-alt">Alt label</span>

                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text text-xl">Confirm Password</span>

                    </label>
                    <input type="text" name='confirmPassword' placeholder="Please Confirm Your Password" required class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text-alt">Alt label</span>

                    </label>
                </div>
                <input className='btn btn-primary w-full max-w-xs my-3' type="submit" value="SignUp" />
            </form>
            <h1>Already have an account?<Link to='/login' className='text-primary'>Login</Link></h1>
        </div>
    );
};

export default SignUp;