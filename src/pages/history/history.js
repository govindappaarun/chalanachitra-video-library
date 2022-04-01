import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "src/components";
import historyService from "src/services/historyService";
import Footer from "../footer";
import Header from "../header";
import Video from "../components/video";
import { StyledMain, Wrapper } from "./history.styled";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = () => {
    historyService
      .getHistory()
      .then((response) => {
        setHistory(response.history);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const clearHistory = () => {
    historyService.clearHistory().then(() => {
      setHistory([]);
    });
  };

  const clearFromHistory = ({ _id }) => {
    historyService.deleteFromHistory({ _id }).then(() => {
      getHistory();
    });
  };

  return (
    <Wrapper>
      <Header />
      <Box display="flex" justifyContent="space-between" className="my-1">
        <h2>History</h2>
        <Button outline color="error" onClick={clearHistory}>
          Clear History
        </Button>
      </Box>
      <hr />
      <StyledMain>
        {history.map((video, index) => {
          return (
            <div key={index}>
              <Video video={video} />;
              <Button onClick={() => clearFromHistory(video)}>delete</Button>
            </div>
          );
        })}
      </StyledMain>
      <Footer />
    </Wrapper>
  );
}