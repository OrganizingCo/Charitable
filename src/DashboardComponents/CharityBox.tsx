import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';



const CharityBox = ({ page, charity, refresh, setRefresh }) => {

  const handleDelete = async (id) => {
    try {
      await fetch('/api/charity/delete', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id
        })
      },
      );
      if (refresh === false) {
        setRefresh(true)
      } else {
        setRefresh(false)
      }
    } catch (err) {
      console.log('Error deleting charity: ', err)
    }
  }


  return (
    <div id="charityBox">
      <h1>{charity.campaign_name}</h1>
      <a href={charity.campaign_url}>Link to charity</a>
      <p>{charity.campaign_description}</p>
      {page === 'dashboard' && <IconButton
        onClick={() => {
          handleDelete(charity.campaign_id)
        }} >
        <DeleteIcon />
      </IconButton>}
    </div>
  )
}

export default CharityBox;