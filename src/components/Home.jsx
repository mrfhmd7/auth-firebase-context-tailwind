import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {

     const {user} = useContext(AuthContext);

     return (
          <div>
               <h2>Welcome to my website</h2>
               <h2>This is Home {user && <b>{user.displayName}</b>}</h2>
          </div>
     );
};

export default Home;