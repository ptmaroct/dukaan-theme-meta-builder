import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { noop } from '../utils';

const Section = ({
  title = '',
  description = '',
  activationSupported = false,
  fields = [],
  onAddFieldClick = noop,
}) => {
  return (
    <Box sx={{ mb: 2 }}>
      <div className="d-flex-c-s">
        <div>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="caption">{description}</Typography>
        </div>
        <Button variant="outlined" onClick={onAddFieldClick}>
          Add Field
        </Button>
      </div>
    </Box>
  );
};

export default Section;
