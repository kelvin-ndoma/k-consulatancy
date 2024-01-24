import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Footer from './components/Footer'; // Import the Footer component

function App() {
  return (
    <Router>
      <Header className="w-full min-h-screen bg-gray-950" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/work" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* Include the Footer component here */}
    </Router>
  );
}

export default App;
