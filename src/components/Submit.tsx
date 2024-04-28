import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import jaLocale from '@fullcalendar/core/locales/ja'; 

import SelectModal from './SelectModal';
import { Grid, Typography } from '@mui/material';


interface Props {
    // Add your component's props here
}


const Submit: React.FC<Props> = (props) => {

    const [Modelopen, setModelOpen] = React.useState(false);
    const [days, setdays] = React.useState("");
    const [events, setEvents] = React.useState<any[]>([]);
    const [error, setError] = React.useState<string | null>(null);
    const handleOpen = () => setModelOpen(true);
    const handleClose = () => setModelOpen(false);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <Grid container direction="column">
                <Typography variant="h4" sx={{ mt: 14, alignSelf: 'center' ,fontWeight: 'bold'}} color={"primary"}>
                    シフト希望提出
                </Typography>
                <Container maxWidth="lg" sx={{ mt: 2, mb: 4, flex: 1 }}>
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
                <Button
                   variant="outlined"
                   sx={{ alignSelf: 'center', marginTop: '20px', width: '260px', height: '50px'}}
                   onClick={() => setEvents([])}
                >
                    取り消す
                </Button>
                <Button
                   variant="contained"
                   sx={{ alignSelf: 'center', margin: '20px', width: '260px', height: '50px'}}
                   // 提出ボタンを押した時の処理
                >
                    シフト提出
                </Button>
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
            </Grid>
        </Box>
    );
}

export default Submit;