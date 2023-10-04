import { AppBar, Toolbar, Button, Box, TextField, Modal } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
/**const [campaign, setCampaign] = useState({
    name: '',
    type: '',
    url: '',
    goal: '',
    description: ''
});
const handleChange = (key) => (e) => {
    setCampaign(prevState => ({
        ...prevState,
        [key]: e.target.value
    }));
};

// Usage
<TextField label="Campaign Name" onChange={handleChange('name')} />
*/
const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string | undefined>();
  const [type, setType] = useState<string | undefined>();
  const [url, setUrl] = useState<string | undefined>();
  const [goal, setGoal] = useState<number | undefined>();
  const [description, setDescription] = useState<string | undefined>();
                  
                   
  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/charity', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          campaign_name: name,
          campaign_url: url,
          campaign_type: type,
          campaign_goal: goal,
          campaign_description: description,
        })},
      );
      console.log('post request done');
      console.log('Response: ', response);
    } catch (err) {
      console.log('Error creating charity: ', err)
    }
  }

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
                  <TextField label="Campaign Name" onChange={(e) => setName(e.target.value)}></TextField>
                  <TextField label="Type" onChange={(e) => setType(e.target.value)}></TextField>
                </div>
                <TextField label="URL To Charity" onChange={(e) => setUrl(e.target.value)}></TextField>
                <TextField label="Description" onChange={(e) => setDescription(e.target.value)}></TextField>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <TextField label="Donation Goal" onChange={(e) => setGoal(e.target.value)}></TextField>
                  <Button onClick={() => handleSubmit()}>Create</Button>
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