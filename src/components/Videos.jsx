import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Box,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import ChannelCard from './ChannelCard';
import Loader from './Loader';

const Videos = ({ videos, direction }) => (
  <Stack
    direction={direction || 'row'}
    flexWrap='wrap'
    justifyContent='center'
    alignItems='center'
    gap={2}
    p={1}
  >
    {videos ? (
      videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && (
            <Card
              sx={{
                width: { md: '320px', xs: '350px' },
                height: 310,
                boxShadow: 'none',
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
                  component='img'
                  height='216'
                  image={
                    item.snippet?.thumbnails?.high.url ||
                    'https://i.ytimg.com/vi/7PCkvCPvDXk/hqdefault.jpg'
                  }
                  alt='green iguana'
                />
              </Link>
              <CardContent>
                <Link
                  to={
                    item?.id?.videoId
                      ? `/video/${item.id.videoId}`
                      : `/video/7PCkvCPvDXk`
                  }
                >
                  <Typography fontSize='15px' fontWeight={600}>
                    {item.snippet?.title.slice(0, 60) ||
                      'Meghan Trainor - All About That Bass'}
                  </Typography>
                </Link>
                <Link
                  to={
                    item?.snippet?.channelId
                      ? `/channel/${item.snippet?.channelId}`
                      : '/channel/UCf3cbfAXgPFL6OywH7JwOzA'
                  }
                >
                  <Typography fontSize='14px' fontWeight={500}>
                    {item.snippet?.channelTitle || 'MeghanTrainorVEVO'}
                    <CheckCircleIcon
                      sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
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
      <Loader />
    )}
  </Stack>
);

export default Videos;
