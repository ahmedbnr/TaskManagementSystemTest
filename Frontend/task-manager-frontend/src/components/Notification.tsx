import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

//Notification props
interface NotificationProps {
  message: string;
  severity: 'error' | 'warning' | 'info' | 'success';
  open: boolean;
  onClose: () => void;
}

// Notification Component
const Notification: React.FC<NotificationProps> = ({ message, severity, open, onClose }) => (
  <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
      {message}
    </Alert>
  </Snackbar>
);

export default Notification;