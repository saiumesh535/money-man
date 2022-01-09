import { Button } from '@mui/material';
import './ButtonComponent.scss';

interface Props {
    label: string,
    disabled?: boolean,
    handler: () => void;
}

function ButtonComponent(props: Props): JSX.Element {
    return (
        <div className="button-container">
            <Button
                disabled={props.disabled || false}
                className="button-small"
                variant="contained"
                onClick={props.handler}
            >{props.label}</Button>
        </div>
    );
}

export default ButtonComponent;
