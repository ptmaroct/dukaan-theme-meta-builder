import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Switch,
} from '@mui/material';
import Button from '@mui/material/Button';

const CreateSectionModal = ({ open, handleClose, onSubmit }) => {
  const [sectionTitle, setSectionTitle] = useState('');
  const [sectionDescription, setSectionDescription] = useState('');
  const [activationSupported, setActivationSupported] = useState(false);

  const resetFormData = () => {
    setSectionTitle('');
    setSectionDescription('');
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Create Section</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Section Title"
          type="text"
          value={sectionTitle}
          onChange={(e) => setSectionTitle(e.target.value)}
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          label="Section Description"
          type="text"
          value={sectionDescription}
          onChange={(e) => setSectionDescription(e.target.value)}
          fullWidth
          variant="standard"
        />

        <div className="d-flex-c-s">
          <Typography variant="subtitle1">Supports Activation</Typography>
          <Switch
            checked={activationSupported}
            onChange={(e) => setActivationSupported(e.target.checked)}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleClose();
            resetFormData();
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            onSubmit({
              title: sectionTitle,
              description: sectionDescription,
              activationSupported,
            });
            resetFormData();
          }}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateSectionModal;
