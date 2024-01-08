
import Header from "./components/Header"
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./components/Home";

function App() {


  return (
    <>
      <Router>
          <Header className="w-full min-h-screen bg-gray-950 "/>
          <Home/>
      </Router>

    </>
  )
}

export default App
