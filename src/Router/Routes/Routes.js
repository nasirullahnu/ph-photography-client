import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import MyReviews from "../../ReviewComponents/MyReviews/MyReviews";

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
                loader : ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
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
                element : <MyReviews></MyReviews>
            }
        ]
    }
])


export default router;