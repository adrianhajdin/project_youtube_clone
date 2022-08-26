import { FC } from "react";
import { Box, CardContent, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { ChannelType } from "../Types/Channel";
import ImageViewer from "./ImageViewer";
import { demoProfilePicture } from "../utils/constants";

interface Props {
  channelDetail: ChannelType | null;
  marginTop?: string;
}

const ChannelCard: FC<Props> = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "356px", md: "320px" },
      height: "326px",
      margin: "auto",
      marginTop,
    }}
  >
    <Link
      to={`/channel/${channelDetail?.id}`}
      title={channelDetail?.snippet?.title}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <ImageViewer
          default={{ url: demoProfilePicture }}
          src={{
            url: channelDetail?.snippet?.thumbnails?.medium?.url,
            type: "medium",
          }}
          version={channelDetail?.snippet?.thumbnails}
          imageType={"avatar"}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{" "}
          <CheckCircleIcon
            sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
          />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}>
            {parseInt(
              channelDetail?.statistics?.subscriberCount.toString()
            ).toLocaleString("en-US")}{" "}
            Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
