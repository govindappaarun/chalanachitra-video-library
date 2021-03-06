import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import videoService from "src/services/videoService";
import Video from "../components/video";
import { Wrapper } from "./videoCategories.styled";

export default function VideoCategories() {
  const { categoryName } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getAllVideos();
  }, []);

  const categoryVideos = useMemo(() => {
    return videos.filter((video) => video.categoryName === categoryName);
  }, [videos, categoryName]);

  const getAllVideos = () => {
    videoService.getAllVideos().then((response) => {
      setVideos(response.videos);
    });
  };

  return (
    <Wrapper>
      <h3 className="header my-1">{categoryName}</h3>
      <section className="videos-container">
        {categoryVideos && categoryVideos.length === 0 && (
          <h4 className="no-videos">No Videos found for this category</h4>
        )}
        {categoryVideos.map((video) => {
          return <Video key={video._id} video={video} />;
        })}
      </section>
    </Wrapper>
  );
}
