import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { createPortal } from "react-dom";
import PlaylistModal from "src/pages/components/playlistModal";
import { browsingReducer, initialState } from "src/reducers/browsing.reducer";
import userService from "src/services/userService";

const BrowsingContext = createContext(initialState);

const BrowsingProvider = ({ children }) => {
  const [browsingState, browsingDispatch] = useReducer(
    browsingReducer,
    initialState
  );
  const [playlists, setPlaylists] = useState([]);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [video, setVideo] = useState(null);

  const addToPlaylist = (video) => {
    setVideo(video);
    setShowPlaylist(true);
  };

  const addSelectedVideoToList = ({ _id }) => {
    userService
      .addVideoToPlaylist({ _id, video })
      .then(() => {
        setShowPlaylist(false);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setShowPlaylist(false);
      });
  };

  const getPlaylists = () => {
    userService.getUserPlaylists().then((response) => {
      setPlaylists(response.playlists);
    });
  };

  const presentPlaylist = (show = true) => {
    getPlaylists();
    setShowPlaylist(show);
  };

  return (
    <BrowsingContext.Provider
      value={{
        browsingState,
        browsingDispatch,
        presentPlaylist,
        addToPlaylist,
      }}
    >
      {children}
      {createPortal(
        <PlaylistModal
          showPlaylist={showPlaylist}
          playlists={playlists}
          setShowPlaylist={setShowPlaylist}
          addSelectedVideoToList={addSelectedVideoToList}
        />,
        document.body
      )}
    </BrowsingContext.Provider>
  );
};

const useBrowse = () => useContext(BrowsingContext);

export { BrowsingProvider, useBrowse };
