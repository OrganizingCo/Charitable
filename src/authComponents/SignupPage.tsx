import { Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const SignUp = () => {

  const [username, setUsername] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>('');
  const [bio, setBio] = useState<string | undefined>('');
  
  const navigate = useNavigate(); 

  const handleSignup = async() =>{

    const newUser = {
      username: username,
      password: password,
      bio: bio
    }

    try {
      await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      navigate("/dashboard");
    } catch (err){
      console.log ('Error Signing up: ', err)
    }
  }

  return (
      <div id="form">
          <div id='textfield'>
            <h2 style={{textAlign: 'center'}}>SIGNUP</h2>
          <TextField label="Username" variant='filled' sx={{pt: 0, mt: 0}} onChange={(e) => setUsername(e.target.value)}></TextField>
          <TextField type="password" variant='filled' label="Password" onChange={(e) => setPassword(e.target.value)}></TextField>
          <TextField label="Bio" variant='filled' multiline={true}
      rows={4} onChange={(e) => setBio(e.target.value)}></TextField>
          </div>
          <Button variant='contained' onClick={() => handleSignup()}>Sign Up</Button>
          <span style={{textAlign: 'center'}}>Already have an account?&nbsp;<Link to="/signin">Sign in</Link></span>
      </div>
  )
}

export default SignUp;