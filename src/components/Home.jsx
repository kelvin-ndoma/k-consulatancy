import { Helmet } from "react-helmet";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import About from "../components/About";
import Logo from "../assets/Ai.jpg";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Home = () => {
  const handleType = (count) => {
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div>
      <Helmet>
        <title>Digital Marketer & Web developer</title>
        <meta
          name="description"
          content="A Digital Marketing Specialist, Software Developer, and Mathematician. Solving your Marketing and Tech problems. Explore my skills in digital marketing, web development, and more."
        />
      </Helmet>

      <div className="fixed top-0 w-full z-10 bg-white"></div>

      <div
        name="home"
        className="flex flex-col lg:flex-row items-center p-10 lg:p-20 space-y-10 lg:space-x-20 bg-[#0a1828] text-black"
      >
        <div className="lg:w-1/2 ssm:w-full mb-10">
          <p className="text-2xl md:text-4xl lg:text-5xl mb-6 text-[#bfa181] mt-32 font-bold font-sans">
            Hi,
          </p>

          <h1
            style={{
              paddingTop: "2rem",
              margin: "auto 0",
              fontWeight: "normal",
              fontSize: "24px",
              color: "gold",
            }}
          >
            I am, a{" "}
            <span
              style={{ color: "red", fontWeight: "bold", fontSize: "24px" }}
            >
              <Typewriter
                words={[
                  "Digital Marketer",
                  "Web developer",
                  "Creative",
                  "Physicist",
                ]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h1>

          <hr className="border-t-2 my-5 w-1/4 border-indigo-600" />
          <br></br>
          <p className="text-3xl lg:text-xl text-[white] font-sans">
            A Digital Marketing Specialist | A software developer As well As a
            Mathematician. Here to solve your Marketing and Tech problems
          </p>

          <div className="flex  mt-10 space-x-4 cursor-pointer">
            <a
              href="https://www.facebook.com/kelvin.aparajit.1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook
                size={40}
                className="bg-[#1877f2] hover:bg-[#155eaa] text-white p-2 rounded-full transition duration-300 ease-in-out"
              />
            </a>
            <a
              href="https://www.instagram.com/k.e.l_v.i.n.s/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram
                size={40}
                className="bg-[#c32aa3] hover:bg-[#a11d82] text-white p-2 rounded-full transition duration-300 ease-in-out"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/kelvin-ndoma-637102259/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin
                size={40}
                className="bg-[#0a66c2] hover:bg-[#074787] text-white p-2 rounded-full transition duration-300 ease-in-out"
              />
            </a>
          </div>
          {/* Button to navigate to Skills page */}
          <Link to="/skills">
            <button className="bg-[#b1995f] text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition duration-300 mt-3 md:mt-5">
              Explore My Skills
            </button>
          </Link>
        </div>

        <div className="lg:w-1/2 ssm:w-full mb-12 bg-[#0a1828] flex justify-center">
          <img
            src={Logo}
            alt="kelvin"
            className="h-auto max-h-96 w-100 object-cover border-8 rounded-lg shadow-lg mt-6 md:mt-16 lg:rounded-none lg:border-none lg:shadow-none"
            style={{
              borderRadius: "0 50% 50% 50%",
            }}
          />
        </div>
      </div>

      <About />
    </div>
  );
};

export default Home;
