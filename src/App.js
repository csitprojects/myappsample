import ImageGrid from "./Components/ImageGrid";
import NavBar from "./Components/NavBar";
import {BrowserRouter , Routes, Route } from "react-router-dom";
import Login from "./Components/Forms/Login";
import Register from "./Components/Forms/Register";
import DynForm from "./Components/Forms/DynForm";
import Forgot from "./Components/Forms/Forgot";
import Address from "./Components/Forms/Address";
import Landing from "./Components/Landing";
import "animate.css";
function App() {
  return ( <div>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route path="/photos" element={<ImageGrid />}/>
        <Route path="form" element={<DynForm/>}>
                 <Route path="login" element={<Login/>} />
                 <Route path="register" element={<Register/>} />
                 <Route path="forgot" element={<Forgot/>} />
                 <Route path="address" element={<Address/>} />
        </Route>
      </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
