import { Paper, Typography, Button } from '@mui/material';
import React from 'react';

const Group = ({ data: { name, sections = [] }, onAddSectionClick }) => {
  return (
    <Paper className="p24" sx={{ mb: 2 }}>
      <div className="d-flex-c-s">
        <Typography variant="h5">{name}</Typography>
        <Button variant="contained" onClick={onAddSectionClick}>
          Add Section
        </Button>
      </div>
      <div>
        {sections.map((section) => (
          <div>{section.title}</div>
        ))}
      </div>
    </Paper>
  );
};

export default Group;
