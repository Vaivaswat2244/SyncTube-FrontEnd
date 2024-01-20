import "./App.css";
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import EditorProfile from "./components/EditorProfile";
import CreateAccountEditor from "./pages/createAccountEditor";
import CreateAccountYoutuber from "./pages/CreateAccountYoutuber";
import DashboardYoutuber from "./pages/DashboardYoutuber";


function App() {

  const [isLoggedIn, setIsLoggedIn] =useState(false);


  return (

 <div>
    
 <div className="w-screen min-h-screen bg-richblack-900 flex flex-col" >
  
  
  
 <Routes>
 <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />}>  </Route>
 <Route path="/signup" element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />}>  </Route>
 <Route path="/login" element={<Login  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>  </Route>
 <Route path="/createAccountEditor" element={<CreateAccountEditor  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>  </Route>
 <Route path="/createAccountYoutuber" element={<CreateAccountYoutuber  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>  </Route>
 <Route path="/dashboardYoutuber" element={<DashboardYoutuber  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>  </Route>


 <Route path="/editorprofile/:id" element={<EditorProfile />}>  </Route>

 <Route path="/dashboard" element={
    <PrivateRoute isLoggedIn={isLoggedIn} >
        <Dashboard/>
    </PrivateRoute>}>
      </Route>
  
 
 </Routes>



</div>


 </div>


  )

}

export default App;
