import { Paper, Typography, Button, Box } from '@mui/material';
import React from 'react';
import { noop } from '../utils';
import Section from './Section';

const Group = ({
  data: { title, sections = [] },
  onAddSectionClick = noop,
  onAddFieldClick = noop,
  setCurrentSectionIndex = noop,
}) => {
  return (
    <Paper className="p24" sx={{ mb: 2 }}>
      <div className="d-flex-c-s">
        <Typography variant="h4">{title}</Typography>
        <Button variant="contained" onClick={onAddSectionClick}>
          Add Section
        </Button>
      </div>
      <Box sx={{ mt: 2 }}>
        {sections.map((item, index) => (
          <Section
            {...item}
            key={index}
            index={index}
            onAddFieldClick={onAddFieldClick}
            setCurrentSectionIndex={setCurrentSectionIndex}
          />
        ))}
      </Box>
    </Paper>
  );
};

export default Group;