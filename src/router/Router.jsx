import {
    createBrowserRouter,
    
  } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BLog from "../pages/Blog/BLog";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SingnUp/SignUp";

export  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children:[
        {
            path: "/",
            Component: Home
        },
        {
            path: "/about",
            Component: About
        },
        {
            path: "/blog",
            Component: BLog
        },
        {
            path: "/signin",
            Component: SignIn
        },
        {
            path: "/signup",
            Component: SignUp
        }
      ]
    },
  ]);