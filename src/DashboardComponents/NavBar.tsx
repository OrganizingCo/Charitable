import { AppBar, Toolbar, Button, Box, TextField, Modal } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';


const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <AppBar
        position="absolute"
        elevation={2}
        sx={{
          top: 0,
        }}
      >
        <Toolbar>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', gap: '2em', alignItems: 'center'}}>
              <div>Charitable</div>
            </div>
            <Button variant="contained" color="success" sx={{position: 'absolute', left: '45%'}} onClick={() => handleOpen()}>Create New Campaign</Button>
            <Modal
              open={open}
              onClose={handleClose}
            >
              <Box sx={{
                  p: 3,
                  height: '50%',
                  width: '50%',
                  border: '1px solid black',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  alignItems: 'justify',
                  justifyContent: 'flex-start',
                  flexDirection: 'column',
                  bgcolor: 'white',
                  boxShadow: 24,
                  borderRadius: 4,
                  textAlign: 'left',
                  outline: 'none',
              }}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <TextField label="Campaign Name"></TextField>
                  <TextField label="Type"></TextField>
                </div>
                <TextField label="URL To Charity"></TextField>
                <TextField label="Description"></TextField>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <TextField label="Donation Goal"></TextField>
                  <Button>Create</Button>
                </div>
              </Box>
            </Modal>
            <div id='buttons'>
              <RouterLink to="/share">Share</RouterLink>
              <RouterLink to="/login">Sign Out</RouterLink>
            </div>
          </div>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar;