import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { sighnInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Please Log In</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={sighnInWithGoogle}>Google Sighn In</button>
            </div>
            <form>
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Password' />
                <br />
                <input type="submit" value="LogIn" />
            </form>
        </div>
    );
};

export default Login;