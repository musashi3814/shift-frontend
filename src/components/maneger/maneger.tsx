import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import TopAppBar from '../TopAppBar';
import Sidebar from '../Sidebar';
import SubmitView from './SubmitView';

const defaultTheme = createTheme();

export default function Main() {

  const [AppOpen, setAppOpen] = React.useState(false);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <TopAppBar AppOpen={AppOpen} setAppOpen={setAppOpen}/>
        <Sidebar AppOpen={AppOpen} setAppOpen={setAppOpen}/>
        <SubmitView/>
      </Box>
    </ThemeProvider>
  );
}
