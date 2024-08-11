import React from 'react';
import GoogleLogin from './GoogleLogin';
import Box from '@mui/material/Box';

function LoginPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
      <GoogleLogin />
    </Box>
  );
}

export default LoginPage;
