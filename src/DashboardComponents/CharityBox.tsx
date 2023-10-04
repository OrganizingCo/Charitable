import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';


//router.delete(':id', )

const CharityBox = ({page, charity}) => {
  const handleDelete = async () => {
    
    try {
      await fetch('/api/charity/${charity_id}', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
    },
    );
  } catch (err) {
    console.log('Error deleting charity: ', err)
  }
}


  return (
    <div id="charityBox">
      <h1>{charity.campaign_name}</h1>
      <a href={charity.campaign_url}>Link to charity</a>
      <p>{charity.campaign_description}</p>
      {page==='dashboard' && <IconButton onClick={(e) => {
        console.log('e target', e);
        handleDelete(e.target.value)
       }} > 
        <DeleteIcon />
      </IconButton>}
    </div>
  )
}

export default CharityBox;