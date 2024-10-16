import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// routes
import LoginRoutes from './LoginRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

const MainLayout = Loadable(lazy(() => import('../layout/MainLayout')));
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const DashboardAnalytics = Loadable(lazy(() => import('views/dashboard/Analytics')));
const AppUserAccountProfile1 = Loadable(lazy(() => import('views/application/users/account-profile/Profile1')));
const BasicTable = Loadable(lazy(() => import('views/forms/tables/TableBasic')));
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([
        {
            path: '/',
            element: (
                <AuthGuard>
                    <MainLayout />
                </AuthGuard>
            ),
            children: [
                {
                    index: true,
                    path: '/',
                    element: <DashboardDefault />
                },
                {
                    path: '/dashboard/default',
                    element: <DashboardDefault />
                },
                {
                    path: '/dashboard/analytics',
                    element: <DashboardAnalytics />
                },
                {
                    path: '/user/account-profile/profile1',
                    element: <AppUserAccountProfile1 />
                },
                {
                    path: '/jobs',
                    element: <BasicTable />
                }
            ]
        },
        AuthenticationRoutes,
        LoginRoutes
    ]);
}
