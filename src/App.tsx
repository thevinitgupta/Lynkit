import "./App.css";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";


function App() {
  return (
    <div className={`h-screen w-screen`}>
      <Navbar/>
      {/* <img id='background-image' alt="background gradient"/> */}
      <Routes>
      <Route path="/" element={<Landing />}/>
        
      <Route path="/auth" element={<Auth />} />
      <Route path="/profile" element={<Profile/> } />
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
