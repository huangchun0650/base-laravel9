/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./Pages/Dashboard.jsx";
import UserProfile from "./Pages/UserProfile.jsx";
import TableList from "./Pages/TableList.jsx";
import Typography from "./Pages/Typography.jsx";
import Icons from "./Pages/Icons.jsx";
import Maps from "./Pages/Maps.jsx";
import Notifications from "./Pages/Notifications.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "儀表板",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
  },
  {
    path: "/user",
    name: "使用者資料",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
  },
  {
    path: "/table",
    name: "資料表",
    icon: "nc-icon nc-notes",
    component: TableList,
  },
  {
    path: "/typography",
    name: "排版",
    icon: "nc-icon nc-paper-2",
    component: Typography,
  },
  {
    path: "/icons",
    name: "圖標",
    icon: "nc-icon nc-atom",
    component: Icons,
  },
  {
    path: "/maps",
    name: "地圖",
    icon: "nc-icon nc-pin-3",
    component: Maps,
  },
  {
    path: "/notifications",
    name: "通知",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
  }
];

export default dashboardRoutes;
