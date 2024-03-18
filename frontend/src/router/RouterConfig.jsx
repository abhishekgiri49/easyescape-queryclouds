import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthUser } from "./../helper/AuthUser";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  ForgotPassword,
  ResetPassword,
  UserDashboardLayout,
  DashboardLayout,
  Error,
  AdminList,
  UserList,
  Stats,
  Search,
  CategoryList,
  PlaceList,
  BlogList,
  PackageList,
  PackageAdd,
  ProfileDetail,
  PackageDetail,
  HomePackageDetail,
  Success,
  TripList,
  Category,
} from "../views";

const AuthorizedRoute = ({ element, roles }) => {
  const { token, user } = AuthUser();
  if (!token) {
    return <Navigate to="/login" />;
  }
  // You can implement your role checking logic here
  // For simplicity, assuming userRoles is an array containing user roles
  const userRoles = user.role; // Replace this with actual user roles

  const isAuthorized = roles.includes(userRoles);
  // console.log(isAuthorized);
  // // Redirect to login if not authorized
  if (!isAuthorized) {
    return <Navigate to="/login" />;
  }

  return element;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "password-reset",
        element: <ResetPassword />,
      },
      {
        path: "package/detail/:packageId",
        element: <HomePackageDetail />,
      },
      {
        path: "return",
        element: <Success />,
      },
      {
        path: "idea/category",
        element: <Category />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: (
      <AuthorizedRoute element={<DashboardLayout />} roles={["Admin"]} />
    ),
    children: [
      {
        path: "stats",
        element: <Stats />,
      },
      {
        path: "users",
        element: <UserList />,
      },
      {
        path: "admin",
        element: <AdminList />,
      },
      {
        path: "categories",
        element: <CategoryList />,
      },
      {
        path: "places",
        element: <PlaceList />,
      },
      {
        path: "blogs",
        element: <BlogList />,
      },
      {
        path: "packages",
        element: <PackageList />,
      },
      {
        path: "packages/add",
        element: <PackageAdd />,
      },
      {
        path: "packages/detail/:packageId",
        element: <PackageDetail />,
      },
      {
        path: "trips",
        element: <TripList />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AuthorizedRoute element={<UserDashboardLayout />} roles={["User"]} />
    ),
    children: [
      {
        index: true,
        element: <ProfileDetail />,
      },
    ],
  },
  // ... other routes
]);
