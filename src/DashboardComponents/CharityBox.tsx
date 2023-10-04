import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';


//router.delete(':id', )

const CharityBox = ({page}) => {
  
  const handleDelete = async (e) => {
    // const id = e.target.**.id;

    try {
    const response = await fetch('/api/charity/${id}', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
    },
    );
    console.log('delete request done');
    console.log('Response: ', response);
  } catch (err) {
    console.log('Error deleting charity: ', err)
  }
}


  return (
    <div id="charityBox">
      <h1>This is CharityBox</h1>
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