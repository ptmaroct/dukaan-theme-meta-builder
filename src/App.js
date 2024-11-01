import Button from '@mui/material/Button';

import { Card, Stack, Typography } from '@mui/material';
import Group from './components/Group';
import CreateGroupModal from './components/CreateGroupModal';
import CreateSectionModal from './components/CreateSectionModal';

import './App.css';
import CreateFieldModal from './components/CreateFieldModal';
import { saveTemplateAsFile } from './utils';
import { useAppContext } from './context/AppProvider';

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
    const themefile = { customConfig: true, config: groups };
    saveTemplateAsFile('theme.json', themefile);
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

      <Stack direction="row" gap={2}>
        <div style={{ flex: 2 }}>
          {groups.map((data, index) => (
            <Group data={data} key={index} index={index} />
          ))}
        </div>
        <Card
          style={{
            padding: 8,
            maxHeight: '70vh',
            overflow: 'scroll',
            flex: 1,
          }}
        >
          <pre>{JSON.stringify(groups, null, 2)}</pre>
        </Card>
      </Stack>

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
