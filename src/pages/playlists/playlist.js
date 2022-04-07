import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "src/components";
import userService from "src/services/userService";
import Video from "../components/video";

export default function Playlist() {
  const params = useParams();
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    userService.getVideosInPlaylist().then((response) => {
      setVideos(response.videos);
    });
  }, [params]);
  return (
    <div>
      <div>Video List</div>
      <hr />
      <div>
        {videos &&
          videos.map((video, index) => {
            <Video video={video} key={index} />;
          })}
        {videos && videos.length <= 0 && (
          <div>
            <div>No videos found</div>
            <Button className="my-2" onClick={() => navigate("/home")}>
              Add Videos
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
