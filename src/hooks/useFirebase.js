import { useEffect, useState } from "react";
import app from '../firebase.init';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});


    const sighnInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
    }


    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    return {
        user,
        handleSignOut,
        sighnInWithGoogle
    }
    // return [user, setUser];
}

export default useFirebase;