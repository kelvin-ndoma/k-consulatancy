import { useState } from 'react';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import Me from '../assets/me1.jpg';

import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  

const handleType = (count) => {
  // access word count number
  console.log(count);
};

const handleDone = () => {
  console.log(`Done after 5 loops!`);
};

return (

  <div name="home" className="flex flex-col lg:flex-row sm:flex-col items-center p-10 space-x-10 lg:space-x-20 lg:space-y-0 ssm:space-y-10 bg-[#C0C0C0] text-black">
    <div className="lg:w-1/3 ssm:w-full mb-10 lg:mb-0">
      <p className="text-2xl md:text-4xl lg:4xl mb-5 text-black font-bold font-sans ">Hello & Welcome,</p>

      <h1 style={{ paddingTop: '2rem', margin: 'auto 0', fontWeight: 'normal', fontSize: '30px' }}>
        I am Kelvin, a {' '}
        <span style={{ color: 'red', fontWeight: 'bold',fontSize: '30px' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Digital Marketer', 'Web developer', 'Mathematician', 'Physicts']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>


      <hr className="border-t-2 my-5 w-1/4 border-indigo-600" />
      <p>
        A Digital Marketing Specialist | A software developer As well As a Mathematician. Here to solve your Marketing and Tech problems
      </p>
    </div>
    <div className="lg:w-1/3 ssm:w-full mb-10">
      <img
        src={Me}
        alt="kelvin"
        className={`w-full border-8 border-white lg:mt-20 lg:mb-0 overflow-hidden`}
        style={{
          borderRadius: '190px 190px 0 0 / 190px',
        }}

      />

    </div>
    <div className="lg:w-1/3 ssm:w-full">
      <p className='text-4xl font-bold inline border-b-4 text-blabk border-pink-600'> About Me</p>
      <p className='py-6'>
        {showMore
          ? "Welcome to Mark & Tech, where innovation meets expertise! I'm Kelvin Ndoma, your Digital Marketing Specialist, Full stack Web developer, and a Mathematician. My mission is to be your strategic partner in navigating marketing and tech challenges. Join me on a transformative journey where innovation, precision, and strategic thinking turn challenges into opportunities for success."
          : "Welcome to Mark & Tech, where innovation meets expertise!"}
      </p>
      <button
        className={`bg-orange-500 text-black px-8 py-2 my-3 rounded-full transition duration-300 ease-in-out 
              hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring focus:border-indigo-300`}
        onClick={handleShowMore}
      >
        {showMore ? 'Show less' : 'Show more...'}
      </button>

      <div className="flex mt-10 space-x-4 cursor-pointer">
        <a href="https://www.facebook.com/kelvin.aparajit.1/" target="_blank" rel="noopener noreferrer">
          <BsFacebook size={40} className="hover:bg-blue-500 hover:text-white p-2 rounded-full transition duration-300 ease-in-out" />
        </a>
        <a href="https://www.instagram.com/k.e.l_v.i.n.s/" target="_blank" rel="noopener noreferrer">
          <BsInstagram size={40} className="hover:bg-pink-500 hover:text-white p-2 rounded-full transition duration-300 ease-in-out" />
        </a>
        <a href="https://www.linkedin.com/in/kelvin-ndoma-637102259/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin size={40} className="hover:bg-indigo-500 hover:text-white p-2 rounded-full transition duration-300 ease-in-out" />
        </a>
      </div>
    </div>
  </div>
);
};
export default Home;