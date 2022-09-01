import React, { useState } from 'react';

import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import Button from '@mui/material/Button';
import { FIELD_TYPES } from '../constants';

const CreateFieldModal = ({ open, handleClose, onSubmit }) => {
  const [type, setType] = useState();
  const [label, setLabel] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [defaultValue, setDefaultValue] = useState();

  const resetFormData = () => {};

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Create Field</DialogTitle>
      <DialogContent>
        <FormControl>
          <FormLabel id="field-type">Select field type</FormLabel>
          <RadioGroup
            row
            aria-labelledby="field-type"
            name="row-radio-buttons-group"
          >
            {FIELD_TYPES.map((field, index) => (
              <FormControlLabel
                value={field.type}
                control={<Radio />}
                label={field.label}
                key={index}
              />
            ))}
          </RadioGroup>
        </FormControl>
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

export default CreateFieldModal;
