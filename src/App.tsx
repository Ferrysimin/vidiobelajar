import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import Home from "./routes/home/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
