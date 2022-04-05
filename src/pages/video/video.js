import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useBrowse } from "src/contexts";
import {
  Details,
  DislikeIcon,
  LikeIcon,
  Wrapper,
  StyledMain,
  VideoCard,
} from "./video.styled";
import Video from "../components/video";
import videoService from "src/services/videoService";
import { Badge, Box, Typography } from "src/components";
import userService from "src/services/userService";

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
    userService.postUserLike(video).then(() => {
      browsingDispatch({ type: "DO_LIKE", payload: video });
    });
  };

  const disLike = () => {
    userService.deleteVideoLike(video).then(() => {
      browsingDispatch({ type: "REMOVE_LIKE", payload: video });
    });
  };

  return (
    <Wrapper>
      {video && (
        <StyledMain>
          <VideoCard>
            <div className="card-media">
              <img src="https://picsum.photos/200/250/" alt="video" />
            </div>
          </VideoCard>
          <Details display="flex" gap="sm">
            <Box
              direction="column"
              display="flex"
              alignItems="start"
              style={{ flexGrow: 1 }}
              gap="sm"
            >
              <Typography className="typography" variant="h3">
                {video.title}
              </Typography>
              <Typography className="typography">
                by: {video.creator}
              </Typography>
              <Badge color="warning">{video.categoryName}</Badge>
            </Box>
            <Box>
              <LikeIcon onClick={videoLike} />
              <DislikeIcon onClick={disLike} />
            </Box>
          </Details>
        </StyledMain>
      )}
    </Wrapper>
  );
}
