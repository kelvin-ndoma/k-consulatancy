const Contact = () => {
  return (
    <div name='contact' className='w-full bg-[#C0C0C0] flex flex-col md:flex-row justify-center items-center pt-14 sm:pt-20 md:pt-24 lg:pt-12'>
      <form method='POST' action="https://getform.io/f/fadc208b-aa8f-409e-a534-df50ac8b18ba" className='flex flex-col max-w-[600px] mx-4 sm:mx-8 pt-16  md:pt-24 w-full md:mr-8'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Get In Touch</p>
          <p className='text-black py-5 pb-4'> Submit the form below for inquiries or for business! </p>
        </div>
        {/* Name and Email are required fields */}
        <input className='bg-white p-2 mb-4 text-black' type="text" placeholder='Your Name' name='name' required />
        <input className='bg-white p-2 mb-4 text-black' type="email" placeholder='Enter Email' name='email' required />
        {/* Additional fields for Location and Phone Number */}

        {/* Message is a required field */}
        <textarea className='bg-white p-2 mb-4 text-black' name="message" rows="6" placeholder='Enter Message' required></textarea>
        {/* Submit button */}
        <button className='text-white bg-orange-500 border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
      </form>
      {/* Business details and quote section */}
      <div className="md:w-[300px] text-left md:text-left text-gray-300 bg-gray-800 p-6 rounded-md shadow-md">
        <p className="text-xl font-bold mb-4 text-white">K-MacTech</p>
        <p className="text-gray-400 mb-2">Nairobi, Kenya</p>
        <p className="text-gray-400 mb-2">Phone: +254 708840557</p>
        <p className="text-gray-400 mb-2">Email: kelvinmutuandoma@gmail.com</p>
        <p className="italic text-gray-400 mb-4"> Quote: Your success is our priority. Let create something amazing together.</p>
        <p className="text-gray-400">&copy; 2024 Kelvin Mark & Tech Agency. All rights reserved.</p>
      </div>

    </div>
  )
}

export default Contact;
