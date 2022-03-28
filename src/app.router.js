import { useRoutes } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/singup";
import HistoryPage from "./pages/history";
import Home from "./pages/home";
import { useAuth } from "./contexts";

const NoMatch = () => <h3>404 - No matching route found</h3>;

const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "*", element: <NoMatch /> },
];

const privateRoutes = [
  { path: "/videoList", element: <div>Video List</div> },
  { path: "/video/:id", element: <div>Video List</div> },
  { path: "/history", element: <HistoryPage /> },
  { path: "/watchLater", element: <div>Watch Later</div> },
];

const AppRouter = () => {
  const { authState } = useAuth();
  console.log({ authState });
  const appRoutes = publicRoutes.concat(
    authState.isLoggedIn ? privateRoutes : []
  );

  return useRoutes(appRoutes);
};

export default AppRouter;
