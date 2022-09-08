import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import {
  DialogContentText,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Button from "@mui/material/Button";

const CreateGroupModal = ({
  open,
  handleClose,
  onAddSubmit,
  onEditSubmit,
  isEditMode = false,
  currentGroupIndex,
  values = { groupName: "" },
}) => {
  const [groupName, setGroupName] = useState(values.groupName);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>{isEditMode ? "Edit " : "Create "}Group</DialogTitle>
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
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            isEditMode
              ? onEditSubmit(currentGroupIndex, { title: groupName })
              : onAddSubmit({ title: groupName });
            setGroupName("");
            handleClose();
          }}
        >
          {isEditMode ? "Update" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateGroupModal;
