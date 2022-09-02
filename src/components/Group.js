import { Paper, Typography, Button, Box } from '@mui/material';
import React from 'react';
import { useAppContext } from '../context/AppProvider';
import Section from './Section';

const Group = ({ data: { title, sections = [] }, index }) => {
  const { setCurrentGroupIndex, openConfirmModal, openSectionModal } =
    useAppContext();

  const onAddSectionClick = () => {
    setCurrentGroupIndex(index);
    openSectionModal();
  };

  return (
    <Paper className="p24" sx={{ mb: 2 }}>
      <div className="d-flex-c-s">
        <Typography variant="h4">{title}</Typography>
        <div>
          <Button
            variant="outlined"
            color="error"
            sx={{ mr: 2 }}
            onClick={openConfirmModal}
          >
            Delete Group
          </Button>
          <Button variant="contained" onClick={onAddSectionClick}>
            Add Section
          </Button>
        </div>
      </div>
      <Box sx={{ mt: 2 }}>
        {sections.map((item, index) => (
          <Section data={item} key={index} index={index} />
        ))}
      </Box>
    </Paper>
  );
};

export default Group;
