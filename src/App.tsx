import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar/Navbar";

function App() {
 
  return (
    <>
       <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        {/* <Route path="/Card" element={<Card />} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
