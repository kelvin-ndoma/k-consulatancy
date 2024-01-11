
import Header from "./components/Header"
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./components/Home";
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

function App() {


  return (
    <>
      <Router>
          <Header className="w-full min-h-screen bg-gray-950 "/>
          <Home/>
          <Services/>
          <Portfolio/>
          <Contact/>
      </Router>

    </>
  )
}

export default App
