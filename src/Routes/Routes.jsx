import { createBrowserRouter } from "react-router";
import RootLayout from "../Components/RootLayout/RootLayout";
import RootErrorPage from "../Components/RootErrorPage/RootErrorPage";
import Home from "../Page/Home/Home";
import CardDetails from "../Components/TrendingApps/CardDetails";
import Apps from "../Page/Apps/Apps";
import RoutesErrorPage from "./RoutesErrorPage";
import Installation from "../Page/Installation/Installation";
import { Suspense } from "react";
import Loading from "../Components/Loading/Loading";

const allData = fetch('/appsData.json').then(res => res.json());

export const router = createBrowserRouter([

    {
        path: '/',
        element: (
            <Suspense fallback={<Loading />}>
                <RootLayout allData={allData} />
            </Suspense>
        ),
        errorElement: <RootErrorPage />,
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