import { Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignIn = () => {
  const [username, setUsername] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>('');
  const navigate = useNavigate();

  
  const handleLogin = async () => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        })},
      );
      navigate("/dashboard");
      // <Navigate to="/dashboard"></Navigate>
    } catch (err) {
      console.log('Error logging in: ', err)
    }


  }

  return (
      <div id="form">
          <div id='textfield'>
            <h2 style={{textAlign: 'center'}}>LOGIN</h2>
            <TextField label="Username" variant='filled' sx={{pt: 0, mt: 0}} onChange={(e) => setUsername(e.target.value)}></TextField>
            <TextField type="password" variant='filled' label="Password" onChange={(e) => setPassword(e.target.value)}></TextField>
          </div>
          <Button variant='contained' onClick={() => handleLogin()}>Login</Button>
          <span style={{textAlign: 'center'}}>Need an account?&nbsp;<Link to="/signup">Sign Up</Link></span>
      </div>
  )
}

export default SignIn;