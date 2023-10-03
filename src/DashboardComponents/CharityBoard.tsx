import TypeBox from "./TypeBox";

const CharityBoard = ({ userData }) => {
  // recieves userData from props

  // map over userData.types, creating a <TypeBox /> for each type that the user has
  // pass down name of type to be displayed
  /*
    const render = userData.types.map((type) => {
      return <TypeBox type={type}/>
    })
  */
  return (
    <div id="charityboard"> 
      <TypeBox number={[1,2,3]}/>
      <TypeBox number={[1]}/>
    </div>
  )
}

export default CharityBoard;