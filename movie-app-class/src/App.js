import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Navigation></Navigation>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
