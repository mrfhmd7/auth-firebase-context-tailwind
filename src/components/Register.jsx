import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
     return (
          <div className="hero bg-base-200 min-h-screen">
               <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                         <h1 className="text-5xl font-bold">Please Register</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                         <form className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                   <label className="label">
                                        <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                                   </label>
                              </div>
                              <div className="form-control mt-6">
                                   <button className="btn btn-primary">Login</button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Register;