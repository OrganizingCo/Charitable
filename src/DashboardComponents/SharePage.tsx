import BioBox from "./BioBox";
import CharityBoard from "./CharityBoard";
import { useState, useEffect } from 'react';


const SharePage = ({page, setPage}) => {
  const [userData, setUserData] = useState();
  setPage('sharepage')
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

  useEffect(() => {
    fetchUser();
  }, [])


  return (
    //leaving it as dashboard to keep the consistent styling
    <div id="dashboard">
    <div id="content">
        <BioBox userData={userData}/>
        <CharityBoard userData={userData} page={page}/>
        <div id='right'></div>
      </div>
    </div>
  )
}

export default SharePage;