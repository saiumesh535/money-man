import { TextField } from '@mui/material';

interface Props {
    label: String;
    handler: (target: any, formElement: string| undefined) => void;
    formElement?: string;
}

function TextComponent( props: Props ): JSX.Element {
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
