import { useState } from 'react';

import Button from '@mui/material/Button';

import { Typography } from '@mui/material';
import Group from './components/Group';
import CreateGroupModal from './components/CreateGroupModal';
import CreateSectionModal from './components/CreateSectionModal';
import useModal from './hooks/useModal';

import { DUMMY_GROUPS_DATA } from './constants';
import './App.css';

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

  return (
    <div className="main">
      <div className="d-flex-c-s" style={{ marginBottom: 20 }}>
        <Typography variant="h4">Theme Builder</Typography>
        <Button variant="contained" onClick={openGroupModal}>
          Add Group
        </Button>
      </div>
      {groups.map((data, index) => (
        <Group
          data={data}
          key={index}
          onAddSectionClick={() => {
            setCurrentGroupIndex(index);
            openSectionModal();
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
    </div>
  );
}

export default App;
