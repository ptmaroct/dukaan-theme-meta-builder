import { useState } from 'react';

import Button from '@mui/material/Button';

import { Typography } from '@mui/material';
import Group from './components/Group';
import CreateGroupModal from './components/CreateGroupModal';
import CreateSectionModal from './components/CreateSectionModal';
import useModal from './hooks/useModal';

import { DUMMY_GROUPS_DATA } from './constants';
import './App.css';
import CreateFieldModal from './components/CreateFieldModal';
import { saveTemplateAsFile } from './utils';

function App() {
  const [groups, setGroups] = useState(DUMMY_GROUPS_DATA);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  const {
    isOpen: isGroupModalOpen,
    closeModal: closeGroupModal,
    openModal: openGroupModal,
  } = useModal();

  const {
    isOpen: isSectionModalOpen,
    closeModal: closeSectionModal,
    openModal: openSectionModal,
  } = useModal();

  const {
    isOpen: isFieldModalOpen,
    closeModal: closeFieldModal,
    openModal: openFieldModal,
  } = useModal();

  const addGroup = (data) => {
    setGroups((prevState) => [...prevState, { ...data }]);
    closeGroupModal();
  };

  const addSection = (sectionData) => {
    let updatedGroup = groups[currentGroupIndex];
    updatedGroup = {
      ...updatedGroup,
      sections: [...(updatedGroup?.sections ?? []), { ...sectionData }],
    };
    const newGroups = [...groups];
    newGroups[currentGroupIndex] = updatedGroup;
    setGroups(newGroups);
    closeSectionModal();
  };

  const addField = (fieldData) => {};

  const handleClickDownload = () => {
    saveTemplateAsFile('theme.json', groups);
  };

  return (
    <div className="main">
      <div className="d-flex-c-s" style={{ marginBottom: 20 }}>
        <Typography variant="h2" fontFamily="serif">Theme Builder</Typography>
        <div>
          <Button
            variant="outlined"
            onClick={handleClickDownload}
            sx={{ mr: 2 }}
          >
            Download config file
          </Button>
          <Button variant="contained" onClick={openGroupModal}>
            Add Group
          </Button>
        </div>
      </div>
      {groups.map((data, index) => (
        <Group
          data={data}
          key={index}
          onAddSectionClick={() => {
            setCurrentGroupIndex(index);
            openSectionModal();
          }}
          onAddFieldClick={() => {
            openFieldModal();
          }}
        />
      ))}

      <CreateGroupModal
        open={isGroupModalOpen}
        handleClose={closeGroupModal}
        onSubmit={addGroup}
      />
      <CreateSectionModal
        open={isSectionModalOpen}
        handleClose={closeSectionModal}
        onSubmit={addSection}
      />
      <CreateFieldModal
        open={isFieldModalOpen}
        handleClose={closeFieldModal}
        onSubmit={addField}
      />
    </div>
  );
}

export default App;
