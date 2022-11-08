import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Home from "../../Pages/Home/Home";

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
            }
        ]
    }
])


export default router;