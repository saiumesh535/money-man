import { TextField } from '@mui/material';
import React from 'react';

interface Props {
    label: String;
    handler: (target: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, formElement: string | undefined) => void;
    formElement?: string;
}

function TextComponent(props: Props): JSX.Element {
    return (
        <TextField
            fullWidth id="outlined-basic"
            label
            onChange={(e) => props.handler(e, props.formElement)}
            variant="outlined"
            value />
    );
}

export default TextComponent;
