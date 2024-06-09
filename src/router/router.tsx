import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";


const routes: RouteObject[] = [
    {
        path: '', element: <MainLayout/>
    }
]
export const router = createBrowserRouter(routes);
