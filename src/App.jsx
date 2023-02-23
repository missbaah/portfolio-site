import { Route, Routes } from "react-router-dom";
import { Home, Projects, SingleProject } from "./Pages";
import { Navbar, Footer, Writing } from "./components";
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
        <Route path="/projects/:name" element={<SingleProject />} />
        <Route path="/writing" element={<Writing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
