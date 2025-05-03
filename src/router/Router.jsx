import {
  createBrowserRouter,

} from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BLog from "../pages/Blog/BLog";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SingnUp/SignUp";
import CardDetails from "../pages/CardDetails/CardDetails";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("/data.json")
      },
      {
        path: "/about",
        element:
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
      },
      {
        path: "/blog",
        element:<PrivateRoute><BLog></BLog></PrivateRoute>
      },
      {
        path: "/signin",
        Component: SignIn
      },
      {
        path: "/signup",
        Component: SignUp
      },
      {
        path: "/carddetails/:id",
        element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader: () => fetch("/data.json")
      }
    ]
  },
]);