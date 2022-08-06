import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import ChannelCard from "./ChannelCard";
import Loader from "./Loader";

const Videos = ({ videos, direction }) => (
  <Stack
    direction={direction || "row"}
    flexWrap="wrap"
    justifyContent="start"
    alignItems="start"
    gap={2}
  >
    {videos ? (
      videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && (
            <Card
              sx={{
                width: { md: "320px", xs: "100%" },
                boxShadow: "none",
                borderRadius: 0,
              }}
            >
              <Link
                to={
                  item?.id?.videoId
                    ? `/video/${item.id.videoId}`
                    : `/video/cV2gBU6hKfY`
                }
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={
                    item.snippet?.thumbnails?.high.url ||
                    "https://i.ytimg.com/vi/7PCkvCPvDXk/hqdefault.jpg"
                  }
                  alt="green iguana"
                />
              </Link>
              <CardContent
                sx={{
                  backgroundColor: "#1E1E1E",
                }}
              >
                <Link
                  to={
                    item?.id?.videoId
                      ? `/video/${item.id.videoId}`
                      : `/video/7PCkvCPvDXk`
                  }
                >
                  <Typography fontSize="15px" fontWeight={600} color="#FFF">
                    {item.snippet?.title.slice(0, 60) ||
                      "Meghan Trainor - All About That Bass"}
                  </Typography>
                </Link>
                <Link
                  to={
                    item?.snippet?.channelId
                      ? `/channel/${item.snippet?.channelId}`
                      : "/channel/UCf3cbfAXgPFL6OywH7JwOzA"
                  }
                >
                  <Typography fontSize="14px" fontWeight={500} color="gray">
                    {item.snippet?.channelTitle || "MeghanTrainorVEVO"}
                    <CheckCircleIcon
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          )}
          {item.id.channelId && (
            <Link to={`/channel/${item.id.channelId}`}>
              <ChannelCard channelDetail={item} />
            </Link>
          )}
        </Box>
      ))
    ) : (
      <Box
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <Loader />
      </Box>
    )}
  </Stack>
);

export default Videos;
