import clsx from "clsx";
import { useNavigate } from "react-router";
import { Badge, Button, Typography } from "src/components";
import { useBrowse } from "src/contexts";
import historyService from "src/services/historyService";
import userService from "src/services/userService";
import {
  StyledCard,
  PlayIcon,
  WatchLaterIcon,
  QueueIcon,
} from "./video.card.styled";

const Video = (
  { video, showDelete, onDelete, horizontal, className },
  ...rest
) => {
  const navigate = useNavigate();
  const { browsingState, browsingDispatch } = useBrowse();

  const onVideoClick = (video) => {
    historyService
      .addToHistory(video)
      .then(() => {
        navigate(`/home/video/${video._id}`);
      })
      .catch((err) => console.log({ err }));
  };

  const isInWatchList = ({ _id }) => {
    return browsingState.watchLater.indexOf(_id) >= 0;
  };

  const addWatchLater = (video) => {
    userService.postUserWatchlater(video).then(() => {
      // console.log("added to watch later");
      browsingDispatch({ type: "DO_WATCHLATER", payload: video });
    });
  };

  const removeWatchLater = (video) => {
    userService.deleteWatchlater(video).then(() => {
      // console.log("removed from watch later");
      browsingDispatch({ type: "REMOVE_FROM_WATCHLATER", payload: video });
    });
  };

  return (
    <StyledCard
      key={video._id}
      {...rest}
      className={clsx(className, { horizontal: horizontal })}
    >
      <div className="card-media" onClick={() => onVideoClick(video)}>
        <img src="https://picsum.photos/200/250/" alt="video" />
        <Badge className="duration">{video.time}</Badge>
        <PlayIcon className="play" />
        <WatchLaterIcon
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
        <Badge color="warning">{video.categoryName}</Badge>
        <Typography className="typography" variant="h3">
          {video.title}
        </Typography>
        <Typography className="typography">by: {video.creator}</Typography>
      </div>
      {showDelete && (
        <div className="card-actions">
          <Button onClick={() => onDelete(video)}>clear</Button>
        </div>
      )}
    </StyledCard>
  );
};

export default Video;
