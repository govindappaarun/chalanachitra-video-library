import React from "react";
import { useParams } from "react-router";
import { useBrowse } from "src/contexts";
import { DislikeIcon, LikeIcon, Wrapper } from "./video.styled";

export default function Video() {
  const { id } = useParams();
  const { browsingState, browsingDispatch } = useBrowse();

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
        <LikeIcon onClick={videoLike} />
        <DislikeIcon onClick={dissLike} />
      </main>
    </Wrapper>
  );
}
