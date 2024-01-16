import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    // navbar styled
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#008080] text-gray-300'>
      <Link to="home" className="text-3xl text-orange-500 font-semibold tracking-[0.1rem]">
        Navbar
      </Link>
      {/* menu for larger screens */}
      <ul className='hidden md:flex lg:flex space-x-6 lg:space-x-12 gap-12 '>
        <li className="hover:scale-110 duration-500 hover:bg-gray-600">
          <Link to="home" smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
       
        <li className="hover:scale-110 duration-500 hover:bg-gray-600">
          <Link to="skills" smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:scale-110 duration-500 hover:bg-gray-600">
          <Link to="work" smooth={true} offset={50} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:scale-110 duration-500 hover:bg-gray-600">
          <Link to="contact" smooth={true} offset={50} duration={500}>
            Contact
          </Link>
        </li>
        <li className="hover:scale-110 duration-500 hover:bg-gray-600">
          <Link to="blogs" smooth={true} offset={50} duration={500}>
            Blogs
          </Link>
        </li>
      </ul>
      {/* humberger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl' >
          <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="work" smooth={true} offset={50} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social media icons */}
    </div>
  );
};

export default Header;
