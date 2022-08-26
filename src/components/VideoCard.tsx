import { FC } from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
import { VideoIDType, VideoSnippetType } from "../Types/Video";
import ImageViewer from "./ImageViewer";

interface Props {
  video: {
    id: VideoIDType;
    snippet: VideoSnippetType;
  };
}

const VideoCard: FC<Props> = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link
        to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}
        title={snippet?.title}
      >
        <ImageViewer
          default={{ url: demoThumbnailUrl }}
          src={{
            url: snippet?.thumbnails?.medium?.url,
            type: "medium",
          }}
          version={snippet?.thumbnails}
          sxMediaStyle={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
        <Link
          to={videoId ? `/video/${videoId}` : demoVideoUrl}
          title={snippet?.title}
        >
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
