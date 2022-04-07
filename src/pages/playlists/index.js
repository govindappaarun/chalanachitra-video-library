import Playlists from "./playlists";
import CreatePlaylist from "./createPlaylist";
import Playlist from "./playlist";
import { Outlet } from "react-router-dom";

const PlaylistContainer = () => <Outlet />;

export { CreatePlaylist, Playlist, PlaylistContainer, Playlists as default };
