import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Error from "./components/Error"
import Home from "./pages/Home"
import Survey from "./pages/Survey"
import Results from "./pages/Results"
import Freelance from "./pages/Freelance"

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="/results" element={<Results />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="*" element={<Error />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
