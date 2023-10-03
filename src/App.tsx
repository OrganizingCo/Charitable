import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./DashboardComponents/DashBoard";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}></Route>
          {/* <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/share" element={<SharePage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
