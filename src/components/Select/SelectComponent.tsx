import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface Props {
    list: any[];
    label: string;
    handleChange: (value: string) => void;
}

export function SelectComponent(props: Props) {

    function handleChange(e: any){
      props.handleChange(e);
    }
    return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={props.label}
            onChange={(e) => handleChange(e.target.value)}
          >
            {props.list.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
    );
}