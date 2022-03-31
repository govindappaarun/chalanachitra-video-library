import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useBrowse } from "src/contexts";
import { DislikeIcon, LikeIcon, Wrapper } from "./video.styled";
import Video from "../components/video";
import videoService from "src/services/videoService";

export default function VideoPage() {
  const { id } = useParams();
  const { browsingState, browsingDispatch } = useBrowse();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    id &&
      videoService
        .getVideo({ _id: id })
        .then((response) => setVideo(response.video));
  }, [id]);

  const videoLike = () => {
    browsingDispatch({ type: "DO_LIKE", payload: { _id: id } });
  };

  const dissLike = () => {
    browsingDispatch({ type: "REMOVE_LIKE", payload: { _id: id } });
  };

  return (
    <Wrapper>
      Here is video {id}
      <main>
        {video && (
          <div>
            <Video video={video} />
            <LikeIcon onClick={videoLike} />
            <DislikeIcon onClick={dissLike} />
          </div>
        )}
      </main>
    </Wrapper>
  );
}
