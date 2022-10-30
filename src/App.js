import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/chat" element={<Chat></Chat>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
