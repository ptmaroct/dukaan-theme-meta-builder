import React, { createContext, useContext, useEffect, useState } from 'react';
import { DUMMY_GROUPS_DATA } from '../constants';
import useModal from '../hooks/useModal';

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [groups, setGroups] = useState(DUMMY_GROUPS_DATA);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

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

  const deleteGroup = (index) => {
    setGroups(groups.filter((_, i) => i !== index));
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

  const deleteSection = (groupIndex, sectionIndex) => {
    let updatedGroup = groups[groupIndex];
    updatedGroup = {
      ...updatedGroup,
      sections: [
        ...(updatedGroup?.sections ?? []).filter(
          (_, idx) => idx !== sectionIndex
        ),
      ],
    };
    const newGroups = [...groups];
    newGroups[groupIndex] = updatedGroup;
    setGroups(newGroups);
  };

  const addField = (fieldData) => {
    // we have current group index and current section index
    // to add a new field we need to copy the group and section data as per current index
    // and push the fieldData to the required section
    let currentSection =
      groups[currentGroupIndex].sections[currentSectionIndex];
    currentSection.fields = [...(currentSection?.fields ?? []), fieldData];

    let updatedSections = [...groups[currentGroupIndex].sections];
    updatedSections[currentSectionIndex] = currentSection;

    let updatedGroup = groups[currentGroupIndex];
    updatedGroup = {
      ...updatedGroup,
      sections: updatedSections,
    };
    const newGroups = [...groups];
    newGroups[currentGroupIndex] = updatedGroup;
    setGroups(newGroups);
  };

  useEffect(() => {}, []);

  const contextValue = {
    groups,
    currentGroupIndex,
    setCurrentGroupIndex,
    currentSectionIndex,
    setCurrentSectionIndex,
    addGroup,
    deleteGroup,
    addSection,
    deleteSection,
    addField,
    isGroupModalOpen,
    openGroupModal,
    closeGroupModal,
    isSectionModalOpen,
    openSectionModal,
    closeSectionModal,
    isFieldModalOpen,
    openFieldModal,
    closeFieldModal,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export default AppProvider;
