import { ReactElement } from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/404";
import Login from "../pages/login";
import Account from "../pages/account";
import Orders from "../pages/orders";


interface RoutesWrapperProps {
    children: ReactElement;
}

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/account",
      element: <Account />,
    },
    {
      path: "/orders",
      element: <Orders />,
    },
    {
      path: "/404",
      element: <NotFound />,
    },
  ]);

  return routes;
};

const RoutesWrapper: React.FC<RoutesWrapperProps> = ({children}) => {
  return (
    <BrowserRouter>
      {children}
      <AppRoutes />
    </BrowserRouter>
  );
};
export default RoutesWrapper;
