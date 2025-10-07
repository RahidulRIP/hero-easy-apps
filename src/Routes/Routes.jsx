import { createBrowserRouter } from "react-router";
import RootLayout from "../Components/RootLayout/RootLayout";
import RootErrorPage from "../Components/RootErrorPage/RootErrorPage";
import Home from "../Page/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        errorElement: <RootErrorPage />,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
 
])

// export default router; 