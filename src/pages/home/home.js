import axios from "axios";
import React, { useState, useEffect } from "react";
import { Box, Card } from "src/components";
import Footer from "../footer";
import Header from "../header/header";
import { StyledMain } from "./home.styled";
import Video from "../components/video";
import { useBrowse } from "src/contexts";
import { LinkButton } from "src/components/Button";
import { useNavigate } from "react-router";
import videoService from "src/services/videoService";
import historyService from "src/services/historyService";

const SideNavBar = () => {
  const { browsingState } = useBrowse();
  return (
    <Box display="flex" direction="column">
      <LinkButton color="primary" to="/liked">
        Liked ({browsingState.likes.length})
      </LinkButton>
      <LinkButton color="primary" to="/watchLater">
        WatchLater ({browsingState.watchLater.length})
      </LinkButton>
      <LinkButton color="primary" to="/history">
        History
      </LinkButton>
    </Box>
  );
};

export default function Home() {
  const [videos, setVideos] = useState([]);
  const { browsingState, browsingDispatch } = useBrowse();
  const navigate = useNavigate();

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

  useEffect(() => {
    videoService
      .getAllVideos()
      .then((response) => setVideos(response.videos))
      .catch((err) => console.log({ err }));
  });

  return (
    <div>
      <Header />
      <Box display="flex">
        <SideNavBar />
        <StyledMain>
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
        </StyledMain>
      </Box>
      <Footer />
    </div>
  );
}
