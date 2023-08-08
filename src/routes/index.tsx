import { lazy } from 'react';

const AuthLayout = lazy(() => import('layouts/AuthLayout'));
const Login = lazy(() => import('pages/Login'));
const RecuperarSenha = lazy(() => import('pages/RecuperarSenha'));
const RedefinirSenha = lazy(() => import('pages/RedefinirSenha'));
const DashboardSideLayout = lazy(() => import('layouts/DashboardSideLayout'));
const Dashboard = lazy(() => import('pages/Dashboard'));
const Crud = lazy(() => import('pages/Crud'));
const Configuracoes = lazy(() => import('pages/Configuracoes'));

export type Route = {
  name?: string;
  title?: string;
  path?: string;
  element?: JSX.Element;
  icon?: JSX.Element;
  children?: Route[];
  requiresAuth?: boolean;
};

export const authRoutes: Route[] = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/recuperar-senha',
    element: <RecuperarSenha />,
  },
  {
    path: '/redefinir-senha',
    element: <RedefinirSenha />,
  },
];

export const dashboardRoutes: Route[] = [
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/dashboard/crud',
    element: <Crud />,
  },
  {
    path: '/dashboard/configuracoes',
    element: <Configuracoes />,
  },
];

export const routes = [
  {
    path: '/',
    element: <AuthLayout />,
    children: authRoutes,
  },
  {
    path: '/dashboard',
    element: <DashboardSideLayout />,
    children: dashboardRoutes,
  },
];
