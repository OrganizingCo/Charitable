import NavBar from "./NavBar";
import BioBox from "./BioBox";
import CharityBoard from "./CharityBoard";
import { useState, useEffect } from 'react';

const DashBoard = () => {
  const [userData, setUserData] = useState();
  // make request to get user info - including bio and causes
  const fetchUser = async () => {
    try {
      const response = await fetch('/api/charity/user');
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
    <div id="dashboard">
      <div id="navbar"> 
        <NavBar data-testid="navbar" />
      </div>
      <div id="content">
        <BioBox userData={userData}/>
        <CharityBoard userData={userData}/>
        <div id='right'></div>
      </div>
    </div>

  )
}

export default DashBoard;