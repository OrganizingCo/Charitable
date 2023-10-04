import TypeBox from "./TypeBox";
import { useState, useEffect } from 'react';

const CharityBoard = ({ userData, page }) => {
  const [charities, setCharities] = useState();
  // recieves userData from props
  
  const fetchCharities = async () => {
    try {
      const response = await fetch('/api/charity/');
      const data = await response.json();
      setCharities(data)
    } catch (err) {
      console.log('Error fetching user: ', err)
    }
  }

  useEffect(() => {
    fetchCharities();
  }, []) 

  // Fetching all charities for a user regardless of type
  // map over all of the charities, creating a <TypeBox /> for each type 
  // and pass down the type name plus ALL of the charities
  // charities = campaign_name, campaign_id, cmapign_description, date_created,

  // first filtering - filtering charities by type

  /*
    const render = userData.types.map((type) => {
      return <TypeBox type={type} page={page} charities={}/>
    })
  */

  return (
    <div id="charityboard"> 
      <TypeBox number={[1,2,3]} page={page}/>
      <TypeBox number={[1]}/>
    </div>
  )
}

export default CharityBoard;