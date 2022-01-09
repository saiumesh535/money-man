import { Button } from '@mui/material';
import './ButtonComponent.scss';

interface Props {
    label: string,
    handler: () => void;
}

function ButtonComponent(props : Props) : JSX.Element {
    return(
        <div className="button-container">
            <Button className="button-small" onClick={props.handler} variant="contained">{props.label}</Button>
        </div>
    );
}

export default ButtonComponent;
