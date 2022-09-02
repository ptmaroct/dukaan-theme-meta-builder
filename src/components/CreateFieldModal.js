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
import { noop } from '../utils';

const CreateFieldModal = ({ open, handleClose, onSubmit }) => {
  const [type, setType] = useState(FIELD_TYPES.TEXT);
  const [label, setLabel] = useState('');
  const [properties, setProperties] = useState([]);
  const [propertiesData, setPropertiesData] = useState({});
  const [metaProperties, setMetaProperties] = useState([]);
  const [metaPropertiesData, setMetaPropertiesData] = useState({});

  const resetFormData = () => {
    setType(FIELD_TYPES.TEXT);
    setLabel('');
    setPropertiesData({});
    setMetaPropertiesData({});
  };

  const handleChangeProperty = (key, value, type) => {
    if (type === 'properties') {
      setPropertiesData((prevData) => ({ ...prevData, [key]: value }));
    }
    if (type === 'metaProperties') {
      setMetaPropertiesData((prevData) => ({ ...prevData, [key]: value }));
    }
  };

  const handleCreateField = () => {
    const payload = {
      type,
      label,
      ...propertiesData,
      meta: { ...metaPropertiesData },
    };

    onSubmit(payload);
    handleClose();
    resetFormData();
  };

  const renderProperties = (data, changeHanlder = noop, type) => {
    return data.map((property) => {
      if (property.type === 'text') {
        return (
          <TextField
            type="text"
            margin="dense"
            fullWidth
            variant="outlined"
            key={property.key}
            label={property.label}
            sx={{ mb: 1 }}
            onChange={(e) => changeHanlder(property.key, e.target.value, type)}
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
            onChange={(e) =>
              changeHanlder(property.key, Number(e.target.value), type)
            }
          />
        );
      }
    });
  };

  useEffect(() => {
    setProperties(FIELD_TYPES_DATA[type].properties);
    setPropertiesData({});
    setMetaProperties(FIELD_TYPES_DATA[type].metaProperties);
    setMetaPropertiesData({});
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
        {properties.length > 0 && (
          <Typography color="black">Field Properties</Typography>
        )}
        {renderProperties(properties, handleChangeProperty, 'properties')}

        {metaProperties.length > 0 && (
          <Typography color="black" sx={{ mt: 2 }}>
            Meta Properties
          </Typography>
        )}
        {renderProperties(
          metaProperties,
          handleChangeProperty,
          'metaProperties'
        )}
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
        <Button onClick={handleCreateField}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateFieldModal;
