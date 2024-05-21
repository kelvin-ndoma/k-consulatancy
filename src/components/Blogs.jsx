import React from "react";
import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-[#0a1828] text-[#bfa181]">
      <Helmet>
        <title>Kelvin Ndoma - Blogs & Skills</title>
        <meta
          name="description"
          content="Explore Kelvin Ndoma's blogs and skills in digital marketing and software engineering. Learn about his expertise in SEO, social media marketing, web development, and more."
        />
      </Helmet>

      <div className="container mx-auto p-6 pt-32">
        <h1 className="text-4xl font-bold inline border-b-4 border-pink-600 text-white">
          Blogs & Skills
        </h1>

        <div className="flex flex-col lg:flex-row lg:space-x-8 mt-10">
          {/* Digital Marketing Skills Column */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold py-6 mb-4">
              Digital Marketing Skills
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">
                  Search Engine Optimization (SEO)
                </h3>
                <p className="mt-2">
                  Optimize your website to rank higher in search engine results.
                </p>
                <p className="mt-2 font-bold">$800 per project</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">
                  Social Media Marketing
                </h3>
                <p className="mt-2">
                  Create and manage social media campaigns.
                </p>
                <p className="mt-2 font-bold">$700 per project</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">
                  Google Analytics 4 Transition
                </h3>
                <p className="mt-2">
                  Transition your analytics to GA4 for better insights.
                </p>
                <p className="mt-2 font-bold">$900 per project</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">
                  Digital Marketing Plans
                </h3>
                <p className="mt-2">
                  Create detailed and effective digital marketing plans.
                </p>
                <p className="mt-2 font-bold">$1000 per project</p>
              </div>
            </div>
          </div>

          {/* Software Engineering Skills Column */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <h2 className="text-3xl font-bold py-6 mb-4">
              Software Engineering Skills
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Web Development</h3>
                <p className="mt-2">Build and maintain websites.</p>
                <p className="mt-2 font-bold">$1000 per project</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">React JS & Vite</h3>
                <p className="mt-2">
                  Develop applications using React JS and Vite.
                </p>
                <p className="mt-2 font-bold">$1100 per project</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Ruby on Rails</h3>
                <p className="mt-2">
                  Build web applications using Ruby on Rails.
                </p>
                <p className="mt-2 font-bold">$1200 per project</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">
                  Database Management - MySQL, PostgreSQL
                </h3>
                <p className="mt-2">Manage and optimize databases.</p>
                <p className="mt-2 font-bold">$950 per project</p>
              </div>
            </div>
          </div>
        </div>

        {/* List of Blogs */}
        <div className="pt-10">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-3xl font-bold py-6 mb-4">Check Out My Blogs</h2>
            <ul className="pl-4 space-y-2 list-disc">
              <li className="mb-2">
                <a
                  href="https://medium.com/@kelvinndomamutua/from-applied-mathematics-to-digital-marketing-my-unconventional-odyssey-ba5afe8b9cc6"
                  className="text-blue-500"
                >
                  From Mathematics to Digital Marketing
                </a>
              </li>
              <li className="mb-2">
                <a href="https://medium.com/@kelvinndomamutua/the-evolving-landscape-traditional-marketers-vs-digital-marketers-in-2024-9ee79ec14d8f" className="text-blue-500">
                The Evolving Landscape: Traditional Marketers vs. Digital Marketers in 2024
                </a>
              </li>
              <li className="mb-2">
                <a href="https://medium.com/@kelvinndomamutua/unlocking-the-seo-magic-a-journey-through-the-digital-jungle-77a31a365e95" className="text-blue-500">
                Unlocking the SEO Magic
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
