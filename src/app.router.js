import { useRoutes, Navigate } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/singup";
import HistoryPage from "./pages/history";
import Home from "./pages/home";
import { useAuth } from "./contexts";
import Video from "./pages/video";
import Playlists, { CreatePlaylist } from "./pages/playlists";
import VideoCategories from "./pages/videoCategories";
import WatchLater from "./pages/watchlater";
import LikedVideos from "./pages/liked";
import VideoList from "./pages/home/videoList";

const publicRoutes = [
  { path: "/", element: <Navigate to="/home" replace /> },
  { path: "/home", element: <Home /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "*", element: <LoginPage /> },
];

const privateRoutes = [
  {
    path: "/home",
    element: <Home />,
    children: [
      { path: "/home", index: true, element: <VideoList /> },
      { path: "watchLater", element: <WatchLater /> },
      { path: "liked", element: <LikedVideos /> },
      { path: "history", element: <HistoryPage /> },
      { path: "video/:id", element: <Video /> },
      {
        path: "browseCategory/:categoryName",
        element: <VideoCategories />,
      },
      {
        path: "playlists",
        element: <Playlists />,
        children: [
          {
            path: "create",
            element: <CreatePlaylist />,
          },
          { path: ":videoId", element: <div>Videos</div> },
        ],
      },
    ],
  },
];

const AppRouter = () => {
  const { authState } = useAuth();
  const appRoutes = publicRoutes.concat(
    authState.isLoggedIn ? privateRoutes : []
  );

  return useRoutes(appRoutes);
};

export default AppRouter;
