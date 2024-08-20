import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {

     const { signIn } = useContext(AuthContext);

     const handleLogin = event => {
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email, password);

          signIn(email, password)
               .then(result => {
                    const loggedInUser = result.user;
                    console.log(loggedInUser);
                    form.reset();
               })
               .catch(error => {
                    console.log(error);
               })
     };

     return (
          <div className="hero bg-base-200 min-h-screen">
               <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                         <h1 className="text-5xl font-bold">Please Login</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                         <form onSubmit={handleLogin} className="card-body">
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
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                   </label>
                              </div>
                              <div className="form-control mt-4">
                                   <button className="btn btn-primary">Login</button>
                              </div>
                         </form>
                         <Link to="/register" className="label-text-alt link link-hover pl-6 pb-4">
                              New to Auth Master? Please Register
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default Login;