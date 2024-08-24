import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

     const { user, logOut } = useContext(AuthContext);

     const handleLogOut = () => {
          logOut()
               .then(() => { })
               .catch(error => console.error(error))
     };

     return (
          <nav>
               <div className="navbar bg-neutral text-neutral-content">
                    <button className="btn btn-ghost text-xl">Auth Master</button>
                    <Link className="btn btn-ghost text-xl" to="/">Home</Link>
                    <Link className="btn btn-ghost text-xl" to="/orders">Orders</Link>
                    <Link className="btn btn-ghost text-xl" to="/login">Login</Link>
                    <Link className="btn btn-ghost text-xl" to="/register">Register</Link>
                    {
                         user ?
                              <>
                                   <span>{user.email}</span>
                                   <button onClick={handleLogOut} className="btn btn-sm">Sign out</button>
                              </>
                              :
                              <Link to="/login"></Link>
                    }
               </div>
          </nav>
     );
};

export default Header;