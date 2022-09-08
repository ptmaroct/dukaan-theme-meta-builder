import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Switch,
} from "@mui/material";
import Button from "@mui/material/Button";

const CreateSectionModal = ({
  open,
  handleClose,
  onEditSubmit,
  onAddSubmit,
  values = {},
  currentSectionIndex,
  isEditMode = false,
}) => {
  const [sectionTitle, setSectionTitle] = useState(values.sectionTitle);
  const [sectionDescription, setSectionDescription] = useState(
    values.sectionDescription
  );
  const [activationSupported, setActivationSupported] = useState(false);

  console.log({ sectionTitle });

  const resetFormData = () => {
    setSectionTitle("");
    setSectionDescription("");
    setActivationSupported(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>{isEditMode ? "Edit " : "Create "} Section</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Section Title"
          type="text"
          value={sectionTitle}
          onChange={(e) => setSectionTitle(e.target.value)}
          fullWidth
          variant="outlined"
        />
        <TextField
          autoFocus
          margin="dense"
          label="Section Description"
          type="text"
          value={sectionDescription}
          onChange={(e) => setSectionDescription(e.target.value)}
          fullWidth
          variant="outlined"
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
            isEditMode
              ? onEditSubmit(currentSectionIndex, {
                  title: sectionTitle,
                  description: sectionDescription,
                  activationSupported,
                })
              : onAddSubmit({
                  title: sectionTitle,
                  description: sectionDescription,
                  activationSupported,
                });
            handleClose();
            resetFormData();
          }}
        >
          {isEditMode ? "Update" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateSectionModal;
