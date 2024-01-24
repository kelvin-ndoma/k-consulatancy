import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../assets/Logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a1828] text-[#00ced1]'>
      <Link to="/" className="flex items-center">
        <img src={Logo} alt="Logo" className="h-12 w-auto mr-2" />
        <span className="text-xl font-semibold text-[#6acfc7] tracking-[0.1rem]">Mark <br></br> Tech</span>
      </Link>
      {/* menu for larger screens */}
      <ul className='hidden md:flex lg:flex space-x-6 lg:space-x-12 gap-12'>
        <li className="hover:scale-110 duration-500 hover:bg-gray-600">
          <Link to="/">Welcome</Link>
        </li>
        <li className="hover:scale-110 duration-500 hover:bg-gray-600">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="hover:scale-110 duration-500 hover:bg-gray-600">
          <Link to="/work">Work</Link>
        </li>
        <li className="hover:scale-110 duration-500 hover:bg-gray-600">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="transition-transform transform hover:scale-110 duration-500 bg-[#ffff] hover:bg-gray-600 p-2 rounded-md">
  <Link to="/blogs" className="block px-6  text-gray-800 font-semibold hover:text-white">
    Blogs
  </Link>
</li>

      </ul>
      {/* humberger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#FF0000] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl' >
          <Link onClick={handleClick} to="/">Home</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="/skills">Skills</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="/work">Work</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="/contact">Contact</Link>
        </li>
      </ul>
      {/* social media icons */}
    </div>
  );
};

export default Header;
