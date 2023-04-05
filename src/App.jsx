import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/Navbar/index"
import Error from "./components/Error/index"
import Home from "./pages/Home"
import Survey from "./pages/Survey"
import Results from "./pages/Results"
import Freelance from "./pages/Freelance"
import Footer from "./components/Footer"
import ThemeProvider from "./utils/contexts"
import StyleGlobalStyle from "./utils/style/GlobalStyle"

function App() {
  return (
    <>
      <Router>
        <ThemeProvider>
          <StyleGlobalStyle />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelance" element={<Freelance />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App