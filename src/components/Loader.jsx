import React from 'react';
import { CircularProgress, Stack } from '@mui/material';

const Loader = () =>  (
  <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
    <CircularProgress />
  </Stack>
);

export default Loader;
