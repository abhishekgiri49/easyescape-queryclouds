import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ routes, title }) => {
  const breadcrumbs = getBreadcrumbs(routes);

  return (
    <div className="breadcrumb-wrapper">
      <h2 className="content-header-title float-start mb-0">{title}</h2>
      <ol className="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${
              index === breadcrumbs.length - 1 ? "active" : ""
            }`}
          >
            {index === breadcrumbs.length - 1 ? (
              breadcrumb.name
            ) : (
              <Link to={breadcrumb.path}>{breadcrumb.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};
const getBreadcrumbs = (routes) => {
  const breadcrumbs = [{ name: "Dashboard", path: "/dashboard" }]; // Assuming your dashboard is the home route
  if (routes && routes.length > 0) {
    // Add custom breadcrumbs from the props and concatenate "/dashboard" to paths
    breadcrumbs.push(
      ...routes.map(({ name, path }) => ({
        name,
        path: `/admin/dashboard${path}`,
      }))
    );
  }
  return breadcrumbs;
};

export default Breadcrumb;
