import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { Videos } from './';
import { axiosGetReq } from '../utils';

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await axiosGetReq(`search?part=snippet&q=${searchTerm}`);
      setVideos(data.items);
    };

    fetchVideos();
  }, []);

  return (
    <>
      <Typography
        fontSize={25}
        fontWeight={900}
        p={3}
        textAlign='center'
        color='white'
      >
        Search Results for {searchTerm} Videos
      </Typography>
      <Videos videos={videos} />
    </>
  );
};

export default SearchFeed;
