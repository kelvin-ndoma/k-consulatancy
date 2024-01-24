// Blogs Component
const Blogs = () => {
  return (
    <div name="blogs" className="w-full h-full text-[#bfa181] bg-[#0a1828] pt-20">
      <div className="container mx-auto p-2 pt-32">
        <h1 className="text-4xl font-bold inline border-b-4 text-blabk border-pink-600">Blogs & Skills</h1>

        <div className="flex flex-col md:flex-row md:space-x-4">
          {/* Digital Marketing Skills Column */}
          <div className="md:w-1/2 pt-10">
            <h2 className="text-2xl font-bold py-6 mb-4">Digital Marketing Skills</h2>
            <ul className="list-disc pl-4 space-y-2">
              <li className="mb-2">Search Engine Optimization (SEO)</li>
              <li className="mb-2">Social Media Marketing</li>
              <li className="mb-2">Email Marketing</li>
              <li className="mb-2">Content Marketing</li>
              <li className="mb-2">Google Analytics 4 transition</li>
             
              <li className="mb-2">Digital strategy consulting</li>
              <li className="mb-2">Performance analysis</li>
              <li className="mb-2">Facebook ads & Instagram ads</li>
              <li className="mb-2">Campaign setup</li>
              <li className="mb-2">Digital marketing plans</li>
            </ul>
          </div>

          {/* Software Engineering Skills Column */}
          <div className="md:w-1/2 pt-10">
            <h2 className="text-2xl font-bold py-6 mb-4">Software Engineering Skills</h2>
            <ul className="list-disc pl-4 space-y-2">
              <li className="mb-2">Programming Languages</li>
              <li className="mb-2">Web Development</li>
              <li className="mb-2">Database Management- mySQL3, postgress</li>
              <li className="mb-2">UI/UX Design</li>
              <li className="mb-2">Google Analytics 4 setup and troubleshooting</li>
              <li className="mb-2">Google Tag Manager setup and troubleshooting</li>
              <li className="mb-2">React js & Vite</li>
              <li className="mb-2">Javascript</li>
              <li className="mb-2">Ruby on Rails</li>
              <li className="mb-2">HTML, CSS, Bootstrap, & Tailwind</li>
            </ul>
          </div>

          {/* List of Blogs (Displayed as a third column on large screens) */}
          <div className="md:w-1/3 mt-4 md:mt-0 pt-10">
            <h2 className="text-2xl font-bold py-6 mb-4">List of Blogs</h2>
            <ul className="pl-4 space-y-2 list-decimal">
              <li className="mb-2 ">
              <a href="https://medium.com/@kelvinndomamutua/from-applied-mathematics-to-digital-marketing-my-unconventional-odyssey-ba5afe8b9cc6" className="text-blue-500">From Mathematics- Digital Marketing</a>
              </li>
              <li className="mb-2">
              <a href="link-to-mathematics-blog" className="text-blue-500">From Mathematics- Digital Marketing</a></li>
              <li className="mb-2"><a href="link-to-mathematics-blog" className="text-blue-500">From Mathematics- Digital Marketing</a>
              </li>
              {/* Add more blogs as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
