import Home from "../containers/HomeTemplate/Home";
import Detail from "../containers/HomeTemplate/Detail/index2";
import Signin from "../containers/HomeTemplate/Signin";
import Dashboard from "../containers/AdminTemplate/Dashboard";
import AddUser from "../containers/AdminTemplate/AddUser";
import HocPage from "../containers/HomeTemplate/HocPage";
import HooksPage from "../containers/HomeTemplate/HooksPage";

const routeHome = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: false,
    path: "/signin",
    component: Signin,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: Detail,
  },
  {
    exact: false,
    path: "/hoc",
    component: HocPage,
  },
  {
    exact: false,
    path: "/hook",
    component: HooksPage,
  },
];

const routeAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: Dashboard,
  },
  {
    exact: false,
    path: "/add-user",
    component: AddUser,
  },
];

export { routeAdmin, routeHome };
