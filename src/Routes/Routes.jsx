import { createBrowserRouter } from "react-router";
import RootLayout from "../Components/RootLayout/RootLayout";
import RootErrorPage from "../Components/RootErrorPage/RootErrorPage";
import Home from "../Page/Home/Home";
import CardDetails from "../Components/TrendingApps/CardDetails";
import Apps from "../Page/Apps/Apps";
import RoutesErrorPage from "./RoutesErrorPage";
import Installation from "../Page/Installation/Installation";

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
            },
            {
                path: 'apps',
                Component: Apps
            },
            {
                path: 'installation',
                Component: Installation
            }
        ]
    },

    {
        path: '*',
        Component: RoutesErrorPage
    }



])

// export default router; 