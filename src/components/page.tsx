import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import jaLocale from '@fullcalendar/core/locales/ja'; 

import TopAppBar from './TopAppBar';
import Sidebar from './Sidebar';
import SelectModal from './SelectModal';

const defaultTheme = createTheme();

export default function Dashboard() {

  const [AppOpen, setAppOpen] = React.useState(false);
  const [Modelopen, setModelOpen] = React.useState(false);
  const [days, setdays] = React.useState("");
  const [events, setEvents] = React.useState<any[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const handleOpen = () => setModelOpen(true);
  const handleClose = () => setModelOpen(false);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Sidebar AppOpen={AppOpen} setAppOpen={setAppOpen}/>
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <TopAppBar AppOpen={AppOpen} setAppOpen={setAppOpen}/>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flex: 1 }}>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              contentHeight="auto"
              aspectRatio={1.6}
              businessHours={{ daysOfWeek: [1, 2, 3, 4, 5] }}
              locales={[jaLocale]}
              locale="ja"
              selectable={true}
              editable={true}
              displayEventTime={false}
              eventClick={() => {
                handleOpen();
              }}
              dateClick={(info) => {
                setdays(info.dateStr);
                setError(null);
                handleOpen();
              }}
            />
          </Container>
          <Button variant="contained" sx={{ alignSelf: 'flex-end', margin: '20px' }}>
            シフト提出
          </Button>
        </Box>
        <SelectModal
          Modelopen={Modelopen}
          setModelOpen={setModelOpen}
          handleOpen={handleOpen}
          handleClose={handleClose}
          days={days}
          events={events}
          setEvents={setEvents}
          error={error} 
          setError={setError}
        />
      </Box>
    </ThemeProvider>
  );
}
