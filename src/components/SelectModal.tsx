import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';



interface Props {
    Modelopen: boolean;
    setModelOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleOpen: () => void;
    handleClose: () => void;
    days: string;
    events: any;
    setEvents: React.Dispatch<React.SetStateAction<any>>;
    error: string | null;
    setError: React.Dispatch<React.SetStateAction<string|null>>;

}

export default function Title(props: Props) {
    
    const {Modelopen, setModelOpen, handleOpen, handleClose, days, events, setEvents, error, setError} = props;
        
    const [starttime, setStartTime] = React.useState<Dayjs | null>(dayjs());
    const [endtime, setEndTime] = React.useState<Dayjs | null>(dayjs());

    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        textAlign: 'center',
        borderRadius: 3
      };
  
  
    const handleAddEvent = () => {
  
      if (starttime!.isAfter(endtime!)) {
        setError('Start time cannot be after end time');
        return;
      }
  
      if (starttime!.isSame(endtime!)) {
        setError('Start time and end time cannot be the same');
        return;
      }
  
      const dateObject = dayjs(days).toDate();
      const starttimeObject = dayjs(dateObject).hour(starttime!.hour()).set('minute', 0).toDate();
      const endtimeObject = dayjs(dateObject).hour(endtime!.hour()).set('minute', 0).toDate();
  
      const title=starttime?.hour().toString()+":00"+"-"+endtime?.hour().toString()+":00";
  
      const isDuplicate = events.some((event: any) => {
        const eventDate = dayjs(event.start).format('MM-DD');
        const currentDate = dayjs(dateObject).format('MM-DD');
        return eventDate === currentDate;
      });
      if (isDuplicate) {
        setError('An event already exists for the selected date');
        return;
      }
  
      const newEvent: any = {
        title: title,
        start: starttimeObject,
        end: endtimeObject,
        description: "新しい予定の説明",
        backgroundColor: "orange",
        borderColor: "orange"
      };
  
      setEvents([...events, newEvent]);
      setStartTime(dayjs());
      setEndTime(dayjs());
      handleClose();
    };

  return (
    <Modal
        open={Modelopen}
        onClose={handleClose}
    >
    <Box sx={style}>
        <Container maxWidth="lg">
        <Typography id="modal-title" variant="h5" component="h1" >
            {days}
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
            sx={{ mt: 3 }}
            label="Start"
            value={starttime}
            views={['hours']}
            minTime={dayjs().hour(10)}
            maxTime={dayjs().hour(22)}
            onChange={(newstartTime) => {
                setStartTime(newstartTime);
            }}
            ampm={false}
            />
            <TimePicker
            sx={{ mt: 3 }}
            label="End"
            value={endtime}
            views={['hours']}
            minTime={dayjs().hour(10)}
            maxTime={dayjs().hour(22)}
            onChange={(newendTime) => {
                setEndTime(newendTime);
            }}
            ampm={false}
            />
            
        </LocalizationProvider>
        {error && (
            <Typography color="error" sx={{ mt: 1 }}>
            {error}
            </Typography>
        )}
        <Button
            sx={{ mt: 3 }}
            variant="contained"
            onClick={handleAddEvent}
        >
            Add
        </Button>
        </Container>
    </Box>
    </Modal>
  );
}
