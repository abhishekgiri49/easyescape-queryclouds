import React from "react";

import { MdAdminPanelSettings, MdPlace } from "react-icons/md";
import { FaCottonBureau, FaBlog, FaUser } from "react-icons/fa";
import { BiCategory, BiPackage } from "react-icons/bi";
import { SiTripdotcom } from "react-icons/si";
const Links = [
  { text: "Dashboard", path: ".", icon: <FaCottonBureau />, subNav: [] },
  // {
  //   text: "Jobs",
  //   path: "#",
  //   status: false,
  //   icon: <MdQueryStats />,
  //   subNav: [
  //     {
  //       title: "All Job",
  //       path: "jobs",
  //       status: false,
  //       icon: <FaWpforms />,
  //     },
  //     {
  //       title: "Add Job",
  //       path: "job/create",
  //       status: false,
  //       icon: <FaWpforms />,
  //     },
  //     {
  //       title: "Stats",
  //       path: "stats",
  //       status: false,
  //       icon: <IoBarChartSharp />,
  //     },
  //   ],
  // },
  {
    text: "Admin",
    path: "admin",
    icon: <MdAdminPanelSettings />,
    status: false,
    subNav: [],
  },
  {
    text: "Users",
    path: "users",
    icon: <FaUser />,
    status: false,
    subNav: [],
  },
  {
    text: "Packages",
    path: "packages",
    icon: <BiPackage />,
    status: false,
    subNav: [],
  },
  {
    text: "Trips",
    path: "trips",
    icon: <SiTripdotcom />,
    status: false,
    subNav: [],
  },
  {
    text: "Blog",
    path: "blogs",
    icon: <FaBlog />,
    status: false,
    subNav: [],
  },
  {
    text: "Categories",
    path: "categories",
    icon: <BiCategory />,
    status: false,
    subNav: [],
  },
  {
    text: "Places",
    path: "places",
    icon: <MdPlace />,
    status: false,
    subNav: [],
  },
];

export default Links;
