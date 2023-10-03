
const BioBox = ({userData}) => {

  const cause = () => {
    
  }

  return (
      <div id="biobox">

        <h1>{userData.username}</h1>
        <p>Bio: {userData.bio} </p>
        <p>Causes: Hold My Poodle</p>
      </div>
    )
  }
  
  export default BioBox;