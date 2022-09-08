import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { useAppContext } from "../context/AppProvider";
import useModal from "../hooks/useModal";
import ConfirmDialog from "./ConfirmDialog";

const Section = ({ data, index, groupIndex }) => {
  const {
    title = "",
    description = "",
    activationSupported = false,
    fields = [],
  } = data;
  const {
    setCurrentSectionIndex,
    openFieldModal,
    updateSection,
    deleteSection,
    setIsEditMode,
    openSectionModal,
  } = useAppContext();

  const {
    isOpen: isConfirmModalOpen,
    closeModal: closeConfirmModal,
    openModal: openConfirmModal,
  } = useModal();

  const onDeleteSectionClick = () => {
    deleteSection(groupIndex, index);
    closeConfirmModal();
  };

  const onAddFieldClick = () => {
    setCurrentSectionIndex(index);
    openFieldModal();
  };

  return (
    <Box
      sx={{ mb: 2 }}
      style={{ border: "solid 1px #ccc", padding: 8, borderRadius: 2 }}
    >
      <div className="d-flex-c-s">
        <div>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6">{title}</Typography>
            <div>
              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  setCurrentSectionIndex(index);
                  setIsEditMode(true);
                  openSectionModal();
                }}
              >
                Edit
              </Button>
            </div>
          </Stack>
          <Typography variant="caption">{description}</Typography>
        </div>
        <div>
          <Button
            variant="outlined"
            color="error"
            sx={{ mr: 2 }}
            onClick={openConfirmModal}
          >
            Delete Section
          </Button>
          <Button variant="outlined" onClick={onAddFieldClick}>
            Add Field
          </Button>
        </div>
      </div>
      <Divider sx={{ mb: 2, mt: 2 }} />
      {fields.map((field, index) => (
        <Typography key={index}>{field.label}</Typography>
      ))}
      {fields.length === 0 && <Typography color="silver">No Fields</Typography>}

      <ConfirmDialog
        open={isConfirmModalOpen}
        handleClose={closeConfirmModal}
        handleSubmit={onDeleteSectionClick}
      />
    </Box>
  );
};

export default Section;
