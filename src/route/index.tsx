
import { lazy } from "react";

interface IRouterProps{
    path: string;
    children?: IRouterProps[];
    title: string;
    component?: any;
    redirect?: boolean;
}

const Home = lazy(() => import("@/src/pages/index/page"));
const AboutPage = lazy(() => import("@/src/pages/about/page"));
const TestMaster = lazy(() => import("@/src/pages/TestMaster"));
const LoginPage = lazy(() => import("@/src/pages/login/page"));
const NotFound = lazy(() => import("@/src/pages/error/page"));


const allRoute: IRouterProps[] = [
    {
        path: "/",
        title: "首頁",
        component: Home
    },
    {
        path: "/about",
        title: "關於",
        component: AboutPage
    },
    {
        path: "/testMaster",
        title: "testMaster",
        component: TestMaster
    },
    {
        path: "/login",
        title: "登入頁",
        component: LoginPage
    },
    {
        path: "/404",
        title: "notFound",
        component: NotFound
    },
    {
        path: "*",
        title: "notFound",
        redirect: true
    },
];

export type {IRouterProps}

export { allRoute }