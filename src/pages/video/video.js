import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useBrowse } from "src/contexts";
import { Details, Wrapper, StyledMain, VideoCard, Icon } from "./video.styled";
import videoService from "src/services/videoService";
import { Badge, Box, Typography } from "src/components";
import userService from "src/services/userService";
import clsx from "clsx";
import { RiHeartLine, RiHeartPulseLine } from "react-icons/ri";
import ReactPlayer from "react-player/youtube";

export default function VideoPage() {
  const { id } = useParams();
  const { browsingState, browsingDispatch } = useBrowse();
  const [video, setVideo] = useState(null);
  const isLiked = browsingState.likes.indexOf(id) >= 0;

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
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
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
            <Box display="flex" gap="md" alignItems="center">
              <Icon>
                <RiHeartLine
                  size={40}
                  className={clsx({
                    active: isLiked,
                  })}
                  onClick={isLiked ? null : videoLike}
                />
              </Icon>
              <Icon>
                <RiHeartPulseLine onClick={disLike} size={40} />
              </Icon>
            </Box>
          </Details>
        </StyledMain>
      )}
    </Wrapper>
  );
}
