import CharityBox from "./CharityBox";

const TypeBox = ({number, page}) => {
  // we need to get all of the associated charities for the users

  

  // and render a type box for each
  

  return (
    <div id="typeBox">
      <h1>This is Type</h1>
      {number.map(() => {
        return <CharityBox page={page}/>
      })}
    </div>
  )
}

export default TypeBox;