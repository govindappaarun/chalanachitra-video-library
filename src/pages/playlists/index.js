import Playlists from "./playlists";
import CreatePlaylist from "./createPlaylist";
import ViewPlaylist from "./viewPlaylist";
import { Outlet } from "react-router-dom";

const PlaylistContainer = () => <Outlet />;

export {
  CreatePlaylist,
  ViewPlaylist,
  PlaylistContainer,
  Playlists as default,
};
