import { data } from "../data/data";
import { BsCodeSlash, BsPlay } from 'react-icons/bs';

const Services = () => {
  const projects = data;

  return (
    <div name="work" className="w-full min-h-screen bg-[#0a1828] text-[#bfa181] pt-32">
      <div className="max-w-[100%] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#bfa181] border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {projects.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              className="shadow-lg w-50 h-full group container rounded-md flex justify-center text-center items-center mx-auto content-div"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 w-full h-full rounded-md p-4 flex flex-col justify-center items-center">
                <span className="text-2xl font-bold text-white tracking-wider mb-4">
                  {item.name}
                </span>
                <div className="flex space-x-4">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank" rel="noopener noreferrer">
                    <button className="rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg hover:bg-gray-200 transition duration-300">
                      <BsCodeSlash className="mr-2" /> Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <button className="rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg hover:bg-gray-200 transition duration-300">
                      <BsPlay className="mr-2" /> Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Container for digital marketing jobs */}
        {/* <div className="py-8">
          <p className="text-4xl font-bold inline border-b-4 text-black border-pink-600">
            Digital Marketing Jobs
          </p>
          <p className="py-6">Check out some of the latest digital marketing jobs</p>
        </div> */}

        {/* Add your digital marketing job components here */}
        {/* For example, you can use a similar grid layout as above */}
      </div>
    </div>
  );
};

export default Services;
