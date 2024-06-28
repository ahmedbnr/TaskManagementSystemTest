import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

// Confirmation Dialog props
interface ConfirmationDialogProps {
  open: boolean;
  onClose: (confirm: boolean) => void;
  title: string;
  message: string;
}

// Confirmation Dialog Component
const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ open, onClose, title, message }) => (
  <Dialog
    open={open}
    onClose={() => onClose(false)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {message}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => onClose(false)} color="primary">
        Cancel
      </Button>
      <Button onClick={() => onClose(true)} color="primary" autoFocus>
        Confirm
      </Button>
    </DialogActions>
  </Dialog>
);

export default ConfirmationDialog;