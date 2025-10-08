import { createBrowserRouter } from "react-router";
import RootLayout from "../Components/RootLayout/RootLayout";
import RootErrorPage from "../Components/RootErrorPage/RootErrorPage";
import Home from "../Page/Home/Home";
import CardDetails from "../Components/TrendingApps/CardDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        errorElement: <RootErrorPage />,
        loader: () => fetch('/appsData.json'),
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/cardDetails/:id',
                Component: CardDetails
            }
        ]
    },



])

// export default router; 