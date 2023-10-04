import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./DashboardComponents/DashBoard";
import SignIn from "./authComponents/SigninPage";
import SignUp from "./authComponents/SignupPage";
import SharePage from "./DashboardComponents/SharePage";
import { useState } from 'react';


  
const App = () =>  {
  const [page, setPage] = useState<string | undefined>()

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard page={page} setPage={setPage}/>}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/share" element={<SharePage page={page} setPage={setPage}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
