import {  Route, Routes } from 'react-router-dom'

import {Home, Projects, Writing} from "./Pages"


import './App.css'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div className="App">
    <Navbar/>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/writing" element={<Writing/>}/>
     </Routes>
    </div>
  )
}

export default App
