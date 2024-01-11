import { useState } from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import Me from '../assets/me1.jpg';

export const Home = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="flex flex-col lg:flex-row sm:flex-col items-center p-10 space-x-10 lg:space-x-20 lg:space-y-0 ssm:space-y-10 text-black">
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
          className={`w-full border-8 border-white lg:mt-10 lg:mb-0 overflow-hidden`}
          style={{
            borderRadius: '90% 50% 60% 40% / 20% 50% 20% 50%', // Adjust the values as needed
          }}
        />




      </div>
      <div className="lg:w-1/3 ssm:w-full">
        <p className='font-semibold text-3xl'> About Me</p>
        <p>
          {showMore
            ? "Let's collaborate to solve those tech problems from the start to the end"
            : "Let's collaborate to solve those tech problems from the start to the end..."}
        </p>
        <button
          className="bg-black text-orange-600 px-8 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white"
          onClick={handleShowMore}
        >
          {showMore ? 'Show less' : 'Show more...'}
        </button>
        <div className="flex mt-5 space-x-4 cursor-pointer">
          <BsFacebook size={30} className="border-4 hover:border-orange-800 rounded-full" />
          <BsTwitter size={30} className="border-4 hover:border-blue-800 rounded-full" />
          <BsInstagram size={30} className="border-4 hover:border-indigo-800 rounded-full" />
          <BsLinkedin size={30} className="border-4 hover:border-indigo-800 rounded-full" />
        </div>
      </div>
    </section>
  );
};
