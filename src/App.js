import Button from "@mui/material/Button";

import { Typography } from "@mui/material";
import Group from "./components/Group";
import CreateGroupModal from "./components/CreateGroupModal";
import CreateSectionModal from "./components/CreateSectionModal";

import "./App.css";
import CreateFieldModal from "./components/CreateFieldModal";
import { saveTemplateAsFile } from "./utils";
import { useAppContext } from "./context/AppProvider";

function App() {
  const {
    groups,
    setGroups,
    addGroup,
    addSection,
    addField,
    isGroupModalOpen,
    openGroupModal,
    closeGroupModal,
    isSectionModalOpen,
    closeSectionModal,
    isFieldModalOpen,
    closeFieldModal,
    isEditMode,
    setIsEditMode,
    updateGroup,
    currentGroupIndex,
    currentSectionIndex,
    updateSection,
  } = useAppContext();

  const handleImportConfigFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const parsed = JSON.parse(data);
        setGroups(parsed);
      };
      reader.readAsText(file);
    }
  };

  const handleClickDownload = () => {
    saveTemplateAsFile("theme.json", groups);
  };

  const initialValues = {
    groupName: groups[currentGroupIndex].title,
    section: {
      sectionTitle:
        groups[currentGroupIndex].sections[currentSectionIndex].title,
      sectionDescription:
        groups[currentGroupIndex].sections[currentSectionIndex].description,
    },
  };

  return (
    <div className="main">
      <div className="d-flex-c-s" style={{ marginBottom: 20 }}>
        <Typography variant="h2" fontFamily="serif">
          Theme Builder
        </Typography>
        <div>
          <Button variant="outlined" sx={{ mr: 2 }} component="label">
            Import config file
            <input
              hidden
              accept="application/json"
              type="file"
              onChange={handleImportConfigFile}
            />
          </Button>
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
        <Group data={data} key={index} index={index} />
      ))}

      <CreateGroupModal
        open={isGroupModalOpen}
        handleClose={() => {
          setIsEditMode(!isEditMode);
          closeGroupModal();
        }}
        onAddSubmit={addGroup}
        onEditSubmit={updateGroup}
        isEditMode={isEditMode}
        currentGroupIndex={currentGroupIndex}
        values={initialValues}
      />
      <CreateSectionModal
        open={isSectionModalOpen}
        handleClose={closeSectionModal}
        onAddSubmit={addSection}
        onEditSubmit={updateSection}
        currentSectionIndex={currentSectionIndex}
        values={initialValues.section}
        isEditMode={isEditMode}
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
