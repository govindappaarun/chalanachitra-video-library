import React, { useEffect, useState } from "react";
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
      <h3>Watchlater list</h3>
      <hr />
      {videos && videos.length === 0 && <h4>No videos found</h4>}
      <section>
        {videos.map((video) => {
          return <Video key={video._id} video={video} />;
        })}
      </section>
    </Wrapper>
  );
}
