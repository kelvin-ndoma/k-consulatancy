import { Helmet } from "react-helmet";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
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
        <title>Digital Marketer & Web Developer</title>
        <meta
          name="description"
          content="A Digital Marketing Specialist, Software Developer, and Mathematician. Solving your Marketing and Tech problems. Explore my skills in digital marketing, web development, and more."
        />
      </Helmet>

      <div className="fixed top-0 w-full z-10 bg-white"></div>

      <div
        name="home"
        className="flex flex-col lg:flex-row items-center p-10 lg:p-20 space-y-10 lg:space-x-20 bg-[#0a1828] text-white"
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
              style={{ color: "#0a66c2", fontWeight: "bold", fontSize: "24px" }}
            >
              <Typewriter
                words={[
                  "Data Driven Digital Marketer",
                  "Web Developer",
                  "Creative",
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

          <hr className="border-t-3 my-6 w-1/4 border-gold" />
          <br></br>
          <p className="text-3xl lg:text-xl text-white font-sans">
            A Digital Marketing Specialist | A software developer As well As a
            Mathematician. Here to solve your Marketing and Tech problems
          </p>

          <div className="flex mt-10 space-x-4 cursor-pointer">
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
            <button className="bg-[#0a66c2] text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition duration-300 mt-3 md:mt-5">
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
      {/* Services Overview */}
      <div className="bg-[#0a1828] py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl text-white font-bold mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600">
                Creating responsive and modern websites.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">SEO</h3>
              <p className="text-gray-600">
                Improving your site’s visibility on search engines.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Social Media Marketing
              </h3>
              <p className="text-gray-600">
                Building your brand on social platforms.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link to="/services">
              <button className="bg-[#0a66c2] text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition duration-300">
                Explore All Services
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Portfolio Highlights */}
      <div className="bg-[#0a1828] py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-white lg:text-4xl font-bold mb-8">
            Portfolio Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <img
                src={Logo}
                alt="Project 1"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-4">Project One</h3>
              <p className="text-gray-600">Brief description of the project.</p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <img
                src={Logo}
                alt="Project 2"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-4">Project Two</h3>
              <p className="text-gray-600">Brief description of the project.</p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <img
                src={Logo}
                alt="Project 3"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-4">Project Three</h3>
              <p className="text-gray-600">Brief description of the project.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="bg-[#0a1828] py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-white lg:text-4xl font-bold mb-8">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-gray-600">
                "Great service! Highly recommend."
              </p>
              <h3 className="text-xl font-semibold mt-4">Client Name</h3>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-gray-600">
                "Outstanding results and professional team."
              </p>
              <h3 className="text-xl font-semibold mt-4">Client Name</h3>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-gray-600">
                "Exceeded our expectations in every way."
              </p>
              <h3 className="text-xl font-semibold mt-4">Client Name</h3>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Preview */}
      <div className="bg-[#0a1828] py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
          {/* About Us Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 flex justify-center">
            <img
              src={Logo}
              alt="About Us"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>

          {/* About Us Description */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">
              About Us
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto md:mx-0 mb-8">
              We are a dedicated team of professionals providing top-notch
              digital marketing and web development services. Our mission is to
              help businesses grow and succeed in the digital world. With a
              focus on data-driven strategies and creative solutions, we tailor
              our services to meet the unique needs of each client. From
              creating responsive websites to optimizing your online presence
              with SEO and social media marketing, we are committed to
              delivering measurable results and exceptional value.
            </p>
            <Link to="/about">
              <button className="bg-[#0a66c2] text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Blog Preview */}
      <div className="bg-[#0a1828]  py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-white lg:text-4xl font-bold mb-8">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <img
                src="/path/to/blog1.jpg"
                alt="Blog 1"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-4">Blog Post One</h3>
              <p className="text-gray-600">Excerpt of the blog post...</p>
              <Link
                to="/blog/post1"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Read More
              </Link>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <img
                src="/path/to/blog2.jpg"
                alt="Blog 2"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-4">Blog Post Two</h3>
              <p className="text-gray-600">Excerpt of the blog post...</p>
              <Link
                to="/blog/post2"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Read More
              </Link>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <img
                src="/path/to/blog3.jpg"
                alt="Blog 3"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-4">Blog Post Three</h3>
              <p className="text-gray-600">Excerpt of the blog post...</p>
              <Link
                to="/blog/post3"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#0a1828] py-10">
        <div className="container mx-auto text-white flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          {/* Logo and Social Media Icons */}
          <div className="mb-8 lg:mb-0">
            <Link to="/">
              <img src={Logo} alt="Logo" className="h-20 mx-auto lg:mx-0" />
            </Link>
            <div className="flex justify-center lg:justify-start space-x-4 mt-4">
              <a
                href="https://www.facebook.com/kelvin.aparajit.1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook
                  size={24}
                  className="text-gray-400 hover:text-white transition duration-300"
                />
              </a>
              <a
                href="https://www.instagram.com/k.e.l_v.i.n.s/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram
                  size={24}
                  className="text-gray-400 hover:text-white transition duration-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/kelvin-ndoma-637102259/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin
                  size={24}
                  className="text-gray-400 hover:text-white transition duration-300"
                />
              </a>
            </div>
          </div>

          {/* Contact Information and Quote */}
          <div className="mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold mb-4">Easy Access</h3>
            <div className="mb-4">
              <a
                href="mailto:your.email@example.com"
                className="block text-gray-400"
              >
                your.email@example.com
              </a>
              <a href="tel:+1234567890" className="block text-gray-400">
                +1 234 567 890
              </a>
            </div>
            <p className="text-gray-400 italic mb-4">
              "Innovation distinguishes between a leader and a follower." –
              Steve Jobs
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
