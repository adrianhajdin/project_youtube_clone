import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard, Loader } from './';
import { axiosGetReq } from '../utils';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await axiosGetReq(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);

      const videosData = await axiosGetReq(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setVideos(videosData?.items);
    };

    fetchResults();
  }, []);

  if (!videos) <Loader />;

  return (
    <>
      <Box>
        <img
          src={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
          alt='channel-art'
          style={{
            height: '300px',
            width: '100%',
            borderRadius: '8px',
          }}
        />
        <ChannelCard channelDetail={channelDetail} mt='-93px' />
      </Box>
      <Videos videos={videos} />
    </>
  );
};

export default ChannelDetail;
