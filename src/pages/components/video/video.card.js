import { Badge, Typography } from "src/components";
import {
  StyledCard,
  PlayIcon,
  WatchLaterIcon,
  QueueIcon,
} from "./video.card.styled";

const Video = (
  { video, addWatchLater, removeWatchLater, isInWatchList, onVideoClick },
  ...rest
) => {
  return (
    <StyledCard key={video._id} {...rest}>
      <div className="card-media" onClick={() => onVideoClick(video)}>
        <img src="https://picsum.photos/200/250/" alt="video" />
        <Badge className="duration">{video.time}</Badge>
        <PlayIcon className="play" />
        <WatchLaterIcon
          active={() => isInWatchList(video)}
          onClick={(e) => {
            e.stopPropagation();
            if (isInWatchList(video)) {
              removeWatchLater(video);
            } else {
              addWatchLater(video);
            }
          }}
        />
        <QueueIcon />
      </div>
      <div className="card-body">
        <Badge color="warning">HTML</Badge>
        <Typography className="typography" variant="h3">
          {video.title}
        </Typography>
        <Typography className="typography">by: {video.creator}</Typography>
      </div>
    </StyledCard>
  );
};

export default Video;
