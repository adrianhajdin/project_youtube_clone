import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { axiosGetReq } from "../utils";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await axiosGetReq(`videos?part=snippet,statistics&id=${id}`);
      setVideoDetail(data.items[0]);

      const videosData = await axiosGetReq(
        `search?part=snippet&relatedToVideoId=${id}&type=video`
      );
      setVideos(videosData.items);
    };

    fetchResults();
  }, [id]);

  if (!videos) <Loader />;

  return (
    <Box minHeight="95vh">
      {videoDetail && (
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
              <ReactPlayer
                className="react-player"
                controls
                url={`https://www.youtube.com/watch?v=${id}`}
              />
              <Typography color="#fff" fontSize={18} fontWeight={500} p={1.5}>
                {videoDetail?.snippet?.title}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ color: "#fff" }}
                py={1}
                px={2}
              >
                <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                  <Typography
                    fontSize={{ md: 20, xs: 16 }}
                    fontWeight={600}
                    color="#fff"
                  >
                    {videoDetail?.snippet?.channelTitle}
                    <CheckCircleIcon
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography
                    sx={{ opacity: 0.7, fontSize: { md: "16px", xs: "14px" } }}
                  >
                    {parseInt(
                      videoDetail?.statistics?.viewCount
                    ).toLocaleString("en-US")}{" "}
                    views
                  </Typography>

                  <Stack
                    direction="row"
                    alignItems="center"
                    gap="10px"
                    sx={{ opacity: 0.7, fontSize: { md: "16px", xs: "14px" } }}
                  >
                    <ThumbUpAltOutlinedIcon />
                    <span>
                      {parseInt(
                        videoDetail?.statistics?.likeCount
                      ).toLocaleString("en-US")}
                    </span>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box
            px={2}
            py={{ md: 1, xs: 5 }}
            justifyContent="center"
            alignItems="center"
          >
            <Videos videos={videos} direction="column" />
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default VideoDetail;
