import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import { routeHome, routeAdmin } from "./routes";
import HomeTemplate from "./containers/HomeTemplate";
import AdminTemplate from "./containers/AdminTemplate";
import Auth from "./containers/AdminTemplate/Auth";

function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  const showLayoutAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item) => {
        return (
          <AdminTemplate
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        {showLayoutHome(routeHome)}
        {showLayoutAdmin(routeAdmin)}

        {/* Auth  */}
        <Route path="/auth" component={Auth} />

        {/* Trang page not found - de cuoi cung  */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
