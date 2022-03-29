import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "src/components";
import Footer from "../footer";
import Header from "../header/header";
import { StyledMain } from "./home.styled";
import Video from "../components/video";
import { useBrowse } from "src/contexts";
import { LinkButton } from "src/components/Button";
import { Navigate, useNavigate } from "react-router";

const SideNavBar = () => {
  const { browsingState } = useBrowse();
  return (
    <div>
      <LinkButton color="primary" to="/liked">
        Liked ({browsingState.likes.length})
      </LinkButton>
      <LinkButton color="primary" to="/watchLater">
        WatchLater ({browsingState.watchLater.length})
      </LinkButton>
      <LinkButton color="primary" to="/history">
        History
      </LinkButton>
    </div>
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

  const onVideoClick = ({ _id }) => {
    navigate(`video/:${_id}`);
  };

  useEffect(() => {
    axios.get("/api/videos").then((response) => {
      setVideos(response.data.videos);
    });
  });

  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}
