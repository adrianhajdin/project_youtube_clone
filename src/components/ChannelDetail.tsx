import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from ".";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { ChannelType } from "../Types/Channel";
import { VideoType } from "../Types/Video";

const ChannelDetail: FC = () => {
  const [channelDetail, setChannelDetail] = useState<ChannelType | null>(null);
  const [videos, setVideos] = useState<VideoType | null>(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2}>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
