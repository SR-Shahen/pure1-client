import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div class="card w-84 lg:w-96 bg-base-100 shadow-xl mx-auto my-5 p-5">
            <h1 className='text-2xl text-purple-600 font-bold text-center'>Signup!</h1>
            <form >
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text text-xl">Name</span>

                    </label>
                    <input type="text" placeholder="Enter Your Name" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text-alt">Alt label</span>

                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text text-xl">Email</span>

                    </label>
                    <input type="text" placeholder="Enter Your Email" class="input input-bordered w-full max-w-xs" />
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
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text text-xl">Confirm Password</span>

                    </label>
                    <input type="text" placeholder="Please Confirm Your Password" class="input input-bordered w-full max-w-xs" />
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