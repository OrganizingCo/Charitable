import NavBar from "./NavBar";
import BioBox from "./BioBox";
import CharityBoard from "./CharityBoard";

const DashBoard = () => {
  
  return (
    <div>
      <h1>This is Dashboard</h1>
      <NavBar data-testid='navbar' />
      <BioBox data-testid='biobox'/>
      <CharityBoard data-testid='charityboard'/>
    </div>

  )
}

export default DashBoard;