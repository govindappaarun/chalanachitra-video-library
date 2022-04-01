import React, { useState, useEffect } from "react";
import Video from "../components/video";
import { useBrowse } from "src/contexts";
import historyService from "src/services/historyService";
import videoService from "src/services/videoService";
import { useNavigate } from "react-router-dom";

export default function VideoList() {
  const [videos, setVideos] = useState([]);
  const { browsingState, browsingDispatch } = useBrowse();
  const navigate = useNavigate();

  useEffect(() => {
    videoService
      .getAllVideos()
      .then((response) => setVideos(response.videos))
      .catch((err) => console.log({ err }));
  }, []);

  const isInWatchList = ({ _id }) => {
    return browsingState.watchLater.indexOf(_id) >= 0;
  };

  const addWatchLater = (video) => {
    // api call
    browsingDispatch({ type: "DO_WATCHLATER", payload: video });
  };

  const removeWatchLater = (video) => {
    browsingDispatch({ type: "REMOVE_FROM_WATCHLATER", payload: video });
  };

  const onVideoClick = (video) => {
    historyService
      .addToHistory(video)
      .then(() => {
        navigate(`video/${video._id}`);
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <div>
      {videos.map((video) => {
        return (
          <Video
            key={video._id}
            video={video}
            addWatchLater={addWatchLater}
            removeWatchLater={removeWatchLater}
            isInWatchList={isInWatchList}
            onVideoClick={onVideoClick}
          />
        );
      })}
    </div>
  );
}
