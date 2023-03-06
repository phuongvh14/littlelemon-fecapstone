import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from "./routes/root";
import About from "./routes/about";
import Blog from "./routes/blog";
import Menu from "./routes/menu";
import Order from "./routes/order-online";
import Homepage from "./routes/homepage";
import ErrorPage from "./error-page";
import Reserve from "./routes/reserve";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Homepage />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'menu',
                element: <Menu />,
            },
            {
                path: 'blog',
                element: <Blog />,
            },
            {
                path: 'order',
                element: <Order />,
            },
            {
                path: 'reservation',
                element: <Reserve />,
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)