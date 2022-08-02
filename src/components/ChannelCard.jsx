import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ChannelCard = ({ channelDetail, mt }) => (
  <Card
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: { xs: '350px', md: '320px' },
      margin: 'auto',
      mt,
      background: '#000',
    }}
  >
    <CardMedia
      component='img'
      height='160'
      image={channelDetail?.snippet?.thumbnails?.high.url}
      alt='channel-img'
      sx={{
        borderRadius: '50%',
        width: '160px',
        border: '1px solid #e3e3e3',
      }}
    />
    <CardContent sx={{ textAlign: 'center', color: '#fff' }}>
      <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>
        {channelDetail?.snippet?.title}{' '}
        <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
      </Typography>
      {channelDetail?.statistics?.subscriberCount && (
        <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
          {channelDetail?.statistics?.subscriberCount &&
            parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString(
              'en-US'
            )}{' '}
          Subscribers
        </Typography>
      )}
    </CardContent>
  </Card>
);

export default ChannelCard;
