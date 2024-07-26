import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const NetworkError = ({ onRetry }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="20vh"
    >
      <Typography variant="h5" gutterBottom>
        Network Error
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        There was a problem connecting to the server. Please check your network
        connection and try again.
      </Typography>
      {onRetry && (
        <Button variant="contained" color="primary" onClick={onRetry}>
          Retry
        </Button>
      )}
    </Box>
  );
};

export default NetworkError;
