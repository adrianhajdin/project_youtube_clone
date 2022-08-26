import { FC } from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from ".";
import { VideoType } from "../Types/Video";
import { DirectionList } from "../Types/StackComponent";

export interface Props {
  videos: any;
  direction?: DirectionList;
}

const Videos: FC<Props> = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      {videos.map((item: VideoType, idx: number) => (
        <Box
          key={idx}
          display="flex"
          sx={{
            flexGrow: 1,

            justifyContent: "center",
          }}
        >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && (
            <ChannelCard
              channelDetail={{
                id: item.id.channelId,
                snippet: item.snippet,
              }}
            />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
