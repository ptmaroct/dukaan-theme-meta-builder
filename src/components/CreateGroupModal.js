import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

import {
  DialogContentText,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
} from '@mui/material';
import Button from '@mui/material/Button';

const CreateGroupModal = ({ open, handleClose, onSubmit }) => {
  const [groupName, setGroupName] = useState('');

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Create Group</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter group name</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Group Name"
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            onSubmit({ name: groupName });
            setGroupName('');
          }}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateGroupModal;
