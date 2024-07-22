import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense } from "react";

import { allRoute, IRouterProps } from "@/src/route/index";
import LoadingPage from "@/src/pages/loading/page";
import Auth from "@/src/route/auth";

const renderRouter = (routerList: IRouterProps[]) => {
  return routerList.map((item) => {
    const { path, children } = item;

    return (
      <Route
        key={path}
        path={path}
        element={
          item.redirect ? (
            <Navigate to="/404" />
          ) : (
            <Auth>
              <item.component />
            </Auth>
          )
        }
      >
        {/* {!!children &&
          children.map((i) => {
            return (
              <Route key={i.path} path={i.path} element={<i.component />} />
            );
          })} */}
      </Route>
    );
  });
};

const Routers = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>{renderRouter(allRoute)}</Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default React.memo(Routers);
