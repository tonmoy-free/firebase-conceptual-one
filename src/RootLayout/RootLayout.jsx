import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Footer from '../components/Footer/Footer';
export const ValueContext = createContext();

const RootLayout = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] =useState(true);


    
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
        
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
            alert("Sign out successfully.")
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handleForgetPassword =(email)=>{
        console.log(email);
        sendPasswordResetEmail(auth,email)
        .then(() => {
            // Password reset email sent!
            // ..
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
          });
    }

    const contextValues = {
        handleLogin,
        handleSignUp,
        user,
        loading,
        handleLogOut,
        handleForgetPassword
    }


    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
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
                    <Footer></Footer>
                </ValueContext>

            </div>
        );
    };

    export default RootLayout;