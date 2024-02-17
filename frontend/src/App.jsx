import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouteProvider } from "./router/RouteContext";
import { router } from "./router/RouterConfig";
// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <RouteProvider routes={router.routes}>
      <RouterProvider router={router}></RouterProvider>
    </RouteProvider>
  );
};
export default App;
