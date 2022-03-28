import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge, Typography } from "src/components";
import Footer from "../footer";
import Header from "../header";
import {
  PlayIcon,
  QueueIcon,
  StyleCard,
  StyledMain,
  WatchLaterIcon,
  Wrapper,
} from "./history.styled";

export default function History() {
  const [history, setHistory] = useState([1, 2, 3]);

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = () => {
    axios
      .get("/api/user/history", {
        headers: {
          authorization: localStorage.getItem(""),
        },
      })
      .then((response) => {
        console.log({ response });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Wrapper>
      <Header />
      <Typography variant="h2">History</Typography>
      <hr />
      <StyledMain>
        {history.map((item) => (
          <StyleCard key={item}>
            <div className="card-media">
              <img src="https://picsum.photos/200/250/" alt="video" />
              <Badge className="duration">00:55</Badge>
              <PlayIcon className="play" />
              <WatchLaterIcon />
              <QueueIcon />
            </div>
            <div className="card-body">
              <Badge color="warning">HTML</Badge>
              <Typography className="typography" variant="h3">
                Title of the Video
              </Typography>
              <Typography className="typography">by: Yashwanth</Typography>
            </div>
          </StyleCard>
        ))}
      </StyledMain>
      <Footer />
    </Wrapper>
  );
}
