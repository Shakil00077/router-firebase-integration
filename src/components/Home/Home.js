import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Home.css';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div className='home'>
            <h2>Available user here</h2>
            <p>Current user is: {user ? user.displayName : 'Nobody here'}</p>
            <img src={user ? user.photoURL : ''} alt="" />
        </div>
    );
};

export default Home;