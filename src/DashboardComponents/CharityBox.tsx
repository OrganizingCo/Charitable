import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';



const CharityBox = ({ page, charity, fetch }) => {

  // const reFetch = async () => {
  //   try {
  //     const response = await fetch('/api/charity/');
  //     const data = await response.json();
  //   } catch (err) {
  //     console.log('Error fetching charities: ', err)
  //   }
  // }

  const handleDelete = async (id) => {
    console.log('deleting', id)
    try {
      console.log('ID', id);
      const response = await fetch ('/api/charity/delete',{
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id : id
        })
      })
      console.log('response: ', response)
      // fetch(); 
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