import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export const ValueContext = createContext();

const RootLayout = () => {
    const [user, setUser] = useState(null);
    console.log(user);


    
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        });
    }


    const handleSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
                alert("Sign up successfully.")
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
                alert(errorMessage);
            })
    }

    const handleLogOut =()=>{
        signOut(auth)
        .then(result=>{
            console.log(result);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const contextValues = {
        handleLogin,
        handleSignUp,
        user,
        handleLogOut
    }


    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            if (currentUser) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = currentUser.uid;
                // ...
            } else {
                // User is signed out
                // ...
            }
        });

        return ()=>{
            unsubscribe();
        }
    
    }, [])
        return (
            <div>
                <ValueContext value={contextValues}>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </ValueContext>

            </div>
        );
    };

    export default RootLayout;