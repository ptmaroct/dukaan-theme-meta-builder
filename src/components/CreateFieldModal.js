import React, { useState, useEffect } from 'react';

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
  TextField,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button';
import { FIELD_TYPES, FIELD_TYPES_DATA } from '../constants';

const CreateFieldModal = ({ open, handleClose, onSubmit }) => {
  const [type, setType] = useState(FIELD_TYPES.TEXT);
  const [label, setLabel] = useState('');
  const [properties, setProperties] = useState([]);
  const [metaProperties, setMetaProperties] = useState([]);

  const resetFormData = () => {};

  const renderProperties = (data) => {
    return data.map((property) => {
      if (property.type === 'text') {
        return (
          <TextField
            key={property.key}
            margin="dense"
            label={property.label}
            type="text"
            fullWidth
            variant="outlined"
            sx={{ mb: 1 }}
          />
        );
      }
      if (property.type === 'number') {
        return (
          <TextField
            key={property.key}
            margin="dense"
            label={property.label}
            type="number"
            fullWidth
            variant="outlined"
            sx={{ mb: 1 }}
          />
        );
      }
    });
  };

  useEffect(() => {
    setProperties(FIELD_TYPES_DATA[type].properties);
    setMetaProperties(FIELD_TYPES_DATA[type].metaProperties);
  }, [type]);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Create Field</DialogTitle>
      <DialogContent>
        <FormControl>
          <FormLabel id="field-type">Select field type</FormLabel>
          <RadioGroup
            row
            name="row-radio-buttons-group"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {Object.entries(FIELD_TYPES_DATA).map(([key, value]) => (
              <FormControlLabel
                value={key}
                control={<Radio />}
                label={value.label}
                key={key}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <TextField
          autoFocus
          margin="dense"
          label="Field Label"
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Typography color="black">Field Properties</Typography>
        {renderProperties(properties)}

        {metaProperties.length > 0 && (
          <Typography color="black">Meta Properties</Typography>
        )}
        {renderProperties(metaProperties)}
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
              // title: sectionTitle,
              // description: sectionDescription,
              // activationSupported,
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
