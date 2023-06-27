import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Meals from "./components/Meals";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Meals />} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </Router>
  )
}

export default App
