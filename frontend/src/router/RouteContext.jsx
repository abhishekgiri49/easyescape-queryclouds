// RouteContext.jsx

import React, { createContext, useContext } from "react";

const RouteContext = createContext();

export const RouteProvider = ({ children, routes }) => {
  // console.log(routes);
  return (
    <RouteContext.Provider value={routes}>{children}</RouteContext.Provider>
  );
};

export const useRoutes = () => useContext(RouteContext);
