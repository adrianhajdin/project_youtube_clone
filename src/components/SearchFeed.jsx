import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { Videos } from "./";
import { axiosGetReq } from "../utils";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await axiosGetReq(`search?part=snippet&q=${searchTerm}`);
      setVideos(data.items);
    };

    fetchVideos();
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography
        fontSize={25}
        fontWeight={900}
        textAlign="left"
        color="white"
        mb={2}
      >
        Search Results for
        <span style={{ color: "#FC1503" }}> {searchTerm} </span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
