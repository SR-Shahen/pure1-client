import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handelLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

    }

    return (
        <div class="card w-80 lg:w-96 bg-base-100 shadow-xl mx-auto my-10 p-5">
            <h1 className='text-2xl text-purple-600 font-bold text-center'>Login!</h1>
            <form onSubmit={handelLogin} >
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text text-xl">Email</span>

                    </label>
                    <input type="text" name='name' placeholder="Enter Your Email" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text-alt">Alt label</span>

                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text text-xl">Password</span>

                    </label>
                    <input type="text" placeholder="Enter Your Password" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text-alt">Alt label</span>

                    </label>
                </div>
                <input className='btn btn-primary w-full max-w-xs my-3' type="submit" value="SignUp" />
            </form>
            <h1>New to Pure one?<Link to='/signup' className='text-primary'>Create Account</Link></h1>
        </div>
    );
};

export default Login;