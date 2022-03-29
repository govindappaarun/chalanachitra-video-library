import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge, Typography } from "src/components";
import Footer from "../footer";
import Header from "../header";
import {
  PlayIcon,
  QueueIcon,
  StyledCard,
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius
        eum nulla deleniti accusantium, facere, recusandae, doloribus quae
        inventore doloremque explicabo! Dignissimos dolorem laboriosam assumenda
        culpa distinctio corporis ipsum, delectus expedita ipsam minima, rem
        alias hic dolor possimus, voluptatum provident modi asperiores
        consequuntur inventore aperiam quidem quia. Eveniet voluptate, odit
        accusamus quos tenetur, pariatur enim quidem voluptates dolores, quam
        sequi.
      </StyledMain>
      <Footer />
    </Wrapper>
  );
}
