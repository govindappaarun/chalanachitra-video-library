import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "src/components";
import userService from "src/services/userService";
import Video from "../components/video";
import { Wrapper } from "./watchlater.styled";

export default function WatchLater() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getWatchedVideos();
  }, []);

  const getWatchedVideos = () => {
    userService.getWatchlater().then((response) => {
      setVideos(response.watchlater);
    });
  };

  return (
    <Wrapper>
      <Box display="flex" justifyContent="space-between" className="my-1">
        <h2>Watchlater</h2>
      </Box>
      <hr />
      <section className="videos-container">
        {videos?.length === 0 && (
          <h4 className="no-videos">
            You have not added anything to watchlater, Please{" "}
            <Link to="/home">browse</Link> some videos
          </h4>
        )}
        {videos?.map((video) => {
          return <Video key={video._id} video={video} />;
        })}
      </section>
    </Wrapper>
  );
}
