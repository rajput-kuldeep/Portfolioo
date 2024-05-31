import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage/HomePage";

function App() {
 
  return (
    <>
       <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/Card" element={<Card />} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
