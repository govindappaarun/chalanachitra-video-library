import React, { useEffect, useState, useMemo } from "react";
import userService from "src/services/userService";
import Video from "../components/video";
import { Wrapper } from "./liked.styled";

export default function LikedVideos() {
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
      <h3>Liked Videos</h3>
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
