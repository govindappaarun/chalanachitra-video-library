import clsx from "clsx";
import { useNavigate } from "react-router";
import { Badge, Button, Modal, Typography } from "src/components";
import { useBrowse } from "src/contexts";
import historyService from "src/services/historyService";
import userService from "src/services/userService";
import Popover from "./menu";
import { StyledCard, PlayIcon, MoreIcon } from "./video.card.styled";

const Video = (props) => {
  const {
    video,
    addToPlaylist = () => {},
    showDelete,
    deleteText = "Remove",
    onDelete,
    horizontal,
    className,
    ...rest
  } = props;
  const navigate = useNavigate();
  const { browsingState, browsingDispatch } = useBrowse();

  const onVideoClick = async (video) => {
    navigate(`/home/video/${video._id}`);
    try {
      await historyService.addToHistory(video);
    } catch (err) {
      console.log({ err });
    }
  };

  const isInWatchList = () => {
    return browsingState.watchLater.indexOf(video._id) >= 0;
  };

  const addWatchLater = () => {
    userService.postUserWatchlater(video).then(() => {
      browsingDispatch({ type: "DO_WATCHLATER", payload: video });
    });
  };

  const removeWatchLater = () => {
    userService.deleteWatchlater(video).then(() => {
      browsingDispatch({ type: "REMOVE_FROM_WATCHLATER", payload: video });
    });
  };

  const _addToPlaylist = () => {
    addToPlaylist(video);
  };

  return (
    <StyledCard
      key={video._id}
      {...rest}
      className={clsx(className, { horizontal: horizontal })}
    >
      <div className="card-media" onClick={() => onVideoClick(video)}>
        <img src="https://picsum.photos/200/250/" alt="video" />
        <Badge className="views">{video.views}</Badge>
        <Badge className="duration">{video.time}</Badge>
        <PlayIcon className="play" />
      </div>
      <div className="card-body">
        <Popover
          className="popover-menu"
          isInWatchList={isInWatchList}
          removeWatchLater={removeWatchLater}
          addWatchLater={addWatchLater}
          addToPlaylist={_addToPlaylist}
        >
          <MoreIcon />
        </Popover>
        <Badge className="category" color="warning">
          {video.categoryName}
        </Badge>
        <Typography className="typography" variant="h3">
          {video.title}
        </Typography>
        <Typography className="typography">by: {video.creator}</Typography>
      </div>
      {showDelete && (
        <div className="card-actions">
          <Button onClick={() => onDelete(video)}>{deleteText}</Button>
        </div>
      )}
    </StyledCard>
  );
};

export default Video;
