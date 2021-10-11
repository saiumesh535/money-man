import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
    list: any[];
    label: string;
    // handleChange: () => void;
}

export function SelectComponent(props: Props) {
    const [selected, updateSelected] = React.useState();

    function handleChange(e: any){
        console.log(e.target.value);
    }
    return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected}
            label={props.label}
            onChange={handleChange}
          >
            {props.list.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
    );
}