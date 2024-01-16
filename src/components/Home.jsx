import { useState } from 'react';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import Me from '../assets/me1.jpg';

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (

    <div name="home" className="flex flex-col lg:flex-row sm:flex-col items-center p-10 space-x-10 lg:space-x-20 lg:space-y-0 ssm:space-y-10 bg-[#C0C0C0] text-black">
      <div className="lg:w-1/3 ssm:w-full mb-10 lg:mb-0">
        <p className="text-4xl mb-5 text-black font-bold">Hello</p>
        <h1 className="text-6xl">I am Kelvin Ndoma</h1>
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
            borderRadius: '10px 100px / 120px', // Adjust the values as needed
          }}
        />




      </div>
      <div className="lg:w-1/3 ssm:w-full">
        <p className='font-semibold text-3xl'> About Me</p>
        <p>
          {showMore
            ? "Let's collaborate to solve those tech problems from the start to the end"
            : "Let's collaborate to solve those tech problems from the start to the endy..."}
        </p>
        <button
          className="bg-black text-orange-600 px-8 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white"
          onClick={handleShowMore}
        >
          {showMore ? 'Show less' : 'Show more...'}
        </button>
        <div className="flex mt-10 space-x-4 cursor-pointer">
          <BsFacebook size={40} className="hover:bg-blue-500 hover:text-white p-2 rounded-full transition duration-300 ease-in-out" />
          <BsInstagram size={40} className="hover:bg-pink-500 hover:text-white p-2 rounded-full transition duration-300 ease-in-out" />
          <BsLinkedin size={40} className="hover:bg-indigo-500 hover:text-white p-2 rounded-full transition duration-300 ease-in-out" />
        </div>



      </div>
    </div>
  );
};
export default Home;