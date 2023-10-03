import CharityBox from "./CharityBox";

const TypeBox = ({number}) => {
  // we need to get all of the associated charities for that type

  // and render a charity box for each


  return (
    <div id="typeBox">
      <h1>This is Type</h1>
      {number.map(() => {
        return <CharityBox />
      })}
    </div>
  )
}

export default TypeBox;