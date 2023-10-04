import { AppBar, Toolbar, Button, Box, TextField, Modal } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:4000/logout', {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        const path: string = '/';
        navigate(path);
      } else {
        console.error('Error deleting session');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };



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
              <div id='buttons'>
                <Link to="/share">Share</Link>
                <Link to="/" onClick={() => handleLogout()} >Sign Out</Link>
              </div>
          </div>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar;