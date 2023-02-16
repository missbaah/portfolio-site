import { Route, Routes } from "react-router-dom";
import { Home, Projects, Writing } from "./Pages";
import { Navbar, Footer } from "./components";
import { About } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/writing" element={<Writing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
