import { Helmet } from 'react-helmet';
import meee from "../assets/meee.png";
import CV from "../assets/Kelvin.pdf";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Kelvin Ndoma - About Me</title>
        <meta
          name="description"
          content="Meet Kelvin Ndoma, a versatile professional passionate about digital marketing, software development, and mathematics. Explore Kelvin's skills and download his CV."
        />
        <meta property="og:title" content="Kelvin Ndoma - About Me" />
        <meta property="og:description" content="Meet Kelvin Ndoma, a versatile professional passionate about digital marketing, software development, and mathematics. Explore Kelvin's skills and download his CV." />
        <meta property="og:image" content={meee} />
        <meta property="og:url" content="https://example.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="p-10 lg:p-20 bg-[#0a1828] text-[#bfa181]">
        <h1 className="text-6xl lg:text-5xl mb-5 text-[#bfa181] text-center font-serif font-semibold">Meet Kelvin</h1>
        <div className="flex flex-col lg:flex-row items-center space-y-10 lg:space-x-20">
          <div className="lg:w-1/2 ssm:w-full mb-12 bg-[#0a1828] flex justify-center">
            <img
              src={meee}
              alt="kelvin"
              className="h-auto max-h-96 w-96 object-cover border-8 rounded-lg shadow-lg mt-6 md:mt-16 lg:rounded-none lg:border-none lg:shadow-none"
              style={{
                borderRadius: "0 90% 50% 50%",
              }}
            />
          </div>
          <div className="lg:w-1/2 ssm:w-full mb-10">
            <div className="flex items-center">
              <p className="text-4xl lg:text-4xl mb-4 text-[#6acfc7] font-semibold">Nice To meet You Buddy</p>
              <a href={CV} download="Kelvin_Ndoma_CV.pdf">
                <button className="bg-[#b1995f] hover:bg-indigo-800 text-white px-4 py-2 rounded-md ml-4">
                  Download CV
                </button>
              </a>
            </div>
            <hr className="border-t-2 my-6 w-1/2 border-indigo-600" />
            <p className="text-sm lg:text-base mb-4">
              Hi, I'm Kelvin – a versatile professional with a passion for digital marketing, software development, and mathematics. I thrive on solving complex problems and making a positive impact in both the marketing and tech worlds.
            </p>
            <p className="text-sm lg:text-base mb-6">
              With a background in Digital Marketing, I bring strategic insights and creativity to the table. As a Software Developer, I love building solutions that empower businesses to reach new heights. And yes, I hold a deep fascination for mathematics, which adds a unique perspective to my problem-solving approach.
            </p>
            <p className="text-sm lg:text-base mb-4">
              Whether you're looking to enhance your digital presence, tackle software challenges, or explore the beauty of mathematics, I'm here to collaborate and make things happen. Let's turn ideas into reality!
            </p>
            <Link to="/contact">
              <button className="bg-[#00ffff] text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition duration-300">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
