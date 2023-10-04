import CharityBox from "./CharityBox"
import { Button, Box, TextField, Modal } from '@mui/material';
import { useState, useEffect } from 'react';

const CharityBoard = ({ page }) => {
  const [charities, setCharities] = useState([]);
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string | undefined>();
  const [type, setType] = useState<string | undefined>();
  const [url, setUrl] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const [refresh, setRefresh] = useState(false); 
  // recieves userData from props
  
  const fetchCharities = async () => {
    try {
      const response = await fetch('/api/charity/');
      const data = await response.json();
      setCharities(data) 
    } catch (err) {
      console.log('Error fetching charities: ', err)
    }
  }

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
          campaign_description: description,
          campaign_type: type,
        })},
      );
      console.log('post request done');
      fetchCharities();
      handleClose();
      console.log('Response: ', response);
    } catch (err) {
      console.log('Error creating charity: ', err)
    }
  }

  useEffect(() => {
    fetchCharities();
  }, [refresh]) 

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 

  return (
  <div id="create">
    <div>
          <Button variant="contained" color="success" onClick={() => handleOpen()}>Create New Campaign</Button>
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
                  <TextField type="text" label="Campaign Name" onChange={(e) => setName(e.target.value)}></TextField>
                  <TextField type="text" label="Type" onChange={(e) => setType(e.target.value)}></TextField>
                </div>
                <TextField type="text" label="URL To Charity" onChange={(e) => setUrl(e.target.value)}></TextField>
                <TextField type="text" label="Description" onChange={(e) => setDescription(e.target.value)}></TextField>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <Button onClick={() => handleSubmit()}>Create</Button>
                </div>
              </Box>
            </Modal> 
      </div>
      <div id="charityboard">
      {charities.map((charity) => (
        <CharityBox  page={page} charity={charity} refresh={refresh} setRefresh={setRefresh}/>
      ))}
    </div>
    </div>
  )
}

export default CharityBoard;