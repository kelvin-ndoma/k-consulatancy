import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faChartLine,
  faLightbulb,
  faUsers,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import cover from "/home/kelvin/folio/marc-tech/src/assets/cover.jpg"; // Make sure to import the image

const Products = () => {
  return (
    <div className="bg-[#0a1828] min-h-screen text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-x-20">
          <div className="w-full md:w-1/2 pl-8 bg-gray-200 text-gray-900 rounded-lg p-6">
            <h2 className="text-3xl font-bold text-center md:text-left">
              Why Choose Marc & Tech?
            </h2>
            <p className="text-xl mt-4">
              I help businesses achieve their marketing and Technology goals by
              providing expert services and innovative solutions.
            </p>
            <div className="text-center md:text-left mt-2 md:flex md:justify-center">
              <span className="block animate-bounce text-4xl md:text-5xl md:hidden">
                👇
              </span>
              <span className="hidden md:inline-block animate-bounce text-6xl">
                👉
              </span>
            </div>
            <p className="text-xl mt-2 font-semibold text-center md:text-left">
              Marc & Tech Is Built on a Foundation of Professional Excellence
              and Integrity
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-bold">Mission</h3>
              <p className="text-lg mt-2">
                To empower businesses with innovative marketing and technology
                solutions that drive growth and foster strong customer
                relationships.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold">Daily Note</h3>
              <div className="mt-4">
                <p className="text-lg italic">
                  "A brand is no longer what we tell the consumer it is—it is
                  what consumers tell each other it is.” — Scott Cook
                </p>
              </div>
              <div className="mt-4">
                <p className="text-lg italic">
                  "If you are on first page of all major search engines then you
                  are ahead among your competitors in terms of online sales"
                </p>
              </div>
            </div>
            <div className="mt-4 text-center md:text-left">
              <Link to="/contact">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                  Book A Call
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap justify-center md:justify-start">
            <div className="p-4 m-2 bg-white text-gray-900 shadow-md rounded-lg">
              <FontAwesomeIcon
                icon={faRocket}
                className="text-blue-500 text-2xl mb-2"
              />
              <h3 className="text-lg font-bold">Client Focus</h3>
              <p>
                Our strategies help you reach new audiences and convert leads
                into customers.
              </p>
            </div>
            <div className="p-4 m-2 bg-white text-gray-900 shadow-md rounded-lg">
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-green-500 text-2xl mb-2"
              />
              <h3 className="text-lg font-bold">Improved Efficiency</h3>
              <p>
                We streamline your marketing and Tech processes, saving you time
                and resources.
              </p>
            </div>
            <div className="p-4 m-2 bg-white text-gray-900 shadow-md rounded-lg">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="text-yellow-500 text-2xl mb-2"
              />
              <h3 className="text-lg font-bold">
                Innovative & Creative Solutions
              </h3>
              <p>
                We provide creative and effective solutions to meet your unique
                business challenges.
              </p>
            </div>
            <div className="p-4 m-2 bg-white text-gray-900 shadow-md rounded-lg">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-purple-500 text-2xl mb-2"
              />
              <h3 className="text-lg font-bold">Customer Engagement</h3>
              <p>
                Our engagement strategies help you build strong relationships
                with your customers.
              </p>
            </div>
            <div className="p-4 m-2 bg-white text-gray-900 shadow-md rounded-lg">
              <FontAwesomeIcon
                icon={faDollarSign}
                className="text-red-500 text-2xl mb-2"
              />
              <h3 className="text-lg font-bold">Sell Out</h3>
              <p>
                Our proven techniques ensure your products or services sell out
                quickly, maximizing your revenue.
              </p>
            </div>
          </div>
        </div>

        {/* Quotes Section */}
        <div className="mt-16 relative z-0">
          <h2 className="text-4xl font-bold text-center mb-10">
            Inspirational Quotes
          </h2>

          <div className="space-y-20 relative z-0">
            <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
              <div className="w-full md:w-1/2 flex justify-center relative z-10">
                <img
                  src={cover}
                  alt="Digital Ecosystem"
                  className="h-auto max-h-96 w-full md:w-auto object-cover border-8 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
                  style={{
                    borderRadius: "0 50% 50% 50%",
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 flex justify-center relative z-10">
                <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-lg p-6 shadow-md max-w-xl text-center md:ml-10 mt-10 md:mt-0">
                  <p className="italic text-xl">
                    Website Design & Development with Inbuilt Marketing Strategy
                  </p>
                </div>
              </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row-reverse items-center relative z-10">
              <div className="w-full md:w-1/2 flex justify-center relative z-10">
                <img
                  src={cover}
                  alt="Digital Ecosystem"
                  className="h-auto max-h-96 w-full md:w-auto object-cover border-8 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
                  style={{
                    borderRadius: "0 50% 50% 50%",
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 flex justify-center relative z-10">
                <div className="bg-gradient-to-r from-green-400 via-blue-500 to-indigo-500 text-white rounded-lg p-6 shadow-md max-w-xl text-center md:mr-10 mt-10 md:mt-0">
                  <p className="italic text-xl">
                    Content Marketing & SEO Optimization
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
              <div className="w-full md:w-1/2 flex justify-center relative z-10">
                <img
                  src={cover}
                  alt="Digital Ecosystem"
                  className="h-auto max-h-96 w-full md:w-auto object-cover border-8 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
                  style={{
                    borderRadius: "0 50% 50% 50%",
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 flex justify-center relative z-10">
                <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white rounded-lg p-6 shadow-md max-w-xl text-center md:ml-10 mt-10 md:mt-0">
                  <p className="italic text-xl">
                    Conversion Rate Optimization (CRO)
                  </p>
                </div>
              </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row-reverse items-center relative z-10">
              <div className="w-full md:w-1/2 flex justify-center relative z-10">
                <img
                  src={cover}
                  alt="Digital Ecosystem"
                  className="h-auto max-h-96 w-full md:w-auto object-cover border-8 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
                  style={{
                    borderRadius: "0 50% 50% 50%",
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 flex justify-center relative z-10">
                <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white rounded-lg p-6 shadow-md max-w-xl text-center md:mr-10 mt-10 md:mt-0">
                  <p className="italic text-xl">
                    Social Media Marketing & Paid Advertising
                  </p>
                </div>
              </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row-reverse items-center relative z-10">
              <div className="w-full md:w-1/2 flex justify-center relative z-10">
                <img
                  src={cover}
                  alt="Digital Ecosystem"
                  className="h-auto max-h-96 w-full md:w-auto object-cover border-8 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
                  style={{
                    borderRadius: "0 50% 50% 50%",
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 flex justify-center relative z-10">
                <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white rounded-lg p-6 shadow-md max-w-xl text-center md:mr-10 mt-10 md:mt-0">
                  <p className="italic text-xl">
                  Email Marketing & Marketing Automation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
