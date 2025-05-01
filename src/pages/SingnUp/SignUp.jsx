import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { auth } from '../../firebase/firebase.config';
import { ValueContext } from '../../RootLayout/RootLayout';

const SignUp = () => {

    const { handleSignUp } = useContext(ValueContext);

    const handleSubmit = e => {
        e.preventDefault();
        const fullname = e.target.fullname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmpassword = e.target.confirmpassword.value;
        console.log(fullname, email, password, confirmpassword)

        if (password.length < 6) {
            alert("Password must be equal or greater then six");
            return;
        }

        if (password !== confirmpassword) {
            alert("Password and confirm password must be same");
            return;
        }
        // give me a regex which will check if a text has at least one smaller case letter in js
        if (!/[a-z]/.test(password)) {
            alert("Password must contain at least lower case letter.");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            alert("Password must contain at least Upper case letter.");
            return;
        }

        //give me a regex which will check if a text has at least one number js
        if (!/\d/.test(password)) {
            alert("Password must contain at least one number.");
            return;
        }
        //give me a regex which will check if a text has at least on of the below character $,%,^,#, @
        if (!/[\$\%\^\#\@\!]/.test(password)) {
            alert("Password must contain at least one Character ex: $,%,^,#, @,!.");
            return;
        }

        //     createUserWithEmailAndPassword(auth, email, password)
        //         .then(result => {
        //             console.log(result);
        //             alert("Sign up successfully.")
        //         })
        //         .catch(error => {
        //             console.log(error);
        //             alert("alrady sign up")
        //         })

        handleSignUp(email, password);
    }
    return (
        <div className="flex flex-col max-w-md mx-auto mt-1 p-6 rounded-md sm:p-10 bg-black text-white">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                <p className="text-sm dark:text-gray-600">Sign up a new account</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="fullname" className="block mb-2 text-sm">Full Name</label>
                        <input type="text" name="fullname" id="fullname" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="fihan@metleaf.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            {/* <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a> */}
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="confirmpassword" className="text-sm">Confirm Password</label>
                            {/* <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a> */}
                        </div>
                        <input type="password" name="confirmpassword" id="confirmpassword" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md hover:underline cursor-pointer dark:bg-violet-600 dark:text-gray-50">Sign Up</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
                        <NavLink to="/signin" rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Sign in</NavLink>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;