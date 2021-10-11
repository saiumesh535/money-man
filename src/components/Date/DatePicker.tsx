import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { useState } from 'react';

export function DatePicker() {
    const [date, setDate] = useState<Date | null>(new Date())
    function handleChange(value: Date | null){
        console.log(value);
        setDate(value);
    }
    return(
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <MobileDatePicker
            label="Date mobile"
            inputFormat="MM/dd/yyyy"
            value={date}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    );
}