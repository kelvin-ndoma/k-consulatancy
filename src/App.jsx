// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Digital from './components/Digital';
import  Software  from './components/Software';

function App() {
  return (
    <>
      <Router>
        <Header className="w-full min-h-screen bg-gray-950" />
        <Home />
        <Portfolio />
        <Services />
        <Contact />
        <Routes>
        < Home />
          <Route path="digital" element={<Digital />} />
          <Route path="software" element={<Software />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
