import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
    list: any[];
    label: string;
    value: string;
    handleChange: (value: string) => void;
}

export function SelectComponent(props: Props) {

    function handleChange(value: string){
      props.handleChange(value);
    }
    return (
        <Box sx={{ minWidth: 120 }} className='textField'>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={props.label}
            value={props.value}
            onChange={(e: SelectChangeEvent<string>) => handleChange(e.target.value)}
          >
            {props.list.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
    );
}