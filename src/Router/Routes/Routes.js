import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import MyReviews from "../../ReviewComponents/MyReviews/MyReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/all',
                element : <AllServices></AllServices>
            },
            {
                path : '/details/:id',
                element : <ServiceDetails></ServiceDetails>,
                loader : ({params}) => fetch(`https://ph-server.vercel.app/details/${params.id}`)
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/signup',
                element : <SignUp></SignUp>
            },
            {
                path : '/reviews',
                element : <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path : '/add',
                element : <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            }
        ]
    }
])


export default router;