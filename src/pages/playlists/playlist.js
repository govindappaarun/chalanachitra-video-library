import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "src/components";
import userService from "src/services/userService";
import Video from "../components/video";

export default function Playlist() {
  const params = useParams();
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();
  const [playList, setPlayList] = useState(null);
  useEffect(() => {
    userService.getVideosInPlaylist().then((response) => {
      setVideos(response.videos);
    });
  }, [params]);

  return (
    <div>
      <h2>Video List: </h2>
      <hr />
      <div className="videos-container">
        {videos &&
          videos.map((video, index) => {
            <Video video={video} key={index} />;
          })}
        {videos && videos.length <= 0 && (
          <div className="no-videos">
            No videos found
            <Button className="m-1" onClick={() => navigate("/home")}>
              Add Videos
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
