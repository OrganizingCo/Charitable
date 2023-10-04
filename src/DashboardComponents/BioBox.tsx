import { useState, useEffect } from 'react';


const BioBox = () => {
  const [userData, setUserData] = useState('');
  
  const fetchUser = async () => {
    try {
      const response = await fetch('/api/auth/user');
      const data = await response.json();
      setUserData(data)
    } catch (err) {
      console.log('Error fetching user: ', err)
    }
  }

  // will fetch data on initial render
  useEffect(() => {
    fetchUser();
  }, [])

  return (
      <div id="biobox">
        <h1>{userData.username}</h1>
        <p>{userData.bio}</p>
      </div>
    )
  }
  
  export default BioBox;