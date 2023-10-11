import HeroSection from "./components/HeroSection";
import Home from "./components/About";
import Welcome from "./components/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/registeration/SignUp";
import SignIn from "./components/registeration/SignIn";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/Home" element={<HeroSection />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
