import { Snackbar } from '@mui/material';
import { useStore, ZustandState } from '../../data/store';
import './SnackBarComponent.scss';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { forwardRef } from 'react';

export interface SnackbarProps {
    open: boolean;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
}

export const initialSnackbarState: SnackbarProps = {
    open: false,
    message: '',
    type: 'success',
} 

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function SnackBarComponent(): JSX.Element {

    const snackBarState: SnackbarProps = useStore((state: ZustandState) => state.snackbarState);
    const setSnackBarState = useStore((state: ZustandState) => state.setSnackbarState);
    return (
        <Snackbar className='alert' onClose={() => setSnackBarState({open: false})} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} open={snackBarState.open}>
            <Alert className='alert' severity={snackBarState.type} sx={{ width: '100%', height: '40px' }}>
                {snackBarState.message}
            </Alert>
        </Snackbar>
    );
}

export default SnackBarComponent;