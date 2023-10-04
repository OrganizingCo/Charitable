import NavBar from "./NavBar";
import BioBox from "./BioBox";
import CharityBoard from "./CharityBoard";
import { useState, useEffect } from 'react';

const DashBoard = ({page, setPage}) => {
  setPage('dashboard');



  return (
    <div id="dashboard">
      <div id="navbar"> 
        <NavBar data-testid="navbar" />
      </div>
      <div id="content">
        <BioBox/>
        <CharityBoard page={page}/>
        <div id='right'></div>
      </div>
    </div>

  )
}

export default DashBoard;