import React from 'react';
import { Helmet } from 'react-helmet';
import 'tailwindcss/tailwind.css';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Kelvin Ndoma - Get In Touch</title>
        <meta
          name="description"
          content="Contact Kelvin Ndoma for inquiries or business. Fill out the form or reach out through provided business details. Your success is our priority - let's create something amazing together."
        />
      </Helmet>

      <div name='contact' className='w-full min-h-screen bg-[#0a1828] flex flex-col md:flex-row'>
        <div className='flex flex-col justify-center items-center w-full md:w-1/2 pt-14 sm:pt-20 md:pt-24 lg:pt-12'>
          <form 
            method='POST' 
            action="https://getform.io/f/fadc208b-aa8f-409e-a534-df50ac8b18ba" 
            className='flex flex-col max-w-[600px] mx-4 sm:mx-8 pt-16 md:pt-24 w-full animate-slideInLeft'
          >
            <div className='pb-8'>
              <p className='text-4xl pt-4 text-[#bfa181] font-bold inline border-b-4 border-pink-600'>Get In Touch</p>
              <p className='text-[#bfa181] py-5 pb-4'>Submit the form below for inquiries or for business!</p>
            </div>
            {/* Name and Email are required fields */}
            <input className='bg-white p-2 mb-4 text-black' type="text" placeholder='Your Name' name='name' required />
            <input className='bg-white p-2 mb-4 text-black' type="email" placeholder='Enter Email' name='email' required />
            {/* Message is a required field */}
            <textarea className='bg-white p-2 mb-4 text-black' name="message" rows="6" placeholder='Enter Message' required></textarea>
            {/* Submit button */}
            <button className='text-white bg-orange-500 hover:bg-orange-600 border-2 hover:border-orange-600 px-4 py-3 my-8 mx-auto flex items-center justify-center w-full'>Send Message</button>
          </form>
        </div>
        <div className='flex flex-col justify-center items-center w-full md:w-1/2 text-gray-300  p-6 rounded-md shadow-md animate-slideInRight'>
          <div className="mb-6 max-w-md">
            <div className="bg-white rounded-lg p-4">
              <p className="text-xl font-bold text-[#bfa181]">Testimonial</p>
              <p className="text-gray-400">"Mark & Tech Company transformed our business. Their expertise and dedication are unmatched!"</p>
              <p className="text-gray-400 italic">- Jane Doe, CEO of Tech Innovations</p>
            </div>
          </div>
          <div className="mb-6 max-w-md">
            <div className="bg-white rounded-lg p-4">
              <p className="text-xl font-bold text-[#bfa181]">Quote</p>
              <p className="text-gray-400">"Innovation distinguishes between a leader and a follower." - Steve Jobs</p>
            </div>
          </div>
          <div className="mb-6 max-w-md">
            <div className="bg-white rounded-lg p-4">
              <p className="text-xl font-bold mb-4 text-[#bfa181]">Mark & Tech Company</p>
              <p className="text-gray-400 mb-2">Nairobi, Kenya</p>
              <p className="text-gray-400 mb-2">Phone: +254 708840557</p>
              <p className="text-gray-400 mb-2">kelvinmutuandoma@gmail.com</p>
              <p className="italic text-pink-400 mb-4">"Your success is our priority. Let us create something amazing together."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
